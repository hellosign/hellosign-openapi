from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
)

with ApiClient(configuration) as api_client:
    o_auth_token_refresh_request = models.OAuthTokenRefreshRequest(
        grant_type="refresh_token",
        refresh_token="hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3",
    )

    try:
        response = api.OAuthApi(api_client).oauth_token_refresh(
            o_auth_token_refresh_request=o_auth_token_refresh_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling OAuth#oauth_token_refresh: %s\n" % e)
