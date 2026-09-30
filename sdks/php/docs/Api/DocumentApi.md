# Dropbox\Sign\DocumentApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**documentDetectFields()**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields |


## `documentDetectFields()`

```php
documentDetectFields($detection_mode, $file, $file_url, $page_range): \Dropbox\Sign\Model\DocumentFieldDetectionResponse
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

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->documentDetectFields(
        detection_mode: "annotations",
        file: new SplFileObject("./example_document.pdf"),
        page_range: "all",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#documentDetectFields: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **detection_mode** | **string**| The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. | |
| **file** | **\SplFileObject****\SplFileObject**| The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| **file_url** | **string**| The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| **page_range** | **string**| The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional] |

### Return type

[**\Dropbox\Sign\Model\DocumentFieldDetectionResponse**](../Model/DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
