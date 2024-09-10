import unittest

from dropbox_sign import ApiClient, Configuration, apis, models as m
from test_utils import get_fixture_data, MockPoolManager


class TestReportApi(unittest.TestCase):
    def setUp(self):
        self.configuration = Configuration()
        self.api_client = ApiClient(self.configuration)
        self.mock_pool = MockPoolManager(self)
        self.api_client.rest_client.pool_manager = self.mock_pool

        self.api = apis.ReportApi(self.api_client)

    def test_embedded_edit_url(self):
        request_class = "ReportCreateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "ReportCreateResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.ReportCreateResponse.init(response_data)
        obj = m.ReportCreateRequest.init(request_data)

        result = self.api.report_create(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)


if __name__ == "__main__":
    unittest.main()
