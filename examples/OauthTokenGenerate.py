from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    api = apis.OAuthApi(api_client)

    data = models.OAuthTokenGenerateRequest(
        state="900e06e2",
        code="1b0d28d90c86c141",
        client_id="cc91c61d00f8bb2ece1428035716b",
        client_secret="1d14434088507ffa390e6f5528465",
    )

    try:
        response = oauth_api.oauth_token_generate(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
