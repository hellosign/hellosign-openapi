import unittest

from dropbox_sign import models
from dropbox_sign.models import SignatureRequestSendRequest
from test_utils import get_fixture_data


class TestSubFormFieldsPerDocumentBase(unittest.TestCase):
    def test_is_valid(self):
        fixture_data = get_fixture_data("SubFormFieldsPerDocument")

        for ftype, data in fixture_data.items():
            payload = {"signers": [], "form_fields_per_document": [data]}

            obj = SignatureRequestSendRequest.init(payload)

            form_fields_per_document = obj.form_fields_per_document[0]
            class_type = eval(f"models.{ftype}")

            self.assertEqual(
                form_fields_per_document.__class__.__name__, class_type.__name__
            )
            self.assertEqual(form_fields_per_document.to_dict(), data)

    def test_signer_allows_int(self):
        fixture_data = get_fixture_data("SubFormFieldsPerDocument")

        for ftype, data in fixture_data.items():
            data["signer"] = 1234

            payload = {"signers": [], "form_fields_per_document": [data]}

            expected_signer = 1234

            obj = SignatureRequestSendRequest.init(payload)
            form_fields_per_document = obj.form_fields_per_document[0]
            self.assertEqual(form_fields_per_document.signer, expected_signer)

    def test_signer_allows_string(self):
        fixture_data = get_fixture_data("SubFormFieldsPerDocument")

        for ftype, data in fixture_data.items():
            data["signer"] = "sender"

            payload = {"signers": [], "form_fields_per_document": [data]}

            expected_signer = "sender"

            obj = SignatureRequestSendRequest.init(payload)
            form_fields_per_document = obj.form_fields_per_document[0]
            self.assertEqual(form_fields_per_document.signer, expected_signer)


if __name__ == "__main__":
    unittest.main()
