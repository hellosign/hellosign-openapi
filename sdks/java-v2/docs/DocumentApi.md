# DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**documentDetectFields**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields



## documentDetectFields

> DocumentFieldDetectionResponse documentDetectFields(documentFieldDetectionRequest)

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

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

public class DocumentDetectFieldsExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var documentFieldDetectionRequest = new DocumentFieldDetectionRequest();
        documentFieldDetectionRequest.detectionMode("annotations");
        documentFieldDetectionRequest._file(new File("./example_document.pdf"));
        documentFieldDetectionRequest.pageRange("all");

        try
        {
            var response = new DocumentApi(config).documentDetectFields(
                documentFieldDetectionRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling DocumentApi#documentDetectFields");
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
 **documentFieldDetectionRequest** | [**DocumentFieldDetectionRequest**](DocumentFieldDetectionRequest.md)|  |

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
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

