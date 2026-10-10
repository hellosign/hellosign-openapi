# AccountApi

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

```typescript
accountCreate(accountCreateRequest: AccountCreateRequest): AccountCreateResponse
```

Create Account

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountCreateRequest: models.AccountCreateRequest = {
  emailAddress: "newuser@dropboxsign.com",
};

apiCaller.accountCreate(
  accountCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountCreate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountCreateRequest** | [**AccountCreateRequest**](../model/AccountCreateRequest.md)|  | |

### Return type

[**AccountCreateResponse**](../model/AccountCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountGet()`

```typescript
accountGet(accountId: string, emailAddress: string): AccountGetResponse
```

Get Account

Returns the properties and settings of your Account.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.accountGet().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountId** | **string**| `account_id` or `email_address` is required. If both are provided, the account id prevails.  The ID of the Account. | [optional] |
| **emailAddress** | **string**| `account_id` or `email_address` is required, If both are provided, the account id prevails.  The email address of the Account. | [optional] |

### Return type

[**AccountGetResponse**](../model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountSettingsGet()`

```typescript
accountSettingsGet(accountId: string): AccountSettingsResponse
```

Get account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### TypeScript Example

```typescript
import api from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.accountSettingsGet().then(response => {
  const company = response.body.settings.company;
  console.log(response.body);
  console.log({
    accountId: response.body.accountId,
    company: {
      value: company.value,
      isInherited: company.isInherited,
      source: company.source,
      type: company.type,
      writable: company.writable,
      lock: {
        mode: company.lock.mode,
        source: company.lock.source,
      },
    },
    warnings: response.body.warnings,
  });
}).catch(error => {
  console.log("Exception when calling AccountApi#accountSettingsGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountId** | **string**| Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](../model/AccountSettingsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountSettingsUpdate()`

```typescript
accountSettingsUpdate(accountSettingsUpdateRequest: AccountSettingsUpdateRequest, accountId: string): AccountSettingsResponse
```

Modify account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### TypeScript Example

```typescript
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountSettingsUpdateRequest: models.AccountSettingsUpdateRequest = {
  dateFormat: models.DateFormat.MmDdYyyy,
  requiredSignatureTypes: [
    models.RequiredSignatureType.Draw,
    models.RequiredSignatureType.Type,
  ],
  shouldEnableTamperProof: false,
  unset: ["company"],
};

apiCaller.accountSettingsUpdate(
  accountSettingsUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountSettingsUpdate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountSettingsUpdateRequest** | [**AccountSettingsUpdateRequest**](../model/AccountSettingsUpdateRequest.md)|  | |
| **accountId** | **string**| Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](../model/AccountSettingsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountUpdate()`

```typescript
accountUpdate(accountUpdateRequest: AccountUpdateRequest): AccountGetResponse
```

Update Account

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountUpdateRequest: models.AccountUpdateRequest = {
  callbackUrl: "https://www.example.com/callback",
  locale: "en-US",
};

apiCaller.accountUpdate(
  accountUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountUpdate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountUpdateRequest** | [**AccountUpdateRequest**](../model/AccountUpdateRequest.md)|  | |

### Return type

[**AccountGetResponse**](../model/AccountGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `accountVerify()`

```typescript
accountVerify(accountVerifyRequest: AccountVerifyRequest): AccountVerifyResponse
```

Verify Account

Verifies whether an Dropbox Sign Account exists for the given email address.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountVerifyRequest: models.AccountVerifyRequest = {
  emailAddress: "some_user@dropboxsign.com",
};

apiCaller.accountVerify(
  accountVerifyRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountVerify:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountVerifyRequest** | [**AccountVerifyRequest**](../model/AccountVerifyRequest.md)|  | |

### Return type

[**AccountVerifyResponse**](../model/AccountVerifyResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
