import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_delete_request = models.FaxLineDeleteRequest(
        number="[FAX_NUMBER]",
    )

    try:
        api.FaxLineApi(api_client).fax_line_delete(
            fax_line_delete_request=fax_line_delete_request,
        )
    except ApiException as e:
        print("Exception when calling FaxLineApi#fax_line_delete: %s\n" % e)
