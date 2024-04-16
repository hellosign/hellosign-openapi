# ErrorResponseError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorMsg** | **string** | Message describing an error. | 
**ErrorPath** | Pointer to **string** | Path at which an error occurred. | [optional] 
**ErrorName** | **string** | Name of the error. | 

## Methods

### NewErrorResponseError

`func NewErrorResponseError(errorMsg string, errorName string, ) *ErrorResponseError`

NewErrorResponseError instantiates a new ErrorResponseError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorResponseErrorWithDefaults

`func NewErrorResponseErrorWithDefaults() *ErrorResponseError`

NewErrorResponseErrorWithDefaults instantiates a new ErrorResponseError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrorMsg

`func (o *ErrorResponseError) GetErrorMsg() string`

GetErrorMsg returns the ErrorMsg field if non-nil, zero value otherwise.

### GetErrorMsgOk

`func (o *ErrorResponseError) GetErrorMsgOk() (*string, bool)`

GetErrorMsgOk returns a tuple with the ErrorMsg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMsg

`func (o *ErrorResponseError) SetErrorMsg(v string)`

SetErrorMsg sets ErrorMsg field to given value.


### GetErrorPath

`func (o *ErrorResponseError) GetErrorPath() string`

GetErrorPath returns the ErrorPath field if non-nil, zero value otherwise.

### GetErrorPathOk

`func (o *ErrorResponseError) GetErrorPathOk() (*string, bool)`

GetErrorPathOk returns a tuple with the ErrorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorPath

`func (o *ErrorResponseError) SetErrorPath(v string)`

SetErrorPath sets ErrorPath field to given value.

### HasErrorPath

`func (o *ErrorResponseError) HasErrorPath() bool`

HasErrorPath returns a boolean if a field has been set.

### GetErrorName

`func (o *ErrorResponseError) GetErrorName() string`

GetErrorName returns the ErrorName field if non-nil, zero value otherwise.

### GetErrorNameOk

`func (o *ErrorResponseError) GetErrorNameOk() (*string, bool)`

GetErrorNameOk returns a tuple with the ErrorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorName

`func (o *ErrorResponseError) SetErrorName(v string)`

SetErrorName sets ErrorName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


