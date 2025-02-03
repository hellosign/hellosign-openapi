# Dropbox\Sign\OAuthApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**oauthTokenGenerate()**](OAuthApi.md#oauthTokenGenerate) | **POST** /oauth/token | OAuth Token Generate |
| [**oauthTokenRefresh()**](OAuthApi.md#oauthTokenRefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |


## `oauthTokenGenerate()`

```php
oauthTokenGenerate($o_auth_token_generate_request): \Dropbox\Sign\Model\OAuthTokenResponse
```
OAuth Token Generate

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__oauthTokenGenerate_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **o_auth_token_generate_request** | [**\Dropbox\Sign\Model\OAuthTokenGenerateRequest**](../Model/OAuthTokenGenerateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\OAuthTokenResponse**](../Model/OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `oauthTokenRefresh()`

```php
oauthTokenRefresh($o_auth_token_refresh_request): \Dropbox\Sign\Model\OAuthTokenResponse
```
OAuth Token Refresh

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__oauthTokenRefresh_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **o_auth_token_refresh_request** | [**\Dropbox\Sign\Model\OAuthTokenRefreshRequest**](../Model/OAuthTokenRefreshRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\OAuthTokenResponse**](../Model/OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
