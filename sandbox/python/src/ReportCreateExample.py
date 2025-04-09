import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    report_create_request = models.ReportCreateRequest(
        start_date="09/01/2020",
        end_date="09/01/2020",
        report_type=[
            "user_activity",
            "document_status",
        ],
    )

    try:
        response = api.ReportApi(api_client).report_create(
            report_create_request=report_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling ReportApi#report_create: %s\n" % e)
