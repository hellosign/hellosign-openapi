# AccountCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Used when creating a new account with OAuth authorization.  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization) | [optional] 
**ClientSecret** | Pointer to **string** | Used when creating a new account with OAuth authorization.  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization) | [optional] 
**EmailAddress** | **string** | The email address which will be associated with the new Account. | 
**Locale** | Pointer to **string** | The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values. | [optional] 

## Methods

### NewAccountCreateRequest

`func NewAccountCreateRequest(emailAddress string, ) *AccountCreateRequest`

NewAccountCreateRequest instantiates a new AccountCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountCreateRequestWithDefaults

`func NewAccountCreateRequestWithDefaults() *AccountCreateRequest`

NewAccountCreateRequestWithDefaults instantiates a new AccountCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *AccountCreateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *AccountCreateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *AccountCreateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *AccountCreateRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *AccountCreateRequest) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *AccountCreateRequest) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *AccountCreateRequest) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *AccountCreateRequest) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetEmailAddress

`func (o *AccountCreateRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *AccountCreateRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *AccountCreateRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.


### GetLocale

`func (o *AccountCreateRequest) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *AccountCreateRequest) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *AccountCreateRequest) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *AccountCreateRequest) HasLocale() bool`

HasLocale returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


