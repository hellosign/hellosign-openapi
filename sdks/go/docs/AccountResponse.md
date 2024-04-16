# AccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The ID of the Account | [optional] 
**EmailAddress** | Pointer to **string** | The email address associated with the Account. | [optional] 
**IsLocked** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has been locked out of their account by a team admin. | [optional] 
**IsPaidHs** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has a paid Dropbox Sign account. | [optional] 
**IsPaidHf** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has a paid HelloFax account. | [optional] 
**Quotas** | Pointer to [**AccountResponseQuotas**](AccountResponseQuotas.md) |  | [optional] 
**CallbackUrl** | Pointer to **NullableString** | The URL that Dropbox Sign events will &#x60;POST&#x60; to. | [optional] 
**RoleCode** | Pointer to **NullableString** | The membership role for the team. | [optional] 
**TeamId** | Pointer to **NullableString** | The id of the team account belongs to. | [optional] 
**Locale** | Pointer to **NullableString** | The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values. | [optional] 

## Methods

### NewAccountResponse

`func NewAccountResponse() *AccountResponse`

NewAccountResponse instantiates a new AccountResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountResponseWithDefaults

`func NewAccountResponseWithDefaults() *AccountResponse`

NewAccountResponseWithDefaults instantiates a new AccountResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *AccountResponse) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountResponse) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountResponse) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountResponse) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *AccountResponse) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *AccountResponse) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *AccountResponse) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *AccountResponse) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetIsLocked

`func (o *AccountResponse) GetIsLocked() bool`

GetIsLocked returns the IsLocked field if non-nil, zero value otherwise.

### GetIsLockedOk

`func (o *AccountResponse) GetIsLockedOk() (*bool, bool)`

GetIsLockedOk returns a tuple with the IsLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLocked

`func (o *AccountResponse) SetIsLocked(v bool)`

SetIsLocked sets IsLocked field to given value.

### HasIsLocked

`func (o *AccountResponse) HasIsLocked() bool`

HasIsLocked returns a boolean if a field has been set.

### GetIsPaidHs

`func (o *AccountResponse) GetIsPaidHs() bool`

GetIsPaidHs returns the IsPaidHs field if non-nil, zero value otherwise.

### GetIsPaidHsOk

`func (o *AccountResponse) GetIsPaidHsOk() (*bool, bool)`

GetIsPaidHsOk returns a tuple with the IsPaidHs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidHs

`func (o *AccountResponse) SetIsPaidHs(v bool)`

SetIsPaidHs sets IsPaidHs field to given value.

### HasIsPaidHs

`func (o *AccountResponse) HasIsPaidHs() bool`

HasIsPaidHs returns a boolean if a field has been set.

### GetIsPaidHf

`func (o *AccountResponse) GetIsPaidHf() bool`

GetIsPaidHf returns the IsPaidHf field if non-nil, zero value otherwise.

### GetIsPaidHfOk

`func (o *AccountResponse) GetIsPaidHfOk() (*bool, bool)`

GetIsPaidHfOk returns a tuple with the IsPaidHf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidHf

`func (o *AccountResponse) SetIsPaidHf(v bool)`

SetIsPaidHf sets IsPaidHf field to given value.

### HasIsPaidHf

`func (o *AccountResponse) HasIsPaidHf() bool`

HasIsPaidHf returns a boolean if a field has been set.

### GetQuotas

`func (o *AccountResponse) GetQuotas() AccountResponseQuotas`

GetQuotas returns the Quotas field if non-nil, zero value otherwise.

### GetQuotasOk

`func (o *AccountResponse) GetQuotasOk() (*AccountResponseQuotas, bool)`

GetQuotasOk returns a tuple with the Quotas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuotas

`func (o *AccountResponse) SetQuotas(v AccountResponseQuotas)`

SetQuotas sets Quotas field to given value.

### HasQuotas

`func (o *AccountResponse) HasQuotas() bool`

HasQuotas returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *AccountResponse) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *AccountResponse) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *AccountResponse) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *AccountResponse) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### SetCallbackUrlNil

`func (o *AccountResponse) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *AccountResponse) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetRoleCode

`func (o *AccountResponse) GetRoleCode() string`

GetRoleCode returns the RoleCode field if non-nil, zero value otherwise.

### GetRoleCodeOk

`func (o *AccountResponse) GetRoleCodeOk() (*string, bool)`

GetRoleCodeOk returns a tuple with the RoleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleCode

`func (o *AccountResponse) SetRoleCode(v string)`

SetRoleCode sets RoleCode field to given value.

### HasRoleCode

`func (o *AccountResponse) HasRoleCode() bool`

HasRoleCode returns a boolean if a field has been set.

### SetRoleCodeNil

`func (o *AccountResponse) SetRoleCodeNil(b bool)`

 SetRoleCodeNil sets the value for RoleCode to be an explicit nil

### UnsetRoleCode
`func (o *AccountResponse) UnsetRoleCode()`

UnsetRoleCode ensures that no value is present for RoleCode, not even an explicit nil
### GetTeamId

`func (o *AccountResponse) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *AccountResponse) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *AccountResponse) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *AccountResponse) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### SetTeamIdNil

`func (o *AccountResponse) SetTeamIdNil(b bool)`

 SetTeamIdNil sets the value for TeamId to be an explicit nil

### UnsetTeamId
`func (o *AccountResponse) UnsetTeamId()`

UnsetTeamId ensures that no value is present for TeamId, not even an explicit nil
### GetLocale

`func (o *AccountResponse) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *AccountResponse) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *AccountResponse) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *AccountResponse) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### SetLocaleNil

`func (o *AccountResponse) SetLocaleNil(b bool)`

 SetLocaleNil sets the value for Locale to be an explicit nil

### UnsetLocale
`func (o *AccountResponse) UnsetLocale()`

UnsetLocale ensures that no value is present for Locale, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


