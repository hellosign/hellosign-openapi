from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    account_api = apis.AccountApi(api_client)

    data = models.AccountCreateRequest(
        email_address="newuser@dropboxsign.com",
    )

    try:
        response = account_api.account_create(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
