# BulkSendJobListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BulkSendJobs** | Pointer to [**[]BulkSendJobResponse**](BulkSendJobResponse.md) | Contains a list of BulkSendJobs that the API caller has access to. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewBulkSendJobListResponse

`func NewBulkSendJobListResponse() *BulkSendJobListResponse`

NewBulkSendJobListResponse instantiates a new BulkSendJobListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkSendJobListResponseWithDefaults

`func NewBulkSendJobListResponseWithDefaults() *BulkSendJobListResponse`

NewBulkSendJobListResponseWithDefaults instantiates a new BulkSendJobListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBulkSendJobs

`func (o *BulkSendJobListResponse) GetBulkSendJobs() []BulkSendJobResponse`

GetBulkSendJobs returns the BulkSendJobs field if non-nil, zero value otherwise.

### GetBulkSendJobsOk

`func (o *BulkSendJobListResponse) GetBulkSendJobsOk() (*[]BulkSendJobResponse, bool)`

GetBulkSendJobsOk returns a tuple with the BulkSendJobs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkSendJobs

`func (o *BulkSendJobListResponse) SetBulkSendJobs(v []BulkSendJobResponse)`

SetBulkSendJobs sets BulkSendJobs field to given value.

### HasBulkSendJobs

`func (o *BulkSendJobListResponse) HasBulkSendJobs() bool`

HasBulkSendJobs returns a boolean if a field has been set.

### GetListInfo

`func (o *BulkSendJobListResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *BulkSendJobListResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *BulkSendJobListResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *BulkSendJobListResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *BulkSendJobListResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BulkSendJobListResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BulkSendJobListResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BulkSendJobListResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


