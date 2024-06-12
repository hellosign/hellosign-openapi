# ApiAppResponseOAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallbackUrl** | Pointer to **string** | The app&#39;s OAuth callback URL. | [optional] 
**Secret** | Pointer to **string** | The app&#39;s OAuth secret, or null if the app does not belong to user. | [optional] 
**Scopes** | Pointer to **[]string** | Array of OAuth scopes used by the app. | [optional] 
**ChargesUsers** | Pointer to **bool** | Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests. | [optional] 

## Methods

### NewApiAppResponseOAuth

`func NewApiAppResponseOAuth() *ApiAppResponseOAuth`

NewApiAppResponseOAuth instantiates a new ApiAppResponseOAuth object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppResponseOAuthWithDefaults

`func NewApiAppResponseOAuthWithDefaults() *ApiAppResponseOAuth`

NewApiAppResponseOAuthWithDefaults instantiates a new ApiAppResponseOAuth object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallbackUrl

`func (o *ApiAppResponseOAuth) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ApiAppResponseOAuth) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ApiAppResponseOAuth) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *ApiAppResponseOAuth) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetSecret

`func (o *ApiAppResponseOAuth) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *ApiAppResponseOAuth) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *ApiAppResponseOAuth) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *ApiAppResponseOAuth) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetScopes

`func (o *ApiAppResponseOAuth) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *ApiAppResponseOAuth) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *ApiAppResponseOAuth) SetScopes(v []string)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *ApiAppResponseOAuth) HasScopes() bool`

HasScopes returns a boolean if a field has been set.

### GetChargesUsers

`func (o *ApiAppResponseOAuth) GetChargesUsers() bool`

GetChargesUsers returns the ChargesUsers field if non-nil, zero value otherwise.

### GetChargesUsersOk

`func (o *ApiAppResponseOAuth) GetChargesUsersOk() (*bool, bool)`

GetChargesUsersOk returns a tuple with the ChargesUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargesUsers

`func (o *ApiAppResponseOAuth) SetChargesUsers(v bool)`

SetChargesUsers sets ChargesUsers field to given value.

### HasChargesUsers

`func (o *ApiAppResponseOAuth) HasChargesUsers() bool`

HasChargesUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


