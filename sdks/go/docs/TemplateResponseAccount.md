# TemplateResponseAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The id of the Account. | [optional] 
**EmailAddress** | Pointer to **string** | The email address associated with the Account. | [optional] 
**IsLocked** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has been locked out of their account by a team admin. | [optional] 
**IsPaidHs** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has a paid Dropbox Sign account. | [optional] 
**IsPaidHf** | Pointer to **bool** | Returns &#x60;true&#x60; if the user has a paid HelloFax account. | [optional] 
**Quotas** | Pointer to [**TemplateResponseAccountQuota**](TemplateResponseAccountQuota.md) |  | [optional] 

## Methods

### NewTemplateResponseAccount

`func NewTemplateResponseAccount() *TemplateResponseAccount`

NewTemplateResponseAccount instantiates a new TemplateResponseAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseAccountWithDefaults

`func NewTemplateResponseAccountWithDefaults() *TemplateResponseAccount`

NewTemplateResponseAccountWithDefaults instantiates a new TemplateResponseAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TemplateResponseAccount) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TemplateResponseAccount) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TemplateResponseAccount) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TemplateResponseAccount) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TemplateResponseAccount) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TemplateResponseAccount) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TemplateResponseAccount) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TemplateResponseAccount) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetIsLocked

`func (o *TemplateResponseAccount) GetIsLocked() bool`

GetIsLocked returns the IsLocked field if non-nil, zero value otherwise.

### GetIsLockedOk

`func (o *TemplateResponseAccount) GetIsLockedOk() (*bool, bool)`

GetIsLockedOk returns a tuple with the IsLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLocked

`func (o *TemplateResponseAccount) SetIsLocked(v bool)`

SetIsLocked sets IsLocked field to given value.

### HasIsLocked

`func (o *TemplateResponseAccount) HasIsLocked() bool`

HasIsLocked returns a boolean if a field has been set.

### GetIsPaidHs

`func (o *TemplateResponseAccount) GetIsPaidHs() bool`

GetIsPaidHs returns the IsPaidHs field if non-nil, zero value otherwise.

### GetIsPaidHsOk

`func (o *TemplateResponseAccount) GetIsPaidHsOk() (*bool, bool)`

GetIsPaidHsOk returns a tuple with the IsPaidHs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidHs

`func (o *TemplateResponseAccount) SetIsPaidHs(v bool)`

SetIsPaidHs sets IsPaidHs field to given value.

### HasIsPaidHs

`func (o *TemplateResponseAccount) HasIsPaidHs() bool`

HasIsPaidHs returns a boolean if a field has been set.

### GetIsPaidHf

`func (o *TemplateResponseAccount) GetIsPaidHf() bool`

GetIsPaidHf returns the IsPaidHf field if non-nil, zero value otherwise.

### GetIsPaidHfOk

`func (o *TemplateResponseAccount) GetIsPaidHfOk() (*bool, bool)`

GetIsPaidHfOk returns a tuple with the IsPaidHf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPaidHf

`func (o *TemplateResponseAccount) SetIsPaidHf(v bool)`

SetIsPaidHf sets IsPaidHf field to given value.

### HasIsPaidHf

`func (o *TemplateResponseAccount) HasIsPaidHf() bool`

HasIsPaidHf returns a boolean if a field has been set.

### GetQuotas

`func (o *TemplateResponseAccount) GetQuotas() TemplateResponseAccountQuota`

GetQuotas returns the Quotas field if non-nil, zero value otherwise.

### GetQuotasOk

`func (o *TemplateResponseAccount) GetQuotasOk() (*TemplateResponseAccountQuota, bool)`

GetQuotasOk returns a tuple with the Quotas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuotas

`func (o *TemplateResponseAccount) SetQuotas(v TemplateResponseAccountQuota)`

SetQuotas sets Quotas field to given value.

### HasQuotas

`func (o *TemplateResponseAccount) HasQuotas() bool`

HasQuotas returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


