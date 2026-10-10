# Dropbox\Sign\AccountApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**accountCreate()**](AccountApi.md#accountCreate) | **POST** /account/create | Create Account |
| [**accountGet()**](AccountApi.md#accountGet) | **GET** /account | Get Account |
| [**accountSettingsGet()**](AccountApi.md#accountSettingsGet) | **GET** /account/settings | Get account settings |
| [**accountSettingsUpdate()**](AccountApi.md#accountSettingsUpdate) | **POST** /account/settings | Modify account settings |
| [**accountUpdate()**](AccountApi.md#accountUpdate) | **PUT** /account | Update Account |
| [**accountVerify()**](AccountApi.md#accountVerify) | **POST** /account/verify | Verify Account |


## `accountCreate()`

```php
accountCreate($account_create_request): \Dropbox\Sign\Model\AccountCreateResponse
```
Create Account

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

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

$account_create_request = (new Dropbox\Sign\Model\AccountCreateRequest())
    ->setEmailAddress("newuser@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountCreate(
        account_create_request: $account_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_create_request** | [**\Dropbox\Sign\Model\AccountCreateRequest**](../Model/AccountCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\AccountCreateResponse**](../Model/AccountCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountGet()`

```php
accountGet($account_id, $email_address): \Dropbox\Sign\Model\AccountGetResponse
```
Get Account

Returns the properties and settings of your Account.

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
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountGet();

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_id** | **string**| `account_id` or `email_address` is required. If both are provided, the account id prevails.  The ID of the Account. | [optional] |
| **email_address** | **string**| `account_id` or `email_address` is required, If both are provided, the account id prevails.  The email address of the Account. | [optional] |

### Return type

[**\Dropbox\Sign\Model\AccountGetResponse**](../Model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountSettingsGet()`

```php
accountSettingsGet($account_id): \Dropbox\Sign\Model\AccountSettingsResponse
```
Get account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountSettingsGet();
    $company = $response->getSettings()->getCompany();

    print_r($response);
    print_r([
        'account_id' => $response->getAccountId(),
        'company' => [
            'value' => $company->getValue(),
            'is_inherited' => $company->getIsInherited(),
            'source' => $company->getSource(),
            'type' => $company->getType(),
            'writable' => $company->getWritable(),
            'lock' => [
                'mode' => $company->getLock()->getMode(),
                'source' => $company->getLock()->getSource(),
            ],
        ],
        'warnings' => $response->getWarnings(),
    ]);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountSettingsGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_id** | **string**| Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**\Dropbox\Sign\Model\AccountSettingsResponse**](../Model/AccountSettingsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountSettingsUpdate()`

```php
accountSettingsUpdate($account_settings_update_request, $account_id): \Dropbox\Sign\Model\AccountSettingsResponse
```
Modify account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

$account_settings_update_request = (new Dropbox\Sign\Model\AccountSettingsUpdateRequest())
    ->setDateFormat(Dropbox\Sign\Model\DateFormat::MM_DD_YYYY)
    ->setRequiredSignatureTypes([
        Dropbox\Sign\Model\RequiredSignatureType::DRAW,
        Dropbox\Sign\Model\RequiredSignatureType::TYPE,
    ])
    ->setShouldEnableTamperProof(false)
    ->setUnset(['company']);

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountSettingsUpdate(
        account_settings_update_request: $account_settings_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountSettingsUpdate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_settings_update_request** | [**\Dropbox\Sign\Model\AccountSettingsUpdateRequest**](../Model/AccountSettingsUpdateRequest.md)|  | |
| **account_id** | **string**| Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**\Dropbox\Sign\Model\AccountSettingsResponse**](../Model/AccountSettingsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountUpdate()`

```php
accountUpdate($account_update_request): \Dropbox\Sign\Model\AccountGetResponse
```
Update Account

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

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

$account_update_request = (new Dropbox\Sign\Model\AccountUpdateRequest())
    ->setCallbackUrl("https://www.example.com/callback")
    ->setLocale("en-US");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountUpdate(
        account_update_request: $account_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountUpdate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_update_request** | [**\Dropbox\Sign\Model\AccountUpdateRequest**](../Model/AccountUpdateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\AccountGetResponse**](../Model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountVerify()`

```php
accountVerify($account_verify_request): \Dropbox\Sign\Model\AccountVerifyResponse
```
Verify Account

Verifies whether an Dropbox Sign Account exists for the given email address.

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

$account_verify_request = (new Dropbox\Sign\Model\AccountVerifyRequest())
    ->setEmailAddress("some_user@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountVerify(
        account_verify_request: $account_verify_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountVerify: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_verify_request** | [**\Dropbox\Sign\Model\AccountVerifyRequest**](../Model/AccountVerifyRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\AccountVerifyResponse**](../Model/AccountVerifyResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
