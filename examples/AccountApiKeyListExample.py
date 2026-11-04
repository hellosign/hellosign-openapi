from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.ApiKeyApi(api_client).api_key_list()

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiKeyApi#api_key_list: %s\n" % e)
