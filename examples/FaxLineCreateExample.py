from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    data = models.FaxLineCreateRequest(
        area_code=209,
        country="US",
    )

    try:
        response = fax_line_api.fax_line_create(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
