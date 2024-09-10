import json
import unittest

from dropbox_sign import ApiClient, Configuration, models
from test_utils import get_fixture_data


class TestFixtures(unittest.TestCase):
    def test_is_valid(self):
        configuration = Configuration()
        api_client = ApiClient(configuration)

        fixtures = [
            "AccountCreateRequest",
            "AccountUpdateRequest",
            "AccountVerifyRequest",
            "ApiAppCreateRequest",
            "ApiAppUpdateRequest",
            "EmbeddedEditUrlRequest",
            "OAuthTokenGenerateRequest",
            "OAuthTokenRefreshRequest",
            "ReportCreateRequest",
            "SignatureRequestBulkCreateEmbeddedWithTemplateRequest",
            "SignatureRequestBulkSendWithTemplateRequest",
            "SignatureRequestCreateEmbeddedRequest",
            "SignatureRequestCreateEmbeddedWithTemplateRequest",
            "SignatureRequestRemindRequest",
            "SignatureRequestSendRequest",
            "SignatureRequestSendWithTemplateRequest",
            "SignatureRequestUpdateRequest",
            "TeamAddMemberRequest",
            "TeamCreateRequest",
            "TeamRemoveMemberRequest",
            "TeamUpdateRequest",
            "TemplateAddUserRequest",
            "TemplateCreateEmbeddedDraftRequest",
            "TemplateRemoveUserRequest",
            "TemplateUpdateFilesRequest",
            "UnclaimedDraftCreateEmbeddedRequest",
            "UnclaimedDraftCreateEmbeddedWithTemplateRequest",
            "UnclaimedDraftCreateRequest",
            "UnclaimedDraftEditAndResendRequest",
        ]

        for fixture in fixtures:
            fixture_data = get_fixture_data(fixture)

            for key, fixt_data in fixture_data.items():
                class_type = eval(f"models.{fixture}")
                yanked_files = {}
                data = {}

                for param, param_value in class_type.openapi_types().items():
                    if param not in fixt_data.keys():
                        continue

                    data[param] = fixt_data[param]

                obj = api_client.deserialize(
                    response_text=json.dumps(data),
                    response_type=class_type,
                    content_type="application/json",
                )

                for yanked_key, yanked_file in yanked_files.items():
                    obj[yanked_key] = yanked_file

                self.assertEqual(obj.__class__.__name__, class_type.__name__)


if __name__ == "__main__":
    unittest.main()
