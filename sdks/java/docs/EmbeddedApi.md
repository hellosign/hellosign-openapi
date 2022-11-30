# EmbeddedApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**embeddedEditUrl**](EmbeddedApi.md#embeddedEditUrl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL
[**embeddedSignUrl**](EmbeddedApi.md#embeddedSignUrl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL



## embeddedEditUrl

> EmbeddedEditUrlResponse embeddedEditUrl(templateId, embeddedEditUrlRequest)

Get Embedded Template Edit URL

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.ArrayList;
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        EmbeddedApi api = new EmbeddedApi(defaultClient);

        EmbeddedEditUrlRequest data = new EmbeddedEditUrlRequest()
            .ccRoles(Arrays.asList(""))
            .mergeFields(new ArrayList<>());

        String templateId = "5de8179668f2033afac48da1868d0093bf133266";

        try {
            EmbeddedEditUrlResponse result = api.embeddedEditUrl(templateId, data);
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
 **templateId** | **String**| The id of the template to edit. |
 **embeddedEditUrlRequest** | [**EmbeddedEditUrlRequest**](EmbeddedEditUrlRequest.md)|  |

### Return type

[**EmbeddedEditUrlResponse**](EmbeddedEditUrlResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## embeddedSignUrl

> EmbeddedSignUrlResponse embeddedSignUrl(signatureId)

Get Embedded Sign URL

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.ArrayList;
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        EmbeddedApi api = new EmbeddedApi(defaultClient);

        String signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

        try {
            EmbeddedSignUrlResponse result = api.embeddedSignUrl(signatureId);
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
 **signatureId** | **String**| The id of the signature to get a signature url for. |

### Return type

[**EmbeddedSignUrlResponse**](EmbeddedSignUrlResponse.md)

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

