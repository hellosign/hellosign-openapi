# Dropbox.Sign.Api.BulkSendJobApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**BulkSendJobGet**](BulkSendJobApi.md#bulksendjobget) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job |
| [**BulkSendJobList**](BulkSendJobApi.md#bulksendjoblist) | **GET** /bulk_send_job/list | List Bulk Send Jobs |

<a id="bulksendjobget"></a>
# **BulkSendJobGet**
> BulkSendJobGetResponse BulkSendJobGet (string bulkSendJobId, int? page = null, int? pageSize = null)

Get Bulk Send Job

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

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

public class BulkSendJobGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new BulkSendJobApi(config).BulkSendJobGet(
                bulkSendJobId: "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling BulkSendJobApi#BulkSendJobGet: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the BulkSendJobGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Bulk Send Job
    ApiResponse<BulkSendJobGetResponse> response = apiInstance.BulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BulkSendJobApi.BulkSendJobGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **bulkSendJobId** | **string** | The id of the BulkSendJob to retrieve. |  |
| **page** | **int?** | Which page number of the BulkSendJob list to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20] |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="bulksendjoblist"></a>
# **BulkSendJobList**
> BulkSendJobListResponse BulkSendJobList (int? page = null, int? pageSize = null)

List Bulk Send Jobs

Returns a list of BulkSendJob that you can access.

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

public class BulkSendJobListExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new BulkSendJobApi(config).BulkSendJobList(
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling BulkSendJobApi#BulkSendJobList: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the BulkSendJobListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Bulk Send Jobs
    ApiResponse<BulkSendJobListResponse> response = apiInstance.BulkSendJobListWithHttpInfo(page, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling BulkSendJobApi.BulkSendJobListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int?** | Which page number of the BulkSendJob List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20] |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

