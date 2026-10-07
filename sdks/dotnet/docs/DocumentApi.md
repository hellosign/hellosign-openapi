# Dropbox.Sign.Api.DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DocumentDetectFields**](DocumentApi.md#documentdetectfields) | **POST** /document/detect_fields | Detect Document Fields |

<a id="documentdetectfields"></a>
# **DocumentDetectFields**
> DocumentFieldDetectionResponse DocumentDetectFields (DocumentFieldDetectionRequest documentFieldDetectionRequest, string? idempotencyKey = null)

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

        var documentFieldDetectionRequest = new DocumentFieldDetectionRequest(
            detectionMode: "annotations",
            file: new FileStream(
                path: "./example_document.pdf",
                mode: FileMode.Open
            ),
            pageRange: "all"
        );

        try
        {
            var response = new DocumentApi(config).DocumentDetectFields(
                documentFieldDetectionRequest: documentFieldDetectionRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling DocumentApi#DocumentDetectFields: " + e.Message);
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
    ApiResponse<DocumentFieldDetectionResponse> response = apiInstance.DocumentDetectFieldsWithHttpInfo(documentFieldDetectionRequest, idempotencyKey);
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
| **documentFieldDetectionRequest** | [**DocumentFieldDetectionRequest**](DocumentFieldDetectionRequest.md) |  |  |
| **idempotencyKey** | **string?** | Reuse the same key when retrying the same request. Must be 1 to 255 characters. | [optional]  |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

