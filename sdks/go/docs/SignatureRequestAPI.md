# \SignatureRequestAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SignatureRequestBulkCreateEmbeddedWithTemplate**](SignatureRequestAPI.md#SignatureRequestBulkCreateEmbeddedWithTemplate) | **Post** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template
[**SignatureRequestBulkSendWithTemplate**](SignatureRequestAPI.md#SignatureRequestBulkSendWithTemplate) | **Post** /signature_request/bulk_send_with_template | Bulk Send with Template
[**SignatureRequestCancel**](SignatureRequestAPI.md#SignatureRequestCancel) | **Post** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request
[**SignatureRequestCreateEmbedded**](SignatureRequestAPI.md#SignatureRequestCreateEmbedded) | **Post** /signature_request/create_embedded | Create Embedded Signature Request
[**SignatureRequestCreateEmbeddedWithTemplate**](SignatureRequestAPI.md#SignatureRequestCreateEmbeddedWithTemplate) | **Post** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template
[**SignatureRequestEdit**](SignatureRequestAPI.md#SignatureRequestEdit) | **Put** /signature_request/edit/{signature_request_id} | Edit Signature Request
[**SignatureRequestEditEmbedded**](SignatureRequestAPI.md#SignatureRequestEditEmbedded) | **Put** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request
[**SignatureRequestEditEmbeddedWithTemplate**](SignatureRequestAPI.md#SignatureRequestEditEmbeddedWithTemplate) | **Put** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template
[**SignatureRequestEditWithTemplate**](SignatureRequestAPI.md#SignatureRequestEditWithTemplate) | **Put** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template
[**SignatureRequestFiles**](SignatureRequestAPI.md#SignatureRequestFiles) | **Get** /signature_request/files/{signature_request_id} | Download Files
[**SignatureRequestFilesAsDataUri**](SignatureRequestAPI.md#SignatureRequestFilesAsDataUri) | **Get** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri
[**SignatureRequestFilesAsFileUrl**](SignatureRequestAPI.md#SignatureRequestFilesAsFileUrl) | **Get** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url
[**SignatureRequestGet**](SignatureRequestAPI.md#SignatureRequestGet) | **Get** /signature_request/{signature_request_id} | Get Signature Request
[**SignatureRequestList**](SignatureRequestAPI.md#SignatureRequestList) | **Get** /signature_request/list | List Signature Requests
[**SignatureRequestReleaseHold**](SignatureRequestAPI.md#SignatureRequestReleaseHold) | **Post** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request
[**SignatureRequestRemind**](SignatureRequestAPI.md#SignatureRequestRemind) | **Post** /signature_request/remind/{signature_request_id} | Send Request Reminder
[**SignatureRequestRemove**](SignatureRequestAPI.md#SignatureRequestRemove) | **Post** /signature_request/remove/{signature_request_id} | Remove Signature Request Access
[**SignatureRequestSend**](SignatureRequestAPI.md#SignatureRequestSend) | **Post** /signature_request/send | Send Signature Request
[**SignatureRequestSendWithTemplate**](SignatureRequestAPI.md#SignatureRequestSendWithTemplate) | **Post** /signature_request/send_with_template | Send with Template
[**SignatureRequestUpdate**](SignatureRequestAPI.md#SignatureRequestUpdate) | **Post** /signature_request/update/{signature_request_id} | Update Signature Request



## SignatureRequestBulkCreateEmbeddedWithTemplate

> BulkSendJobSendResponse SignatureRequestBulkCreateEmbeddedWithTemplate(ctx).SignatureRequestBulkCreateEmbeddedWithTemplateRequest(signatureRequestBulkCreateEmbeddedWithTemplateRequest).Execute()

Embedded Bulk Send with Template



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
	signatureRequestBulkCreateEmbeddedWithTemplateRequest := *openapiclient.NewSignatureRequestBulkCreateEmbeddedWithTemplateRequest([]string{"TemplateIds_example"}, "ClientId_example") // SignatureRequestBulkCreateEmbeddedWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestBulkCreateEmbeddedWithTemplate(context.Background()).SignatureRequestBulkCreateEmbeddedWithTemplateRequest(signatureRequestBulkCreateEmbeddedWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestBulkCreateEmbeddedWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestBulkCreateEmbeddedWithTemplate`: BulkSendJobSendResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestBulkCreateEmbeddedWithTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestBulkCreateEmbeddedWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestBulkCreateEmbeddedWithTemplateRequest** | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md) |  | 

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestBulkSendWithTemplate

> BulkSendJobSendResponse SignatureRequestBulkSendWithTemplate(ctx).SignatureRequestBulkSendWithTemplateRequest(signatureRequestBulkSendWithTemplateRequest).Execute()

Bulk Send with Template



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
	signatureRequestBulkSendWithTemplateRequest := *openapiclient.NewSignatureRequestBulkSendWithTemplateRequest([]string{"TemplateIds_example"}) // SignatureRequestBulkSendWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestBulkSendWithTemplate(context.Background()).SignatureRequestBulkSendWithTemplateRequest(signatureRequestBulkSendWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestBulkSendWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestBulkSendWithTemplate`: BulkSendJobSendResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestBulkSendWithTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestBulkSendWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestBulkSendWithTemplateRequest** | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md) |  | 

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestCancel

> SignatureRequestCancel(ctx, signatureRequestId).Execute()

Cancel Incomplete Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the incomplete SignatureRequest to cancel.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SignatureRequestAPI.SignatureRequestCancel(context.Background(), signatureRequestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestCancel``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the incomplete SignatureRequest to cancel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestCancelRequest struct via the builder pattern


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


## SignatureRequestCreateEmbedded

> SignatureRequestGetResponse SignatureRequestCreateEmbedded(ctx).SignatureRequestCreateEmbeddedRequest(signatureRequestCreateEmbeddedRequest).Execute()

Create Embedded Signature Request



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
	signatureRequestCreateEmbeddedRequest := *openapiclient.NewSignatureRequestCreateEmbeddedRequest("ClientId_example") // SignatureRequestCreateEmbeddedRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestCreateEmbedded(context.Background()).SignatureRequestCreateEmbeddedRequest(signatureRequestCreateEmbeddedRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestCreateEmbedded``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestCreateEmbedded`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestCreateEmbedded`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestCreateEmbeddedRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestCreateEmbeddedRequest** | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestCreateEmbeddedWithTemplate

> SignatureRequestGetResponse SignatureRequestCreateEmbeddedWithTemplate(ctx).SignatureRequestCreateEmbeddedWithTemplateRequest(signatureRequestCreateEmbeddedWithTemplateRequest).Execute()

Create Embedded Signature Request with Template



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
	signatureRequestCreateEmbeddedWithTemplateRequest := *openapiclient.NewSignatureRequestCreateEmbeddedWithTemplateRequest([]string{"TemplateIds_example"}, "ClientId_example", []openapiclient.SubSignatureRequestTemplateSigner{*openapiclient.NewSubSignatureRequestTemplateSigner("Role_example", "Name_example", "EmailAddress_example")}) // SignatureRequestCreateEmbeddedWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestCreateEmbeddedWithTemplate(context.Background()).SignatureRequestCreateEmbeddedWithTemplateRequest(signatureRequestCreateEmbeddedWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestCreateEmbeddedWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestCreateEmbeddedWithTemplate`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestCreateEmbeddedWithTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestCreateEmbeddedWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestCreateEmbeddedWithTemplateRequest** | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestEdit

> SignatureRequestGetResponse SignatureRequestEdit(ctx, signatureRequestId).SignatureRequestEditRequest(signatureRequestEditRequest).Execute()

Edit Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to edit.
	signatureRequestEditRequest := *openapiclient.NewSignatureRequestEditRequest() // SignatureRequestEditRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestEdit(context.Background(), signatureRequestId).SignatureRequestEditRequest(signatureRequestEditRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestEdit``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestEdit`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestEdit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestEditRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestEditRequest** | [**SignatureRequestEditRequest**](SignatureRequestEditRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestEditEmbedded

> SignatureRequestGetResponse SignatureRequestEditEmbedded(ctx, signatureRequestId).SignatureRequestEditEmbeddedRequest(signatureRequestEditEmbeddedRequest).Execute()

Edit Embedded Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to edit.
	signatureRequestEditEmbeddedRequest := *openapiclient.NewSignatureRequestEditEmbeddedRequest("ClientId_example") // SignatureRequestEditEmbeddedRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestEditEmbedded(context.Background(), signatureRequestId).SignatureRequestEditEmbeddedRequest(signatureRequestEditEmbeddedRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestEditEmbedded``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestEditEmbedded`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestEditEmbedded`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestEditEmbeddedRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestEditEmbeddedRequest** | [**SignatureRequestEditEmbeddedRequest**](SignatureRequestEditEmbeddedRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestEditEmbeddedWithTemplate

> SignatureRequestGetResponse SignatureRequestEditEmbeddedWithTemplate(ctx, signatureRequestId).SignatureRequestEditEmbeddedWithTemplateRequest(signatureRequestEditEmbeddedWithTemplateRequest).Execute()

Edit Embedded Signature Request with Template



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to edit.
	signatureRequestEditEmbeddedWithTemplateRequest := *openapiclient.NewSignatureRequestEditEmbeddedWithTemplateRequest([]string{"TemplateIds_example"}, "ClientId_example", []openapiclient.SubSignatureRequestTemplateSigner{*openapiclient.NewSubSignatureRequestTemplateSigner("Role_example", "Name_example", "EmailAddress_example")}) // SignatureRequestEditEmbeddedWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestEditEmbeddedWithTemplate(context.Background(), signatureRequestId).SignatureRequestEditEmbeddedWithTemplateRequest(signatureRequestEditEmbeddedWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestEditEmbeddedWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestEditEmbeddedWithTemplate`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestEditEmbeddedWithTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestEditEmbeddedWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestEditEmbeddedWithTemplateRequest** | [**SignatureRequestEditEmbeddedWithTemplateRequest**](SignatureRequestEditEmbeddedWithTemplateRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestEditWithTemplate

> SignatureRequestGetResponse SignatureRequestEditWithTemplate(ctx, signatureRequestId).SignatureRequestEditWithTemplateRequest(signatureRequestEditWithTemplateRequest).Execute()

Edit Signature Request With Template



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to edit.
	signatureRequestEditWithTemplateRequest := *openapiclient.NewSignatureRequestEditWithTemplateRequest([]string{"TemplateIds_example"}, []openapiclient.SubSignatureRequestTemplateSigner{*openapiclient.NewSubSignatureRequestTemplateSigner("Role_example", "Name_example", "EmailAddress_example")}) // SignatureRequestEditWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestEditWithTemplate(context.Background(), signatureRequestId).SignatureRequestEditWithTemplateRequest(signatureRequestEditWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestEditWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestEditWithTemplate`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestEditWithTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to edit. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestEditWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestEditWithTemplateRequest** | [**SignatureRequestEditWithTemplateRequest**](SignatureRequestEditWithTemplateRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestFiles

> *os.File SignatureRequestFiles(ctx, signatureRequestId).FileType(fileType).Execute()

Download Files



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to retrieve.
	fileType := "fileType_example" // string | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. (optional) (default to "pdf")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestFiles(context.Background(), signatureRequestId).FileType(fileType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestFiles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestFiles`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestFiles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestFilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fileType** | **string** | Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. | [default to &quot;pdf&quot;]

### Return type

[***os.File**](*os.File.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/zip, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestFilesAsDataUri

> FileResponseDataUri SignatureRequestFilesAsDataUri(ctx, signatureRequestId).Execute()

Download Files as Data Uri



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to retrieve.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestFilesAsDataUri(context.Background(), signatureRequestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestFilesAsDataUri``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestFilesAsDataUri`: FileResponseDataUri
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestFilesAsDataUri`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestFilesAsDataUriRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestFilesAsFileUrl

> FileResponse SignatureRequestFilesAsFileUrl(ctx, signatureRequestId).ForceDownload(forceDownload).Execute()

Download Files as File Url



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to retrieve.
	forceDownload := int32(56) // int32 | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. (optional) (default to 1)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestFilesAsFileUrl(context.Background(), signatureRequestId).ForceDownload(forceDownload).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestFilesAsFileUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestFilesAsFileUrl`: FileResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestFilesAsFileUrl`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestFilesAsFileUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **forceDownload** | **int32** | By default when opening the &#x60;file_url&#x60; a browser will download the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in the browser. | [default to 1]

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestGet

> SignatureRequestGetResponse SignatureRequestGet(ctx, signatureRequestId).Execute()

Get Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to retrieve.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestGet(context.Background(), signatureRequestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestGet`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestList

> SignatureRequestListResponse SignatureRequestList(ctx).AccountId(accountId).Page(page).PageSize(pageSize).Query(query).Execute()

List Signature Requests



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
	accountId := "accountId_example" // string | Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. (optional)
	page := int32(1) // int32 | Which page number of the SignatureRequest List to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. (optional) (default to 20)
	query := "query_example" // string | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestList(context.Background()).AccountId(accountId).Page(page).PageSize(pageSize).Query(query).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestList`: SignatureRequestListResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **string** | Which account to return SignatureRequests for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. | 
 **page** | **int32** | Which page number of the SignatureRequest List to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [default to 20]
 **query** | **string** | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | 

### Return type

[**SignatureRequestListResponse**](SignatureRequestListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestReleaseHold

> SignatureRequestGetResponse SignatureRequestReleaseHold(ctx, signatureRequestId).Execute()

Release On-Hold Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to release.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestReleaseHold(context.Background(), signatureRequestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestReleaseHold``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestReleaseHold`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestReleaseHold`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to release. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestReleaseHoldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestRemind

> SignatureRequestGetResponse SignatureRequestRemind(ctx, signatureRequestId).SignatureRequestRemindRequest(signatureRequestRemindRequest).Execute()

Send Request Reminder



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to send a reminder for.
	signatureRequestRemindRequest := *openapiclient.NewSignatureRequestRemindRequest("EmailAddress_example") // SignatureRequestRemindRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestRemind(context.Background(), signatureRequestId).SignatureRequestRemindRequest(signatureRequestRemindRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestRemind``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestRemind`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestRemind`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to send a reminder for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestRemindRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestRemindRequest** | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestRemove

> SignatureRequestRemove(ctx, signatureRequestId).Execute()

Remove Signature Request Access



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to remove.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SignatureRequestAPI.SignatureRequestRemove(context.Background(), signatureRequestId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestRemove``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to remove. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestRemoveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestSend

> SignatureRequestGetResponse SignatureRequestSend(ctx).SignatureRequestSendRequest(signatureRequestSendRequest).Execute()

Send Signature Request



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
	signatureRequestSendRequest := *openapiclient.NewSignatureRequestSendRequest() // SignatureRequestSendRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestSend(context.Background()).SignatureRequestSendRequest(signatureRequestSendRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestSend``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestSend`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestSend`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestSendRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestSendRequest** | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestSendWithTemplate

> SignatureRequestGetResponse SignatureRequestSendWithTemplate(ctx).SignatureRequestSendWithTemplateRequest(signatureRequestSendWithTemplateRequest).Execute()

Send with Template



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
	signatureRequestSendWithTemplateRequest := *openapiclient.NewSignatureRequestSendWithTemplateRequest([]string{"TemplateIds_example"}, []openapiclient.SubSignatureRequestTemplateSigner{*openapiclient.NewSubSignatureRequestTemplateSigner("Role_example", "Name_example", "EmailAddress_example")}) // SignatureRequestSendWithTemplateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestSendWithTemplate(context.Background()).SignatureRequestSendWithTemplateRequest(signatureRequestSendWithTemplateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestSendWithTemplate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestSendWithTemplate`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestSendWithTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestSendWithTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequestSendWithTemplateRequest** | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SignatureRequestUpdate

> SignatureRequestGetResponse SignatureRequestUpdate(ctx, signatureRequestId).SignatureRequestUpdateRequest(signatureRequestUpdateRequest).Execute()

Update Signature Request



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
	signatureRequestId := "fa5c8a0b0f492d768749333ad6fcc214c111e967" // string | The id of the SignatureRequest to update.
	signatureRequestUpdateRequest := *openapiclient.NewSignatureRequestUpdateRequest("SignatureId_example") // SignatureRequestUpdateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SignatureRequestAPI.SignatureRequestUpdate(context.Background(), signatureRequestId).SignatureRequestUpdateRequest(signatureRequestUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SignatureRequestAPI.SignatureRequestUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SignatureRequestUpdate`: SignatureRequestGetResponse
	fmt.Fprintf(os.Stdout, "Response from `SignatureRequestAPI.SignatureRequestUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**signatureRequestId** | **string** | The id of the SignatureRequest to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSignatureRequestUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signatureRequestUpdateRequest** | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md) |  | 

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

