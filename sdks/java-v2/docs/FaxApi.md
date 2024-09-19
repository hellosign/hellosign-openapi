# FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**deleteFax**](FaxApi.md#deleteFax) | **DELETE** /fax/{fax_id} | Delete Fax
[**getFaxById**](FaxApi.md#getFaxById) | **GET** /fax/{fax_id} | Get Fax
[**getFaxFiles**](FaxApi.md#getFaxFiles) | **GET** /fax/files/{fax_id} | List Fax Files
[**listFaxes**](FaxApi.md#listFaxes) | **GET** /fax/list | Lists Faxes
[**sendFax**](FaxApi.md#sendFax) | **POST** /fax/send | Send Fax



## deleteFax

> deleteFax(faxId)

Delete Fax

Deletes the specified Fax from the system.

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

        var faxAPi = new FaxApi(apiClient);

        try {
            faxAPi.deleteFax("[FAX_NUMBER]");
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
 **faxId** | **String**| Fax ID |

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


## getFaxById

> FaxResponse getFaxById(faxId)

Get Fax

Returns information about fax

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxApi = new FaxApi(apiClient);

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            FaxGetResponse result = faxApi.getFaxById(faxId);
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


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **faxId** | **String**| Fax ID |

### Return type

[**FaxResponse**](FaxResponse.md)

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


## getFaxFiles

> File getFaxFiles(faxId)

List Fax Files

Returns list of fax files

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

        var faxApi = new FaxApi(apiClient);

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            faxApi.getFaxFiles(faxId);
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
 **faxId** | **String**| Fax ID |

### Return type

[**File**](File.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## listFaxes

> FaxListResponse listFaxes(page, pageSize)

Lists Faxes

Returns properties of multiple faxes

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxApi = new FaxApi(apiClient);

        var page = 1;
        var pageSize = 2;

        try {
            FaxListResponse result = faxApi.listFaxes(page, pageSize);
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


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
 **page** | **Integer**| Page |
 **pageSize** | **Integer**| Page size |

### Return type

[**FaxListResponse**](FaxListResponse.md)

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


## sendFax

> FaxResponse sendFax(faxSendRequest)

Send Fax

Action to prepare and send a fax

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

        var faxApi = new FaxApi(apiClient);

        var data = new FaxCreateRequest()
            .areaCode(209)
            .country("US");

        try {
            FaxCreateResponse result = faxApi.faxCreate(data);
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
 **faxSendRequest** | [**FaxSendRequest**](FaxSendRequest.md)|  |

### Return type

[**FaxResponse**](FaxResponse.md)

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

