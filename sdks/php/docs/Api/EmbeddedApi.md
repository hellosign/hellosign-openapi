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

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$embeddedApi = new Dropbox\Sign\Api\EmbeddedApi($config);

$data = new Dropbox\Sign\Model\EmbeddedEditUrlRequest();
$data->setCcRoles([""])
    ->setMergeFields([]);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $embeddedApi->embeddedEditUrl($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
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

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$embeddedApi = new Dropbox\Sign\Api\EmbeddedApi($config);

$signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

try {
    $result = $embeddedApi->embeddedSignUrl($signatureId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
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
