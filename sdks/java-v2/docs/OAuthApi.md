# OAuthApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**oauthTokenGenerate**](OAuthApi.md#oauthTokenGenerate) | **POST** /oauth/token | OAuth Token Generate
[**oauthTokenRefresh**](OAuthApi.md#oauthTokenRefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh



## oauthTokenGenerate

> OAuthTokenResponse oauthTokenGenerate(oauthTokenGenerateRequest)

OAuth Token Generate

Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OauthTokenGenerateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var oAuthTokenGenerateRequest = new OAuthTokenGenerateRequest();
        oAuthTokenGenerateRequest.clientId("cc91c61d00f8bb2ece1428035716b");
        oAuthTokenGenerateRequest.clientSecret("1d14434088507ffa390e6f5528465");
        oAuthTokenGenerateRequest.code("1b0d28d90c86c141");
        oAuthTokenGenerateRequest.state("900e06e2");
        oAuthTokenGenerateRequest.grantType("authorization_code");

        try
        {
            var response = new OAuthApi(config).oauthTokenGenerate(
                oAuthTokenGenerateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling OAuthApi#oauthTokenGenerate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **oauthTokenGenerateRequest** | [**OAuthTokenGenerateRequest**](OAuthTokenGenerateRequest.md)|  |

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


## oauthTokenRefresh

> OAuthTokenResponse oauthTokenRefresh(oauthTokenRefreshRequest)

OAuth Token Refresh

Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OauthTokenRefreshExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var oAuthTokenRefreshRequest = new OAuthTokenRefreshRequest();
        oAuthTokenRefreshRequest.grantType("refresh_token");
        oAuthTokenRefreshRequest.refreshToken("hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3");

        try
        {
            var response = new OAuthApi(config).oauthTokenRefresh(
                oAuthTokenRefreshRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling OAuthApi#oauthTokenRefresh");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **oauthTokenRefreshRequest** | [**OAuthTokenRefreshRequest**](OAuthTokenRefreshRequest.md)|  |

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

