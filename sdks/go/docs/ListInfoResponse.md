# ListInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumPages** | Pointer to **int32** | Total number of pages available. | [optional] 
**NumResults** | Pointer to **NullableInt32** | Total number of objects available. | [optional] 
**Page** | Pointer to **int32** | Number of the page being returned. | [optional] 
**PageSize** | Pointer to **int32** | Objects returned per page. | [optional] 

## Methods

### NewListInfoResponse

`func NewListInfoResponse() *ListInfoResponse`

NewListInfoResponse instantiates a new ListInfoResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListInfoResponseWithDefaults

`func NewListInfoResponseWithDefaults() *ListInfoResponse`

NewListInfoResponseWithDefaults instantiates a new ListInfoResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumPages

`func (o *ListInfoResponse) GetNumPages() int32`

GetNumPages returns the NumPages field if non-nil, zero value otherwise.

### GetNumPagesOk

`func (o *ListInfoResponse) GetNumPagesOk() (*int32, bool)`

GetNumPagesOk returns a tuple with the NumPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumPages

`func (o *ListInfoResponse) SetNumPages(v int32)`

SetNumPages sets NumPages field to given value.

### HasNumPages

`func (o *ListInfoResponse) HasNumPages() bool`

HasNumPages returns a boolean if a field has been set.

### GetNumResults

`func (o *ListInfoResponse) GetNumResults() int32`

GetNumResults returns the NumResults field if non-nil, zero value otherwise.

### GetNumResultsOk

`func (o *ListInfoResponse) GetNumResultsOk() (*int32, bool)`

GetNumResultsOk returns a tuple with the NumResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumResults

`func (o *ListInfoResponse) SetNumResults(v int32)`

SetNumResults sets NumResults field to given value.

### HasNumResults

`func (o *ListInfoResponse) HasNumResults() bool`

HasNumResults returns a boolean if a field has been set.

### SetNumResultsNil

`func (o *ListInfoResponse) SetNumResultsNil(b bool)`

 SetNumResultsNil sets the value for NumResults to be an explicit nil

### UnsetNumResults
`func (o *ListInfoResponse) UnsetNumResults()`

UnsetNumResults ensures that no value is present for NumResults, not even an explicit nil
### GetPage

`func (o *ListInfoResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *ListInfoResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *ListInfoResponse) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *ListInfoResponse) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *ListInfoResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *ListInfoResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *ListInfoResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *ListInfoResponse) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


