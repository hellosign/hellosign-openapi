# OAuthApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**oauthTokenGenerate()**](OAuthApi.md#oauthTokenGenerate) | **POST** /oauth/token | OAuth Token Generate |
| [**oauthTokenRefresh()**](OAuthApi.md#oauthTokenRefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |


## `oauthTokenGenerate()`

```typescript
oauthTokenGenerate(oAuthTokenGenerateRequest: OAuthTokenGenerateRequest): OAuthTokenResponse
```

OAuth Token Generate

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oAuthTokenGenerateRequest: models.OAuthTokenGenerateRequest = {
  clientId: "cc91c61d00f8bb2ece1428035716b",
  clientSecret: "1d14434088507ffa390e6f5528465",
  code: "1b0d28d90c86c141",
  state: "900e06e2",
  grantType: "authorization_code",
};

apiCaller.oauthTokenGenerate(
  oAuthTokenGenerateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling OAuthApi#oauthTokenGenerate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **oAuthTokenGenerateRequest** | [**OAuthTokenGenerateRequest**](../model/OAuthTokenGenerateRequest.md)|  | |

### Return type

[**OAuthTokenResponse**](../model/OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `oauthTokenRefresh()`

```typescript
oauthTokenRefresh(oAuthTokenRefreshRequest: OAuthTokenRefreshRequest): OAuthTokenResponse
```

OAuth Token Refresh

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oAuthTokenRefreshRequest: models.OAuthTokenRefreshRequest = {
  grantType: "refresh_token",
  refreshToken: "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3",
};

apiCaller.oauthTokenRefresh(
  oAuthTokenRefreshRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling OAuthApi#oauthTokenRefresh:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **oAuthTokenRefreshRequest** | [**OAuthTokenRefreshRequest**](../model/OAuthTokenRefreshRequest.md)|  | |

### Return type

[**OAuthTokenResponse**](../model/OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
