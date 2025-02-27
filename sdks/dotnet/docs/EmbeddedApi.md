# Dropbox.Sign.Api.EmbeddedApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**EmbeddedEditUrl**](EmbeddedApi.md#embeddedediturl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL |
| [**EmbeddedSignUrl**](EmbeddedApi.md#embeddedsignurl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL |

<a id="embeddedediturl"></a>
# **EmbeddedEditUrl**
> EmbeddedEditUrlResponse EmbeddedEditUrl (string templateId, EmbeddedEditUrlRequest embeddedEditUrlRequest)

Get Embedded Template Edit URL

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

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

public class EmbeddedEditUrlExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var mergeFields = new List<SubMergeField>();

        var embeddedEditUrlRequest = new EmbeddedEditUrlRequest(
            ccRoles: [
                "",
            ],
            mergeFields: mergeFields
        );

        try
        {
            var response = new EmbeddedApi(config).EmbeddedEditUrl(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                embeddedEditUrlRequest: embeddedEditUrlRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling EmbeddedApi#EmbeddedEditUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the EmbeddedEditUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Embedded Template Edit URL
    ApiResponse<EmbeddedEditUrlResponse> response = apiInstance.EmbeddedEditUrlWithHttpInfo(templateId, embeddedEditUrlRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmbeddedApi.EmbeddedEditUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the template to edit. |  |
| **embeddedEditUrlRequest** | [**EmbeddedEditUrlRequest**](EmbeddedEditUrlRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="embeddedsignurl"></a>
# **EmbeddedSignUrl**
> EmbeddedSignUrlResponse EmbeddedSignUrl (string signatureId)

Get Embedded Sign URL

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

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

public class EmbeddedSignUrlExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new EmbeddedApi(config).EmbeddedSignUrl(
                signatureId: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling EmbeddedApi#EmbeddedSignUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the EmbeddedSignUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Embedded Sign URL
    ApiResponse<EmbeddedSignUrlResponse> response = apiInstance.EmbeddedSignUrlWithHttpInfo(signatureId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling EmbeddedApi.EmbeddedSignUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureId** | **string** | The id of the signature to get a signature url for. |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

