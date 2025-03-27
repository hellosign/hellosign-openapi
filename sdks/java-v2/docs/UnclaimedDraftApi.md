# UnclaimedDraftApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**unclaimedDraftCreate**](UnclaimedDraftApi.md#unclaimedDraftCreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft
[**unclaimedDraftCreateEmbedded**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft
[**unclaimedDraftCreateEmbeddedWithTemplate**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbeddedWithTemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template
[**unclaimedDraftEditAndResend**](UnclaimedDraftApi.md#unclaimedDraftEditAndResend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft



## unclaimedDraftCreate

> UnclaimedDraftCreateResponse unclaimedDraftCreate(unclaimedDraftCreateRequest)

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

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

public class UnclaimedDraftCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signers1 = new SubUnclaimedDraftSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers = new ArrayList<SubUnclaimedDraftSigner>(List.of (
            signers1
        ));

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest();
        unclaimedDraftCreateRequest.type(UnclaimedDraftCreateRequest.TypeEnum.REQUEST_SIGNATURE);
        unclaimedDraftCreateRequest.testMode(true);
        unclaimedDraftCreateRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        unclaimedDraftCreateRequest.signers(signers);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreate(
                unclaimedDraftCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate");
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
 **unclaimedDraftCreateRequest** | [**UnclaimedDraftCreateRequest**](UnclaimedDraftCreateRequest.md)|  |

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


## unclaimedDraftCreateEmbedded

> UnclaimedDraftCreateResponse unclaimedDraftCreateEmbedded(unclaimedDraftCreateEmbeddedRequest)

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftCreateEmbeddedExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest();
        unclaimedDraftCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftCreateEmbeddedRequest.requesterEmailAddress("jack@dropboxsign.com");
        unclaimedDraftCreateEmbeddedRequest.testMode(true);
        unclaimedDraftCreateEmbeddedRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreateEmbedded(
                unclaimedDraftCreateEmbeddedRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded");
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
 **unclaimedDraftCreateEmbeddedRequest** | [**UnclaimedDraftCreateEmbeddedRequest**](UnclaimedDraftCreateEmbeddedRequest.md)|  |

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


## unclaimedDraftCreateEmbeddedWithTemplate

> UnclaimedDraftCreateResponse unclaimedDraftCreateEmbeddedWithTemplate(unclaimedDraftCreateEmbeddedWithTemplateRequest)

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftCreateEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@dropboxsign.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var signers1 = new SubUnclaimedDraftTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubUnclaimedDraftTemplateSigner>(List.of (
            signers1
        ));

        var unclaimedDraftCreateEmbeddedWithTemplateRequest = new UnclaimedDraftCreateEmbeddedWithTemplateRequest();
        unclaimedDraftCreateEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftCreateEmbeddedWithTemplateRequest.requesterEmailAddress("jack@dropboxsign.com");
        unclaimedDraftCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "61a832ff0d8423f91d503e76bfbcc750f7417c78"
        ));
        unclaimedDraftCreateEmbeddedWithTemplateRequest.testMode(false);
        unclaimedDraftCreateEmbeddedWithTemplateRequest.ccs(ccs);
        unclaimedDraftCreateEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreateEmbeddedWithTemplate(
                unclaimedDraftCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate");
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
 **unclaimedDraftCreateEmbeddedWithTemplateRequest** | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)|  |

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


## unclaimedDraftEditAndResend

> UnclaimedDraftCreateResponse unclaimedDraftEditAndResend(signatureRequestId, unclaimedDraftEditAndResendRequest)

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

public class UnclaimedDraftEditAndResendExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var unclaimedDraftEditAndResendRequest = new UnclaimedDraftEditAndResendRequest();
        unclaimedDraftEditAndResendRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftEditAndResendRequest.testMode(false);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftEditAndResend(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                unclaimedDraftEditAndResendRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftEditAndResend");
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
 **signatureRequestId** | **String**| The ID of the signature request to edit and resend. |
 **unclaimedDraftEditAndResendRequest** | [**UnclaimedDraftEditAndResendRequest**](UnclaimedDraftEditAndResendRequest.md)|  |

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

