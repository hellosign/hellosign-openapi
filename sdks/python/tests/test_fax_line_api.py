import unittest

from dropbox_sign import ApiClient, Configuration, apis, models as m
from test_utils import get_fixture_data, MockPoolManager, get_base_path


class TestFaxLineApi(unittest.TestCase):
    def setUp(self):
        self.configuration = Configuration()
        self.api_client = ApiClient(self.configuration)
        self.mock_pool = MockPoolManager(self)
        self.api_client.rest_client.pool_manager = self.mock_pool

        self.api = apis.FaxLineApi(self.api_client)

        def test_fax_line_create(self):
            request_class = "FaxLineCreateRequest"
            request_data = get_fixture_data(request_class)["default"]

            response_class = "FaxLineResponse"
            response_data = get_fixture_data(response_class)["default"]

            self.mock_pool.expect_request(
                content_type="application/json", response=response_data
            )

            expected = m.FaxLineResponse.init(response_data)

            result = self.api.fax_line_create(obj)

            self.assertEqual(result.__class__.__name__, response_class)
            self.assertEqual(result, expected)

            obj.files[0].close()

    def test_fax_line_get(self):
        fax_line_number = "14155557897"

        response_class = "FaxLineResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.FaxLineResponse.init(response_data)

        result = self.api.fax_line_get(fax_line_number)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_fax_line_list(self):
        response_class = "FaxLineListResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.FaxLineListResponse.init(response_data)

        result = self.api.fax_line_list()

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)


if __name__ == "__main__":
    unittest.main()
