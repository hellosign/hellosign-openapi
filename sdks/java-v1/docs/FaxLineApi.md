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
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        var data = new FaxLineAddUserRequest()
            .number("[FAX_NUMBER]")
            .emailAddress("member@dropboxsign.com");

        try {
            FaxLineResponse result = faxLineApi.faxLineAddUser(data);
            System.out.println(result);
        } catch (ApiException e) {
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

Returns a response with the area codes available for a given state/provice and city.

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        try {
            FaxLineAreaCodeGetResponse result = faxLineApi.faxLineAreaCodeGet("US", "CA");
            System.out.println(result);
        } catch (ApiException e) {
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
 **country** | **String**| Filter area codes by country. | [enum: CA, US, UK]
 **state** | **String**| Filter area codes by state. | [optional] [enum: AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY]
 **province** | **String**| Filter area codes by province. | [optional] [enum: AB, BC, MB, NB, NL, NT, NS, NU, ON, PE, QC, SK, YT]
 **city** | **String**| Filter area codes by city. | [optional]

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

Purchases a new Fax Line.

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        var data = new FaxLineCreateRequest()
            .areaCode(209)
            .country("US");

        try {
            FaxLineResponse result = faxLineApi.faxLineCreate(data);
            System.out.println(result);
        } catch (ApiException e) {
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
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        var data = new FaxLineDeleteRequest()
            .number("[FAX_NUMBER]");

        try {
            faxLineApi.faxLineDelete(data);
        } catch (ApiException e) {
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
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        try {
            FaxLineResponse result = faxLineApi.faxLineGet("[FAX_NUMBER]");
            System.out.println(result);
        } catch (ApiException e) {
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
 **number** | **String**| The Fax Line number. |

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
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        try {
            FaxLineListResponse result = faxLineApi.faxLineList();
            System.out.println(result);
        } catch (ApiException e) {
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
 **page** | **Integer**| Page | [optional] [default to 1]
 **pageSize** | **Integer**| Page size | [optional] [default to 20]
 **showTeamLines** | **Boolean**| Show team lines | [optional]

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

Removes a user's access to the specified Fax Line.

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxLineApi = new FaxLineApi(apiClient);

        var data = new FaxLineRemoveUserRequest()
            .number("[FAX_NUMBER]")
            .emailAddress("member@dropboxsign.com");

        try {
            FaxLineResponse result = faxLineApi.faxLineRemoveUser(data);
            System.out.println(result);
        } catch (ApiException e) {
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

