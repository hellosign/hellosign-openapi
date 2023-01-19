from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    bulk_send_job_api = apis.BulkSendJobApi(api_client)

    page = 1
    page_size = 20

    try:
        response = bulk_send_job_api.bulk_send_job_list(
            page=page,
            page_size=page_size,
        )
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
