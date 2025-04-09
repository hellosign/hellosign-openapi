# Dropbox.Sign.Api.SignatureRequestApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**SignatureRequestBulkCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signaturerequestbulkcreateembeddedwithtemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template |
| [**SignatureRequestBulkSendWithTemplate**](SignatureRequestApi.md#signaturerequestbulksendwithtemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template |
| [**SignatureRequestCancel**](SignatureRequestApi.md#signaturerequestcancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request |
| [**SignatureRequestCreateEmbedded**](SignatureRequestApi.md#signaturerequestcreateembedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request |
| [**SignatureRequestCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signaturerequestcreateembeddedwithtemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template |
| [**SignatureRequestEdit**](SignatureRequestApi.md#signaturerequestedit) | **PUT** /signature_request/edit/{signature_request_id} | Edit Signature Request |
| [**SignatureRequestEditEmbedded**](SignatureRequestApi.md#signaturerequesteditembedded) | **PUT** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request |
| [**SignatureRequestEditEmbeddedWithTemplate**](SignatureRequestApi.md#signaturerequesteditembeddedwithtemplate) | **PUT** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template |
| [**SignatureRequestEditWithTemplate**](SignatureRequestApi.md#signaturerequesteditwithtemplate) | **PUT** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template |
| [**SignatureRequestFiles**](SignatureRequestApi.md#signaturerequestfiles) | **GET** /signature_request/files/{signature_request_id} | Download Files |
| [**SignatureRequestFilesAsDataUri**](SignatureRequestApi.md#signaturerequestfilesasdatauri) | **GET** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri |
| [**SignatureRequestFilesAsFileUrl**](SignatureRequestApi.md#signaturerequestfilesasfileurl) | **GET** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url |
| [**SignatureRequestGet**](SignatureRequestApi.md#signaturerequestget) | **GET** /signature_request/{signature_request_id} | Get Signature Request |
| [**SignatureRequestList**](SignatureRequestApi.md#signaturerequestlist) | **GET** /signature_request/list | List Signature Requests |
| [**SignatureRequestReleaseHold**](SignatureRequestApi.md#signaturerequestreleasehold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request |
| [**SignatureRequestRemind**](SignatureRequestApi.md#signaturerequestremind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder |
| [**SignatureRequestRemove**](SignatureRequestApi.md#signaturerequestremove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access |
| [**SignatureRequestSend**](SignatureRequestApi.md#signaturerequestsend) | **POST** /signature_request/send | Send Signature Request |
| [**SignatureRequestSendWithTemplate**](SignatureRequestApi.md#signaturerequestsendwithtemplate) | **POST** /signature_request/send_with_template | Send with Template |
| [**SignatureRequestUpdate**](SignatureRequestApi.md#signaturerequestupdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request |

<a id="signaturerequestbulkcreateembeddedwithtemplate"></a>
# **SignatureRequestBulkCreateEmbeddedWithTemplate**
> BulkSendJobSendResponse SignatureRequestBulkCreateEmbeddedWithTemplate (SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest)

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Only available for Standard plan and higher.

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

public class SignatureRequestBulkCreateEmbeddedWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var signerList2CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "123 LLC"
        );

        var signerList2CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList2CustomFields1,
        };

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "Mary",
            emailAddress: "mary@example.com",
            pin: "gd9as5b"
        );

        var signerList2Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList2Signers1,
        };

        var signerList1CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "ABC Corp"
        );

        var signerList1CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList1CustomFields1,
        };

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com",
            pin: "d79a3td"
        );

        var signerList1Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList1Signers1,
        };

        var signerList1 = new SubBulkSignerList(
            customFields: signerList1CustomFields,
            signers: signerList1Signers
        );

        var signerList2 = new SubBulkSignerList(
            customFields: signerList2CustomFields,
            signers: signerList2Signers
        );

        var signerList = new List<SubBulkSignerList>
        {
            signerList1,
            signerList2,
        };

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var signatureRequestBulkCreateEmbeddedWithTemplateRequest = new SignatureRequestBulkCreateEmbeddedWithTemplateRequest(
            clientId: "1a659d9ad95bccd307ecad78d72192f8",
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signerList: signerList,
            ccs: ccs
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestBulkCreateEmbeddedWithTemplate(
                signatureRequestBulkCreateEmbeddedWithTemplateRequest: signatureRequestBulkCreateEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestBulkCreateEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Embedded Bulk Send with Template
    ApiResponse<BulkSendJobSendResponse> response = apiInstance.SignatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestBulkCreateEmbeddedWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestBulkCreateEmbeddedWithTemplateRequest** | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

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

<a id="signaturerequestbulksendwithtemplate"></a>
# **SignatureRequestBulkSendWithTemplate**
> BulkSendJobSendResponse SignatureRequestBulkSendWithTemplate (SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest)

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.  **NOTE:** Only available for Standard plan and higher.

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

public class SignatureRequestBulkSendWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signerList2CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "123 LLC"
        );

        var signerList2CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList2CustomFields1,
        };

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "Mary",
            emailAddress: "mary@example.com",
            pin: "gd9as5b"
        );

        var signerList2Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList2Signers1,
        };

        var signerList1CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "ABC Corp"
        );

        var signerList1CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList1CustomFields1,
        };

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com",
            pin: "d79a3td"
        );

        var signerList1Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList1Signers1,
        };

        var signerList1 = new SubBulkSignerList(
            customFields: signerList1CustomFields,
            signers: signerList1Signers
        );

        var signerList2 = new SubBulkSignerList(
            customFields: signerList2CustomFields,
            signers: signerList2Signers
        );

        var signerList = new List<SubBulkSignerList>
        {
            signerList1,
            signerList2,
        };

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var signatureRequestBulkSendWithTemplateRequest = new SignatureRequestBulkSendWithTemplateRequest(
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signerList: signerList,
            ccs: ccs
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestBulkSendWithTemplate(
                signatureRequestBulkSendWithTemplateRequest: signatureRequestBulkSendWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestBulkSendWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestBulkSendWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Bulk Send with Template
    ApiResponse<BulkSendJobSendResponse> response = apiInstance.SignatureRequestBulkSendWithTemplateWithHttpInfo(signatureRequestBulkSendWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestBulkSendWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestBulkSendWithTemplateRequest** | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

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

<a id="signaturerequestcancel"></a>
# **SignatureRequestCancel**
> void SignatureRequestCancel (string signatureRequestId)

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

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

public class SignatureRequestCancelExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            new SignatureRequestApi(config).SignatureRequestCancel(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestCancel: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestCancelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Cancel Incomplete Signature Request
    apiInstance.SignatureRequestCancelWithHttpInfo(signatureRequestId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestCancelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the incomplete SignatureRequest to cancel. |  |

### Return type

void (empty response body)

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

<a id="signaturerequestcreateembedded"></a>
# **SignatureRequestCreateEmbedded**
> SignatureRequestGetResponse SignatureRequestCreateEmbedded (SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest)

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

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

public class SignatureRequestCreateEmbeddedExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com",
            order: 1
        );

        var signers = new List<SubSignatureRequestSigner>
        {
            signers1,
            signers2,
        };

        var signatureRequestCreateEmbeddedRequest = new SignatureRequestCreateEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestCreateEmbedded(
                signatureRequestCreateEmbeddedRequest: signatureRequestCreateEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestCreateEmbeddedWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Embedded Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestCreateEmbeddedWithHttpInfo(signatureRequestCreateEmbeddedRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestCreateEmbeddedWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestCreateEmbeddedRequest** | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestcreateembeddedwithtemplate"></a>
# **SignatureRequestCreateEmbeddedWithTemplate**
> SignatureRequestGetResponse SignatureRequestCreateEmbeddedWithTemplate (SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest)

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

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

public class SignatureRequestCreateEmbeddedWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubSignatureRequestTemplateSigner>
        {
            signers1,
        };

        var signatureRequestCreateEmbeddedWithTemplateRequest = new SignatureRequestCreateEmbeddedWithTemplateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestCreateEmbeddedWithTemplate(
                signatureRequestCreateEmbeddedWithTemplateRequest: signatureRequestCreateEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestCreateEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestCreateEmbeddedWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Embedded Signature Request with Template
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestCreateEmbeddedWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestCreateEmbeddedWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestCreateEmbeddedWithTemplateRequest** | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestedit"></a>
# **SignatureRequestEdit**
> SignatureRequestGetResponse SignatureRequestEdit (string signatureRequestId, SignatureRequestEditRequest signatureRequestEditRequest)

Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.  **NOTE:** Edit and resend will not deduct your signature request quota.

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

public class SignatureRequestEditExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com",
            order: 1
        );

        var signers = new List<SubSignatureRequestSigner>
        {
            signers1,
            signers2,
        };

        var signatureRequestEditRequest = new SignatureRequestEditRequest(
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            metadata: JsonSerializer.Deserialize<Dictionary<string, object>>("""
                {
                    "custom_id": 1234,
                    "custom_text": "NDA #9"
                }
            """),
            fieldOptions: fieldOptions,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestEdit(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestEditRequest: signatureRequestEditRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestEdit: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestEditWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Edit Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestEditWithHttpInfo(signatureRequestId, signatureRequestEditRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestEditWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to edit. |  |
| **signatureRequestEditRequest** | [**SignatureRequestEditRequest**](SignatureRequestEditRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequesteditembedded"></a>
# **SignatureRequestEditEmbedded**
> SignatureRequestGetResponse SignatureRequestEditEmbedded (string signatureRequestId, SignatureRequestEditEmbeddedRequest signatureRequestEditEmbeddedRequest)

Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

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

public class SignatureRequestEditEmbeddedExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com",
            order: 1
        );

        var signers = new List<SubSignatureRequestSigner>
        {
            signers1,
            signers2,
        };

        var signatureRequestEditEmbeddedRequest = new SignatureRequestEditEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestEditEmbedded(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestEditEmbeddedRequest: signatureRequestEditEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestEditEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestEditEmbeddedWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Edit Embedded Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestEditEmbeddedWithHttpInfo(signatureRequestId, signatureRequestEditEmbeddedRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestEditEmbeddedWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to edit. |  |
| **signatureRequestEditEmbeddedRequest** | [**SignatureRequestEditEmbeddedRequest**](SignatureRequestEditEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequesteditembeddedwithtemplate"></a>
# **SignatureRequestEditEmbeddedWithTemplate**
> SignatureRequestGetResponse SignatureRequestEditEmbeddedWithTemplate (string signatureRequestId, SignatureRequestEditEmbeddedWithTemplateRequest signatureRequestEditEmbeddedWithTemplateRequest)

Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

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

public class SignatureRequestEditEmbeddedWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubSignatureRequestTemplateSigner>
        {
            signers1,
        };

        var signatureRequestEditEmbeddedWithTemplateRequest = new SignatureRequestEditEmbeddedWithTemplateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestEditEmbeddedWithTemplate(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestEditEmbeddedWithTemplateRequest: signatureRequestEditEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestEditEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestEditEmbeddedWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Edit Embedded Signature Request with Template
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestEditEmbeddedWithTemplateWithHttpInfo(signatureRequestId, signatureRequestEditEmbeddedWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestEditEmbeddedWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to edit. |  |
| **signatureRequestEditEmbeddedWithTemplateRequest** | [**SignatureRequestEditEmbeddedWithTemplateRequest**](SignatureRequestEditEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequesteditwithtemplate"></a>
# **SignatureRequestEditWithTemplate**
> SignatureRequestGetResponse SignatureRequestEditWithTemplate (string signatureRequestId, SignatureRequestEditWithTemplateRequest signatureRequestEditWithTemplateRequest)

Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.  **NOTE:** Edit and resend will not deduct your signature request quota.

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

public class SignatureRequestEditWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubSignatureRequestTemplateSigner>
        {
            signers1,
        };

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var customFields1 = new SubCustomField(
            name: "Cost",
            editor: "Client",
            required: true,
            value: "$20,000"
        );

        var customFields = new List<SubCustomField>
        {
            customFields1,
        };

        var signatureRequestEditWithTemplateRequest = new SignatureRequestEditWithTemplateRequest(
            templateIds: [
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers,
            ccs: ccs,
            customFields: customFields
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestEditWithTemplate(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestEditWithTemplateRequest: signatureRequestEditWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestEditWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestEditWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Edit Signature Request With Template
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestEditWithTemplateWithHttpInfo(signatureRequestId, signatureRequestEditWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestEditWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to edit. |  |
| **signatureRequestEditWithTemplateRequest** | [**SignatureRequestEditWithTemplateRequest**](SignatureRequestEditWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestfiles"></a>
# **SignatureRequestFiles**
> System.IO.Stream SignatureRequestFiles (string signatureRequestId, string? fileType = null)

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead.

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

public class SignatureRequestFilesExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestFiles(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                fileType: "pdf"
            );
            var fileStream = File.Create("./file_response");
            response.Seek(0, SeekOrigin.Begin);
            response.CopyTo(fileStream);
            fileStream.Close();
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestFiles: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Download Files
    ApiResponse<System.IO.Stream> response = apiInstance.SignatureRequestFilesWithHttpInfo(signatureRequestId, fileType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. |  |
| **fileType** | **string?** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] [default to pdf] |

### Return type

**System.IO.Stream**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/zip, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="signaturerequestfilesasdatauri"></a>
# **SignatureRequestFilesAsDataUri**
> FileResponseDataUri SignatureRequestFilesAsDataUri (string signatureRequestId)

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

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

public class SignatureRequestFilesAsDataUriExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestFilesAsDataUri(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestFilesAsDataUri: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestFilesAsDataUriWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Download Files as Data Uri
    ApiResponse<FileResponseDataUri> response = apiInstance.SignatureRequestFilesAsDataUriWithHttpInfo(signatureRequestId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestFilesAsDataUriWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

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

<a id="signaturerequestfilesasfileurl"></a>
# **SignatureRequestFilesAsFileUrl**
> FileResponse SignatureRequestFilesAsFileUrl (string signatureRequestId, int? forceDownload = null)

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

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

public class SignatureRequestFilesAsFileUrlExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestFilesAsFileUrl(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                forceDownload: 1
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestFilesAsFileUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestFilesAsFileUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Download Files as File Url
    ApiResponse<FileResponse> response = apiInstance.SignatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId, forceDownload);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestFilesAsFileUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. |  |
| **forceDownload** | **int?** | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional] [default to 1] |

### Return type

[**FileResponse**](FileResponse.md)

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

<a id="signaturerequestget"></a>
# **SignatureRequestGet**
> SignatureRequestGetResponse SignatureRequestGet (string signatureRequestId)

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

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

public class SignatureRequestGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestGet(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestGet: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestGetWithHttpInfo(signatureRequestId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestlist"></a>
# **SignatureRequestList**
> SignatureRequestListResponse SignatureRequestList (string? accountId = null, int? page = null, int? pageSize = null, string? query = null)

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

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

public class SignatureRequestListExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestList(
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestList: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Signature Requests
    ApiResponse<SignatureRequestListResponse> response = apiInstance.SignatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **accountId** | **string?** | Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional]  |
| **page** | **int?** | Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string?** | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional]  |

### Return type

[**SignatureRequestListResponse**](SignatureRequestListResponse.md)

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

<a id="signaturerequestreleasehold"></a>
# **SignatureRequestReleaseHold**
> SignatureRequestGetResponse SignatureRequestReleaseHold (string signatureRequestId)

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

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

public class SignatureRequestReleaseHoldExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestReleaseHold(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestReleaseHold: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestReleaseHoldWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Release On-Hold Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestReleaseHoldWithHttpInfo(signatureRequestId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestReleaseHoldWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to release. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestremind"></a>
# **SignatureRequestRemind**
> SignatureRequestGetResponse SignatureRequestRemind (string signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest)

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE:** This action can **not** be used with embedded signature requests.

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

public class SignatureRequestRemindExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signatureRequestRemindRequest = new SignatureRequestRemindRequest(
            emailAddress: "john@example.com"
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestRemind(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestRemindRequest: signatureRequestRemindRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestRemind: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestRemindWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Request Reminder
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestRemindWithHttpInfo(signatureRequestId, signatureRequestRemindRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestRemindWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to send a reminder for. |  |
| **signatureRequestRemindRequest** | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestremove"></a>
# **SignatureRequestRemove**
> void SignatureRequestRemove (string signatureRequestId)

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

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

public class SignatureRequestRemoveExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            new SignatureRequestApi(config).SignatureRequestRemove(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestRemove: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestRemoveWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove Signature Request Access
    apiInstance.SignatureRequestRemoveWithHttpInfo(signatureRequestId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestRemoveWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to remove. |  |

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

<a id="signaturerequestsend"></a>
# **SignatureRequestSend**
> SignatureRequestGetResponse SignatureRequestSend (SignatureRequestSendRequest signatureRequestSendRequest)

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

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

public class SignatureRequestSendExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com",
            order: 1
        );

        var signers = new List<SubSignatureRequestSigner>
        {
            signers1,
            signers2,
        };

        var signatureRequestSendRequest = new SignatureRequestSendRequest(
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            metadata: JsonSerializer.Deserialize<Dictionary<string, object>>("""
                {
                    "custom_id": 1234,
                    "custom_text": "NDA #9"
                }
            """),
            fieldOptions: fieldOptions,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestSend(
                signatureRequestSendRequest: signatureRequestSendRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestSend: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestSendWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestSendWithHttpInfo(signatureRequestSendRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestSendWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestSendRequest** | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestsendwithtemplate"></a>
# **SignatureRequestSendWithTemplate**
> SignatureRequestGetResponse SignatureRequestSendWithTemplate (SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest)

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

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

public class SignatureRequestSendWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubSignatureRequestTemplateSigner>
        {
            signers1,
        };

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var customFields1 = new SubCustomField(
            name: "Cost",
            editor: "Client",
            required: true,
            value: "$20,000"
        );

        var customFields = new List<SubCustomField>
        {
            customFields1,
        };

        var signatureRequestSendWithTemplateRequest = new SignatureRequestSendWithTemplateRequest(
            templateIds: [
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers,
            ccs: ccs,
            customFields: customFields
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestSendWithTemplate(
                signatureRequestSendWithTemplateRequest: signatureRequestSendWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestSendWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestSendWithTemplateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Send with Template
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestSendWithTemplateWithHttpInfo(signatureRequestSendWithTemplateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestSendWithTemplateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestSendWithTemplateRequest** | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

<a id="signaturerequestupdate"></a>
# **SignatureRequestUpdate**
> SignatureRequestGetResponse SignatureRequestUpdate (string signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest)

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.  Updating the email address of a signer will generate a new `signature_id` value.  **NOTE:** This action cannot be performed on a signature request with an appended signature page.

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

public class SignatureRequestUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signatureRequestUpdateRequest = new SignatureRequestUpdateRequest(
            signatureId: "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
            emailAddress: "john@example.com"
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestUpdate(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestUpdateRequest: signatureRequestUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the SignatureRequestUpdateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Signature Request
    ApiResponse<SignatureRequestGetResponse> response = apiInstance.SignatureRequestUpdateWithHttpInfo(signatureRequestId, signatureRequestUpdateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SignatureRequestApi.SignatureRequestUpdateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **signatureRequestId** | **string** | The id of the SignatureRequest to update. |  |
| **signatureRequestUpdateRequest** | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

