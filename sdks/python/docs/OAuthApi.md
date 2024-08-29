# ```dropbox_sign.OAuthApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```oauth_token_generate```](OAuthApi.md#oauth_token_generate) | ```POST /oauth/token``` | OAuth Token Generate|
|[```oauth_token_refresh```](OAuthApi.md#oauth_token_refresh) | ```POST /oauth/token?refresh``` | OAuth Token Refresh|


# ```oauth_token_generate```
> ```OAuthTokenResponse oauth_token_generate(o_auth_token_generate_request)```

OAuth Token Generate

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

### Example


```python
REPLACE_ME_WITH_EXAMPLE_FOR__oauth_token_generate_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `o_auth_token_generate_request` | [**OAuthTokenGenerateRequest**](OAuthTokenGenerateRequest.md) |  |  |

### Return type

[**OAuthTokenResponse**](OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```oauth_token_refresh```
> ```OAuthTokenResponse oauth_token_refresh(o_auth_token_refresh_request)```

OAuth Token Refresh

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

### Example


```python
REPLACE_ME_WITH_EXAMPLE_FOR__oauth_token_refresh_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `o_auth_token_refresh_request` | [**OAuthTokenRefreshRequest**](OAuthTokenRefreshRequest.md) |  |  |

### Return type

[**OAuthTokenResponse**](OAuthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

