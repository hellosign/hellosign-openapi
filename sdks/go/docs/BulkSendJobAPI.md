# \BulkSendJobAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BulkSendJobGet**](BulkSendJobAPI.md#BulkSendJobGet) | **Get** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job
[**BulkSendJobList**](BulkSendJobAPI.md#BulkSendJobList) | **Get** /bulk_send_job/list | List Bulk Send Jobs



## BulkSendJobGet

> BulkSendJobGetResponse BulkSendJobGet(ctx, bulkSendJobId).Page(page).PageSize(pageSize).Execute()

Get Bulk Send Job



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
	bulkSendJobId := "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174" // string | The id of the BulkSendJob to retrieve.
	page := int32(56) // int32 | Which page number of the BulkSendJob list to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BulkSendJobAPI.BulkSendJobGet(context.Background(), bulkSendJobId).Page(page).PageSize(pageSize).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BulkSendJobAPI.BulkSendJobGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BulkSendJobGet`: BulkSendJobGetResponse
	fmt.Fprintf(os.Stdout, "Response from `BulkSendJobAPI.BulkSendJobGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bulkSendJobId** | **string** | The id of the BulkSendJob to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBulkSendJobGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **page** | **int32** | Which page number of the BulkSendJob list to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. | [default to 20]

### Return type

[**BulkSendJobGetResponse**](BulkSendJobGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BulkSendJobList

> BulkSendJobListResponse BulkSendJobList(ctx).Page(page).PageSize(pageSize).Execute()

List Bulk Send Jobs



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
	page := int32(56) // int32 | Which page number of the BulkSendJob List to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BulkSendJobAPI.BulkSendJobList(context.Background()).Page(page).PageSize(pageSize).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BulkSendJobAPI.BulkSendJobList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BulkSendJobList`: BulkSendJobListResponse
	fmt.Fprintf(os.Stdout, "Response from `BulkSendJobAPI.BulkSendJobList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBulkSendJobListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Which page number of the BulkSendJob List to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. | [default to 20]

### Return type

[**BulkSendJobListResponse**](BulkSendJobListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

