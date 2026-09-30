# Dropbox.Sign.Api.DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DocumentDetectFields**](DocumentApi.md#documentdetectfields) | **POST** /document/detect_fields | Detect Document Fields |

<a id="documentdetectfields"></a>
# **DocumentDetectFields**
> DocumentFieldDetectionResponse DocumentDetectFields (string detectionMode, System.IO.Stream? file = null, string? fileUrl = null, string? pageRange = null)

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

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

public class DocumentDetectFieldsExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).DocumentDetectFields(
                detectionMode: "annotations",
                file: new FileStream(
                    path: "./example_document.pdf",
                    mode: FileMode.Open
                ),
                pageRange: "all"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#DocumentDetectFields: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the DocumentDetectFieldsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Detect Document Fields
    ApiResponse<DocumentFieldDetectionResponse> response = apiInstance.DocumentDetectFieldsWithHttpInfo(detectionMode, file, fileUrl, pageRange);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling DocumentApi.DocumentDetectFieldsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **detectionMode** | **string** | The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. |  |
| **file** | **System.IO.Stream?****System.IO.Stream?** | The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional]  |
| **fileUrl** | **string?** | The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional]  |
| **pageRange** | **string?** | The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional]  |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

