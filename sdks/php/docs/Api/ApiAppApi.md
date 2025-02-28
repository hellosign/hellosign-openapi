# Dropbox\Sign\ApiAppApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**apiAppCreate()**](ApiAppApi.md#apiAppCreate) | **POST** /api_app | Create API App |
| [**apiAppDelete()**](ApiAppApi.md#apiAppDelete) | **DELETE** /api_app/{client_id} | Delete API App |
| [**apiAppGet()**](ApiAppApi.md#apiAppGet) | **GET** /api_app/{client_id} | Get API App |
| [**apiAppList()**](ApiAppApi.md#apiAppList) | **GET** /api_app/list | List API Apps |
| [**apiAppUpdate()**](ApiAppApi.md#apiAppUpdate) | **PUT** /api_app/{client_id} | Update API App |


## `apiAppCreate()`

```php
apiAppCreate($api_app_create_request): \Dropbox\Sign\Model\ApiAppGetResponse
```
Create API App

Creates a new API App.

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

$oauth = (new Dropbox\Sign\Model\SubOAuth())
    ->setCallbackUrl("https://example.com/oauth")
    ->setScopes([
        Dropbox\Sign\Model\SubOAuth::SCOPES_BASIC_ACCOUNT_INFO,
        Dropbox\Sign\Model\SubOAuth::SCOPES_REQUEST_SIGNATURE,
    ]);

$white_labeling_options = (new Dropbox\Sign\Model\SubWhiteLabelingOptions())
    ->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$api_app_create_request = (new Dropbox\Sign\Model\ApiAppCreateRequest())
    ->setName("My Production App")
    ->setDomains([
        "example.com",
    ])
    ->setCustomLogoFile(new SplFileObject("CustomLogoFile.png"))
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($white_labeling_options);

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppCreate(
        api_app_create_request: $api_app_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **api_app_create_request** | [**\Dropbox\Sign\Model\ApiAppCreateRequest**](../Model/ApiAppCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppDelete()`

```php
apiAppDelete($client_id)
```
Delete API App

Deletes an API App. Can only be invoked for apps you own.

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
    (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppDelete(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppDelete: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to delete. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppGet()`

```php
apiAppGet($client_id): \Dropbox\Sign\Model\ApiAppGetResponse
```
Get API App

Returns an object with information about an API App.

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
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppGet(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to retrieve. | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppList()`

```php
apiAppList($page, $page_size): \Dropbox\Sign\Model\ApiAppListResponse
```
List API Apps

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

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
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppList(
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppList: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Which page number of the API App List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\ApiAppListResponse**](../Model/ApiAppListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppUpdate()`

```php
apiAppUpdate($client_id, $api_app_update_request): \Dropbox\Sign\Model\ApiAppGetResponse
```
Update API App

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

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

$oauth = (new Dropbox\Sign\Model\SubOAuth())
    ->setCallbackUrl("https://example.com/oauth")
    ->setScopes([
        Dropbox\Sign\Model\SubOAuth::SCOPES_BASIC_ACCOUNT_INFO,
        Dropbox\Sign\Model\SubOAuth::SCOPES_REQUEST_SIGNATURE,
    ]);

$white_labeling_options = (new Dropbox\Sign\Model\SubWhiteLabelingOptions())
    ->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$api_app_update_request = (new Dropbox\Sign\Model\ApiAppUpdateRequest())
    ->setCallbackUrl("https://example.com/dropboxsign")
    ->setName("New Name")
    ->setDomains([
        "example.com",
    ])
    ->setCustomLogoFile(new SplFileObject("CustomLogoFile.png"))
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($white_labeling_options);

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppUpdate(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
        api_app_update_request: $api_app_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppUpdate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to update. | |
| **api_app_update_request** | [**\Dropbox\Sign\Model\ApiAppUpdateRequest**](../Model/ApiAppUpdateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
