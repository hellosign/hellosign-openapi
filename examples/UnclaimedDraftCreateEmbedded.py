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

    data = models.UnclaimedDraftCreateEmbeddedRequest(
        client_id="ec64a202072370a737edf4a0eb7f4437",
        files=[open("example_signature_request.pdf", "rb")],
        requester_email_address="jack@dropboxsign.com",
        test_mode=True,
    )

    try:
        response = unclaimed_draft_api.unclaimed_draft_create_embedded(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
