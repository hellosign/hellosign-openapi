# Dropbox.Sign.Api.FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**FaxDelete**](FaxApi.md#faxdelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**FaxFiles**](FaxApi.md#faxfiles) | **GET** /fax/files/{fax_id} | List Fax Files |
| [**FaxGet**](FaxApi.md#faxget) | **GET** /fax/{fax_id} | Get Fax |
| [**FaxList**](FaxApi.md#faxlist) | **GET** /fax/list | Lists Faxes |
| [**FaxSend**](FaxApi.md#faxsend) | **POST** /fax/send | Send Fax |

<a id="faxdelete"></a>
# **FaxDelete**
> void FaxDelete (string faxId)

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
            faxApi.FaxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");
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

#### Using the FaxDeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Fax
    apiInstance.FaxDeleteWithHttpInfo(faxId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.FaxDeleteWithHttpInfo: " + e.Message);
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
| **204** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxfiles"></a>
# **FaxFiles**
> System.IO.Stream FaxFiles (string faxId)

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
            var result = faxApi.FaxFiles(faxId);
            var fileStream = File.Create("file_response.pdf");
            result.Seek(0, SeekOrigin.Begin);
            result.CopyTo(fileStream);
            fileStream.Close();
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

#### Using the FaxFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Fax Files
    ApiResponse<System.IO.Stream> response = apiInstance.FaxFilesWithHttpInfo(faxId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.FaxFilesWithHttpInfo: " + e.Message);
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

<a id="faxget"></a>
# **FaxGet**
> FaxGetResponse FaxGet (string faxId)

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
            var result = faxApi.FaxGet(faxId);
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

#### Using the FaxGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Fax
    ApiResponse<FaxGetResponse> response = apiInstance.FaxGetWithHttpInfo(faxId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.FaxGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxId** | **string** | Fax ID |  |

### Return type

[**FaxGetResponse**](FaxGetResponse.md)

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

<a id="faxlist"></a>
# **FaxList**
> FaxListResponse FaxList (int? page = null, int? pageSize = null)

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
            var result = faxApi.FaxList(page, pageSize);
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

#### Using the FaxListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Lists Faxes
    ApiResponse<FaxListResponse> response = apiInstance.FaxListWithHttpInfo(page, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.FaxListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int?** | Page | [optional] [default to 1] |
| **pageSize** | **int?** | Page size | [optional] [default to 20] |

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

<a id="faxsend"></a>
# **FaxSend**
> FaxGetResponse FaxSend (FaxSendRequest faxSendRequest)

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

        var files = new List<Stream> {
            new FileStream(
                "./example_fax.pdf",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            )
        };

        var data = new FaxSendRequest(
            files: files,
            testMode: true,
            recipient: "16690000001",
            sender: "16690000000",
            coverPageTo: "Jill Fax",
            coverPageMessage: "I'm sending you a fax!",
            coverPageFrom: "Faxer Faxerson",
            title: "This is what the fax is about!",
        );

        try
        {
            var result = faxApi.FaxSend(data);
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

#### Using the FaxSendWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Fax
    ApiResponse<FaxGetResponse> response = apiInstance.FaxSendWithHttpInfo(faxSendRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxApi.FaxSendWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxSendRequest** | [**FaxSendRequest**](FaxSendRequest.md) |  |  |

### Return type

[**FaxGetResponse**](FaxGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

