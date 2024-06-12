# TeamInviteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | Pointer to **string** | Email address of the user invited to this team. | [optional] 
**TeamId** | Pointer to **string** | Id of the team. | [optional] 
**Role** | Pointer to **string** | Role of the user invited to this team. | [optional] 
**SentAt** | Pointer to **int32** | Timestamp when the invitation was sent. | [optional] 
**RedeemedAt** | Pointer to **int32** | Timestamp when the invitation was redeemed. | [optional] 
**ExpiresAt** | Pointer to **int32** | Timestamp when the invitation is expiring. | [optional] 

## Methods

### NewTeamInviteResponse

`func NewTeamInviteResponse() *TeamInviteResponse`

NewTeamInviteResponse instantiates a new TeamInviteResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamInviteResponseWithDefaults

`func NewTeamInviteResponseWithDefaults() *TeamInviteResponse`

NewTeamInviteResponseWithDefaults instantiates a new TeamInviteResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *TeamInviteResponse) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TeamInviteResponse) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TeamInviteResponse) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TeamInviteResponse) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetTeamId

`func (o *TeamInviteResponse) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *TeamInviteResponse) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *TeamInviteResponse) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *TeamInviteResponse) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetRole

`func (o *TeamInviteResponse) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *TeamInviteResponse) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *TeamInviteResponse) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *TeamInviteResponse) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSentAt

`func (o *TeamInviteResponse) GetSentAt() int32`

GetSentAt returns the SentAt field if non-nil, zero value otherwise.

### GetSentAtOk

`func (o *TeamInviteResponse) GetSentAtOk() (*int32, bool)`

GetSentAtOk returns a tuple with the SentAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSentAt

`func (o *TeamInviteResponse) SetSentAt(v int32)`

SetSentAt sets SentAt field to given value.

### HasSentAt

`func (o *TeamInviteResponse) HasSentAt() bool`

HasSentAt returns a boolean if a field has been set.

### GetRedeemedAt

`func (o *TeamInviteResponse) GetRedeemedAt() int32`

GetRedeemedAt returns the RedeemedAt field if non-nil, zero value otherwise.

### GetRedeemedAtOk

`func (o *TeamInviteResponse) GetRedeemedAtOk() (*int32, bool)`

GetRedeemedAtOk returns a tuple with the RedeemedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemedAt

`func (o *TeamInviteResponse) SetRedeemedAt(v int32)`

SetRedeemedAt sets RedeemedAt field to given value.

### HasRedeemedAt

`func (o *TeamInviteResponse) HasRedeemedAt() bool`

HasRedeemedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *TeamInviteResponse) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *TeamInviteResponse) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *TeamInviteResponse) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *TeamInviteResponse) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


