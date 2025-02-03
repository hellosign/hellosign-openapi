from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration()

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxLineApi(api_client).fax_line_get(
            number="[FAX_NUMBER]",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxLine#fax_line_get: %s\n" % e)
