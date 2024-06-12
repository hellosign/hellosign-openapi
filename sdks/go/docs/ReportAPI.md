# \ReportAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ReportCreate**](ReportAPI.md#ReportCreate) | **Post** /report/create | Create Report



## ReportCreate

> ReportCreateResponse ReportCreate(ctx).ReportCreateRequest(reportCreateRequest).Execute()

Create Report



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
	reportCreateRequest := *openapiclient.NewReportCreateRequest("EndDate_example", []string{"ReportType_example"}, "StartDate_example") // ReportCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportAPI.ReportCreate(context.Background()).ReportCreateRequest(reportCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.ReportCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReportCreate`: ReportCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `ReportAPI.ReportCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReportCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportCreateRequest** | [**ReportCreateRequest**](ReportCreateRequest.md) |  | 

### Return type

[**ReportCreateResponse**](ReportCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

