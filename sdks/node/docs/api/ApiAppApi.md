# ApiAppApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**apiAppCreate()**](ApiAppApi.md#apiAppCreate) | **POST** /api_app | Create API App |
| [**apiAppDelete()**](ApiAppApi.md#apiAppDelete) | **DELETE** /api_app/{client_id} | Delete API App |
| [**apiAppGet()**](ApiAppApi.md#apiAppGet) | **GET** /api_app/{client_id} | Get API App |
| [**apiAppList()**](ApiAppApi.md#apiAppList) | **GET** /api_app/list | List API Apps |
| [**apiAppUpdate()**](ApiAppApi.md#apiAppUpdate) | **PUT** /api_app/{client_id} | Update API App |


## `apiAppCreate()`

```typescript
apiAppCreate(apiAppCreateRequest: ApiAppCreateRequest): ApiAppGetResponse
```

Create API App

Creates a new API App.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const oauth: models.SubOAuth = {
  callbackUrl: "https://example.com/oauth",
  scopes: [
    models.SubOAuth.ScopesEnum.BasicAccountInfo,
    models.SubOAuth.ScopesEnum.RequestSignature,
  ],
};

const whiteLabelingOptions: models.SubWhiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const apiAppCreateRequest: models.ApiAppCreateRequest = {
  name: "My Production App",
  domains: [
    "example.com",
  ],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth: oauth,
  whiteLabelingOptions: whiteLabelingOptions,
};

apiCaller.apiAppCreate(
  apiAppCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppCreate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **apiAppCreateRequest** | [**ApiAppCreateRequest**](../model/ApiAppCreateRequest.md)|  | |

### Return type

[**ApiAppGetResponse**](../model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppDelete()`

```typescript
apiAppDelete(clientId: string)
```

Delete API App

Deletes an API App. Can only be invoked for apps you own.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.apiAppDelete(
  "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppDelete:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clientId** | **string**| The client id of the API App to delete. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppGet()`

```typescript
apiAppGet(clientId: string): ApiAppGetResponse
```

Get API App

Returns an object with information about an API App.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.apiAppGet(
  "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clientId** | **string**| The client id of the API App to retrieve. | |

### Return type

[**ApiAppGetResponse**](../model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppList()`

```typescript
apiAppList(page: number, pageSize: number): ApiAppListResponse
```

List API Apps

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.apiAppList(
  1, // page
  20, // pageSize
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppList:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **number**| Which page number of the API App List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**ApiAppListResponse**](../model/ApiAppListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppUpdate()`

```typescript
apiAppUpdate(clientId: string, apiAppUpdateRequest: ApiAppUpdateRequest): ApiAppGetResponse
```

Update API App

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const oauth: models.SubOAuth = {
  callbackUrl: "https://example.com/oauth",
  scopes: [
    models.SubOAuth.ScopesEnum.BasicAccountInfo,
    models.SubOAuth.ScopesEnum.RequestSignature,
  ],
};

const whiteLabelingOptions: models.SubWhiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const apiAppUpdateRequest: models.ApiAppUpdateRequest = {
  callbackUrl: "https://example.com/dropboxsign",
  name: "New Name",
  domains: [
    "example.com",
  ],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth: oauth,
  whiteLabelingOptions: whiteLabelingOptions,
};

apiCaller.apiAppUpdate(
  "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
  apiAppUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppUpdate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **clientId** | **string**| The client id of the API App to update. | |
| **apiAppUpdateRequest** | [**ApiAppUpdateRequest**](../model/ApiAppUpdateRequest.md)|  | |

### Return type

[**ApiAppGetResponse**](../model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
