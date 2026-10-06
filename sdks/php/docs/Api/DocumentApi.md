# Dropbox\Sign\DocumentApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**documentDetectFields()**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields |


## `documentDetectFields()`

```php
documentDetectFields($document_field_detection_request): \Dropbox\Sign\Model\DocumentFieldDetectionResponse
```
Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$document_field_detection_request = (new Dropbox\Sign\Model\DocumentFieldDetectionRequest())
    ->setDetectionMode("annotations")
    ->setFile(new SplFileObject("./example_document.pdf"))
    ->setPageRange("all");

try {
    $response = (new Dropbox\Sign\Api\DocumentApi(config: $config))->documentDetectFields(
        document_field_detection_request: $document_field_detection_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling DocumentApi#documentDetectFields: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **document_field_detection_request** | [**\Dropbox\Sign\Model\DocumentFieldDetectionRequest**](../Model/DocumentFieldDetectionRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\DocumentFieldDetectionResponse**](../Model/DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
