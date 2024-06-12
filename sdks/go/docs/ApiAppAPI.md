# \ApiAppAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiAppCreate**](ApiAppAPI.md#ApiAppCreate) | **Post** /api_app | Create API App
[**ApiAppDelete**](ApiAppAPI.md#ApiAppDelete) | **Delete** /api_app/{client_id} | Delete API App
[**ApiAppGet**](ApiAppAPI.md#ApiAppGet) | **Get** /api_app/{client_id} | Get API App
[**ApiAppList**](ApiAppAPI.md#ApiAppList) | **Get** /api_app/list | List API Apps
[**ApiAppUpdate**](ApiAppAPI.md#ApiAppUpdate) | **Put** /api_app/{client_id} | Update API App



## ApiAppCreate

> ApiAppGetResponse ApiAppCreate(ctx).ApiAppCreateRequest(apiAppCreateRequest).Execute()

Create API App



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	apiAppCreateRequest := *openapiclient.NewApiAppCreateRequest([]string{"Domains_example"}, "Name_example") // ApiAppCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApiAppAPI.ApiAppCreate(context.Background()).ApiAppCreateRequest(apiAppCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApiAppAPI.ApiAppCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiAppCreate`: ApiAppGetResponse
	fmt.Fprintf(os.Stdout, "Response from `ApiAppAPI.ApiAppCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAppCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiAppCreateRequest** | [**ApiAppCreateRequest**](ApiAppCreateRequest.md) |  | 

### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAppDelete

> ApiAppDelete(ctx, clientId).Execute()

Delete API App



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	clientId := "0dd3b823a682527788c4e40cb7b6f7e9" // string | The client id of the API App to delete.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ApiAppAPI.ApiAppDelete(context.Background(), clientId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApiAppAPI.ApiAppDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientId** | **string** | The client id of the API App to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiAppDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAppGet

> ApiAppGetResponse ApiAppGet(ctx, clientId).Execute()

Get API App



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	clientId := "0dd3b823a682527788c4e40cb7b6f7e9" // string | The client id of the API App to retrieve.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApiAppAPI.ApiAppGet(context.Background(), clientId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApiAppAPI.ApiAppGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiAppGet`: ApiAppGetResponse
	fmt.Fprintf(os.Stdout, "Response from `ApiAppAPI.ApiAppGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientId** | **string** | The client id of the API App to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiAppGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAppList

> ApiAppListResponse ApiAppList(ctx).Page(page).PageSize(pageSize).Execute()

List API Apps



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	page := int32(56) // int32 | Which page number of the API App List to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApiAppAPI.ApiAppList(context.Background()).Page(page).PageSize(pageSize).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApiAppAPI.ApiAppList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiAppList`: ApiAppListResponse
	fmt.Fprintf(os.Stdout, "Response from `ApiAppAPI.ApiAppList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAppListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Which page number of the API App List to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [default to 20]

### Return type

[**ApiAppListResponse**](ApiAppListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAppUpdate

> ApiAppGetResponse ApiAppUpdate(ctx, clientId).ApiAppUpdateRequest(apiAppUpdateRequest).Execute()

Update API App



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	clientId := "0dd3b823a682527788c4e40cb7b6f7e9" // string | The client id of the API App to update.
	apiAppUpdateRequest := *openapiclient.NewApiAppUpdateRequest() // ApiAppUpdateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ApiAppAPI.ApiAppUpdate(context.Background(), clientId).ApiAppUpdateRequest(apiAppUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApiAppAPI.ApiAppUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiAppUpdate`: ApiAppGetResponse
	fmt.Fprintf(os.Stdout, "Response from `ApiAppAPI.ApiAppUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clientId** | **string** | The client id of the API App to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiAppUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **apiAppUpdateRequest** | [**ApiAppUpdateRequest**](ApiAppUpdateRequest.md) |  | 

### Return type

[**ApiAppGetResponse**](ApiAppGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

