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
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineAddUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineAddUserRequest = new FaxLineAddUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineAddUser(
                faxLineAddUserRequest: faxLineAddUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineAddUser: " + e.Message);
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

Returns a list of available area codes for a given state/province and city

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineAreaCodeGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            var response = new FaxLineApi(config).FaxLineAreaCodeGet(
                country: "US"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineAreaCodeGet: " + e.Message);
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
| **country** | **string** | Filter area codes by country |  |
| **state** | **string?** | Filter area codes by state | [optional]  |
| **province** | **string?** | Filter area codes by province | [optional]  |
| **city** | **string?** | Filter area codes by city | [optional]  |

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

Purchases a new Fax Line

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineCreateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineCreateRequest = new FaxLineCreateRequest(
            areaCode: 209,
            country: FaxLineCreateRequest.CountryEnum.US
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineCreate(
                faxLineCreateRequest: faxLineCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineCreate: " + e.Message);
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
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineDeleteExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineDeleteRequest = new FaxLineDeleteRequest(
            number: "[FAX_NUMBER]"
        );

        try
        {
            new FaxLineApi(config).FaxLineDelete(
                faxLineDeleteRequest: faxLineDeleteRequest
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineDelete: " + e.Message);
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
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            var response = new FaxLineApi(config).FaxLineGet(
                number: "123-123-1234"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineGet: " + e.Message);
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
| **number** | **string** | The Fax Line number |  |

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
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineListExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            var response = new FaxLineApi(config).FaxLineList(
                accountId: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineList: " + e.Message);
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
| **page** | **int?** | Which page number of the Fax Line List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **int?** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **showTeamLines** | **bool?** | Include Fax Lines belonging to team members in the list | [optional]  |

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

Removes a user's access to the specified Fax Line

### Example
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineRemoveUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineRemoveUserRequest = new FaxLineRemoveUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineRemoveUser(
                faxLineRemoveUserRequest: faxLineRemoveUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineRemoveUser: " + e.Message);
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

