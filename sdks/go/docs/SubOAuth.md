# SubOAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallbackUrl** | Pointer to **string** | The callback URL to be used for OAuth flows. (Required if &#x60;oauth[scopes]&#x60; is provided) | [optional] 
**Scopes** | Pointer to **[]string** | A list of [OAuth scopes](/api/reference/tag/OAuth) to be granted to the app. (Required if &#x60;oauth[callback_url]&#x60; is provided). | [optional] 

## Methods

### NewSubOAuth

`func NewSubOAuth() *SubOAuth`

NewSubOAuth instantiates a new SubOAuth object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubOAuthWithDefaults

`func NewSubOAuthWithDefaults() *SubOAuth`

NewSubOAuthWithDefaults instantiates a new SubOAuth object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallbackUrl

`func (o *SubOAuth) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *SubOAuth) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *SubOAuth) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *SubOAuth) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetScopes

`func (o *SubOAuth) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *SubOAuth) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *SubOAuth) SetScopes(v []string)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *SubOAuth) HasScopes() bool`

HasScopes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


