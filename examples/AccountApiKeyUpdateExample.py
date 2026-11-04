from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        request = models.AccountApiKeyUpdateRequest(name="Billing", is_primary=True)

        response = api.ApiKeyApi(api_client).api_key_update("c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e", request)

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiKeyApi#api_key_update: %s\n" % e)
