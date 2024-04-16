# AccountCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**AccountResponse**](AccountResponse.md) |  | [optional] 
**OauthData** | Pointer to [**OAuthTokenResponse**](OAuthTokenResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewAccountCreateResponse

`func NewAccountCreateResponse() *AccountCreateResponse`

NewAccountCreateResponse instantiates a new AccountCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCreateResponseWithDefaults

`func NewAccountCreateResponseWithDefaults() *AccountCreateResponse`

NewAccountCreateResponseWithDefaults instantiates a new AccountCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *AccountCreateResponse) GetAccount() AccountResponse`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountCreateResponse) GetAccountOk() (*AccountResponse, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountCreateResponse) SetAccount(v AccountResponse)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *AccountCreateResponse) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetOauthData

`func (o *AccountCreateResponse) GetOauthData() OAuthTokenResponse`

GetOauthData returns the OauthData field if non-nil, zero value otherwise.

### GetOauthDataOk

`func (o *AccountCreateResponse) GetOauthDataOk() (*OAuthTokenResponse, bool)`

GetOauthDataOk returns a tuple with the OauthData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauthData

`func (o *AccountCreateResponse) SetOauthData(v OAuthTokenResponse)`

SetOauthData sets OauthData field to given value.

### HasOauthData

`func (o *AccountCreateResponse) HasOauthData() bool`

HasOauthData returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountCreateResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountCreateResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountCreateResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountCreateResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


