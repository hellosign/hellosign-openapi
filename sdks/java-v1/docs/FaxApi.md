# FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**faxDelete**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax
[**faxFiles**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | List Fax Files
[**faxGet**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax
[**faxList**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes
[**faxSend**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax



## faxDelete

> faxDelete(faxId)

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

        var faxApi = new FaxApi(apiClient);

        try {
            faxApi.faxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");
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
| **204** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
| **4XX** | failed_operation |  -  |


## faxFiles

> File faxFiles(faxId)

List Fax Files

Returns list of fax files

### Example

```java
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.io.File;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxApi = new FaxApi(apiClient);

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try {
            File result = faxApi.faxFiles(faxId);
            result.renameTo(new File("file_response.pdf"));;
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


## faxGet

> FaxGetResponse faxGet(faxId)

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
            FaxGetResponse result = faxApi.faxGet(faxId);
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

[**FaxGetResponse**](FaxGetResponse.md)

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


## faxList

> FaxListResponse faxList(page, pageSize)

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
            FaxListResponse result = faxApi.faxList(page, pageSize);
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
 **page** | **Integer**| Page | [optional] [default to 1]
 **pageSize** | **Integer**| Page size | [optional] [default to 20]

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


## faxSend

> FaxGetResponse faxSend(faxSendRequest)

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


        var data = new FaxSendRequest()
            .addFilesItem(new File("example_fax.pdf"))
            .testMode(true)
            .recipient("16690000001")
            .sender("16690000000")
            .coverPageTo("Jill Fax")
            .coverPageMessage("I'm sending you a fax!")
            .coverPageFrom("Faxer Faxerson")
            .title("This is what the fax is about!");

        try {
            FaxCreateResponse result = faxApi.faxSend(data);
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

[**FaxGetResponse**](FaxGetResponse.md)

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

