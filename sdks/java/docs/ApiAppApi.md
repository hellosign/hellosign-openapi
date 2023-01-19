# ApiAppApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
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
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;
import com.dropbox.sign.model.SubOAuth.ScopesEnum;

import java.io.File;
import java.util.Arrays;
import java.util.Collections;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        ApiAppApi apiAppApi = new ApiAppApi(apiClient);

        SubOAuth oauth = new SubOAuth()
            .callbackUrl("https://example.com/oauth")
            .scopes(Arrays.asList(ScopesEnum.BASIC_ACCOUNT_INFO, ScopesEnum.REQUEST_SIGNATURE));

        SubWhiteLabelingOptions whiteLabelingOptions = new SubWhiteLabelingOptions()
            .primaryButtonColor("#00b3e6")
            .primaryButtonTextColor("#ffffff");

        File customLogoFile = new File("CustomLogoFile.png");

        ApiAppCreateRequest data = new ApiAppCreateRequest()
            .name("My Production App")
            .domains(Collections.singletonList("example.com"))
            .oauth(oauth)
            .whiteLabelingOptions(whiteLabelingOptions)
            .customLogoFile(customLogoFile);

        try {
            ApiAppGetResponse result = apiAppApi.apiAppCreate(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## apiAppDelete

> apiAppDelete(clientId)

Delete API App

Deletes an API App. Can only be invoked for apps you own.

### Example

```java
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        ApiAppApi apiAppApi = new ApiAppApi(apiClient);

        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        try {
            apiAppApi.apiAppDelete(clientId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        ApiAppApi apiAppApi = new ApiAppApi(apiClient);

        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        try {
            ApiAppGetResponse result = apiAppApi.apiAppGet(clientId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        ApiAppApi apiAppApi = new ApiAppApi(apiClient);

        int page = 1;
        int pageSize = 2;

        try {
            ApiAppListResponse result = apiAppApi.apiAppList(page, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;
import com.dropbox.sign.model.SubOAuth.ScopesEnum;

import java.io.File;
import java.util.Arrays;
import java.util.Collections;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        ApiAppApi apiAppApi = new ApiAppApi(apiClient);

        SubOAuth oauth = new SubOAuth()
            .callbackUrl("https://example.com/oauth")
            .scopes(Arrays.asList(ScopesEnum.BASIC_ACCOUNT_INFO, ScopesEnum.REQUEST_SIGNATURE));

        SubWhiteLabelingOptions whiteLabelingOptions = new SubWhiteLabelingOptions()
            .primaryButtonColor("#00b3e6")
            .primaryButtonTextColor("#ffffff");

        File customLogoFile = new File("CustomLogoFile.png");

        ApiAppUpdateRequest data = new ApiAppUpdateRequest()
            .name("My Production App")
            .domains(Collections.singletonList("example.com"))
            .oauth(oauth)
            .whiteLabelingOptions(whiteLabelingOptions)
            .customLogoFile(customLogoFile);

        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        try {
            ApiAppGetResponse result = apiAppApi.apiAppUpdate(clientId, data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

