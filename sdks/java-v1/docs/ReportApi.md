# ReportApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**reportCreate**](ReportApi.md#reportCreate) | **POST** /report/create | Create Report



## reportCreate

> ReportCreateResponse reportCreate(reportCreateRequest)

Create Report

Request the creation of one or more report(s).

When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

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

public class ReportCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var reportCreateRequest = new ReportCreateRequest();
        reportCreateRequest.startDate("09/01/2020");
        reportCreateRequest.endDate("09/01/2020");
        reportCreateRequest.reportType(List.of (
            ReportCreateRequest.ReportTypeEnum.USER_ACTIVITY,
            ReportCreateRequest.ReportTypeEnum.DOCUMENT_STATUS
        ));

        try
        {
            var response = new ReportApi(config).reportCreate(
                reportCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportApi#reportCreate");
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
 **reportCreateRequest** | [**ReportCreateRequest**](ReportCreateRequest.md)|  |

### Return type

[**ReportCreateResponse**](ReportCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |

