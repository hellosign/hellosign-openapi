# TeamMembersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeamMembers** | Pointer to [**[]TeamMemberResponse**](TeamMemberResponse.md) | Contains a list of team members and their roles for a specific team. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) |  | [optional] 

## Methods

### NewTeamMembersResponse

`func NewTeamMembersResponse() *TeamMembersResponse`

NewTeamMembersResponse instantiates a new TeamMembersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamMembersResponseWithDefaults

`func NewTeamMembersResponseWithDefaults() *TeamMembersResponse`

NewTeamMembersResponseWithDefaults instantiates a new TeamMembersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTeamMembers

`func (o *TeamMembersResponse) GetTeamMembers() []TeamMemberResponse`

GetTeamMembers returns the TeamMembers field if non-nil, zero value otherwise.

### GetTeamMembersOk

`func (o *TeamMembersResponse) GetTeamMembersOk() (*[]TeamMemberResponse, bool)`

GetTeamMembersOk returns a tuple with the TeamMembers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamMembers

`func (o *TeamMembersResponse) SetTeamMembers(v []TeamMemberResponse)`

SetTeamMembers sets TeamMembers field to given value.

### HasTeamMembers

`func (o *TeamMembersResponse) HasTeamMembers() bool`

HasTeamMembers returns a boolean if a field has been set.

### GetListInfo

`func (o *TeamMembersResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *TeamMembersResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *TeamMembersResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *TeamMembersResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *TeamMembersResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TeamMembersResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TeamMembersResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TeamMembersResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


