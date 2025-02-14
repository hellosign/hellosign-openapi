from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxLineApi(api_client).fax_line_area_code_get(
            country=None,
            state=None,
            province=None,
            city=None,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxLine#fax_line_area_code_get: %s\n" % e)
