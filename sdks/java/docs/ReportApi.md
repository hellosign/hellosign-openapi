# ReportApi

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportCreate**](ReportApi.md#reportCreate) | **POST** /report/create | Create Report



## reportCreate

> ReportCreateResponse reportCreate(reportCreateRequest)

Create Report

Request the creation of one or more report(s).

When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

### Example

```java
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;
import com.hellosign.openapi.model.ReportCreateRequest.ReportTypeEnum;

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

        ReportApi api = new ReportApi(defaultClient);

        ReportCreateRequest data = new ReportCreateRequest()
            .startDate("09/01/2020")
            .endDate("09/01/2020")
            .reportType(Arrays.asList(ReportTypeEnum.USER_ACTIVITY, ReportTypeEnum.DOCUMENT_STATUS));

        try {
            ReportCreateResponse result = api.reportCreate(data);
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

