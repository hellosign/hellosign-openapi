# SignatureRequestApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**signatureRequestBulkCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signatureRequestBulkCreateEmbeddedWithTemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template
[**signatureRequestBulkSendWithTemplate**](SignatureRequestApi.md#signatureRequestBulkSendWithTemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template
[**signatureRequestCancel**](SignatureRequestApi.md#signatureRequestCancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request
[**signatureRequestCreateEmbedded**](SignatureRequestApi.md#signatureRequestCreateEmbedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request
[**signatureRequestCreateEmbeddedWithTemplate**](SignatureRequestApi.md#signatureRequestCreateEmbeddedWithTemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template
[**signatureRequestEdit**](SignatureRequestApi.md#signatureRequestEdit) | **PUT** /signature_request/edit/{signature_request_id} | Edit Signature Request
[**signatureRequestEditEmbedded**](SignatureRequestApi.md#signatureRequestEditEmbedded) | **PUT** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request
[**signatureRequestEditEmbeddedWithTemplate**](SignatureRequestApi.md#signatureRequestEditEmbeddedWithTemplate) | **PUT** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template
[**signatureRequestEditWithTemplate**](SignatureRequestApi.md#signatureRequestEditWithTemplate) | **PUT** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template
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

**NOTE:** Only available for Standard plan and higher.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestBulkCreateEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var signerList2CustomFields1 = new SubBulkSignerListCustomField();
        signerList2CustomFields1.name("company");
        signerList2CustomFields1.value("123 LLC");

        var signerList2CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList2CustomFields1
        ));

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner();
        signerList2Signers1.role("Client");
        signerList2Signers1.name("Mary");
        signerList2Signers1.emailAddress("mary@example.com");
        signerList2Signers1.pin("gd9as5b");

        var signerList2Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList2Signers1
        ));

        var signerList1CustomFields1 = new SubBulkSignerListCustomField();
        signerList1CustomFields1.name("company");
        signerList1CustomFields1.value("ABC Corp");

        var signerList1CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList1CustomFields1
        ));

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner();
        signerList1Signers1.role("Client");
        signerList1Signers1.name("George");
        signerList1Signers1.emailAddress("george@example.com");
        signerList1Signers1.pin("d79a3td");

        var signerList1Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList1Signers1
        ));

        var signerList1 = new SubBulkSignerList();
        signerList1.customFields(signerList1CustomFields);
        signerList1.signers(signerList1Signers);

        var signerList2 = new SubBulkSignerList();
        signerList2.customFields(signerList2CustomFields);
        signerList2.signers(signerList2Signers);

        var signerList = new ArrayList<SubBulkSignerList>(List.of (
            signerList1,
            signerList2
        ));

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var signatureRequestBulkCreateEmbeddedWithTemplateRequest = new SignatureRequestBulkCreateEmbeddedWithTemplateRequest();
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.clientId("1a659d9ad95bccd307ecad78d72192f8");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.signerList(signerList);
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.ccs(ccs);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestBulkCreateEmbeddedWithTemplate(
                signatureRequestBulkCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

**NOTE:** Only available for Standard plan and higher.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestBulkSendWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signerList2CustomFields1 = new SubBulkSignerListCustomField();
        signerList2CustomFields1.name("company");
        signerList2CustomFields1.value("123 LLC");

        var signerList2CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList2CustomFields1
        ));

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner();
        signerList2Signers1.role("Client");
        signerList2Signers1.name("Mary");
        signerList2Signers1.emailAddress("mary@example.com");
        signerList2Signers1.pin("gd9as5b");

        var signerList2Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList2Signers1
        ));

        var signerList1CustomFields1 = new SubBulkSignerListCustomField();
        signerList1CustomFields1.name("company");
        signerList1CustomFields1.value("ABC Corp");

        var signerList1CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList1CustomFields1
        ));

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner();
        signerList1Signers1.role("Client");
        signerList1Signers1.name("George");
        signerList1Signers1.emailAddress("george@example.com");
        signerList1Signers1.pin("d79a3td");

        var signerList1Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList1Signers1
        ));

        var signerList1 = new SubBulkSignerList();
        signerList1.customFields(signerList1CustomFields);
        signerList1.signers(signerList1Signers);

        var signerList2 = new SubBulkSignerList();
        signerList2.customFields(signerList2CustomFields);
        signerList2.signers(signerList2Signers);

        var signerList = new ArrayList<SubBulkSignerList>(List.of (
            signerList1,
            signerList2
        ));

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var signatureRequestBulkSendWithTemplateRequest = new SignatureRequestBulkSendWithTemplateRequest();
        signatureRequestBulkSendWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestBulkSendWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestBulkSendWithTemplateRequest.subject("Purchase Order");
        signatureRequestBulkSendWithTemplateRequest.testMode(true);
        signatureRequestBulkSendWithTemplateRequest.signerList(signerList);
        signatureRequestBulkSendWithTemplateRequest.ccs(ccs);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestBulkSendWithTemplate(
                signatureRequestBulkSendWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestBulkSendWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.

To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.

**NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestCancelExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            new SignatureRequestApi(config).signatureRequestCancel(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967" // signatureRequestId
            );
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestCancel");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestCreateEmbeddedExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestCreateEmbeddedRequest = new SignatureRequestCreateEmbeddedRequest();
        signatureRequestCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestCreateEmbeddedRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestCreateEmbeddedRequest.subject("The NDA we talked about");
        signatureRequestCreateEmbeddedRequest.testMode(true);
        signatureRequestCreateEmbeddedRequest.title("NDA with Acme Co.");
        signatureRequestCreateEmbeddedRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestCreateEmbeddedRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        signatureRequestCreateEmbeddedRequest.signingOptions(signingOptions);
        signatureRequestCreateEmbeddedRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestCreateEmbedded(
                signatureRequestCreateEmbeddedRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestCreateEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signers1
        ));

        var signatureRequestCreateEmbeddedWithTemplateRequest = new SignatureRequestCreateEmbeddedWithTemplateRequest();
        signatureRequestCreateEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestCreateEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestCreateEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestCreateEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestCreateEmbeddedWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestCreateEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestCreateEmbeddedWithTemplate(
                signatureRequestCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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


## signatureRequestEdit

> SignatureRequestGetResponse signatureRequestEdit(signatureRequestId, signatureRequestEditRequest)

Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

**NOTE:** Edit and resend *will* deduct your signature request quota.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestEditExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var fieldOptions = new SubFieldOptions();
        fieldOptions.dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestEditRequest = new SignatureRequestEditRequest();
        signatureRequestEditRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestEditRequest.subject("The NDA we talked about");
        signatureRequestEditRequest.testMode(true);
        signatureRequestEditRequest.title("NDA with Acme Co.");
        signatureRequestEditRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestEditRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        signatureRequestEditRequest.metadata(JSON.deserialize("""
            {
                "custom_id": 1234,
                "custom_text": "NDA #9"
            }
        """, Map.class));
        signatureRequestEditRequest.fieldOptions(fieldOptions);
        signatureRequestEditRequest.signingOptions(signingOptions);
        signatureRequestEditRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEdit(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEdit");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **signatureRequestId** | **String**| The id of the SignatureRequest to edit. |
 **signatureRequestEditRequest** | [**SignatureRequestEditRequest**](SignatureRequestEditRequest.md)|  |

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


## signatureRequestEditEmbedded

> SignatureRequestGetResponse signatureRequestEditEmbedded(signatureRequestId, signatureRequestEditEmbeddedRequest)

Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestEditEmbeddedExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestEditEmbeddedRequest = new SignatureRequestEditEmbeddedRequest();
        signatureRequestEditEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestEditEmbeddedRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestEditEmbeddedRequest.subject("The NDA we talked about");
        signatureRequestEditEmbeddedRequest.testMode(true);
        signatureRequestEditEmbeddedRequest.title("NDA with Acme Co.");
        signatureRequestEditEmbeddedRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestEditEmbeddedRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        signatureRequestEditEmbeddedRequest.signingOptions(signingOptions);
        signatureRequestEditEmbeddedRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEditEmbedded(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditEmbeddedRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEditEmbedded");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **signatureRequestId** | **String**| The id of the SignatureRequest to edit. |
 **signatureRequestEditEmbeddedRequest** | [**SignatureRequestEditEmbeddedRequest**](SignatureRequestEditEmbeddedRequest.md)|  |

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


## signatureRequestEditEmbeddedWithTemplate

> SignatureRequestGetResponse signatureRequestEditEmbeddedWithTemplate(signatureRequestId, signatureRequestEditEmbeddedWithTemplateRequest)

Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Edit and resend *will* deduct your signature request quota.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestEditEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signers1
        ));

        var signatureRequestEditEmbeddedWithTemplateRequest = new SignatureRequestEditEmbeddedWithTemplateRequest();
        signatureRequestEditEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestEditEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestEditEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestEditEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestEditEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestEditEmbeddedWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestEditEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEditEmbeddedWithTemplate(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **signatureRequestId** | **String**| The id of the SignatureRequest to edit. |
 **signatureRequestEditEmbeddedWithTemplateRequest** | [**SignatureRequestEditEmbeddedWithTemplateRequest**](SignatureRequestEditEmbeddedWithTemplateRequest.md)|  |

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


## signatureRequestEditWithTemplate

> SignatureRequestGetResponse signatureRequestEditWithTemplate(signatureRequestId, signatureRequestEditWithTemplateRequest)

Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.

**NOTE:** Edit and resend *will* deduct your signature request quota.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestEditWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signers1
        ));

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var customFields1 = new SubCustomField();
        customFields1.name("Cost");
        customFields1.editor("Client");
        customFields1.required(true);
        customFields1.value("$20,000");

        var customFields = new ArrayList<SubCustomField>(List.of (
            customFields1
        ));

        var signatureRequestEditWithTemplateRequest = new SignatureRequestEditWithTemplateRequest();
        signatureRequestEditWithTemplateRequest.templateIds(List.of (
            "61a832ff0d8423f91d503e76bfbcc750f7417c78"
        ));
        signatureRequestEditWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestEditWithTemplateRequest.subject("Purchase Order");
        signatureRequestEditWithTemplateRequest.testMode(true);
        signatureRequestEditWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestEditWithTemplateRequest.signers(signers);
        signatureRequestEditWithTemplateRequest.ccs(ccs);
        signatureRequestEditWithTemplateRequest.customFields(customFields);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEditWithTemplate(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEditWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **signatureRequestId** | **String**| The id of the SignatureRequest to edit. |
 **signatureRequestEditWithTemplateRequest** | [**SignatureRequestEditWithTemplateRequest**](SignatureRequestEditWithTemplateRequest.md)|  |

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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestFilesExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestFiles(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                "pdf" // fileType
            );
            response.renameTo(new File("./file_response"));
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestFiles");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestFilesAsDataUriExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestFilesAsDataUri(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967" // signatureRequestId
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestFilesAsDataUri");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

> FileResponse signatureRequestFilesAsFileUrl(signatureRequestId, forceDownload)

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestFilesAsFileUrlExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestFilesAsFileUrl(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                1 // forceDownload
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestFilesAsFileUrl");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **signatureRequestId** | **String**| The id of the SignatureRequest to retrieve. |
 **forceDownload** | **Integer**| By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional] [default to 1]

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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestGet(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967" // signatureRequestId
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestListExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestList(
                null, // accountId
                1, // page
                20, // pageSize
                null // query
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestList");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestReleaseHoldExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestReleaseHold(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967" // signatureRequestId
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestReleaseHold");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

**NOTE:** This action can **not** be used with embedded signature requests.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestRemindExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signatureRequestRemindRequest = new SignatureRequestRemindRequest();
        signatureRequestRemindRequest.emailAddress("john@example.com");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestRemind(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestRemindRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestRemind");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestRemoveExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {
            new SignatureRequestApi(config).signatureRequestRemove(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967" // signatureRequestId
            );
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestRemove");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestSendExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var fieldOptions = new SubFieldOptions();
        fieldOptions.dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestSendRequest = new SignatureRequestSendRequest();
        signatureRequestSendRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestSendRequest.subject("The NDA we talked about");
        signatureRequestSendRequest.testMode(true);
        signatureRequestSendRequest.title("NDA with Acme Co.");
        signatureRequestSendRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestSendRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        signatureRequestSendRequest.metadata(JSON.deserialize("""
            {
                "custom_id": 1234,
                "custom_text": "NDA #9"
            }
        """, Map.class));
        signatureRequestSendRequest.fieldOptions(fieldOptions);
        signatureRequestSendRequest.signingOptions(signingOptions);
        signatureRequestSendRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestSend(
                signatureRequestSendRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestSend");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestSendWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signers1
        ));

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var customFields1 = new SubCustomField();
        customFields1.name("Cost");
        customFields1.editor("Client");
        customFields1.required(true);
        customFields1.value("$20,000");

        var customFields = new ArrayList<SubCustomField>(List.of (
            customFields1
        ));

        var signatureRequestSendWithTemplateRequest = new SignatureRequestSendWithTemplateRequest();
        signatureRequestSendWithTemplateRequest.templateIds(List.of (
            "61a832ff0d8423f91d503e76bfbcc750f7417c78"
        ));
        signatureRequestSendWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestSendWithTemplateRequest.subject("Purchase Order");
        signatureRequestSendWithTemplateRequest.testMode(true);
        signatureRequestSendWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestSendWithTemplateRequest.signers(signers);
        signatureRequestSendWithTemplateRequest.ccs(ccs);
        signatureRequestSendWithTemplateRequest.customFields(customFields);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestSendWithTemplate(
                signatureRequestSendWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestSendWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

Updating the email address of a signer will generate a new `signature_id` value.

**NOTE:** This action cannot be performed on a signature request with an appended signature page.

### Example

```java
package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SignatureRequestUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signatureRequestUpdateRequest = new SignatureRequestUpdateRequest();
        signatureRequestUpdateRequest.signatureId("2f9781e1a8e2045224d808c153c2e1d3df6f8f2f");
        signatureRequestUpdateRequest.emailAddress("john@example.com");

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestUpdate(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestUpdate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
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

