# BulkSendJobResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BulkSendJobId** | Pointer to **NullableString** | The id of the BulkSendJob. | [optional] 
**Total** | Pointer to **int32** | The total amount of Signature Requests queued for sending. | [optional] 
**IsCreator** | Pointer to **bool** | True if you are the owner of this BulkSendJob, false if it&#39;s been shared with you by a team member. | [optional] 
**CreatedAt** | Pointer to **int32** | Time that the BulkSendJob was created. | [optional] 

## Methods

### NewBulkSendJobResponse

`func NewBulkSendJobResponse() *BulkSendJobResponse`

NewBulkSendJobResponse instantiates a new BulkSendJobResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkSendJobResponseWithDefaults

`func NewBulkSendJobResponseWithDefaults() *BulkSendJobResponse`

NewBulkSendJobResponseWithDefaults instantiates a new BulkSendJobResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBulkSendJobId

`func (o *BulkSendJobResponse) GetBulkSendJobId() string`

GetBulkSendJobId returns the BulkSendJobId field if non-nil, zero value otherwise.

### GetBulkSendJobIdOk

`func (o *BulkSendJobResponse) GetBulkSendJobIdOk() (*string, bool)`

GetBulkSendJobIdOk returns a tuple with the BulkSendJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkSendJobId

`func (o *BulkSendJobResponse) SetBulkSendJobId(v string)`

SetBulkSendJobId sets BulkSendJobId field to given value.

### HasBulkSendJobId

`func (o *BulkSendJobResponse) HasBulkSendJobId() bool`

HasBulkSendJobId returns a boolean if a field has been set.

### SetBulkSendJobIdNil

`func (o *BulkSendJobResponse) SetBulkSendJobIdNil(b bool)`

 SetBulkSendJobIdNil sets the value for BulkSendJobId to be an explicit nil

### UnsetBulkSendJobId
`func (o *BulkSendJobResponse) UnsetBulkSendJobId()`

UnsetBulkSendJobId ensures that no value is present for BulkSendJobId, not even an explicit nil
### GetTotal

`func (o *BulkSendJobResponse) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *BulkSendJobResponse) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *BulkSendJobResponse) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *BulkSendJobResponse) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetIsCreator

`func (o *BulkSendJobResponse) GetIsCreator() bool`

GetIsCreator returns the IsCreator field if non-nil, zero value otherwise.

### GetIsCreatorOk

`func (o *BulkSendJobResponse) GetIsCreatorOk() (*bool, bool)`

GetIsCreatorOk returns a tuple with the IsCreator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCreator

`func (o *BulkSendJobResponse) SetIsCreator(v bool)`

SetIsCreator sets IsCreator field to given value.

### HasIsCreator

`func (o *BulkSendJobResponse) HasIsCreator() bool`

HasIsCreator returns a boolean if a field has been set.

### GetCreatedAt

`func (o *BulkSendJobResponse) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *BulkSendJobResponse) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *BulkSendJobResponse) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *BulkSendJobResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


