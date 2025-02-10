from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signers_1 = models.SubUnclaimedDraftSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers = [
        signers_1,
    ]

    unclaimed_draft_create_request = models.UnclaimedDraftCreateRequest(
        type="request_signature",
        test_mode=True,
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        signers=signers,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_create(
            unclaimed_draft_create_request=unclaimed_draft_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling UnclaimedDraft#unclaimed_draft_create: %s\n" % e)
