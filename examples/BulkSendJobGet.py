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

    bulk_send_job_id = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174"

    try:
        response = bulk_send_job_api.bulk_send_job_get(bulk_send_job_id)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
