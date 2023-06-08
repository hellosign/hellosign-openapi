from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    api = apis.OAuthApi(api_client)

    data = models.OAuthTokenRefreshRequest(
        refresh_token="hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3",
    )

    try:
        response = oauth_api.oauth_token_refresh(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
