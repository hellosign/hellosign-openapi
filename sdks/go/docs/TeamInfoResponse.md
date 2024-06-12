# TeamInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TeamId** | Pointer to **string** | The id of a team | [optional] 
**TeamParent** | Pointer to [**NullableTeamParentResponse**](TeamParentResponse.md) |  | [optional] 
**Name** | Pointer to **string** | The name of a team | [optional] 
**NumMembers** | Pointer to **int32** | Number of members within a team | [optional] 
**NumSubTeams** | Pointer to **int32** | Number of sub teams within a team | [optional] 

## Methods

### NewTeamInfoResponse

`func NewTeamInfoResponse() *TeamInfoResponse`

NewTeamInfoResponse instantiates a new TeamInfoResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamInfoResponseWithDefaults

`func NewTeamInfoResponseWithDefaults() *TeamInfoResponse`

NewTeamInfoResponseWithDefaults instantiates a new TeamInfoResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTeamId

`func (o *TeamInfoResponse) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *TeamInfoResponse) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *TeamInfoResponse) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *TeamInfoResponse) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetTeamParent

`func (o *TeamInfoResponse) GetTeamParent() TeamParentResponse`

GetTeamParent returns the TeamParent field if non-nil, zero value otherwise.

### GetTeamParentOk

`func (o *TeamInfoResponse) GetTeamParentOk() (*TeamParentResponse, bool)`

GetTeamParentOk returns a tuple with the TeamParent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamParent

`func (o *TeamInfoResponse) SetTeamParent(v TeamParentResponse)`

SetTeamParent sets TeamParent field to given value.

### HasTeamParent

`func (o *TeamInfoResponse) HasTeamParent() bool`

HasTeamParent returns a boolean if a field has been set.

### SetTeamParentNil

`func (o *TeamInfoResponse) SetTeamParentNil(b bool)`

 SetTeamParentNil sets the value for TeamParent to be an explicit nil

### UnsetTeamParent
`func (o *TeamInfoResponse) UnsetTeamParent()`

UnsetTeamParent ensures that no value is present for TeamParent, not even an explicit nil
### GetName

`func (o *TeamInfoResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TeamInfoResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TeamInfoResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TeamInfoResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNumMembers

`func (o *TeamInfoResponse) GetNumMembers() int32`

GetNumMembers returns the NumMembers field if non-nil, zero value otherwise.

### GetNumMembersOk

`func (o *TeamInfoResponse) GetNumMembersOk() (*int32, bool)`

GetNumMembersOk returns a tuple with the NumMembers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumMembers

`func (o *TeamInfoResponse) SetNumMembers(v int32)`

SetNumMembers sets NumMembers field to given value.

### HasNumMembers

`func (o *TeamInfoResponse) HasNumMembers() bool`

HasNumMembers returns a boolean if a field has been set.

### GetNumSubTeams

`func (o *TeamInfoResponse) GetNumSubTeams() int32`

GetNumSubTeams returns the NumSubTeams field if non-nil, zero value otherwise.

### GetNumSubTeamsOk

`func (o *TeamInfoResponse) GetNumSubTeamsOk() (*int32, bool)`

GetNumSubTeamsOk returns a tuple with the NumSubTeams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumSubTeams

`func (o *TeamInfoResponse) SetNumSubTeams(v int32)`

SetNumSubTeams sets NumSubTeams field to given value.

### HasNumSubTeams

`func (o *TeamInfoResponse) HasNumSubTeams() bool`

HasNumSubTeams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


