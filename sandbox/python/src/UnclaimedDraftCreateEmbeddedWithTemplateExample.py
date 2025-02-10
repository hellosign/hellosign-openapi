from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@dropboxsign.com",
    )

    ccs = [
        ccs_1,
    ]

    signers_1 = models.SubUnclaimedDraftTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    unclaimed_draft_create_embedded_with_template_request = models.UnclaimedDraftCreateEmbeddedWithTemplateRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        requester_email_address="jack@dropboxsign.com",
        template_ids=[
            "61a832ff0d8423f91d503e76bfbcc750f7417c78",
        ],
        test_mode=False,
        ccs=ccs,
        signers=signers,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_create_embedded_with_template(
            unclaimed_draft_create_embedded_with_template_request=unclaimed_draft_create_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling UnclaimedDraft#unclaimed_draft_create_embedded_with_template: %s\n" % e)
