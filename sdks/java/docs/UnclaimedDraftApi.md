# UnclaimedDraftApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
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
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

import java.io.File;
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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        SubUnclaimedDraftSigner signer1 = new SubUnclaimedDraftSigner()
            .emailAddress("jack@example.com")
            .name("Jack")
            .order(0);

        SubUnclaimedDraftSigner signer2 = new SubUnclaimedDraftSigner()
            .emailAddress("jill@example.com")
            .name("Jill")
            .order(1);

        SubSigningOptions subSigningOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SubFieldOptions subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        UnclaimedDraftCreateRequest data = new UnclaimedDraftCreateRequest()
            .subject("The NDA we talked about")
            .type(UnclaimedDraftCreateRequest.TypeEnum.REQUEST_SIGNATURE)
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(List.of(signer1, signer2))
            .ccEmailAddresses(List.of("lawyer@hellosign.com", "lawyer@example.com"))
            .addFileItem(new File("example_signature_request.pdf"));
            .metadata(Map.of("custom_id", 1234, "custom_text", "NDA #9"))
            .signingOptions(subSigningOptions)
            .fieldOptions(subFieldOptions)
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftCreate(data);
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

**NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

import java.io.File;
import java.util.List;

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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        UnclaimedDraftCreateEmbeddedRequest data = new UnclaimedDraftCreateEmbeddedRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .addFileItem(new File("example_signature_request.pdf"));
            .requesterEmailAddress("jack@hellosign.com")
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftCreateEmbedded(data);
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

**NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;
import java.util.List;

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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        SubUnclaimedDraftTemplateSigner signer = new SubUnclaimedDraftTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com");

        SubCC cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@email.com");

        UnclaimedDraftCreateEmbeddedWithTemplateRequest data = new UnclaimedDraftCreateEmbeddedWithTemplateRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .requesterEmailAddress("jack@hellosign.com")
            .signers(Arrays.asList(signer))
            .ccs(Arrays.asList(cc1))
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftCreateEmbeddedWithTemplate(data);
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

**NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        UnclaimedDraftEditAndResendRequest data = new UnclaimedDraftEditAndResendRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .testMode(true);

        String signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftEditAndResend(signatureRequestId, data);
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

