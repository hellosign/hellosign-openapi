from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.ApiKeyApi(api_client).api_key_get("c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e")

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiKeyApi#api_key_get: %s\n" % e)
