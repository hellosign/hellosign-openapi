from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    o_auth_token_generate_request = models.OAuthTokenGenerateRequest(
        client_id="cc91c61d00f8bb2ece1428035716b",
        client_secret="1d14434088507ffa390e6f5528465",
        code="1b0d28d90c86c141",
        state="900e06e2",
        grant_type="authorization_code",
    )

    try:
        response = api.OAuthApi(api_client).oauth_token_generate(
            o_auth_token_generate_request=o_auth_token_generate_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling Oauth#oauth_token_generate: %s\n" % e)
