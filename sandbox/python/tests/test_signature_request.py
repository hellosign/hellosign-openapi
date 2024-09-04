import json
import os
import unittest

from dropbox_sign import ApiClient, Configuration, apis, models


class TestSignatureRequest(unittest.TestCase):
    def setUp(self):
        self.base_path = os.path.dirname(os.path.abspath(__file__)) + "/.."
        config_merged = self.get_config()

        self.configuration = Configuration(
            username=config_merged["API_KEY"],
            host=config_merged["BASE_URL"],
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


if __name__ == '__main__':
    unittest.main()
