# Dropbox.Sign.Api.TemplateApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**TemplateAddUser**](TemplateApi.md#templateadduser) | **POST** /template/add_user/{template_id} | Add User to Template |
| [**TemplateCreate**](TemplateApi.md#templatecreate) | **POST** /template/create | Create Template |
| [**TemplateCreateEmbeddedDraft**](TemplateApi.md#templatecreateembeddeddraft) | **POST** /template/create_embedded_draft | Create Embedded Template Draft |
| [**TemplateDelete**](TemplateApi.md#templatedelete) | **POST** /template/delete/{template_id} | Delete Template |
| [**TemplateFiles**](TemplateApi.md#templatefiles) | **GET** /template/files/{template_id} | Get Template Files |
| [**TemplateFilesAsDataUri**](TemplateApi.md#templatefilesasdatauri) | **GET** /template/files_as_data_uri/{template_id} | Get Template Files as Data Uri |
| [**TemplateFilesAsFileUrl**](TemplateApi.md#templatefilesasfileurl) | **GET** /template/files_as_file_url/{template_id} | Get Template Files as File Url |
| [**TemplateGet**](TemplateApi.md#templateget) | **GET** /template/{template_id} | Get Template |
| [**TemplateList**](TemplateApi.md#templatelist) | **GET** /template/list | List Templates |
| [**TemplateRemoveUser**](TemplateApi.md#templateremoveuser) | **POST** /template/remove_user/{template_id} | Remove User from Template |
| [**TemplateUpdateFiles**](TemplateApi.md#templateupdatefiles) | **POST** /template/update_files/{template_id} | Update Template Files |

<a id="templateadduser"></a>
# **TemplateAddUser**
> TemplateGetResponse TemplateAddUser (string templateId, TemplateAddUserRequest templateAddUserRequest)

Add User to Template

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

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

public class TemplateAddUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var templateAddUserRequest = new TemplateAddUserRequest(
            emailAddress: "george@dropboxsign.com"
        );

        try
        {
            var response = new TemplateApi(config).TemplateAddUser(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateAddUserRequest: templateAddUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateAddUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateAddUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add User to Template
    ApiResponse<TemplateGetResponse> response = apiInstance.TemplateAddUserWithHttpInfo(templateId, templateAddUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateAddUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the Template to give the Account access to. |  |
| **templateAddUserRequest** | [**TemplateAddUserRequest**](TemplateAddUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

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

<a id="templatecreate"></a>
# **TemplateCreate**
> TemplateCreateResponse TemplateCreate (TemplateCreateRequest templateCreateRequest)

Create Template

Creates a template that can then be used.

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

public class TemplateCreateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

        var signerRoles1 = new SubTemplateRole(
            name: "Client",
            order: 0
        );

        var signerRoles2 = new SubTemplateRole(
            name: "Witness",
            order: 1
        );

        var signerRoles = new List<SubTemplateRole>
        {
            signerRoles1,
            signerRoles2,
        };

        var formFieldsPerDocument1 = new SubFormFieldsPerDocumentText(
            documentIndex: 0,
            apiId: "uniqueIdHere_1",
            type: "text",
            required: true,
            signer: "1",
            width: 100,
            height: 16,
            x: 112,
            y: 328,
            name: "",
            page: 1,
            placeholder: "",
            validationType: SubFormFieldsPerDocumentText.ValidationTypeEnum.NumbersOnly
        );

        var formFieldsPerDocument2 = new SubFormFieldsPerDocumentSignature(
            documentIndex: 0,
            apiId: "uniqueIdHere_2",
            type: "signature",
            required: true,
            signer: "0",
            width: 120,
            height: 30,
            x: 530,
            y: 415,
            name: "",
            page: 1
        );

        var formFieldsPerDocument = new List<SubFormFieldsPerDocumentBase>
        {
            formFieldsPerDocument1,
            formFieldsPerDocument2,
        };

        var mergeFields1 = new SubMergeField(
            name: "Full Name",
            type: SubMergeField.TypeEnum.Text
        );

        var mergeFields2 = new SubMergeField(
            name: "Is Registered?",
            type: SubMergeField.TypeEnum.Checkbox
        );

        var mergeFields = new List<SubMergeField>
        {
            mergeFields1,
            mergeFields2,
        };

        var templateCreateRequest = new TemplateCreateRequest(
            clientId: "37dee8d8440c66d54cfa05d92c160882",
            message: "For your approval",
            subject: "Please sign this document",
            testMode: true,
            title: "Test Template",
            ccRoles: [
                "Manager",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            fieldOptions: fieldOptions,
            signerRoles: signerRoles,
            formFieldsPerDocument: formFieldsPerDocument,
            mergeFields: mergeFields
        );

        try
        {
            var response = new TemplateApi(config).TemplateCreate(
                templateCreateRequest: templateCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Template
    ApiResponse<TemplateCreateResponse> response = apiInstance.TemplateCreateWithHttpInfo(templateCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateCreateRequest** | [**TemplateCreateRequest**](TemplateCreateRequest.md) |  |  |

### Return type

[**TemplateCreateResponse**](TemplateCreateResponse.md)

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

<a id="templatecreateembeddeddraft"></a>
# **TemplateCreateEmbeddedDraft**
> TemplateCreateEmbeddedDraftResponse TemplateCreateEmbeddedDraft (TemplateCreateEmbeddedDraftRequest templateCreateEmbeddedDraftRequest)

Create Embedded Template Draft

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

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

public class TemplateCreateEmbeddedDraftExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

        var mergeFields1 = new SubMergeField(
            name: "Full Name",
            type: SubMergeField.TypeEnum.Text
        );

        var mergeFields2 = new SubMergeField(
            name: "Is Registered?",
            type: SubMergeField.TypeEnum.Checkbox
        );

        var mergeFields = new List<SubMergeField>
        {
            mergeFields1,
            mergeFields2,
        };

        var signerRoles1 = new SubTemplateRole(
            name: "Client",
            order: 0
        );

        var signerRoles2 = new SubTemplateRole(
            name: "Witness",
            order: 1
        );

        var signerRoles = new List<SubTemplateRole>
        {
            signerRoles1,
            signerRoles2,
        };

        var templateCreateEmbeddedDraftRequest = new TemplateCreateEmbeddedDraftRequest(
            clientId: "37dee8d8440c66d54cfa05d92c160882",
            message: "For your approval",
            subject: "Please sign this document",
            testMode: true,
            title: "Test Template",
            ccRoles: [
                "Manager",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            fieldOptions: fieldOptions,
            mergeFields: mergeFields,
            signerRoles: signerRoles
        );

        try
        {
            var response = new TemplateApi(config).TemplateCreateEmbeddedDraft(
                templateCreateEmbeddedDraftRequest: templateCreateEmbeddedDraftRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateCreateEmbeddedDraft: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateCreateEmbeddedDraftWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create Embedded Template Draft
    ApiResponse<TemplateCreateEmbeddedDraftResponse> response = apiInstance.TemplateCreateEmbeddedDraftWithHttpInfo(templateCreateEmbeddedDraftRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateCreateEmbeddedDraftWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateCreateEmbeddedDraftRequest** | [**TemplateCreateEmbeddedDraftRequest**](TemplateCreateEmbeddedDraftRequest.md) |  |  |

### Return type

[**TemplateCreateEmbeddedDraftResponse**](TemplateCreateEmbeddedDraftResponse.md)

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

<a id="templatedelete"></a>
# **TemplateDelete**
> void TemplateDelete (string templateId)

Delete Template

Completely deletes the template specified from the account.

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

public class TemplateDeleteExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            new TemplateApi(config).TemplateDelete(
                templateId: "f57db65d3f933b5316d398057a36176831451a35"
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateDelete: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateDeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Template
    apiInstance.TemplateDeleteWithHttpInfo(templateId);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateDeleteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the Template to delete. |  |

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

<a id="templatefiles"></a>
# **TemplateFiles**
> System.IO.Stream TemplateFiles (string templateId, string? fileType = null)

Get Template Files

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

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

public class TemplateFilesExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TemplateApi(config).TemplateFiles(
                templateId: "f57db65d3f933b5316d398057a36176831451a35"
            );
            var fileStream = File.Create("./file_response");
            response.Seek(0, SeekOrigin.Begin);
            response.CopyTo(fileStream);
            fileStream.Close();
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateFiles: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Template Files
    ApiResponse<System.IO.Stream> response = apiInstance.TemplateFilesWithHttpInfo(templateId, fileType);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the template files to retrieve. |  |
| **fileType** | **string?** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional]  |

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

<a id="templatefilesasdatauri"></a>
# **TemplateFilesAsDataUri**
> FileResponseDataUri TemplateFilesAsDataUri (string templateId)

Get Template Files as Data Uri

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

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

public class TemplateFilesAsDataUriExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TemplateApi(config).TemplateFilesAsDataUri(
                templateId: "f57db65d3f933b5316d398057a36176831451a35"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateFilesAsDataUri: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateFilesAsDataUriWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Template Files as Data Uri
    ApiResponse<FileResponseDataUri> response = apiInstance.TemplateFilesAsDataUriWithHttpInfo(templateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateFilesAsDataUriWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the template files to retrieve. |  |

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

<a id="templatefilesasfileurl"></a>
# **TemplateFilesAsFileUrl**
> FileResponse TemplateFilesAsFileUrl (string templateId, int? forceDownload = null)

Get Template Files as File Url

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

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

public class TemplateFilesAsFileUrlExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TemplateApi(config).TemplateFilesAsFileUrl(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                forceDownload: 1
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateFilesAsFileUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateFilesAsFileUrlWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Template Files as File Url
    ApiResponse<FileResponse> response = apiInstance.TemplateFilesAsFileUrlWithHttpInfo(templateId, forceDownload);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateFilesAsFileUrlWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the template files to retrieve. |  |
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

<a id="templateget"></a>
# **TemplateGet**
> TemplateGetResponse TemplateGet (string templateId)

Get Template

Returns the Template specified by the `template_id` parameter.

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

public class TemplateGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TemplateApi(config).TemplateGet(
                templateId: "f57db65d3f933b5316d398057a36176831451a35"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateGet: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Template
    ApiResponse<TemplateGetResponse> response = apiInstance.TemplateGetWithHttpInfo(templateId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the Template to retrieve. |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

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

<a id="templatelist"></a>
# **TemplateList**
> TemplateListResponse TemplateList (string? accountId = null, int? page = null, int? pageSize = null, string? query = null)

List Templates

Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

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

public class TemplateListExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TemplateApi(config).TemplateList(
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateList: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Templates
    ApiResponse<TemplateListResponse> response = apiInstance.TemplateListWithHttpInfo(accountId, page, pageSize, query);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **accountId** | **string?** | Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional]  |
| **page** | **int?** | Which page number of the Template List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string?** | String that includes search terms and/or fields to be used to filter the Template objects. | [optional]  |

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

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

<a id="templateremoveuser"></a>
# **TemplateRemoveUser**
> TemplateGetResponse TemplateRemoveUser (string templateId, TemplateRemoveUserRequest templateRemoveUserRequest)

Remove User from Template

Removes the specified Account's access to the specified Template.

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

public class TemplateRemoveUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var templateRemoveUserRequest = new TemplateRemoveUserRequest(
            emailAddress: "george@dropboxsign.com"
        );

        try
        {
            var response = new TemplateApi(config).TemplateRemoveUser(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateRemoveUserRequest: templateRemoveUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateRemoveUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateRemoveUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove User from Template
    ApiResponse<TemplateGetResponse> response = apiInstance.TemplateRemoveUserWithHttpInfo(templateId, templateRemoveUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateRemoveUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The id of the Template to remove the Account&#39;s access to. |  |
| **templateRemoveUserRequest** | [**TemplateRemoveUserRequest**](TemplateRemoveUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

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

<a id="templateupdatefiles"></a>
# **TemplateUpdateFiles**
> TemplateUpdateFilesResponse TemplateUpdateFiles (string templateId, TemplateUpdateFilesRequest templateUpdateFilesRequest)

Update Template Files

Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

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

public class TemplateUpdateFilesExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var templateUpdateFilesRequest = new TemplateUpdateFilesRequest(
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
            var response = new TemplateApi(config).TemplateUpdateFiles(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateUpdateFilesRequest: templateUpdateFilesRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateUpdateFiles: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the TemplateUpdateFilesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update Template Files
    ApiResponse<TemplateUpdateFilesResponse> response = apiInstance.TemplateUpdateFilesWithHttpInfo(templateId, templateUpdateFilesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TemplateApi.TemplateUpdateFilesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **templateId** | **string** | The ID of the template whose files to update. |  |
| **templateUpdateFilesRequest** | [**TemplateUpdateFilesRequest**](TemplateUpdateFilesRequest.md) |  |  |

### Return type

[**TemplateUpdateFilesResponse**](TemplateUpdateFilesResponse.md)

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

