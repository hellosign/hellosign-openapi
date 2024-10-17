# Dropbox\Sign\FaxApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxDelete()**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**faxFiles()**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | List Fax Files |
| [**faxGet()**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax |
| [**faxList()**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes |
| [**faxSend()**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax |


## `faxDelete()`

```php
faxDelete($fax_id)
```
Delete Fax

Deletes the specified Fax from the system.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

try {
    $faxApi->faxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_id** | **string**| Fax ID | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxFiles()`

```php
faxFiles($fax_id): \SplFileObject
```
List Fax Files

Returns list of fax files

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

try {
    $result = $faxApi->faxFiles($faxId);
    copy($result->getRealPath(), __DIR__ . '/file_response.pdf');
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_id** | **string**| Fax ID | |

### Return type

**\SplFileObject**

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxGet()`

```php
faxGet($fax_id): \Dropbox\Sign\Model\FaxGetResponse
```
Get Fax

Returns information about fax

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

try {
    $result = $faxApi->faxGet($faxId);
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
| **fax_id** | **string**| Fax ID | |

### Return type

[**\Dropbox\Sign\Model\FaxGetResponse**](../Model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxList()`

```php
faxList($page, $page_size): \Dropbox\Sign\Model\FaxListResponse
```
Lists Faxes

Returns properties of multiple faxes

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$page = 1;
$pageSize = 2;

try {
    $result = $faxApi->faxList($page, $pageSize);
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
| **page** | **int**| Page | [optional] [default to 1] |
| **page_size** | **int**| Page size | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\FaxListResponse**](../Model/FaxListResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxSend()`

```php
faxSend($fax_send_request): \Dropbox\Sign\Model\FaxGetResponse
```
Send Fax

Action to prepare and send a fax

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$data = new Dropbox\Sign\Model\FaxSendRequest();
$data->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")])
    ->setTestMode(true)
    ->setRecipient("16690000001")
    ->setSender("16690000000")
    ->setCoverPageTo("Jill Fax")
    ->setCoverPageMessage("I'm sending you a fax!")
    ->setCoverPageFrom("Faxer Faxerson")
    ->setTitle("This is what the fax is about!");

try {
    $result = $faxApi->faxSend($data);
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
| **fax_send_request** | [**\Dropbox\Sign\Model\FaxSendRequest**](../Model/FaxSendRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxGetResponse**](../Model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
