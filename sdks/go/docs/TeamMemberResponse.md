# TeamMemberResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Account id of the team member. | [optional] 
**EmailAddress** | Pointer to **string** | Email address of the team member. | [optional] 
**Role** | Pointer to **string** | The specific role a member has on the team. | [optional] 

## Methods

### NewTeamMemberResponse

`func NewTeamMemberResponse() *TeamMemberResponse`

NewTeamMemberResponse instantiates a new TeamMemberResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamMemberResponseWithDefaults

`func NewTeamMemberResponseWithDefaults() *TeamMemberResponse`

NewTeamMemberResponseWithDefaults instantiates a new TeamMemberResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TeamMemberResponse) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TeamMemberResponse) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TeamMemberResponse) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TeamMemberResponse) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TeamMemberResponse) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TeamMemberResponse) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TeamMemberResponse) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TeamMemberResponse) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetRole

`func (o *TeamMemberResponse) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *TeamMemberResponse) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *TeamMemberResponse) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *TeamMemberResponse) HasRole() bool`

HasRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


