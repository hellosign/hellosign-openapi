# ```dropbox_sign.ReportApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```report_create```](ReportApi.md#report_create) | ```POST /report/create``` | Create Report|


# ```report_create```
> ```ReportCreateResponse report_create(report_create_request)```

Create Report

Request the creation of one or more report(s).

When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

### Example

* Basic Authentication (api_key):

```python
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

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `report_create_request` | [**ReportCreateRequest**](ReportCreateRequest.md) |  |  |

### Return type

[**ReportCreateResponse**](ReportCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

