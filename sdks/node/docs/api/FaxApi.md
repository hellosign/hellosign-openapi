# FaxApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxDelete()**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**faxFiles()**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | Download Fax Files |
| [**faxGet()**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax |
| [**faxList()**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes |
| [**faxSend()**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax |


## `faxDelete()`

```typescript
faxDelete(faxId: string)
```

Delete Fax

Deletes the specified Fax from the system

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxDelete(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // faxId
).catch(error => {
  console.log("Exception when calling FaxApi#faxDelete:");
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

Download Fax Files

Downloads files associated with a Fax

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxFiles(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // faxId
).then(response => {
  fs.createWriteStream('./file_response').write(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxFiles:");
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

Returns information about a Fax

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxGet(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // faxId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxGet:");
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

Returns properties of multiple Faxes

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxList(
  1, // page
  20, // pageSize
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxList:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Which page number of the Fax List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

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

Creates and sends a new Fax with the submitted file(s)

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const faxSendRequest: models.FaxSendRequest = {
  recipient: "16690000001",
  sender: "16690000000",
  testMode: true,
  coverPageTo: "Jill Fax",
  coverPageFrom: "Faxer Faxerson",
  coverPageMessage: "I'm sending you a fax!",
  title: "This is what the fax is about!",
  files: [
    fs.createReadStream("./example_fax.pdf"),
  ],
};

apiCaller.faxSend(
  faxSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxSend:");
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
