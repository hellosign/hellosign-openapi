# TeamSubTeamsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubTeams** | Pointer to [**[]SubTeamResponse**](SubTeamResponse.md) | Contains a list with sub teams. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) |  | [optional] 

## Methods

### NewTeamSubTeamsResponse

`func NewTeamSubTeamsResponse() *TeamSubTeamsResponse`

NewTeamSubTeamsResponse instantiates a new TeamSubTeamsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamSubTeamsResponseWithDefaults

`func NewTeamSubTeamsResponseWithDefaults() *TeamSubTeamsResponse`

NewTeamSubTeamsResponseWithDefaults instantiates a new TeamSubTeamsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubTeams

`func (o *TeamSubTeamsResponse) GetSubTeams() []SubTeamResponse`

GetSubTeams returns the SubTeams field if non-nil, zero value otherwise.

### GetSubTeamsOk

`func (o *TeamSubTeamsResponse) GetSubTeamsOk() (*[]SubTeamResponse, bool)`

GetSubTeamsOk returns a tuple with the SubTeams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubTeams

`func (o *TeamSubTeamsResponse) SetSubTeams(v []SubTeamResponse)`

SetSubTeams sets SubTeams field to given value.

### HasSubTeams

`func (o *TeamSubTeamsResponse) HasSubTeams() bool`

HasSubTeams returns a boolean if a field has been set.

### GetListInfo

`func (o *TeamSubTeamsResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *TeamSubTeamsResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *TeamSubTeamsResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *TeamSubTeamsResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *TeamSubTeamsResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TeamSubTeamsResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TeamSubTeamsResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TeamSubTeamsResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


