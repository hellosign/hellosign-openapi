import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_create_request = models.FaxLineCreateRequest(
        area_code=209,
        country="US",
    )

    try:
        response = api.FaxLineApi(api_client).fax_line_create(
            fax_line_create_request=fax_line_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxLineApi#fax_line_create: %s\n" % e)
