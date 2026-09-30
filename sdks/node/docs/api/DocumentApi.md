# DocumentApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**documentDetectFields()**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields |


## `documentDetectFields()`

```typescript
documentDetectFields(detectionMode: string, file: RequestFile, fileUrl: string, pageRange: string): DocumentFieldDetectionResponse
```

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.documentDetectFields(
  "annotations", // detectionMode
  fs.createReadStream("./example_document.pdf"), // file
  undefined, // fileUrl
  "all", // pageRange
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#documentDetectFields:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **detectionMode** | **string**| The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. | |
| **file** | **RequestFile****RequestFile**| The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| **fileUrl** | **string**| The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| **pageRange** | **string**| The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional] |

### Return type

[**DocumentFieldDetectionResponse**](../model/DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
