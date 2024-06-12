# SignatureRequestListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignatureRequests** | Pointer to [**[]SignatureRequestResponse**](SignatureRequestResponse.md) | Contains information about signature requests. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewSignatureRequestListResponse

`func NewSignatureRequestListResponse() *SignatureRequestListResponse`

NewSignatureRequestListResponse instantiates a new SignatureRequestListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestListResponseWithDefaults

`func NewSignatureRequestListResponseWithDefaults() *SignatureRequestListResponse`

NewSignatureRequestListResponseWithDefaults instantiates a new SignatureRequestListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignatureRequests

`func (o *SignatureRequestListResponse) GetSignatureRequests() []SignatureRequestResponse`

GetSignatureRequests returns the SignatureRequests field if non-nil, zero value otherwise.

### GetSignatureRequestsOk

`func (o *SignatureRequestListResponse) GetSignatureRequestsOk() (*[]SignatureRequestResponse, bool)`

GetSignatureRequestsOk returns a tuple with the SignatureRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequests

`func (o *SignatureRequestListResponse) SetSignatureRequests(v []SignatureRequestResponse)`

SetSignatureRequests sets SignatureRequests field to given value.

### HasSignatureRequests

`func (o *SignatureRequestListResponse) HasSignatureRequests() bool`

HasSignatureRequests returns a boolean if a field has been set.

### GetListInfo

`func (o *SignatureRequestListResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *SignatureRequestListResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *SignatureRequestListResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *SignatureRequestListResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *SignatureRequestListResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SignatureRequestListResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SignatureRequestListResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SignatureRequestListResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


