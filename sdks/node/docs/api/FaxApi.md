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

const result = faxApi.faxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");

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

const result = faxApi.faxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");

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
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

const result = faxApi.faxFiles(faxId);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});

```

### JavaScript Example

```javascript
import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

const result = faxApi.faxFiles(faxId);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
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

const result = faxApi.faxGet(faxId);
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

const result = faxApi.faxGet(faxId);
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

const result = faxApi.faxList(page, pageSize);
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

const result = faxApi.faxList(page, pageSize);
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
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

// Upload a local file
const file = fs.createReadStream("example_signature_request.pdf");

// or, upload from buffer
const fileBuffer: DropboxSign.RequestDetailedFile = {
  value: fs.readFileSync("example_signature_request.pdf"),
  options: {
    filename: "example_signature_request.pdf",
    contentType: "application/pdf",
  },
};

// or, upload from buffer alternative
const fileBufferAlt: DropboxSign.RequestDetailedFile = {
  value: Buffer.from("abc-123"),
  options: {
    filename: "txt-sample.txt",
    contentType: "text/plain",
  },
};

const data: DropboxSign.FaxSendRequest = {
  files: [ file, fileBuffer, fileBufferAlt ],
  testMode: true,
  recipient: "16690000001",
  sender: "16690000000",
  coverPageTo: "Jill Fax",
  coverPageMessage: "I'm sending you a fax!",
  coverPageFrom: "Faxer Faxerson",
  title: "This is what the fax is about!",
};

const result = faxApi.faxSend(data);
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
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

// Upload a local file
const file = fs.createReadStream("example_signature_request.pdf");

// or, upload from buffer
const fileBuffer = {
  value: fs.readFileSync("example_signature_request.pdf"),
  options: {
    filename: "example_signature_request.pdf",
    contentType: "application/pdf",
  },
};

// or, upload from buffer alternative
const fileBufferAlt = {
  value: Buffer.from("abc-123"),
  options: {
    filename: "txt-sample.txt",
    contentType: "text/plain",
  },
};

const data = {
  files: [ file, fileBuffer, fileBufferAlt ],
  testMode: true,
  recipient: "16690000001",
  sender: "16690000000",
  coverPageTo: "Jill Fax",
  coverPageMessage: "I'm sending you a fax!",
  coverPageFrom: "Faxer Faxerson",
  title: "This is what the fax is about!",
};

const result = faxApi.faxSend(data);
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
