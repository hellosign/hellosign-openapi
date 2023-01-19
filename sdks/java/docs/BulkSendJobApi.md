# BulkSendJobApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkSendJobGet**](BulkSendJobApi.md#bulkSendJobGet) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job
[**bulkSendJobList**](BulkSendJobApi.md#bulkSendJobList) | **GET** /bulk_send_job/list | List Bulk Send Jobs



## bulkSendJobGet

> BulkSendJobGetResponse bulkSendJobGet(bulkSendJobId)

Get Bulk Send Job

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

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

        BulkSendJobApi bulkSendJobApi = new BulkSendJobApi(apiClient);

        String bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

        try {
            BulkSendJobGetResponse result = bulkSendJobApi.bulkSendJobGet(bulkSendJobId);
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
 **bulkSendJobId** | **String**| The id of the BulkSendJob to retrieve. |

### Return type

[**BulkSendJobGetResponse**](BulkSendJobGetResponse.md)

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


## bulkSendJobList

> BulkSendJobListResponse bulkSendJobList(page, pageSize)

List Bulk Send Jobs

Returns a list of BulkSendJob that you can access.

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

        BulkSendJobApi bulkSendJobApi = new BulkSendJobApi(apiClient);

        int page = 1;
        int pageSize = 20;

        try {
            BulkSendJobListResponse result = bulkSendJobApi.bulkSendJobList(page, pageSize);
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
 **page** | **Integer**| Which page number of the BulkSendJob List to return. Defaults to `1`. | [optional] [default to 1]
 **pageSize** | **Integer**| Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20]

### Return type

[**BulkSendJobListResponse**](BulkSendJobListResponse.md)

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

