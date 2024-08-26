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
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxLineAddUserRequest = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

const result = faxLineApi.faxLineAddUser(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

const result = faxLineApi.faxLineAddUser(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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

Returns a response with the area codes available for a given state/provice and city.

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineAreaCodeGet("US", "CA");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineAreaCodeGet("US", "CA");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **country** | **'CA' | 'US' | 'UK'**| Filter area codes by country. | |
| **state** | **'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY'**| Filter area codes by state. | [optional] |
| **province** | **'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'**| Filter area codes by province. | [optional] |
| **city** | **string**| Filter area codes by city. | [optional] |

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

Purchases a new Fax Line.

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxLineCreateRequest = {
  areaCode: 209,
  country: "US",
};

const result = faxLineApi.faxLineCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data = {
  areaCode: 209,
  country: "US",
};

const result = faxLineApi.faxLineCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxLineDeleteRequest = {
  number: "[FAX_NUMBER]",
};

const result = faxLineApi.faxLineDelete(data);

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data = {
  number: "[FAX_NUMBER]",
};

const result = faxLineApi.faxLineDelete(data);

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineGet("[FAX_NUMBER]");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineGet("[FAX_NUMBER]");
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **number** | **string**| The Fax Line number. | |

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
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineList();
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const result = faxLineApi.faxLineList();
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountId** | **string**| Account ID | [optional] |
| **page** | **number**| Page | [optional] [default to 1] |
| **pageSize** | **number**| Page size | [optional] [default to 20] |
| **showTeamLines** | **boolean**| Show team lines | [optional] |

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

Removes a user\'s access to the specified Fax Line.

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxLineRemoveUserRequest = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

const result = faxLineApi.faxLineRemoveUser(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

const result = faxLineApi.faxLineRemoveUser(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
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
