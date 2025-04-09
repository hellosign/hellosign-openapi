# ApiAppApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**apiAppCreate**](ApiAppApi.md#apiAppCreate) | **POST** /api_app | Create API App
[**apiAppDelete**](ApiAppApi.md#apiAppDelete) | **DELETE** /api_app/{client_id} | Delete API App
[**apiAppGet**](ApiAppApi.md#apiAppGet) | **GET** /api_app/{client_id} | Get API App
[**apiAppList**](ApiAppApi.md#apiAppList) | **GET** /api_app/list | List API Apps
[**apiAppUpdate**](ApiAppApi.md#apiAppUpdate) | **PUT** /api_app/{client_id} | Update API App



## apiAppCreate

> ApiAppGetResponse apiAppCreate(apiAppCreateRequest)

Create API App

Creates a new API App.

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

public class ApiAppCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var oauth = new SubOAuth();
        oauth.callbackUrl("https://example.com/oauth");
        oauth.scopes(List.of (
            SubOAuth.ScopesEnum.BASIC_ACCOUNT_INFO,
            SubOAuth.ScopesEnum.REQUEST_SIGNATURE
        ));

        var whiteLabelingOptions = new SubWhiteLabelingOptions();
        whiteLabelingOptions.primaryButtonColor("#00b3e6");
        whiteLabelingOptions.primaryButtonTextColor("#ffffff");

        var apiAppCreateRequest = new ApiAppCreateRequest();
        apiAppCreateRequest.name("My Production App");
        apiAppCreateRequest.domains(List.of (
            "example.com"
        ));
        apiAppCreateRequest.customLogoFile(new File("CustomLogoFile.png"));
        apiAppCreateRequest.oauth(oauth);
        apiAppCreateRequest.whiteLabelingOptions(whiteLabelingOptions);

        try
        {
            var response = new ApiAppApi(config).apiAppCreate(
                apiAppCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppCreate");
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
 **apiAppCreateRequest** | [**ApiAppCreateRequest**](ApiAppCreateRequest.md)|  |

### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## apiAppDelete

> apiAppDelete(clientId)

Delete API App

Deletes an API App. Can only be invoked for apps you own.

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

public class ApiAppDeleteExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            new ApiAppApi(config).apiAppDelete(
                "0dd3b823a682527788c4e40cb7b6f7e9" // clientId
            );
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppDelete");
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
 **clientId** | **String**| The client id of the API App to delete. |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## apiAppGet

> ApiAppGetResponse apiAppGet(clientId)

Get API App

Returns an object with information about an API App.

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

public class ApiAppGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new ApiAppApi(config).apiAppGet(
                "0dd3b823a682527788c4e40cb7b6f7e9" // clientId
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppGet");
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
 **clientId** | **String**| The client id of the API App to retrieve. |

### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## apiAppList

> ApiAppListResponse apiAppList(page, pageSize)

List API Apps

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

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

public class ApiAppListExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new ApiAppApi(config).apiAppList(
                1, // page
                20 // pageSize
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppList");
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
 **page** | **Integer**| Which page number of the API App List to return. Defaults to `1`. | [optional] [default to 1]
 **pageSize** | **Integer**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20]

### Return type

[**ApiAppListResponse**](ApiAppListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## apiAppUpdate

> ApiAppGetResponse apiAppUpdate(clientId, apiAppUpdateRequest)

Update API App

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

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

public class ApiAppUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var oauth = new SubOAuth();
        oauth.callbackUrl("https://example.com/oauth");
        oauth.scopes(List.of (
            SubOAuth.ScopesEnum.BASIC_ACCOUNT_INFO,
            SubOAuth.ScopesEnum.REQUEST_SIGNATURE
        ));

        var whiteLabelingOptions = new SubWhiteLabelingOptions();
        whiteLabelingOptions.primaryButtonColor("#00b3e6");
        whiteLabelingOptions.primaryButtonTextColor("#ffffff");

        var apiAppUpdateRequest = new ApiAppUpdateRequest();
        apiAppUpdateRequest.callbackUrl("https://example.com/dropboxsign");
        apiAppUpdateRequest.name("New Name");
        apiAppUpdateRequest.domains(List.of (
            "example.com"
        ));
        apiAppUpdateRequest.customLogoFile(new File("CustomLogoFile.png"));
        apiAppUpdateRequest.oauth(oauth);
        apiAppUpdateRequest.whiteLabelingOptions(whiteLabelingOptions);

        try
        {
            var response = new ApiAppApi(config).apiAppUpdate(
                "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
                apiAppUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppUpdate");
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
 **clientId** | **String**| The client id of the API App to update. |
 **apiAppUpdateRequest** | [**ApiAppUpdateRequest**](ApiAppUpdateRequest.md)|  |

### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

