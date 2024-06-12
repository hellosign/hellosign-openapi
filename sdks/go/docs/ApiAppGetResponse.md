# ApiAppGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiApp** | Pointer to [**ApiAppResponse**](ApiAppResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewApiAppGetResponse

`func NewApiAppGetResponse() *ApiAppGetResponse`

NewApiAppGetResponse instantiates a new ApiAppGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppGetResponseWithDefaults

`func NewApiAppGetResponseWithDefaults() *ApiAppGetResponse`

NewApiAppGetResponseWithDefaults instantiates a new ApiAppGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiApp

`func (o *ApiAppGetResponse) GetApiApp() ApiAppResponse`

GetApiApp returns the ApiApp field if non-nil, zero value otherwise.

### GetApiAppOk

`func (o *ApiAppGetResponse) GetApiAppOk() (*ApiAppResponse, bool)`

GetApiAppOk returns a tuple with the ApiApp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiApp

`func (o *ApiAppGetResponse) SetApiApp(v ApiAppResponse)`

SetApiApp sets ApiApp field to given value.

### HasApiApp

`func (o *ApiAppGetResponse) HasApiApp() bool`

HasApiApp returns a boolean if a field has been set.

### GetWarnings

`func (o *ApiAppGetResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ApiAppGetResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ApiAppGetResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ApiAppGetResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


