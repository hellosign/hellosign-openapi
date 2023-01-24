from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signature_request_api = apis.SignatureRequestApi(api_client)

    signature_request_id = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"

    try:
        signature_request_api.signature_request_cancel(signature_request_id)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
