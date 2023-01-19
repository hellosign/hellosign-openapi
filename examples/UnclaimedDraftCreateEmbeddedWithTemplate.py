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

    signer_1 = models.SubUnclaimedDraftTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    cc_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    data = models.UnclaimedDraftCreateEmbeddedWithTemplateRequest(
        client_id="ec64a202072370a737edf4a0eb7f4437",
        template_ids=["61a832ff0d8423f91d503e76bfbcc750f7417c78"],
        requester_email_address="jack@dropboxsign.com",
        signers=[signer_1],
        ccs=[cc_1],
        test_mode=True,
    )

    try:
        response = unclaimed_draft_api.unclaimed_draft_create_embedded_with_template(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
