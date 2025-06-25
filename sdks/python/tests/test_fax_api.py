import unittest

from dropbox_sign import ApiClient, Configuration, apis, models as m
from test_utils import get_fixture_data, MockPoolManager, get_base_path


class TestFaxApi(unittest.TestCase):
    def setUp(self):
        self.configuration = Configuration()
        self.api_client = ApiClient(self.configuration)
        self.mock_pool = MockPoolManager(self)
        self.api_client.rest_client.pool_manager = self.mock_pool

        self.api = apis.FaxApi(self.api_client)

        def test_fax_send(self):
            request_class = "FaxSendRequest"
            request_data = get_fixture_data(request_class)["default"]

            response_class = "FaxGetResponse"
            response_data = get_fixture_data(response_class)["default"]

            self.mock_pool.expect_request(
                content_type="multipart/form-data",
                data=request_data,
                response=response_data,
            )
            expected = m.FaxGetResponse.init(response_data)
            obj = m.FaxSendRequest.init(request_data)
            obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

            result = self.api.fax_send(obj)

            self.assertEqual(result.__class__.__name__, response_class)
            self.assertEqual(result, expected)

            obj.files[0].close()

    def test_fax_get(self):
        fax_id = "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d"

        response_class = "FaxGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.FaxGetResponse.init(response_data)

        result = self.api.fax_get(fax_id)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_fax_list(self):
        response_class = "FaxListResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.FaxListResponse.init(response_data)

        result = self.api.fax_list()

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)


if __name__ == "__main__":
    unittest.main()
