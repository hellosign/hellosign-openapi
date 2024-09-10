import unittest

from dropbox_sign import ApiClient, Configuration, apis, models as m
from test_utils import get_fixture_data, MockPoolManager, get_base_path


class TestUnclaimedDraftApi(unittest.TestCase):
    def setUp(self):
        self.configuration = Configuration()
        self.api_client = ApiClient(self.configuration)
        self.mock_pool = MockPoolManager(self)
        self.api_client.rest_client.pool_manager = self.mock_pool

        self.api = apis.UnclaimedDraftApi(self.api_client)

    def test_unclaimed_draft_create(self):
        request_class = "UnclaimedDraftCreateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "UnclaimedDraftCreateResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.UnclaimedDraftCreateResponse.init(response_data)
        obj = m.UnclaimedDraftCreateRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.unclaimed_draft_create(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_unclaimed_draft_create_embedded(self):
        request_class = "UnclaimedDraftCreateEmbeddedRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "UnclaimedDraftCreateResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.UnclaimedDraftCreateResponse.init(response_data)
        obj = m.UnclaimedDraftCreateEmbeddedRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.unclaimed_draft_create_embedded(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_unclaimed_draft_create_embedded_with_template(self):
        request_class = "UnclaimedDraftCreateEmbeddedWithTemplateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "UnclaimedDraftCreateResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.UnclaimedDraftCreateResponse.init(response_data)
        obj = m.UnclaimedDraftCreateEmbeddedWithTemplateRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.unclaimed_draft_create_embedded_with_template(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_unclaimed_draft_edit_and_resend(self):
        signature_request_id = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f"

        request_class = "UnclaimedDraftEditAndResendRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "UnclaimedDraftCreateResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.UnclaimedDraftCreateResponse.init(response_data)
        obj = m.UnclaimedDraftEditAndResendRequest.init(request_data)

        result = self.api.unclaimed_draft_edit_and_resend(signature_request_id, obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)


if __name__ == "__main__":
    unittest.main()
