from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    embedded_api = apis.EmbeddedApi(api_client)

    signature_id = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b"

    try:
        response = embedded_api.embedded_sign_url(signature_id)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
