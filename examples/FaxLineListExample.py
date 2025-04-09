import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxLineApi(api_client).fax_line_list(
            account_id="ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxLineApi#fax_line_list: %s\n" % e)
