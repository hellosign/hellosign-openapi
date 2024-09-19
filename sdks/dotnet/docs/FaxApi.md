# Dropbox.Sign.Api.FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DeleteFax**](FaxApi.md#deletefax) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**GetFaxById**](FaxApi.md#getfaxbyid) | **GET** /fax/{fax_id} | Get Fax |
| [**GetFaxFiles**](FaxApi.md#getfaxfiles) | **GET** /fax/files/{fax_id} | List Fax Files |
| [**ListFaxes**](FaxApi.md#listfaxes) | **GET** /fax/list | Lists Faxes |
| [**SendFax**](FaxApi.md#sendfax) | **POST** /fax/send | Send Fax |

<a id="deletefax"></a>
# **DeleteFax**
> void DeleteFax (string faxId)

Delete Fax

Deletes the specified Fax from the system.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        try
        {
            faxApi.DeleteFax("[FAX_NUMBER]");
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the DeleteFaxWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Fax
    apiInstance.DeleteFaxWithHttpInfo(faxId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.DeleteFaxWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxId** | **string** | Fax ID |  |

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getfaxbyid"></a>
# **GetFaxById**
> FaxResponse GetFaxById (string faxId)

Get Fax

Returns information about fax

### Example
```csharp
using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        // Configure HTTP basic authorization: api_key
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try
        {
            var result = faxApi.GetFaxById(faxId);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the GetFaxByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Fax
    ApiResponse<FaxResponse> response = apiInstance.GetFaxByIdWithHttpInfo(faxId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.GetFaxByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxId** | **string** | Fax ID |  |

### Return type

[**FaxResponse**](FaxResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="getfaxfiles"></a>
# **GetFaxFiles**
> System.IO.Stream GetFaxFiles (string faxId)

List Fax Files

Returns list of fax files

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try
        {
            faxApi.GetFaxFiles(faxId);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the GetFaxFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Fax Files
    ApiResponse<System.IO.Stream> response = apiInstance.GetFaxFilesWithHttpInfo(faxId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.GetFaxFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxId** | **string** | Fax ID |  |

### Return type

**System.IO.Stream**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="listfaxes"></a>
# **ListFaxes**
> FaxListResponse ListFaxes (int page, int pageSize)

Lists Faxes

Returns properties of multiple faxes

### Example
```csharp
using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        // Configure HTTP basic authorization: api_key
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        var page = 1;
        var pageSize = 2;

        try
        {
            var result = faxApi.ListFaxes(page, pageSize);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the ListFaxesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists Faxes
    ApiResponse<FaxListResponse> response = apiInstance.ListFaxesWithHttpInfo(page, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.ListFaxesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Page |  |
| **pageSize** | **int** | Page size |  |

### Return type

[**FaxListResponse**](FaxListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="sendfax"></a>
# **SendFax**
> FaxResponse SendFax (FaxSendRequest faxSendRequest)

Send Fax

Action to prepare and send a fax

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        var data = new FaxCreateRequest(
            file: "<form-data file upload>",
            test_mode: "1",
            to: 16690000001,
            from: 16690000000,
            cover_page_to: "Jill Fax",
            cover_page_message: "I'm sending you a fax!",
            cover_page_from: "Faxer Faxerson",
            title: "This is what the fax is about!"
        );

        try
        {
            var result = faxApi.FaxCreate(data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SendFaxWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Fax
    ApiResponse<FaxResponse> response = apiInstance.SendFaxWithHttpInfo(faxSendRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.SendFaxWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxSendRequest** | [**FaxSendRequest**](FaxSendRequest.md) |  |  |

### Return type

[**FaxResponse**](FaxResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

