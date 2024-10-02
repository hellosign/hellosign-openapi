# FaxApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxDelete()**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**faxFiles()**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | List Fax Files |
| [**faxGet()**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax |
| [**faxList()**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes |
| [**faxSend()**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax |


## `faxDelete()`

```typescript
faxDelete(faxId: string)
```

Delete Fax

Deletes the specified Fax from the system.

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const result = faxApi.deleteFax("[FAX_NUMBER]");

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const result = faxApi.deleteFax("[FAX_NUMBER]");

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **faxId** | **string**| Fax ID | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxFiles()`

```typescript
faxFiles(faxId: string): Buffer
```

List Fax Files

Returns list of fax files

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

const result = faxApi.getFaxFiles(faxId);
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

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

const result = faxApi.getFaxFiles(faxId);
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
| **faxId** | **string**| Fax ID | |

### Return type

**Buffer**

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxGet()`

```typescript
faxGet(faxId: string): FaxGetResponse
```

Get Fax

Returns information about fax

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.ApiAppApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

const result = faxApi.getFaxById(faxId);
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

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

const result = faxApi.getFaxById(faxId);
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
| **faxId** | **string**| Fax ID | |

### Return type

[**FaxGetResponse**](../model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxList()`

```typescript
faxList(page: number, pageSize: number): FaxListResponse
```

Lists Faxes

Returns properties of multiple faxes

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const page = 1;
const pageSize = 2;

const result = faxApi.listFaxes(page, pageSize);
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

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const page = 1;
const pageSize = 2;

const result = faxApi.listFaxes(page, pageSize);
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
| **page** | **number**| Page | [optional] [default to 1] |
| **pageSize** | **number**| Page size | [optional] [default to 20] |

### Return type

[**FaxListResponse**](../model/FaxListResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxSend()`

```typescript
faxSend(faxSendRequest: FaxSendRequest): FaxGetResponse
```

Send Fax

Action to prepare and send a fax

### TypeScript Example

```typescript
import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxCreateRequest = {
  areaCode: 209,
  country: "US",
};

const result = faxApi.faxCreate(data);
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

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const data = {
  areaCode: 209,
  country: "US",
};

const result = faxApi.faxCreate(data);
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
| **faxSendRequest** | [**FaxSendRequest**](../model/FaxSendRequest.md)|  | |

### Return type

[**FaxGetResponse**](../model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
