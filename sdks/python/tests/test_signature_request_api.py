import unittest

from dropbox_sign import ApiClient, Configuration, apis, models as m
from test_utils import get_fixture_data, MockPoolManager, get_base_path


class TestSignatureRequestApi(unittest.TestCase):
    def setUp(self):
        self.configuration = Configuration()
        self.api_client = ApiClient(self.configuration)
        self.mock_pool = MockPoolManager(self)
        self.api_client.rest_client.pool_manager = self.mock_pool

        self.api = apis.SignatureRequestApi(self.api_client)

    def test_init_allows_binary_file(self):
        data = {
            "test_mode": True,
            "title": "NDA with Acme Co.",
            "subject": "The NDA we talked about",
            "message": "Please sign this NDA and then we can discuss more.",
            "signers": [
                {"email_address": "jill@example.com", "name": "Jill", "order": 1}
            ],
            "form_fields_per_document": [
                {
                    "type": "signature",
                    "document_index": 0,
                    "api_id": "4688957689",
                    "name": "signature1",
                    "x": 5,
                    "y": 7,
                    "width": 60,
                    "height": 30,
                    "required": True,
                    "signer": "0",
                    "page": 1,
                }
            ],
            "files": [open(get_base_path() + "/../test_fixtures/pdf-sample.pdf", "rb")],
        }

        obj = m.SignatureRequestSendRequest.init(data)

        self.assertEqual(data["test_mode"], obj.test_mode)
        self.assertEqual(data["title"], obj.title)
        self.assertEqual(data["subject"], obj.subject)
        self.assertEqual(data["message"], obj.message)

        self.assertEqual(
            data["signers"][0]["email_address"], obj.signers[0].email_address
        )
        self.assertEqual(data["signers"][0]["name"], obj.signers[0].name)
        self.assertEqual(data["signers"][0]["order"], obj.signers[0].order)

        self.assertEqual(
            data["form_fields_per_document"][0]["type"],
            obj.form_fields_per_document[0].type,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["document_index"],
            obj.form_fields_per_document[0].document_index,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["api_id"],
            obj.form_fields_per_document[0].api_id,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["name"],
            obj.form_fields_per_document[0].name,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["x"], obj.form_fields_per_document[0].x
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["y"], obj.form_fields_per_document[0].y
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["width"],
            obj.form_fields_per_document[0].width,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["height"],
            obj.form_fields_per_document[0].height,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["required"],
            obj.form_fields_per_document[0].required,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["signer"],
            obj.form_fields_per_document[0].signer,
        )
        self.assertEqual(
            data["form_fields_per_document"][0]["page"],
            obj.form_fields_per_document[0].page,
        )

        self.assertEqual(data["files"][0], obj.files[0])

        obj.files[0].close()

    def test_init_allows_jsony_chars_in_strings(self):
        title = "테스트 - testing japanese characters in subject"
        subject = "[テスト]"
        message = '{"テスト - testing message"}'

        request_data = {
            "test_mode": True,
            "title": title,
            "subject": subject,
            "message": message,
            "signers": [
                {"email_address": "jill@example.com", "name": "Jill", "order": 1}
            ],
            "files": [open(get_base_path() + "/../test_fixtures/pdf-sample.pdf", "rb")],
        }

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        obj = m.SignatureRequestSendRequest.init(request_data)

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )

        self.api.signature_request_send(obj)

        fields = self.mock_pool.get_fields()

        title_result = fields[9]
        subject_result = fields[7]
        message_result = fields[6]

        self.assertEqual(title_result[1], title)
        self.assertEqual(subject_result[1], subject)
        self.assertEqual(message_result[1], message)

        obj.files[0].close()

    def test_signature_request_bulk_create_embedded_with_template(self):
        request_class = "SignatureRequestBulkCreateEmbeddedWithTemplateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "BulkSendJobSendResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.BulkSendJobSendResponse.init(response_data)
        obj = m.SignatureRequestBulkCreateEmbeddedWithTemplateRequest.init(request_data)
        obj.signer_file = open(f"{get_base_path()}/bulk-send-sample.csv", "rb")

        result = self.api.signature_request_bulk_create_embedded_with_template(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.signer_file.close()

    def test_signature_request_bulk_send_with_template(self):
        request_class = "SignatureRequestBulkSendWithTemplateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "BulkSendJobSendResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.BulkSendJobSendResponse.init(response_data)
        obj = m.SignatureRequestBulkSendWithTemplateRequest.init(request_data)
        obj.signer_file = open(f"{get_base_path()}/bulk-send-sample.csv", "rb")

        result = self.api.signature_request_bulk_send_with_template(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.signer_file.close()

    def test_signature_request_create_embedded(self):
        request_class = "SignatureRequestCreateEmbeddedRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestCreateEmbeddedRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.signature_request_create_embedded(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_signature_request_create_embedded_with_template(self):
        request_class = "SignatureRequestCreateEmbeddedWithTemplateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestCreateEmbeddedWithTemplateRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.signature_request_create_embedded_with_template(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_signature_request_files(self):
        self.skipTest("skipping test_signature_request_files")

    def test_signature_request_get(self):
        signature_request_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)

        result = self.api.signature_request_get(signature_request_id)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_list(self):
        account_id = "all"

        response_class = "SignatureRequestListResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.SignatureRequestListResponse.init(response_data)

        result = self.api.signature_request_list(account_id=account_id)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_list_null_query_value_removed(self):
        account_id = None

        self.mock_pool.expect_request(
            content_type="application/json",
            response=None,
        )

        self.api.signature_request_list(account_id=account_id)

        request_fields = self.mock_pool.get_query_params()
        self.assertTrue(not request_fields)

        account_id = None
        query = None

        self.mock_pool.expect_request(
            content_type="application/json",
            response=None,
        )

        self.api.signature_request_list(account_id=account_id, query=query)

        request_fields = self.mock_pool.get_query_params()
        self.assertTrue(not request_fields)

        account_id = "ABC123"
        query = None

        self.mock_pool.expect_request(
            content_type="application/json",
            response=None,
        )

        self.api.signature_request_list(account_id=account_id, query=query)

        request_fields = self.mock_pool.get_query_params()
        expected_fields = {
            "account_id": [account_id],
        }
        self.assertEqual(expected_fields, request_fields)

        account_id = "ABC123"
        query = "My amazing query"

        self.mock_pool.expect_request(
            content_type="application/json",
            response=None,
        )

        self.api.signature_request_list(account_id=account_id, query=query)

        request_fields = self.mock_pool.get_query_params()
        expected_fields = {
            "account_id": [account_id],
            "query": [query],
        }
        self.assertEqual(expected_fields, request_fields)

    def test_signature_request_release_hold(self):
        signature_request_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)

        result = self.api.signature_request_release_hold(signature_request_id)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_remind(self):
        signature_request_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

        request_class = "SignatureRequestRemindRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestRemindRequest.init(request_data)

        result = self.api.signature_request_remind(signature_request_id, obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_remove(self):
        self.skipTest("skipping test_signature_request_remove")

    def test_signature_request_send_request(self):
        request_class = "SignatureRequestSendRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="multipart/form-data",
            data=request_data,
            response=response_data,
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestSendRequest.init(request_data)
        obj.files = [open(f"{get_base_path()}/pdf-sample.pdf", "rb")]

        result = self.api.signature_request_send(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

        obj.files[0].close()

    def test_no_file_forces_application_json(self):
        request_class = "SignatureRequestSendRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestSendRequest.init(request_data)

        result = self.api.signature_request_send(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_send_with_template(self):
        request_class = "SignatureRequestSendWithTemplateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestSendWithTemplateRequest.init(request_data)

        result = self.api.signature_request_send_with_template(obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)

    def test_signature_request_update(self):
        signature_request_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

        request_class = "SignatureRequestUpdateRequest"
        request_data = get_fixture_data(request_class)["default"]

        response_class = "SignatureRequestGetResponse"
        response_data = get_fixture_data(response_class)["default"]

        self.mock_pool.expect_request(
            content_type="application/json", data=request_data, response=response_data
        )
        expected = m.SignatureRequestGetResponse.init(response_data)
        obj = m.SignatureRequestUpdateRequest.init(request_data)

        result = self.api.signature_request_update(signature_request_id, obj)

        self.assertEqual(result.__class__.__name__, response_class)
        self.assertEqual(result, expected)


if __name__ == "__main__":
    unittest.main()
