# Dropbox.Sign.Api.UnclaimedDraftApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**UnclaimedDraftCreate**](UnclaimedDraftApi.md#unclaimeddraftcreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| [**UnclaimedDraftCreateEmbedded**](UnclaimedDraftApi.md#unclaimeddraftcreateembedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| [**UnclaimedDraftCreateEmbeddedWithTemplate**](UnclaimedDraftApi.md#unclaimeddraftcreateembeddedwithtemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| [**UnclaimedDraftEditAndResend**](UnclaimedDraftApi.md#unclaimeddrafteditandresend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |

<a id="unclaimeddraftcreate"></a>
# **UnclaimedDraftCreate**
> UnclaimedDraftCreateResponse UnclaimedDraftCreate (UnclaimedDraftCreateRequest unclaimedDraftCreateRequest)

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \"Sign and send\" or the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

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

public class UnclaimedDraftCreateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signers1 = new SubUnclaimedDraftSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers = new List<SubUnclaimedDraftSigner>
        {
            signers1,
        };

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest(
            type: UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
            testMode: true,
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            signers: signers
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreate(
                unclaimedDraftCreateRequest: unclaimedDraftCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the UnclaimedDraftCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Unclaimed Draft
    ApiResponse<UnclaimedDraftCreateResponse> response = apiInstance.UnclaimedDraftCreateWithHttpInfo(unclaimedDraftCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UnclaimedDraftApi.UnclaimedDraftCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unclaimedDraftCreateRequest** | [**UnclaimedDraftCreateRequest**](UnclaimedDraftCreateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="unclaimeddraftcreateembedded"></a>
# **UnclaimedDraftCreateEmbedded**
> UnclaimedDraftCreateResponse UnclaimedDraftCreateEmbedded (UnclaimedDraftCreateEmbeddedRequest unclaimedDraftCreateEmbeddedRequest)

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftCreateEmbeddedExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requesterEmailAddress: "jack@dropboxsign.com",
            testMode: true,
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            }
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreateEmbedded(
                unclaimedDraftCreateEmbeddedRequest: unclaimedDraftCreateEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the UnclaimedDraftCreateEmbeddedWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Embedded Unclaimed Draft
    ApiResponse<UnclaimedDraftCreateResponse> response = apiInstance.UnclaimedDraftCreateEmbeddedWithHttpInfo(unclaimedDraftCreateEmbeddedRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UnclaimedDraftApi.UnclaimedDraftCreateEmbeddedWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unclaimedDraftCreateEmbeddedRequest** | [**UnclaimedDraftCreateEmbeddedRequest**](UnclaimedDraftCreateEmbeddedRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="unclaimeddraftcreateembeddedwithtemplate"></a>
# **UnclaimedDraftCreateEmbeddedWithTemplate**
> UnclaimedDraftCreateResponse UnclaimedDraftCreateEmbeddedWithTemplate (UnclaimedDraftCreateEmbeddedWithTemplateRequest unclaimedDraftCreateEmbeddedWithTemplateRequest)

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftCreateEmbeddedWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@dropboxsign.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var signers1 = new SubUnclaimedDraftTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubUnclaimedDraftTemplateSigner>
        {
            signers1,
        };

        var unclaimedDraftCreateEmbeddedWithTemplateRequest = new UnclaimedDraftCreateEmbeddedWithTemplateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requesterEmailAddress: "jack@dropboxsign.com",
            templateIds: [
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            testMode: false,
            ccs: ccs,
            signers: signers
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreateEmbeddedWithTemplate(
                unclaimedDraftCreateEmbeddedWithTemplateRequest: unclaimedDraftCreateEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreateEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the UnclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Embedded Unclaimed Draft with Template
    ApiResponse<UnclaimedDraftCreateResponse> response = apiInstance.UnclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo(unclaimedDraftCreateEmbeddedWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UnclaimedDraftApi.UnclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **unclaimedDraftCreateEmbeddedWithTemplateRequest** | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](UnclaimedDraftCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="unclaimeddrafteditandresend"></a>
# **UnclaimedDraftEditAndResend**
> UnclaimedDraftCreateResponse UnclaimedDraftEditAndResend (string signatureRequestId, UnclaimedDraftEditAndResendRequest unclaimedDraftEditAndResendRequest)

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftEditAndResendExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var unclaimedDraftEditAndResendRequest = new UnclaimedDraftEditAndResendRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            testMode: false
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftEditAndResend(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                unclaimedDraftEditAndResendRequest: unclaimedDraftEditAndResendRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftEditAndResend: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the UnclaimedDraftEditAndResendWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Edit and Resend Unclaimed Draft
    ApiResponse<UnclaimedDraftCreateResponse> response = apiInstance.UnclaimedDraftEditAndResendWithHttpInfo(signatureRequestId, unclaimedDraftEditAndResendRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UnclaimedDraftApi.UnclaimedDraftEditAndResendWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The ID of the signature request to edit and resend. |  |
| **unclaimedDraftEditAndResendRequest** | [**UnclaimedDraftEditAndResendRequest**](UnclaimedDraftEditAndResendRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

