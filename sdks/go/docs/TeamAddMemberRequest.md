# TeamAddMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are provided, the account id prevails.  Account id of the user to invite to your Team. | [optional] 
**EmailAddress** | Pointer to **string** | &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both are provided, the account id prevails.  Email address of the user to invite to your Team. | [optional] 
**Role** | Pointer to **string** | A role member will take in a new Team.  **Note**: This parameter is used only if &#x60;team_id&#x60; is provided. | [optional] 

## Methods

### NewTeamAddMemberRequest

`func NewTeamAddMemberRequest() *TeamAddMemberRequest`

NewTeamAddMemberRequest instantiates a new TeamAddMemberRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamAddMemberRequestWithDefaults

`func NewTeamAddMemberRequestWithDefaults() *TeamAddMemberRequest`

NewTeamAddMemberRequestWithDefaults instantiates a new TeamAddMemberRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TeamAddMemberRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TeamAddMemberRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TeamAddMemberRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TeamAddMemberRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TeamAddMemberRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TeamAddMemberRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TeamAddMemberRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TeamAddMemberRequest) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetRole

`func (o *TeamAddMemberRequest) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *TeamAddMemberRequest) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *TeamAddMemberRequest) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *TeamAddMemberRequest) HasRole() bool`

HasRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


