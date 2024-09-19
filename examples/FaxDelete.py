from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    try:
        fax_api.delete_fax("[FAX_NUMBER]")
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
