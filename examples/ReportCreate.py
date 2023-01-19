from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",

    # or, configure Bearer (JWT) authorization: oauth2
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    report_api = apis.ReportApi(api_client)

    data = models.ReportCreateRequest(
        start_date="09/01/2020",
        end_date="09/01/2020",
        report_type=["user_activity" "document_status"],
    )

    try:
        response = report_api.report_create(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)
