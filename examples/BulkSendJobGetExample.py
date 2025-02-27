import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.BulkSendJobApi(api_client).bulk_send_job_get(
            bulk_send_job_id="6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling BulkSendJobApi#bulk_send_job_get: %s\n" % e)
