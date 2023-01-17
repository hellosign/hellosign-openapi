# AccountApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**accountCreate()**](AccountApi.md#accountCreate) | **POST** /account/create | Create Account |
| [**accountGet()**](AccountApi.md#accountGet) | **GET** /account | Get Account |
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
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data: DropboxSign.AccountCreateRequest = {
  emailAddress: "newuser@dropboxsign.com",
};

const result = accountApi.accountCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "newuser@dropboxsign.com",
};

const result = accountApi.accountCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const result = accountApi.accountGet(undefined, "jack@example.com");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const result = accountApi.accountGet(undefined, "jack@example.com");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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

## `accountUpdate()`

```typescript
accountUpdate(accountUpdateRequest: AccountUpdateRequest): AccountGetResponse
```

Update Account

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data: DropboxSign.AccountUpdateRequest = {
  callbackUrl: "https://www.example.com/callback",
};

const result = accountApi.accountUpdate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  callbackUrl: "https://www.example.com/callback",
};

const result = accountApi.accountUpdate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data: DropboxSign.AccountVerifyRequest = {
  emailAddress: "some_user@dropboxsign.com",
};

const result = accountApi.accountVerify(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const accountApi = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
accountApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// accountApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "some_user@dropboxsign.com",
};

const result = accountApi.accountVerify(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
