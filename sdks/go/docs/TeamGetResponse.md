# TeamGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Team** | Pointer to [**TeamResponse**](TeamResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTeamGetResponse

`func NewTeamGetResponse() *TeamGetResponse`

NewTeamGetResponse instantiates a new TeamGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamGetResponseWithDefaults

`func NewTeamGetResponseWithDefaults() *TeamGetResponse`

NewTeamGetResponseWithDefaults instantiates a new TeamGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTeam

`func (o *TeamGetResponse) GetTeam() TeamResponse`

GetTeam returns the Team field if non-nil, zero value otherwise.

### GetTeamOk

`func (o *TeamGetResponse) GetTeamOk() (*TeamResponse, bool)`

GetTeamOk returns a tuple with the Team field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeam

`func (o *TeamGetResponse) SetTeam(v TeamResponse)`

SetTeam sets Team field to given value.

### HasTeam

`func (o *TeamGetResponse) HasTeam() bool`

HasTeam returns a boolean if a field has been set.

### GetWarnings

`func (o *TeamGetResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TeamGetResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TeamGetResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TeamGetResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


