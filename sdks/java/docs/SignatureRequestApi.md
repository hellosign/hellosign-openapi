# SignatureRequestApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**signatureRequestBulkCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signatureRequestBulkCreateEmbeddedWithTemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template
[**signatureRequestBulkSendWithTemplate**](SignatureRequestApi.md#signatureRequestBulkSendWithTemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template
[**signatureRequestCancel**](SignatureRequestApi.md#signatureRequestCancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request
[**signatureRequestCreateEmbedded**](SignatureRequestApi.md#signatureRequestCreateEmbedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request
[**signatureRequestCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signatureRequestCreateEmbeddedWithTemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template
[**signatureRequestFiles**](SignatureRequestApi.md#signatureRequestFiles) | **GET** /signature_request/files/{signature_request_id} | Download Files
[**signatureRequestFilesAsDataUri**](SignatureRequestApi.md#signatureRequestFilesAsDataUri) | **GET** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri
[**signatureRequestFilesAsFileUrl**](SignatureRequestApi.md#signatureRequestFilesAsFileUrl) | **GET** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url
[**signatureRequestGet**](SignatureRequestApi.md#signatureRequestGet) | **GET** /signature_request/{signature_request_id} | Get Signature Request
[**signatureRequestList**](SignatureRequestApi.md#signatureRequestList) | **GET** /signature_request/list | List Signature Requests
[**signatureRequestReleaseHold**](SignatureRequestApi.md#signatureRequestReleaseHold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request
[**signatureRequestRemind**](SignatureRequestApi.md#signatureRequestRemind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder
[**signatureRequestRemove**](SignatureRequestApi.md#signatureRequestRemove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access
[**signatureRequestSend**](SignatureRequestApi.md#signatureRequestSend) | **POST** /signature_request/send | Send Signature Request
[**signatureRequestSendWithTemplate**](SignatureRequestApi.md#signatureRequestSendWithTemplate) | **POST** /signature_request/send_with_template | Send with Template
[**signatureRequestUpdate**](SignatureRequestApi.md#signatureRequestUpdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request



## signatureRequestBulkCreateEmbeddedWithTemplate

> BulkSendJobSendResponse signatureRequestBulkCreateEmbeddedWithTemplate(signatureRequestBulkCreateEmbeddedWithTemplateRequest)

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE**: Only available for Standard plan and higher.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestTemplateSigner signerList1Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com")
            .pin("d79a3td");

        SubBulkSignerListCustomField signerList1CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("ABC Corp");

        SubBulkSignerList signerList1 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList1Signer))
            .customFields(Arrays.asList(signerList1CustomFields));

        SubSignatureRequestTemplateSigner signerList2Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("Mary")
            .emailAddress("mary@example.com")
            .pin("gd9as5b");

        SubBulkSignerListCustomField signerList2CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("123 Corp");

        SubBulkSignerList signerList2 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList2Signer))
            .customFields(Arrays.asList(signerList2CustomFields));

        SubCC cc1 = new SubCC().role("Accounting")
            .emailAddress("accouting@email.com");

        SignatureRequestBulkCreateEmbeddedWithTemplateRequest data = new SignatureRequestBulkCreateEmbeddedWithTemplateRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signerList(Arrays.asList(signerList1, signerList2))
            .ccs(Arrays.asList(cc1))
            .testMode(true);

        try {
            BulkSendJobSendResponse result = api.signatureRequestBulkCreateEmbeddedWithTemplate(data);
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
 **signatureRequestBulkCreateEmbeddedWithTemplateRequest** | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md)|  |

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


## signatureRequestBulkSendWithTemplate

> BulkSendJobSendResponse signatureRequestBulkSendWithTemplate(signatureRequestBulkSendWithTemplateRequest)

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.

**NOTE**: Only available for Standard plan and higher.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestTemplateSigner signerList1Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com")
            .pin("d79a3td");

        SubBulkSignerListCustomField signerList1CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("ABC Corp");

        SubBulkSignerList signerList1 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList1Signer))
            .customFields(Arrays.asList(signerList1CustomFields));

        SubSignatureRequestTemplateSigner signerList2Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("Mary")
            .emailAddress("mary@example.com")
            .pin("gd9as5b");

        SubBulkSignerListCustomField signerList2CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("123 Corp");

        SubBulkSignerList signerList2 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList2Signer))
            .customFields(Arrays.asList(signerList2CustomFields));

        SubCC cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@email.com");

        SignatureRequestBulkSendWithTemplateRequest data = new SignatureRequestBulkSendWithTemplateRequest()
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signerList(Arrays.asList(signerList1, signerList2))
            .ccs(Arrays.asList(cc1))
            .testMode(true);

        try {
            BulkSendJobSendResponse result = api.signatureRequestBulkSendWithTemplate(data);
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
 **signatureRequestBulkSendWithTemplateRequest** | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md)|  |

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


## signatureRequestCancel

> signatureRequestCancel(signatureRequestId)

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.

The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.

This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a  [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.

To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.

**NOTE**: To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        try {
            api.signatureRequestCancel(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the incomplete SignatureRequest to cancel. |

### Return type

null (empty response body)

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


## signatureRequestCreateEmbedded

> SignatureRequestGetResponse signatureRequestCreateEmbedded(signatureRequestCreateEmbeddedRequest)

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. <u>Note</u> that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.io.File;
import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestSigner signer1 = new SubSignatureRequestSigner()
            .emailAddress("jack@example.com")
            .name("Jack")
            .order(0);

        SubSignatureRequestSigner signer2 = new SubSignatureRequestSigner()
            .emailAddress("jill@example.com")
            .name("Jill")
            .order(1);

        SubSigningOptions signingOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(true)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestCreateEmbeddedRequest data = new SignatureRequestCreateEmbeddedRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .title("NDA with Acme Co.")
            .subject("The NDA we talked about")
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(Arrays.asList(signer1, signer2))
            .ccEmailAddresses(Arrays.asList("lawyer@hellosign.com", "lawyer@example.com"))
            .addFileItem(new File("example_signature_request.pdf"));
            .signingOptions(signingOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestCreateEmbedded(data);
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
 **signatureRequestCreateEmbeddedRequest** | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md)|  |

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


## signatureRequestCreateEmbeddedWithTemplate

> SignatureRequestGetResponse signatureRequestCreateEmbeddedWithTemplate(signatureRequestCreateEmbeddedWithTemplateRequest)

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. <u>Note</u> that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```java
public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestTemplateSigner signer1 = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George");

        SubSigningOptions subSigningOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestCreateEmbeddedWithTemplateRequest data = new SignatureRequestCreateEmbeddedWithTemplateRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signers(Arrays.asList(signer1))
            .signingOptions(subSigningOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestCreateEmbeddedWithTemplate(data);
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
 **signatureRequestCreateEmbeddedWithTemplateRequest** | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md)|  |

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


## signatureRequestFiles

> File signatureRequestFiles(signatureRequestId, fileType)

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.io.File;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            File result = api.signatureRequestFiles(signatureRequestId, "pdf");
            result.renameTo(new File("file_response.pdf"));
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to retrieve. |
 **fileType** | **String**| Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] [default to pdf] [enum: pdf, zip]

### Return type

[**File**](File.md)

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


## signatureRequestFilesAsDataUri

> FileResponseDataUri signatureRequestFilesAsDataUri(signatureRequestId)

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            FileResponseDataUri result = api.signatureRequestFilesAsDataUri(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to retrieve. |

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


## signatureRequestFilesAsFileUrl

> FileResponse signatureRequestFilesAsFileUrl(signatureRequestId)

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            FileResponse result = api.signatureRequestFilesAsFileUrl(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to retrieve. |

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


## signatureRequestGet

> SignatureRequestGetResponse signatureRequestGet(signatureRequestId)

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            SignatureRequestGetResponse result = api.signatureRequestGet(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to retrieve. |

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


## signatureRequestList

> SignatureRequestListResponse signatureRequestList(accountId, page, pageSize, query)

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.

Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String accountId = "accountId";

        try {
            SignatureRequestListResponse result = api.signatureRequestList(accountId, 1, 20, null);
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
 **accountId** | **String**| Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional]
 **page** | **Integer**| Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional] [default to 1]
 **pageSize** | **Integer**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20]
 **query** | **String**| String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional]

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


## signatureRequestReleaseHold

> SignatureRequestGetResponse signatureRequestReleaseHold(signatureRequestId)

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        try {
            SignatureRequestGetResponse result = api.signatureRequestReleaseHold(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to release. |

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


## signatureRequestRemind

> SignatureRequestGetResponse signatureRequestRemind(signatureRequestId, signatureRequestRemindRequest)

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.

**NOTE**: This action can **not** be used with embedded signature requests.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        SignatureRequestRemindRequest data = new SignatureRequestRemindRequest()
            .emailAddress("john@example.com");

        try {
            SignatureRequestGetResponse result = api.signatureRequestRemind(signatureRequestId, data);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to send a reminder for. |
 **signatureRequestRemindRequest** | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md)|  |

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


## signatureRequestRemove

> signatureRequestRemove(signatureRequestId)

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.

The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).

Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        try {
            api.signatureRequestRemove(signatureRequestId);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to remove. |

### Return type

null (empty response body)

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


## signatureRequestSend

> SignatureRequestGetResponse signatureRequestSend(signatureRequestSendRequest)

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestSigner signer1 = new SubSignatureRequestSigner()
            .emailAddress("jack@example.com")
            .name("Jack")
            .order(0);

        SubSignatureRequestSigner signer2 = new SubSignatureRequestSigner()
            .emailAddress("jill@example.com")
            .name("Jill")
            .order(1);

        SubSigningOptions signingOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(true)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SubFieldOptions subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DDMMYYYY);

        SignatureRequestSendRequest data = new SignatureRequestSendRequest()
            .title("NDA with Acme Co.")
            .subject("The NDA we talked about")
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(List.of(signer1, signer2))
            .ccEmailAddresses(List.of("lawyer@hellosign.com", "lawyer@example.com"))
            .addFileItem(new File("example_signature_request.pdf"));
            .metadata(Map.of("custom_id", 1234, "custom_text", "NDA #9"))
            .signingOptions(signingOptions)
            .fieldOptions(subFieldOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestSend(data);
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
 **signatureRequestSendRequest** | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md)|  |

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


## signatureRequestSendWithTemplate

> SignatureRequestGetResponse signatureRequestSendWithTemplate(signatureRequestSendWithTemplateRequest)

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestTemplateSigner signer1 = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .emailAddress("george@example.com")
            .name("George");

        SubCC cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@emaple.com");

        SubCustomField customField1 = new SubCustomField()
            .name("Cost")
            .value("$20,000")
            .editor("Client")
            .required(true);

        SubSigningOptions signingOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestSendWithTemplateRequest data = new SignatureRequestSendWithTemplateRequest()
            .templateIds(List.of("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signers(List.of(signer1))
            .ccs(List.of(cc1))
            .customFields(List.of(customField1))
            .signingOptions(signingOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestSendWithTemplate(data);
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
 **signatureRequestSendWithTemplateRequest** | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md)|  |

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


## signatureRequestUpdate

> SignatureRequestGetResponse signatureRequestUpdate(signatureRequestId, signatureRequestUpdateRequest)

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.

**NOTE**: This action cannot be performed on a signature request with an appended signature page.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        String signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        SignatureRequestUpdateRequest data = new SignatureRequestUpdateRequest()
            .emailAddress("john@example.com")
            .signatureId("78caf2a1d01cd39cea2bc1cbb340dac3");

        try {
            SignatureRequestGetResponse result = api.signatureRequestUpdate(signatureRequestId, data);
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
 **signatureRequestId** | **String**| The id of the SignatureRequest to update. |
 **signatureRequestUpdateRequest** | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md)|  |

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

