# BulkSendJobGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BulkSendJob** | Pointer to [**BulkSendJobResponse**](BulkSendJobResponse.md) |  | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**SignatureRequests** | Pointer to [**[]BulkSendJobGetResponseSignatureRequests**](BulkSendJobGetResponseSignatureRequests.md) | Contains information about the Signature Requests sent in bulk. | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewBulkSendJobGetResponse

`func NewBulkSendJobGetResponse() *BulkSendJobGetResponse`

NewBulkSendJobGetResponse instantiates a new BulkSendJobGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkSendJobGetResponseWithDefaults

`func NewBulkSendJobGetResponseWithDefaults() *BulkSendJobGetResponse`

NewBulkSendJobGetResponseWithDefaults instantiates a new BulkSendJobGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBulkSendJob

`func (o *BulkSendJobGetResponse) GetBulkSendJob() BulkSendJobResponse`

GetBulkSendJob returns the BulkSendJob field if non-nil, zero value otherwise.

### GetBulkSendJobOk

`func (o *BulkSendJobGetResponse) GetBulkSendJobOk() (*BulkSendJobResponse, bool)`

GetBulkSendJobOk returns a tuple with the BulkSendJob field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkSendJob

`func (o *BulkSendJobGetResponse) SetBulkSendJob(v BulkSendJobResponse)`

SetBulkSendJob sets BulkSendJob field to given value.

### HasBulkSendJob

`func (o *BulkSendJobGetResponse) HasBulkSendJob() bool`

HasBulkSendJob returns a boolean if a field has been set.

### GetListInfo

`func (o *BulkSendJobGetResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *BulkSendJobGetResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *BulkSendJobGetResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *BulkSendJobGetResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetSignatureRequests

`func (o *BulkSendJobGetResponse) GetSignatureRequests() []BulkSendJobGetResponseSignatureRequests`

GetSignatureRequests returns the SignatureRequests field if non-nil, zero value otherwise.

### GetSignatureRequestsOk

`func (o *BulkSendJobGetResponse) GetSignatureRequestsOk() (*[]BulkSendJobGetResponseSignatureRequests, bool)`

GetSignatureRequestsOk returns a tuple with the SignatureRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequests

`func (o *BulkSendJobGetResponse) SetSignatureRequests(v []BulkSendJobGetResponseSignatureRequests)`

SetSignatureRequests sets SignatureRequests field to given value.

### HasSignatureRequests

`func (o *BulkSendJobGetResponse) HasSignatureRequests() bool`

HasSignatureRequests returns a boolean if a field has been set.

### GetWarnings

`func (o *BulkSendJobGetResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BulkSendJobGetResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BulkSendJobGetResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BulkSendJobGetResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


