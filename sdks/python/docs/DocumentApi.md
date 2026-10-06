# ```dropbox_sign.DocumentApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```document_detect_fields```](DocumentApi.md#document_detect_fields) | ```POST /document/detect_fields``` | Detect Document Fields|


# ```document_detect_fields```
> ```DocumentFieldDetectionResponse document_detect_fields(document_field_detection_request)```

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    document_field_detection_request = models.DocumentFieldDetectionRequest(
        detection_mode="annotations",
        file=open("./example_document.pdf", "rb").read(),
        page_range="all",
    )

    try:
        response = api.DocumentApi(api_client).document_detect_fields(
            document_field_detection_request=document_field_detection_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling DocumentApi#document_detect_fields: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `document_field_detection_request` | [**DocumentFieldDetectionRequest**](DocumentFieldDetectionRequest.md) |  |  |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

