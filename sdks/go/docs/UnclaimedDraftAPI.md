# \UnclaimedDraftAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UnclaimedDraftCreate**](UnclaimedDraftAPI.md#UnclaimedDraftCreate) | **Post** /unclaimed_draft/create | Create Unclaimed Draft
[**UnclaimedDraftCreateEmbedded**](UnclaimedDraftAPI.md#UnclaimedDraftCreateEmbedded) | **Post** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft
[**UnclaimedDraftCreateEmbeddedWithTemplate**](UnclaimedDraftAPI.md#UnclaimedDraftCreateEmbeddedWithTemplate) | **Post** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template
[**UnclaimedDraftEditAndResend**](UnclaimedDraftAPI.md#UnclaimedDraftEditAndResend) | **Post** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft



## UnclaimedDraftCreate

> UnclaimedDraftCreateResponse UnclaimedDraftCreate(ctx).UnclaimedDraftCreateRequest(unclaimedDraftCreateRequest).Execute()

Create Unclaimed Draft



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
	unclaimedDraftCreateRequest := *openapiclient.NewUnclaimedDraftCreateRequest("Type_example") // UnclaimedDraftCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.UnclaimedDraftAPI.UnclaimedDraftCreate(context.Background()).UnclaimedDraftCreateRequest(unclaimedDraftCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UnclaimedDraftAPI.UnclaimedDraftCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnclaimedDraftCreate`: UnclaimedDraftCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `UnclaimedDraftAPI.UnclaimedDraftCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUnclaimedDraftCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unclaimedDraftCreateRequest** | [**UnclaimedDraftCreateRequest**](UnclaimedDraftCreateRequest.md) |  | 

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnclaimedDraftCreateEmbedded

> UnclaimedDraftCreateResponse UnclaimedDraftCreateEmbedded(ctx).UnclaimedDraftCreateEmbeddedRequest(unclaimedDraftCreateEmbeddedRequest).Execute()

Create Embedded Unclaimed Draft



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
	unclaimedDraftCreateEmbeddedRequest := *openapiclient.NewUnclaimedDraftCreateEmbeddedRequest("ClientId_example", "RequesterEmailAddress_example") // UnclaimedDraftCreateEmbeddedRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.UnclaimedDraftAPI.UnclaimedDraftCreateEmbedded(context.Background()).UnclaimedDraftCreateEmbeddedRequest(unclaimedDraftCreateEmbeddedRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UnclaimedDraftAPI.UnclaimedDraftCreateEmbedded``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnclaimedDraftCreateEmbedded`: UnclaimedDraftCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `UnclaimedDraftAPI.UnclaimedDraftCreateEmbedded`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUnclaimedDraftCreateEmbeddedRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unclaimedDraftCreateEmbeddedRequest** | [**UnclaimedDraftCreateEmbeddedRequest**](UnclaimedDraftCreateEmbeddedRequest.md) |  | 

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnclaimedDraftCreateEmbeddedWithTemplate

> UnclaimedDraftCreateResponse UnclaimedDraftCreateEmbeddedWithTemplate(ctx).UnclaimedDraftCreateEmbeddedWithTemplateRequest(unclaimedDraftCreateEmbeddedWithTemplateRequest).Execute()

Create Embedded Unclaimed Draft with Template



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
	unclaimedDraftCreateEmbeddedWithTemplateRequest := *openapiclient.NewUnclaimedDraftCreateEmbeddedWithTemplateRequest("ClientId_example", "RequesterEmailAddress_example", []string{"TemplateIds_example"}) // UnclaimedDraftCreateEmbeddedWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.UnclaimedDraftAPI.UnclaimedDraftCreateEmbeddedWithTemplate(context.Background()).UnclaimedDraftCreateEmbeddedWithTemplateRequest(unclaimedDraftCreateEmbeddedWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UnclaimedDraftAPI.UnclaimedDraftCreateEmbeddedWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnclaimedDraftCreateEmbeddedWithTemplate`: UnclaimedDraftCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `UnclaimedDraftAPI.UnclaimedDraftCreateEmbeddedWithTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUnclaimedDraftCreateEmbeddedWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unclaimedDraftCreateEmbeddedWithTemplateRequest** | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](UnclaimedDraftCreateEmbeddedWithTemplateRequest.md) |  | 

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnclaimedDraftEditAndResend

> UnclaimedDraftCreateResponse UnclaimedDraftEditAndResend(ctx, signatureRequestId).UnclaimedDraftEditAndResendRequest(unclaimedDraftEditAndResendRequest).Execute()

Edit and Resend Unclaimed Draft



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The ID of the signature request to edit and resend.
	unclaimedDraftEditAndResendRequest := *openapiclient.NewUnclaimedDraftEditAndResendRequest("ClientId_example") // UnclaimedDraftEditAndResendRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.UnclaimedDraftAPI.UnclaimedDraftEditAndResend(context.Background(), signatureRequestId).UnclaimedDraftEditAndResendRequest(unclaimedDraftEditAndResendRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UnclaimedDraftAPI.UnclaimedDraftEditAndResend``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnclaimedDraftEditAndResend`: UnclaimedDraftCreateResponse
	fmt.Fprintf(os.Stdout, "Response from `UnclaimedDraftAPI.UnclaimedDraftEditAndResend`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The ID of the signature request to edit and resend. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnclaimedDraftEditAndResendRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **unclaimedDraftEditAndResendRequest** | [**UnclaimedDraftEditAndResendRequest**](UnclaimedDraftEditAndResendRequest.md) |  | 

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

