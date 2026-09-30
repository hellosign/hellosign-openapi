# ```dropbox_sign.DocumentApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```document_detect_fields```](DocumentApi.md#document_detect_fields) | ```POST /document/detect_fields``` | Detect Document Fields|


# ```document_detect_fields```
> ```DocumentFieldDetectionResponse document_detect_fields(detection_mode)```

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
    try:
        response = api.SignatureRequestApi(api_client).document_detect_fields(
            detection_mode="annotations",
            file=open("./example_document.pdf", "rb").read(),
            page_range="all",
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#document_detect_fields: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `detection_mode` | **str** | The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. |  |
| `file` | **io.IOBase** | The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| `file_url` | **str** | The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| `page_range` | **str** | The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional] |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

