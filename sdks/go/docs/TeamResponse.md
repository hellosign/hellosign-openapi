# TeamResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of your Team | [optional] 
**Accounts** | Pointer to [**[]AccountResponse**](AccountResponse.md) |  | [optional] 
**InvitedAccounts** | Pointer to [**[]AccountResponse**](AccountResponse.md) | A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in &#x60;GET /account&#x60;. | [optional] 
**InvitedEmails** | Pointer to **[]string** | A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account. | [optional] 

## Methods

### NewTeamResponse

`func NewTeamResponse() *TeamResponse`

NewTeamResponse instantiates a new TeamResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTeamResponseWithDefaults

`func NewTeamResponseWithDefaults() *TeamResponse`

NewTeamResponseWithDefaults instantiates a new TeamResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TeamResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TeamResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TeamResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TeamResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAccounts

`func (o *TeamResponse) GetAccounts() []AccountResponse`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *TeamResponse) GetAccountsOk() (*[]AccountResponse, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *TeamResponse) SetAccounts(v []AccountResponse)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *TeamResponse) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetInvitedAccounts

`func (o *TeamResponse) GetInvitedAccounts() []AccountResponse`

GetInvitedAccounts returns the InvitedAccounts field if non-nil, zero value otherwise.

### GetInvitedAccountsOk

`func (o *TeamResponse) GetInvitedAccountsOk() (*[]AccountResponse, bool)`

GetInvitedAccountsOk returns a tuple with the InvitedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvitedAccounts

`func (o *TeamResponse) SetInvitedAccounts(v []AccountResponse)`

SetInvitedAccounts sets InvitedAccounts field to given value.

### HasInvitedAccounts

`func (o *TeamResponse) HasInvitedAccounts() bool`

HasInvitedAccounts returns a boolean if a field has been set.

### GetInvitedEmails

`func (o *TeamResponse) GetInvitedEmails() []string`

GetInvitedEmails returns the InvitedEmails field if non-nil, zero value otherwise.

### GetInvitedEmailsOk

`func (o *TeamResponse) GetInvitedEmailsOk() (*[]string, bool)`

GetInvitedEmailsOk returns a tuple with the InvitedEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvitedEmails

`func (o *TeamResponse) SetInvitedEmails(v []string)`

SetInvitedEmails sets InvitedEmails field to given value.

### HasInvitedEmails

`func (o *TeamResponse) HasInvitedEmails() bool`

HasInvitedEmails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


