from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    unclaimed_draft_api = apis.UnclaimedDraftApi(api_client)

    data = models.UnclaimedDraftEditAndResendRequest(
        client_id="ec64a202072370a737edf4a0eb7f4437",
        test_mode=True,
    )

    signature_request_id = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f"

    try:
        response = unclaimed_draft_api.unclaimed_draft_edit_and_resend(signature_request_id, data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
