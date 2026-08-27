# Dropbox\Sign\FaxApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxDelete()**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**faxDraftCreate()**](FaxApi.md#faxDraftCreate) | **POST** /fax/draft/create | Create Embedded Fax Draft |
| [**faxFiles()**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | Download Fax Files |
| [**faxGet()**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax |
| [**faxList()**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes |
| [**faxSend()**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax |


## `faxDelete()`

```php
faxDelete($fax_id)
```
Delete Fax

Deletes the specified Fax from the system

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    (new Dropbox\Sign\Api\FaxApi(config: $config))->faxDelete(
        fax_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxDelete: {$e->getMessage()}";
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

## `faxDraftCreate()`

```php
faxDraftCreate($fax_draft_create_request): \Dropbox\Sign\Model\FaxDraftCreateResponse
```
Create Embedded Fax Draft

Creates an embedded Fax draft and returns a URL that can be opened in an approved iframe for preparation and sending.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$editor_options = (new Dropbox\Sign\Model\SubEditorPageOptions())
    ->setForceUploadPage(false)
    ->setForceEditorPage(true)
    ->setForceReviewPage(true);

$fax_draft_create_request = (new Dropbox\Sign\Model\FaxDraftCreateRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setRecipients([
        "+14155552671",
    ])
    ->setEditorOptions($editor_options)
    ->setTestMode(true);

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxDraftCreate(
        fax_draft_create_request: $fax_draft_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxDraftCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_draft_create_request** | [**\Dropbox\Sign\Model\FaxDraftCreateRequest**](../Model/FaxDraftCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxDraftCreateResponse**](../Model/FaxDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxFiles()`

```php
faxFiles($fax_id): \SplFileObject
```
Download Fax Files

Downloads files associated with a Fax

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxFiles(
        fax_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );

    copy($response->getRealPath(), __DIR__ . '/file_response');
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxFiles: {$e->getMessage()}";
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

Returns information about a Fax

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxGet(
        fax_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxGet: {$e->getMessage()}";
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

Returns properties of multiple Faxes

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxList(
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxList: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Which page number of the Fax List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

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

Creates and sends a new Fax with the submitted file(s)

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_send_request = (new Dropbox\Sign\Model\FaxSendRequest())
    ->setRecipient("16690000001")
    ->setSender("16690000000")
    ->setTestMode(true)
    ->setCoverPageTo("Jill Fax")
    ->setCoverPageFrom("Faxer Faxerson")
    ->setCoverPageMessage("I'm sending you a fax!")
    ->setTitle("This is what the fax is about!")
    ->setFiles([
    ]);

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxSend(
        fax_send_request: $fax_send_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxSend: {$e->getMessage()}";
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
