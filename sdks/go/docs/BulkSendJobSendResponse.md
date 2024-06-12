# BulkSendJobSendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BulkSendJob** | Pointer to [**BulkSendJobResponse**](BulkSendJobResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewBulkSendJobSendResponse

`func NewBulkSendJobSendResponse() *BulkSendJobSendResponse`

NewBulkSendJobSendResponse instantiates a new BulkSendJobSendResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkSendJobSendResponseWithDefaults

`func NewBulkSendJobSendResponseWithDefaults() *BulkSendJobSendResponse`

NewBulkSendJobSendResponseWithDefaults instantiates a new BulkSendJobSendResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBulkSendJob

`func (o *BulkSendJobSendResponse) GetBulkSendJob() BulkSendJobResponse`

GetBulkSendJob returns the BulkSendJob field if non-nil, zero value otherwise.

### GetBulkSendJobOk

`func (o *BulkSendJobSendResponse) GetBulkSendJobOk() (*BulkSendJobResponse, bool)`

GetBulkSendJobOk returns a tuple with the BulkSendJob field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkSendJob

`func (o *BulkSendJobSendResponse) SetBulkSendJob(v BulkSendJobResponse)`

SetBulkSendJob sets BulkSendJob field to given value.

### HasBulkSendJob

`func (o *BulkSendJobSendResponse) HasBulkSendJob() bool`

HasBulkSendJob returns a boolean if a field has been set.

### GetWarnings

`func (o *BulkSendJobSendResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BulkSendJobSendResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BulkSendJobSendResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BulkSendJobSendResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


