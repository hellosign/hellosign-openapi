# ApiAppListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiApps** | Pointer to [**[]ApiAppResponse**](ApiAppResponse.md) | Contains information about API Apps. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewApiAppListResponse

`func NewApiAppListResponse() *ApiAppListResponse`

NewApiAppListResponse instantiates a new ApiAppListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppListResponseWithDefaults

`func NewApiAppListResponseWithDefaults() *ApiAppListResponse`

NewApiAppListResponseWithDefaults instantiates a new ApiAppListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiApps

`func (o *ApiAppListResponse) GetApiApps() []ApiAppResponse`

GetApiApps returns the ApiApps field if non-nil, zero value otherwise.

### GetApiAppsOk

`func (o *ApiAppListResponse) GetApiAppsOk() (*[]ApiAppResponse, bool)`

GetApiAppsOk returns a tuple with the ApiApps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiApps

`func (o *ApiAppListResponse) SetApiApps(v []ApiAppResponse)`

SetApiApps sets ApiApps field to given value.

### HasApiApps

`func (o *ApiAppListResponse) HasApiApps() bool`

HasApiApps returns a boolean if a field has been set.

### GetListInfo

`func (o *ApiAppListResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *ApiAppListResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *ApiAppListResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *ApiAppListResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *ApiAppListResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ApiAppListResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ApiAppListResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ApiAppListResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


