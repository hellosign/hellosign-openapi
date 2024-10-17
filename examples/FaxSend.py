from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    data = models.FaxSendRequest(
        files=[open("example_signature_request.pdf", "rb")],
        test_mode=True,
        recipient="16690000001",
        sender="16690000000",
        cover_page_to="Jill Fax",
        cover_page_message="I'm sending you a fax!",
        cover_page_from="Faxer Faxerson",
        title="This is what the fax is about!",
    )

    try:
        response = fax_api.fax_send(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
