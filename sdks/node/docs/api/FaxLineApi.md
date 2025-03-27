# FaxLineApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxLineAddUser()**](FaxLineApi.md#faxLineAddUser) | **PUT** /fax_line/add_user | Add Fax Line User |
| [**faxLineAreaCodeGet()**](FaxLineApi.md#faxLineAreaCodeGet) | **GET** /fax_line/area_codes | Get Available Fax Line Area Codes |
| [**faxLineCreate()**](FaxLineApi.md#faxLineCreate) | **POST** /fax_line/create | Purchase Fax Line |
| [**faxLineDelete()**](FaxLineApi.md#faxLineDelete) | **DELETE** /fax_line | Delete Fax Line |
| [**faxLineGet()**](FaxLineApi.md#faxLineGet) | **GET** /fax_line | Get Fax Line |
| [**faxLineList()**](FaxLineApi.md#faxLineList) | **GET** /fax_line/list | List Fax Lines |
| [**faxLineRemoveUser()**](FaxLineApi.md#faxLineRemoveUser) | **PUT** /fax_line/remove_user | Remove Fax Line Access |


## `faxLineAddUser()`

```typescript
faxLineAddUser(faxLineAddUserRequest: FaxLineAddUserRequest): FaxLineResponse
```

Add Fax Line User

Grants a user access to the specified Fax Line.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineAddUserRequest: models.FaxLineAddUserRequest = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

apiCaller.faxLineAddUser(
  faxLineAddUserRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineAddUser:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **faxLineAddUserRequest** | [**FaxLineAddUserRequest**](../model/FaxLineAddUserRequest.md)|  | |

### Return type

[**FaxLineResponse**](../model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineAreaCodeGet()`

```typescript
faxLineAreaCodeGet(country: 'CA' | 'US' | 'UK', state: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY', province: 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT', city: string): FaxLineAreaCodeGetResponse
```

Get Available Fax Line Area Codes

Returns a list of available area codes for a given state/province and city

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxLineAreaCodeGet(
  "US", // country
  undefined, // state
  undefined, // province
  undefined, // city
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineAreaCodeGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **country** | **'CA' | 'US' | 'UK'**| Filter area codes by country | |
| **state** | **'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY'**| Filter area codes by state | [optional] |
| **province** | **'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'**| Filter area codes by province | [optional] |
| **city** | **string**| Filter area codes by city | [optional] |

### Return type

[**FaxLineAreaCodeGetResponse**](../model/FaxLineAreaCodeGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineCreate()`

```typescript
faxLineCreate(faxLineCreateRequest: FaxLineCreateRequest): FaxLineResponse
```

Purchase Fax Line

Purchases a new Fax Line

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineCreateRequest: models.FaxLineCreateRequest = {
  areaCode: 209,
  country: models.FaxLineCreateRequest.CountryEnum.Us,
};

apiCaller.faxLineCreate(
  faxLineCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineCreate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **faxLineCreateRequest** | [**FaxLineCreateRequest**](../model/FaxLineCreateRequest.md)|  | |

### Return type

[**FaxLineResponse**](../model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineDelete()`

```typescript
faxLineDelete(faxLineDeleteRequest: FaxLineDeleteRequest)
```

Delete Fax Line

Deletes the specified Fax Line from the subscription.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineDeleteRequest: models.FaxLineDeleteRequest = {
  number: "[FAX_NUMBER]",
};

apiCaller.faxLineDelete(
  faxLineDeleteRequest,
).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineDelete:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **faxLineDeleteRequest** | [**FaxLineDeleteRequest**](../model/FaxLineDeleteRequest.md)|  | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineGet()`

```typescript
faxLineGet(number: string): FaxLineResponse
```

Get Fax Line

Returns the properties and settings of a Fax Line.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxLineGet(
  "123-123-1234", // number
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **number** | **string**| The Fax Line number | |

### Return type

[**FaxLineResponse**](../model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineList()`

```typescript
faxLineList(accountId: string, page: number, pageSize: number, showTeamLines: boolean): FaxLineListResponse
```

List Fax Lines

Returns the properties and settings of multiple Fax Lines.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxLineList(
  "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97", // accountId
  1, // page
  20, // pageSize
  undefined, // showTeamLines
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineList:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountId** | **string**| Account ID | [optional] |
| **page** | **number**| Which page number of the Fax Line List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **showTeamLines** | **boolean**| Include Fax Lines belonging to team members in the list | [optional] |

### Return type

[**FaxLineListResponse**](../model/FaxLineListResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxLineRemoveUser()`

```typescript
faxLineRemoveUser(faxLineRemoveUserRequest: FaxLineRemoveUserRequest): FaxLineResponse
```

Remove Fax Line Access

Removes a user\'s access to the specified Fax Line

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineRemoveUserRequest: models.FaxLineRemoveUserRequest = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

apiCaller.faxLineRemoveUser(
  faxLineRemoveUserRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineRemoveUser:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **faxLineRemoveUserRequest** | [**FaxLineRemoveUserRequest**](../model/FaxLineRemoveUserRequest.md)|  | |

### Return type

[**FaxLineResponse**](../model/FaxLineResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
