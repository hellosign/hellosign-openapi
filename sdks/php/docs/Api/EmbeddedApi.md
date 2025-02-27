# Dropbox\Sign\EmbeddedApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**embeddedEditUrl()**](EmbeddedApi.md#embeddedEditUrl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL |
| [**embeddedSignUrl()**](EmbeddedApi.md#embeddedSignUrl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL |


## `embeddedEditUrl()`

```php
embeddedEditUrl($template_id, $embedded_edit_url_request): \Dropbox\Sign\Model\EmbeddedEditUrlResponse
```
Get Embedded Template Edit URL

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

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

$merge_fields = [
];

$embedded_edit_url_request = (new Dropbox\Sign\Model\EmbeddedEditUrlRequest())
    ->setCcRoles([
        "",
    ])
    ->setMergeFields($merge_fields);

try {
    $response = (new Dropbox\Sign\Api\EmbeddedApi(config: $config))->embeddedEditUrl(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        embedded_edit_url_request: $embedded_edit_url_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling EmbeddedApi#embeddedEditUrl: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the template to edit. | |
| **embedded_edit_url_request** | [**\Dropbox\Sign\Model\EmbeddedEditUrlRequest**](../Model/EmbeddedEditUrlRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\EmbeddedEditUrlResponse**](../Model/EmbeddedEditUrlResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `embeddedSignUrl()`

```php
embeddedSignUrl($signature_id): \Dropbox\Sign\Model\EmbeddedSignUrlResponse
```
Get Embedded Sign URL

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

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
    $response = (new Dropbox\Sign\Api\EmbeddedApi(config: $config))->embeddedSignUrl(
        signature_id: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling EmbeddedApi#embeddedSignUrl: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_id** | **string**| The id of the signature to get a signature url for. | |

### Return type

[**\Dropbox\Sign\Model\EmbeddedSignUrlResponse**](../Model/EmbeddedSignUrlResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
