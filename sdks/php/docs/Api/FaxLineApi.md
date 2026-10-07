# Dropbox\Sign\FaxLineApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxLineAddUser()**](FaxLineApi.md#faxLineAddUser) | **PUT** /fax_line/add_user | Add Fax Line User |
| [**faxLineAreaCodeGet()**](FaxLineApi.md#faxLineAreaCodeGet) | **GET** /fax_line/area_codes | Get Available Fax Line Area Codes |
| [**faxLineCreate()**](FaxLineApi.md#faxLineCreate) | **POST** /fax_line/create | Purchase Fax Line |
| [**faxLineDelete()**](FaxLineApi.md#faxLineDelete) | **DELETE** /fax_line | Delete Fax Line |
| [**faxLineGet()**](FaxLineApi.md#faxLineGet) | **GET** /fax_line | Get Fax Line |
| [**faxLineList()**](FaxLineApi.md#faxLineList) | **GET** /fax_line/list | List Fax Lines |
| [**faxLineRemoveUser()**](FaxLineApi.md#faxLineRemoveUser) | **PUT** /fax_line/remove_user | Remove Fax Line Access |


## `faxLineAddUser()`

```php
faxLineAddUser($fax_line_add_user_request): \Dropbox\Sign\Model\FaxLineResponse
```
Add Fax Line User

Grants a user access to the specified Fax Line.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_add_user_request = (new Dropbox\Sign\Model\FaxLineAddUserRequest())
    ->setNumber("[FAX_NUMBER]")
    ->setEmailAddress("member@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineAddUser(
        fax_line_add_user_request: $fax_line_add_user_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineAddUser: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_line_add_user_request** | [**\Dropbox\Sign\Model\FaxLineAddUserRequest**](../Model/FaxLineAddUserRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxLineResponse**](../Model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineAreaCodeGet()`

```php
faxLineAreaCodeGet($country, $state, $province, $city): \Dropbox\Sign\Model\FaxLineAreaCodeGetResponse
```
Get Available Fax Line Area Codes

Returns a list of available area codes for a given state/province and city

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
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineAreaCodeGet(
        country: "US",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineAreaCodeGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **country** | **string**| Filter area codes by country | |
| **state** | **string**| Filter area codes by state | [optional] |
| **province** | **string**| Filter area codes by province | [optional] |
| **city** | **string**| Filter area codes by city | [optional] |

### Return type

[**\Dropbox\Sign\Model\FaxLineAreaCodeGetResponse**](../Model/FaxLineAreaCodeGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineCreate()`

```php
faxLineCreate($fax_line_create_request): \Dropbox\Sign\Model\FaxLineResponse
```
Purchase Fax Line

Purchases a new Fax Line

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_create_request = (new Dropbox\Sign\Model\FaxLineCreateRequest())
    ->setAreaCode(209)
    ->setCountry(Dropbox\Sign\Model\FaxLineCreateRequest::COUNTRY_US);

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineCreate(
        fax_line_create_request: $fax_line_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_line_create_request** | [**\Dropbox\Sign\Model\FaxLineCreateRequest**](../Model/FaxLineCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxLineResponse**](../Model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineDelete()`

```php
faxLineDelete($fax_line_delete_request)
```
Delete Fax Line

Deletes the specified Fax Line from the subscription.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_delete_request = (new Dropbox\Sign\Model\FaxLineDeleteRequest())
    ->setNumber("[FAX_NUMBER]");

try {
    (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineDelete(
        fax_line_delete_request: $fax_line_delete_request,
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineDelete: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_line_delete_request** | [**\Dropbox\Sign\Model\FaxLineDeleteRequest**](../Model/FaxLineDeleteRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineGet()`

```php
faxLineGet($number): \Dropbox\Sign\Model\FaxLineResponse
```
Get Fax Line

Returns the properties and settings of a Fax Line.

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
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineGet(
        number: "123-123-1234",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **number** | **string**| The Fax Line number | |

### Return type

[**\Dropbox\Sign\Model\FaxLineResponse**](../Model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineList()`

```php
faxLineList($account_id, $page, $page_size, $show_team_lines): \Dropbox\Sign\Model\FaxLineListResponse
```
List Fax Lines

Returns the properties and settings of multiple Fax Lines.

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
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineList(
        account_id: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineList: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_id** | **string**| Account ID | [optional] |
| **page** | **int**| Which page number of the Fax Line List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **show_team_lines** | **bool**| Include Fax Lines belonging to team members in the list | [optional] |

### Return type

[**\Dropbox\Sign\Model\FaxLineListResponse**](../Model/FaxLineListResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineRemoveUser()`

```php
faxLineRemoveUser($fax_line_remove_user_request): \Dropbox\Sign\Model\FaxLineResponse
```
Remove Fax Line Access

Removes a user's access to the specified Fax Line

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_remove_user_request = (new Dropbox\Sign\Model\FaxLineRemoveUserRequest())
    ->setNumber("[FAX_NUMBER]")
    ->setEmailAddress("member@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineRemoveUser(
        fax_line_remove_user_request: $fax_line_remove_user_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineRemoveUser: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_line_remove_user_request** | [**\Dropbox\Sign\Model\FaxLineRemoveUserRequest**](../Model/FaxLineRemoveUserRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxLineResponse**](../Model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
