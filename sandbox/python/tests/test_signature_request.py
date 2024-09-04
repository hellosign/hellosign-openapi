import json
import os
import unittest

from dropbox_sign import ApiClient, Configuration, apis, models, ApiException


class TestSignatureRequest(unittest.TestCase):
    def setUp(self):
        self.base_path = os.path.dirname(os.path.abspath(__file__)) + "/.."
        self.config_merged = self.get_config()

        self.configuration = Configuration(
            username=self.config_merged["API_KEY"],
            host=self.config_merged["BASE_URL"],
        )

    def get_config(self):
        file = open(f'{self.base_path}/tests/.config.dist.json', 'r')
        config_dist = json.load(file)
        file.close()

        file = open(f'{self.base_path}/tests/.config.json', 'r')
        config_custom = json.load(file)
        file.close()

        config_dist.update(config_custom)

        return config_dist

    def test_send(self):
        api_client = ApiClient(self.configuration)
        signature_request_api = apis.SignatureRequestApi(api_client)

        file = open(f'{self.base_path}/test_fixtures/SignatureRequestSendRequest.json', 'r')
        data = json.load(file)
        file.close()

        send_request = models.SignatureRequestSendRequest.init(data)
        send_request.files = [open(f'{self.base_path}/test_fixtures/pdf-sample.pdf', 'rb')]

        send_response = signature_request_api.signature_request_send(send_request)

        self.assertEqual(
            send_request.form_fields_per_document[0].api_id,
            send_response.signature_request.custom_fields[0].api_id,
        )

        self.assertEqual(
            send_request.signers[0].email_address,
            send_response.signature_request.signatures[0].signer_email_address,
        )
        self.assertEqual(
            send_request.signers[1].email_address,
            send_response.signature_request.signatures[1].signer_email_address,
        )
        self.assertEqual(
            send_request.signers[2].email_address,
            send_response.signature_request.signatures[2].signer_email_address,
        )

        get_response = signature_request_api.signature_request_get(
            send_response.signature_request.signature_request_id,
        )

        self.assertEqual(
            send_response.signature_request.signature_request_id,
            get_response.signature_request.signature_request_id,
        )

    def test_create_embedded(self):
        api_client = ApiClient(self.configuration)
        signature_request_api = apis.SignatureRequestApi(api_client)

        file = open(f'{self.base_path}/test_fixtures/SignatureRequestCreateEmbeddedRequest.json', 'r')
        data = json.load(file)
        data["client_id"] = self.config_merged["CLIENT_ID"]
        file.close()

        send_request = models.SignatureRequestCreateEmbeddedRequest.init(data)
        send_request.files = [open(f'{self.base_path}/test_fixtures/pdf-sample.pdf', 'rb')]

        send_response = signature_request_api.signature_request_create_embedded(send_request)

        self.assertEqual(
            send_request.signers[0].email_address,
            send_response.signature_request.signatures[0].signer_email_address,
        )
        self.assertEqual(
            send_request.signers[1].email_address,
            send_response.signature_request.signatures[1].signer_email_address,
        )
        self.assertEqual(
            send_request.signers[2].email_address,
            send_response.signature_request.signatures[2].signer_email_address,
        )

        embedded_api = apis.EmbeddedApi(api_client)

        get_response = embedded_api.embedded_sign_url(
            send_response.signature_request.signatures[0].signature_id
        )

        self.assertNotEquals("", get_response.embedded.sign_url)

    def test_send_without_file_error(self):
        api_client = ApiClient(self.configuration)
        signature_request_api = apis.SignatureRequestApi(api_client)

        file = open(f'{self.base_path}/test_fixtures/SignatureRequestSendRequest.json', 'r')
        data = json.load(file)
        file.close()

        send_request = models.SignatureRequestSendRequest.init(data)

        try:
            signature_request_api.signature_request_send(send_request)
            self.assertFalse(True)
        except ApiException as e:
            self.assertEqual("file", e.data.error.error_path)


if __name__ == '__main__':
    unittest.main()
