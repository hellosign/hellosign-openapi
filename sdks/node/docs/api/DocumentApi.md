# DocumentApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**documentDetectFields()**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields |


## `documentDetectFields()`

```typescript
documentDetectFields(documentFieldDetectionRequest: DocumentFieldDetectionRequest): DocumentFieldDetectionResponse
```

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.DocumentApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const documentFieldDetectionRequest: models.DocumentFieldDetectionRequest = {
  detectionMode: "annotations",
  file: fs.createReadStream("./example_document.pdf"),
  pageRange: "all",
};

apiCaller.documentDetectFields(
  documentFieldDetectionRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling DocumentApi#documentDetectFields:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **documentFieldDetectionRequest** | [**DocumentFieldDetectionRequest**](../model/DocumentFieldDetectionRequest.md)|  | |

### Return type

[**DocumentFieldDetectionResponse**](../model/DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
