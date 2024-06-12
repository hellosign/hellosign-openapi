# TeamRemoveMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | **account_id** or **email_address** is required. If both are provided, the account id prevails.  Account id to remove from your Team. | [optional] 
**EmailAddress** | Pointer to **string** | **account_id** or **email_address** is required. If both are provided, the account id prevails.  Email address of the Account to remove from your Team. | [optional] 
**NewOwnerEmailAddress** | Pointer to **string** | The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.  **Note**: Only available for Enterprise plans. | [optional] 
**NewTeamId** | Pointer to **string** | Id of the new Team. | [optional] 
**NewRole** | Pointer to **string** | A new role member will take in a new Team.  **Note**: This parameter is used only if &#x60;new_team_id&#x60; is provided. | [optional] 

## Methods

### NewTeamRemoveMemberRequest

`func NewTeamRemoveMemberRequest() *TeamRemoveMemberRequest`

NewTeamRemoveMemberRequest instantiates a new TeamRemoveMemberRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamRemoveMemberRequestWithDefaults

`func NewTeamRemoveMemberRequestWithDefaults() *TeamRemoveMemberRequest`

NewTeamRemoveMemberRequestWithDefaults instantiates a new TeamRemoveMemberRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TeamRemoveMemberRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TeamRemoveMemberRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TeamRemoveMemberRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TeamRemoveMemberRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TeamRemoveMemberRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TeamRemoveMemberRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TeamRemoveMemberRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TeamRemoveMemberRequest) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetNewOwnerEmailAddress

`func (o *TeamRemoveMemberRequest) GetNewOwnerEmailAddress() string`

GetNewOwnerEmailAddress returns the NewOwnerEmailAddress field if non-nil, zero value otherwise.

### GetNewOwnerEmailAddressOk

`func (o *TeamRemoveMemberRequest) GetNewOwnerEmailAddressOk() (*string, bool)`

GetNewOwnerEmailAddressOk returns a tuple with the NewOwnerEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewOwnerEmailAddress

`func (o *TeamRemoveMemberRequest) SetNewOwnerEmailAddress(v string)`

SetNewOwnerEmailAddress sets NewOwnerEmailAddress field to given value.

### HasNewOwnerEmailAddress

`func (o *TeamRemoveMemberRequest) HasNewOwnerEmailAddress() bool`

HasNewOwnerEmailAddress returns a boolean if a field has been set.

### GetNewTeamId

`func (o *TeamRemoveMemberRequest) GetNewTeamId() string`

GetNewTeamId returns the NewTeamId field if non-nil, zero value otherwise.

### GetNewTeamIdOk

`func (o *TeamRemoveMemberRequest) GetNewTeamIdOk() (*string, bool)`

GetNewTeamIdOk returns a tuple with the NewTeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewTeamId

`func (o *TeamRemoveMemberRequest) SetNewTeamId(v string)`

SetNewTeamId sets NewTeamId field to given value.

### HasNewTeamId

`func (o *TeamRemoveMemberRequest) HasNewTeamId() bool`

HasNewTeamId returns a boolean if a field has been set.

### GetNewRole

`func (o *TeamRemoveMemberRequest) GetNewRole() string`

GetNewRole returns the NewRole field if non-nil, zero value otherwise.

### GetNewRoleOk

`func (o *TeamRemoveMemberRequest) GetNewRoleOk() (*string, bool)`

GetNewRoleOk returns a tuple with the NewRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRole

`func (o *TeamRemoveMemberRequest) SetNewRole(v string)`

SetNewRole sets NewRole field to given value.

### HasNewRole

`func (o *TeamRemoveMemberRequest) HasNewRole() bool`

HasNewRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


