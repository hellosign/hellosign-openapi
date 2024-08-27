# Dropbox.Sign.Api.FaxLineApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**FaxLineAddUser**](FaxLineApi.md#faxlineadduser) | **PUT** /fax_line/add_user | Add Fax Line User |
| [**FaxLineAreaCodeGet**](FaxLineApi.md#faxlineareacodeget) | **GET** /fax_line/area_codes | Get Available Fax Line Area Codes |
| [**FaxLineCreate**](FaxLineApi.md#faxlinecreate) | **POST** /fax_line/create | Purchase Fax Line |
| [**FaxLineDelete**](FaxLineApi.md#faxlinedelete) | **DELETE** /fax_line | Delete Fax Line |
| [**FaxLineGet**](FaxLineApi.md#faxlineget) | **GET** /fax_line | Get Fax Line |
| [**FaxLineList**](FaxLineApi.md#faxlinelist) | **GET** /fax_line/list | List Fax Lines |
| [**FaxLineRemoveUser**](FaxLineApi.md#faxlineremoveuser) | **PUT** /fax_line/remove_user | Remove Fax Line Access |

<a id="faxlineadduser"></a>
# **FaxLineAddUser**
> FaxLineResponse FaxLineAddUser (FaxLineAddUserRequest faxLineAddUserRequest)

Add Fax Line User

Grants a user access to the specified Fax Line.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        var data = new FaxLineAddUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var result = faxLineApi.FaxLineAddUser(data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineAddUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Add Fax Line User
    ApiResponse<FaxLineResponse> response = apiInstance.FaxLineAddUserWithHttpInfo(faxLineAddUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineAddUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxLineAddUserRequest** | [**FaxLineAddUserRequest**](FaxLineAddUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlineareacodeget"></a>
# **FaxLineAreaCodeGet**
> FaxLineAreaCodeGetResponse FaxLineAreaCodeGet (string country, string? state = null, string? province = null, string? city = null)

Get Available Fax Line Area Codes

Returns a response with the area codes available for a given state/provice and city.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        try
        {
            var result = faxLineApi.FaxLineAreaCodeGet("US", "CA");
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineAreaCodeGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Available Fax Line Area Codes
    ApiResponse<FaxLineAreaCodeGetResponse> response = apiInstance.FaxLineAreaCodeGetWithHttpInfo(country, state, province, city);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineAreaCodeGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **country** | **string** | Filter area codes by country. |  |
| **state** | **string?** | Filter area codes by state. | [optional]  |
| **province** | **string?** | Filter area codes by province. | [optional]  |
| **city** | **string?** | Filter area codes by city. | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlinecreate"></a>
# **FaxLineCreate**
> FaxLineResponse FaxLineCreate (FaxLineCreateRequest faxLineCreateRequest)

Purchase Fax Line

Purchases a new Fax Line.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        var data = new FaxLineCreateRequest(
            areaCode: 209,
            country: "US"
        );

        try
        {
            var result = faxLineApi.FaxLineCreate(data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineCreateWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Purchase Fax Line
    ApiResponse<FaxLineResponse> response = apiInstance.FaxLineCreateWithHttpInfo(faxLineCreateRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineCreateWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxLineCreateRequest** | [**FaxLineCreateRequest**](FaxLineCreateRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlinedelete"></a>
# **FaxLineDelete**
> void FaxLineDelete (FaxLineDeleteRequest faxLineDeleteRequest)

Delete Fax Line

Deletes the specified Fax Line from the subscription.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        var data = new FaxLineDeleteRequest(
            number: "[FAX_NUMBER]",
        );

        try
        {
            faxLineApi.FaxLineDelete(data);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineDeleteWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete Fax Line
    apiInstance.FaxLineDeleteWithHttpInfo(faxLineDeleteRequest);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineDeleteWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxLineDeleteRequest** | [**FaxLineDeleteRequest**](FaxLineDeleteRequest.md) |  |  |

### Return type

void (empty response body)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlineget"></a>
# **FaxLineGet**
> FaxLineResponse FaxLineGet (string number)

Get Fax Line

Returns the properties and settings of a Fax Line.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        try
        {
            var result = faxLineApi.FaxLineGet("[FAX_NUMBER]");
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineGetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get Fax Line
    ApiResponse<FaxLineResponse> response = apiInstance.FaxLineGetWithHttpInfo(number);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineGetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **number** | **string** | The Fax Line number. |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlinelist"></a>
# **FaxLineList**
> FaxLineListResponse FaxLineList (string? accountId = null, int? page = null, int? pageSize = null, bool? showTeamLines = null)

List Fax Lines

Returns the properties and settings of multiple Fax Lines.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        try
        {
            var result = faxLineApi.FaxLineList();
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineListWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List Fax Lines
    ApiResponse<FaxLineListResponse> response = apiInstance.FaxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineListWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **accountId** | **string?** | Account ID | [optional]  |
| **page** | **int?** | Page | [optional] [default to 1] |
| **pageSize** | **int?** | Page size | [optional] [default to 20] |
| **showTeamLines** | **bool?** | Show team lines | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a id="faxlineremoveuser"></a>
# **FaxLineRemoveUser**
> FaxLineResponse FaxLineRemoveUser (FaxLineRemoveUserRequest faxLineRemoveUserRequest)

Remove Fax Line Access

Removes a user's access to the specified Fax Line.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineApi = new FaxLineApi(config);

        var data = new FaxLineRemoveUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var result = faxLineApi.FaxLineRemoveUser(data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}

```

#### Using the FaxLineRemoveUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Remove Fax Line Access
    ApiResponse<FaxLineResponse> response = apiInstance.FaxLineRemoveUserWithHttpInfo(faxLineRemoveUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling FaxLineApi.FaxLineRemoveUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **faxLineRemoveUserRequest** | [**FaxLineRemoveUserRequest**](FaxLineRemoveUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

