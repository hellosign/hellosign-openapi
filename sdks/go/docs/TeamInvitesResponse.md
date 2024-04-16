# TeamInvitesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeamInvites** | Pointer to [**[]TeamInviteResponse**](TeamInviteResponse.md) | Contains a list of team invites and their roles. | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) |  | [optional] 

## Methods

### NewTeamInvitesResponse

`func NewTeamInvitesResponse() *TeamInvitesResponse`

NewTeamInvitesResponse instantiates a new TeamInvitesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamInvitesResponseWithDefaults

`func NewTeamInvitesResponseWithDefaults() *TeamInvitesResponse`

NewTeamInvitesResponseWithDefaults instantiates a new TeamInvitesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTeamInvites

`func (o *TeamInvitesResponse) GetTeamInvites() []TeamInviteResponse`

GetTeamInvites returns the TeamInvites field if non-nil, zero value otherwise.

### GetTeamInvitesOk

`func (o *TeamInvitesResponse) GetTeamInvitesOk() (*[]TeamInviteResponse, bool)`

GetTeamInvitesOk returns a tuple with the TeamInvites field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamInvites

`func (o *TeamInvitesResponse) SetTeamInvites(v []TeamInviteResponse)`

SetTeamInvites sets TeamInvites field to given value.

### HasTeamInvites

`func (o *TeamInvitesResponse) HasTeamInvites() bool`

HasTeamInvites returns a boolean if a field has been set.

### GetWarnings

`func (o *TeamInvitesResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TeamInvitesResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TeamInvitesResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TeamInvitesResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


