import os
import json
import urllib3


def get_base_path():
    return os.path.dirname(os.path.abspath(__file__)) + f'/../test_fixtures'


def get_fixture_data(filename):
    path = get_base_path() + f'/{filename}.json'

    file = open(path, 'r')
    fixture_data = json.load(file)
    file.close()

    return fixture_data


class MockPoolManager(object):
    def __init__(self, tc):
        self._tc = tc
        self._expected_request = {}
        self._expected_response = {}
        self._request_fields = []

    def expect_request(self, content_type, data=None, response=None, status=200):
        self._expected_request = {
            'content_type': content_type,
            'data': data,
        }
        self._expected_response = {
            'data': response,
            'status': status,
        }

    def request(self, *args, **kwargs):
        if self._expected_request['content_type'] == 'multipart/form-data':
            self._tc.assertTrue('encode_multipart' in kwargs.keys())
            self._tc.assertTrue(kwargs['encode_multipart'])
        else:
            self._tc.assertFalse('encode_multipart' in kwargs.keys())

        if 'fields' in kwargs:
            self._request_fields = kwargs['fields']

        return urllib3.HTTPResponse(
            status=self._expected_response['status'],
            preload_content=True,
            body=json.dumps(self._expected_response['data']).encode()
        )

    def get_fields(self):
        return self._request_fields
