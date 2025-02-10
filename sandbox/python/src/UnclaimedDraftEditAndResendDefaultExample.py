from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    unclaimed_draft_edit_and_resend_request = models.UnclaimedDraftEditAndResendRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        test_mode=False,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_edit_and_resend(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            unclaimed_draft_edit_and_resend_request=unclaimed_draft_edit_and_resend_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling UnclaimedDraft#unclaimed_draft_edit_and_resend: %s\n" % e)
