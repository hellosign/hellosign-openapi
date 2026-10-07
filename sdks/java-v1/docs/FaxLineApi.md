# FaxLineApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**faxLineAddUser**](FaxLineApi.md#faxLineAddUser) | **PUT** /fax_line/add_user | Add Fax Line User
[**faxLineAreaCodeGet**](FaxLineApi.md#faxLineAreaCodeGet) | **GET** /fax_line/area_codes | Get Available Fax Line Area Codes
[**faxLineCreate**](FaxLineApi.md#faxLineCreate) | **POST** /fax_line/create | Purchase Fax Line
[**faxLineDelete**](FaxLineApi.md#faxLineDelete) | **DELETE** /fax_line | Delete Fax Line
[**faxLineGet**](FaxLineApi.md#faxLineGet) | **GET** /fax_line | Get Fax Line
[**faxLineList**](FaxLineApi.md#faxLineList) | **GET** /fax_line/list | List Fax Lines
[**faxLineRemoveUser**](FaxLineApi.md#faxLineRemoveUser) | **PUT** /fax_line/remove_user | Remove Fax Line Access



## faxLineAddUser

> FaxLineResponse faxLineAddUser(faxLineAddUserRequest)

Add Fax Line User

Grants a user access to the specified Fax Line.

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

public class FaxLineAddUserExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var faxLineAddUserRequest = new FaxLineAddUserRequest();
        faxLineAddUserRequest.number("[FAX_NUMBER]");
        faxLineAddUserRequest.emailAddress("member@dropboxsign.com");

        try
        {
            var response = new FaxLineApi(config).faxLineAddUser(
                faxLineAddUserRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineAddUser");
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
 **faxLineAddUserRequest** | [**FaxLineAddUserRequest**](FaxLineAddUserRequest.md)|  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

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


## faxLineAreaCodeGet

> FaxLineAreaCodeGetResponse faxLineAreaCodeGet(country, state, province, city)

Get Available Fax Line Area Codes

Returns a list of available area codes for a given state/province and city

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

public class FaxLineAreaCodeGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {
            var response = new FaxLineApi(config).faxLineAreaCodeGet(
                "US", // country
                null, // state
                null, // province
                null // city
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineAreaCodeGet");
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
 **country** | **String**| Filter area codes by country | [enum: CA, US, UK]
 **state** | **String**| Filter area codes by state | [optional] [enum: AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY]
 **province** | **String**| Filter area codes by province | [optional] [enum: AB, BC, MB, NB, NL, NT, NS, NU, ON, PE, QC, SK, YT]
 **city** | **String**| Filter area codes by city | [optional]

### Return type

[**FaxLineAreaCodeGetResponse**](FaxLineAreaCodeGetResponse.md)

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


## faxLineCreate

> FaxLineResponse faxLineCreate(faxLineCreateRequest)

Purchase Fax Line

Purchases a new Fax Line

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

public class FaxLineCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var faxLineCreateRequest = new FaxLineCreateRequest();
        faxLineCreateRequest.areaCode(209);
        faxLineCreateRequest.country(FaxLineCreateRequest.CountryEnum.US);

        try
        {
            var response = new FaxLineApi(config).faxLineCreate(
                faxLineCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineCreate");
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
 **faxLineCreateRequest** | [**FaxLineCreateRequest**](FaxLineCreateRequest.md)|  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

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


## faxLineDelete

> faxLineDelete(faxLineDeleteRequest)

Delete Fax Line

Deletes the specified Fax Line from the subscription.

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

public class FaxLineDeleteExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var faxLineDeleteRequest = new FaxLineDeleteRequest();
        faxLineDeleteRequest.number("[FAX_NUMBER]");

        try
        {
            new FaxLineApi(config).faxLineDelete(
                faxLineDeleteRequest
            );
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineDelete");
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
 **faxLineDeleteRequest** | [**FaxLineDeleteRequest**](FaxLineDeleteRequest.md)|  |

### Return type

null (empty response body)

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


## faxLineGet

> FaxLineResponse faxLineGet(number)

Get Fax Line

Returns the properties and settings of a Fax Line.

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

public class FaxLineGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {
            var response = new FaxLineApi(config).faxLineGet(
                "123-123-1234" // number
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineGet");
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
 **number** | **String**| The Fax Line number |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

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


## faxLineList

> FaxLineListResponse faxLineList(accountId, page, pageSize, showTeamLines)

List Fax Lines

Returns the properties and settings of multiple Fax Lines.

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

public class FaxLineListExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {
            var response = new FaxLineApi(config).faxLineList(
                "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97", // accountId
                1, // page
                20, // pageSize
                null // showTeamLines
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineList");
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
 **accountId** | **String**| Account ID | [optional]
 **page** | **Integer**| Which page number of the Fax Line List to return. Defaults to `1`. | [optional] [default to 1]
 **pageSize** | **Integer**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20]
 **showTeamLines** | **Boolean**| Include Fax Lines belonging to team members in the list | [optional]

### Return type

[**FaxLineListResponse**](FaxLineListResponse.md)

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


## faxLineRemoveUser

> FaxLineResponse faxLineRemoveUser(faxLineRemoveUserRequest)

Remove Fax Line Access

Removes a user's access to the specified Fax Line

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

public class FaxLineRemoveUserExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var faxLineRemoveUserRequest = new FaxLineRemoveUserRequest();
        faxLineRemoveUserRequest.number("[FAX_NUMBER]");
        faxLineRemoveUserRequest.emailAddress("member@dropboxsign.com");

        try
        {
            var response = new FaxLineApi(config).faxLineRemoveUser(
                faxLineRemoveUserRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxLineApi#faxLineRemoveUser");
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
 **faxLineRemoveUserRequest** | [**FaxLineRemoveUserRequest**](FaxLineRemoveUserRequest.md)|  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

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

