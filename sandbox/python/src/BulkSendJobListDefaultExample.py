from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.BulkSendJobApi(api_client).bulk_send_job_list(
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling BulkSendJob#bulk_send_job_list: %s\n" % e)
