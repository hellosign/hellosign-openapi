# DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**documentDetectFields**](DocumentApi.md#documentDetectFields) | **POST** /document/detect_fields | Detect Document Fields



## documentDetectFields

> DocumentFieldDetectionResponse documentDetectFields(detectionMode, _file, fileUrl, pageRange)

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

        try
        {
            var response = new SignatureRequestApi(config).documentDetectFields(
                "annotations", // detectionMode
                new File("./example_document.pdf"), // _file
                null, // fileUrl
                "all" // pageRange
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#documentDetectFields");
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
 **detectionMode** | [**String**](String.md)| The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. |
 **_file** | **File**| The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional]
 **fileUrl** | **URI**| The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional]
 **pageRange** | **String**| The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional]

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

