# Dropbox.Sign.Api.OAuthApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**OauthTokenGenerate**](OAuthApi.md#oauthtokengenerate) | **POST** /oauth/token | OAuth Token Generate |
| [**OauthTokenRefresh**](OAuthApi.md#oauthtokenrefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |

<a id="oauthtokengenerate"></a>
# **OauthTokenGenerate**
> OAuthTokenResponse OauthTokenGenerate (OAuthTokenGenerateRequest oAuthTokenGenerateRequest)

OAuth Token Generate

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class OauthTokenGenerateExample
{
    public static void Run()
    {
        var config = new Configuration();

        var oAuthTokenGenerateRequest = new OAuthTokenGenerateRequest(
            clientId: "cc91c61d00f8bb2ece1428035716b",
            clientSecret: "1d14434088507ffa390e6f5528465",
            code: "1b0d28d90c86c141",
            state: "900e06e2",
            grantType: "authorization_code"
        );

        try
        {
            var response = new OAuthApi(config).OauthTokenGenerate(
                oAuthTokenGenerateRequest: oAuthTokenGenerateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling OAuthApi#OauthTokenGenerate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the OauthTokenGenerateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // OAuth Token Generate
    ApiResponse<OAuthTokenResponse> response = apiInstance.OauthTokenGenerateWithHttpInfo(oAuthTokenGenerateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OAuthApi.OauthTokenGenerateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **oAuthTokenGenerateRequest** | [**OAuthTokenGenerateRequest**](OAuthTokenGenerateRequest.md) |  |  |

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
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="oauthtokenrefresh"></a>
# **OauthTokenRefresh**
> OAuthTokenResponse OauthTokenRefresh (OAuthTokenRefreshRequest oAuthTokenRefreshRequest)

OAuth Token Refresh

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class OauthTokenRefreshExample
{
    public static void Run()
    {
        var config = new Configuration();

        var oAuthTokenRefreshRequest = new OAuthTokenRefreshRequest(
            grantType: "refresh_token",
            refreshToken: "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"
        );

        try
        {
            var response = new OAuthApi(config).OauthTokenRefresh(
                oAuthTokenRefreshRequest: oAuthTokenRefreshRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling OAuthApi#OauthTokenRefresh: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the OauthTokenRefreshWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // OAuth Token Refresh
    ApiResponse<OAuthTokenResponse> response = apiInstance.OauthTokenRefreshWithHttpInfo(oAuthTokenRefreshRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling OAuthApi.OauthTokenRefreshWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **oAuthTokenRefreshRequest** | [**OAuthTokenRefreshRequest**](OAuthTokenRefreshRequest.md) |  |  |

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
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

