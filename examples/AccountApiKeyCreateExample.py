from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        request = models.AccountApiKeyCreateRequest(name="Production")

        response = api.ApiKeyApi(api_client).api_key_create(request)

        pprint(response)
    except ApiException as e:
        print("Exception when calling ApiKeyApi#api_key_create: %s\n" % e)
