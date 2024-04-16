# ApiAppResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallbackUrl** | Pointer to **NullableString** | The app&#39;s callback URL (for events) | [optional] 
**ClientId** | Pointer to **string** | The app&#39;s client id | [optional] 
**CreatedAt** | Pointer to **int32** | The time that the app was created | [optional] 
**Domains** | Pointer to **[]string** | The domain name(s) associated with the app | [optional] 
**Name** | Pointer to **string** | The name of the app | [optional] 
**IsApproved** | Pointer to **bool** | Boolean to indicate if the app has been approved | [optional] 
**Oauth** | Pointer to [**NullableApiAppResponseOAuth**](ApiAppResponseOAuth.md) |  | [optional] 
**Options** | Pointer to [**NullableApiAppResponseOptions**](ApiAppResponseOptions.md) |  | [optional] 
**OwnerAccount** | Pointer to [**ApiAppResponseOwnerAccount**](ApiAppResponseOwnerAccount.md) |  | [optional] 
**WhiteLabelingOptions** | Pointer to [**NullableApiAppResponseWhiteLabelingOptions**](ApiAppResponseWhiteLabelingOptions.md) |  | [optional] 

## Methods

### NewApiAppResponse

`func NewApiAppResponse() *ApiAppResponse`

NewApiAppResponse instantiates a new ApiAppResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppResponseWithDefaults

`func NewApiAppResponseWithDefaults() *ApiAppResponse`

NewApiAppResponseWithDefaults instantiates a new ApiAppResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallbackUrl

`func (o *ApiAppResponse) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ApiAppResponse) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ApiAppResponse) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *ApiAppResponse) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### SetCallbackUrlNil

`func (o *ApiAppResponse) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *ApiAppResponse) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetClientId

`func (o *ApiAppResponse) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *ApiAppResponse) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *ApiAppResponse) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *ApiAppResponse) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ApiAppResponse) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ApiAppResponse) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ApiAppResponse) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ApiAppResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDomains

`func (o *ApiAppResponse) GetDomains() []string`

GetDomains returns the Domains field if non-nil, zero value otherwise.

### GetDomainsOk

`func (o *ApiAppResponse) GetDomainsOk() (*[]string, bool)`

GetDomainsOk returns a tuple with the Domains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomains

`func (o *ApiAppResponse) SetDomains(v []string)`

SetDomains sets Domains field to given value.

### HasDomains

`func (o *ApiAppResponse) HasDomains() bool`

HasDomains returns a boolean if a field has been set.

### GetName

`func (o *ApiAppResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApiAppResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApiAppResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApiAppResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIsApproved

`func (o *ApiAppResponse) GetIsApproved() bool`

GetIsApproved returns the IsApproved field if non-nil, zero value otherwise.

### GetIsApprovedOk

`func (o *ApiAppResponse) GetIsApprovedOk() (*bool, bool)`

GetIsApprovedOk returns a tuple with the IsApproved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsApproved

`func (o *ApiAppResponse) SetIsApproved(v bool)`

SetIsApproved sets IsApproved field to given value.

### HasIsApproved

`func (o *ApiAppResponse) HasIsApproved() bool`

HasIsApproved returns a boolean if a field has been set.

### GetOauth

`func (o *ApiAppResponse) GetOauth() ApiAppResponseOAuth`

GetOauth returns the Oauth field if non-nil, zero value otherwise.

### GetOauthOk

`func (o *ApiAppResponse) GetOauthOk() (*ApiAppResponseOAuth, bool)`

GetOauthOk returns a tuple with the Oauth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauth

`func (o *ApiAppResponse) SetOauth(v ApiAppResponseOAuth)`

SetOauth sets Oauth field to given value.

### HasOauth

`func (o *ApiAppResponse) HasOauth() bool`

HasOauth returns a boolean if a field has been set.

### SetOauthNil

`func (o *ApiAppResponse) SetOauthNil(b bool)`

 SetOauthNil sets the value for Oauth to be an explicit nil

### UnsetOauth
`func (o *ApiAppResponse) UnsetOauth()`

UnsetOauth ensures that no value is present for Oauth, not even an explicit nil
### GetOptions

`func (o *ApiAppResponse) GetOptions() ApiAppResponseOptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ApiAppResponse) GetOptionsOk() (*ApiAppResponseOptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ApiAppResponse) SetOptions(v ApiAppResponseOptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ApiAppResponse) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### SetOptionsNil

`func (o *ApiAppResponse) SetOptionsNil(b bool)`

 SetOptionsNil sets the value for Options to be an explicit nil

### UnsetOptions
`func (o *ApiAppResponse) UnsetOptions()`

UnsetOptions ensures that no value is present for Options, not even an explicit nil
### GetOwnerAccount

`func (o *ApiAppResponse) GetOwnerAccount() ApiAppResponseOwnerAccount`

GetOwnerAccount returns the OwnerAccount field if non-nil, zero value otherwise.

### GetOwnerAccountOk

`func (o *ApiAppResponse) GetOwnerAccountOk() (*ApiAppResponseOwnerAccount, bool)`

GetOwnerAccountOk returns a tuple with the OwnerAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerAccount

`func (o *ApiAppResponse) SetOwnerAccount(v ApiAppResponseOwnerAccount)`

SetOwnerAccount sets OwnerAccount field to given value.

### HasOwnerAccount

`func (o *ApiAppResponse) HasOwnerAccount() bool`

HasOwnerAccount returns a boolean if a field has been set.

### GetWhiteLabelingOptions

`func (o *ApiAppResponse) GetWhiteLabelingOptions() ApiAppResponseWhiteLabelingOptions`

GetWhiteLabelingOptions returns the WhiteLabelingOptions field if non-nil, zero value otherwise.

### GetWhiteLabelingOptionsOk

`func (o *ApiAppResponse) GetWhiteLabelingOptionsOk() (*ApiAppResponseWhiteLabelingOptions, bool)`

GetWhiteLabelingOptionsOk returns a tuple with the WhiteLabelingOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhiteLabelingOptions

`func (o *ApiAppResponse) SetWhiteLabelingOptions(v ApiAppResponseWhiteLabelingOptions)`

SetWhiteLabelingOptions sets WhiteLabelingOptions field to given value.

### HasWhiteLabelingOptions

`func (o *ApiAppResponse) HasWhiteLabelingOptions() bool`

HasWhiteLabelingOptions returns a boolean if a field has been set.

### SetWhiteLabelingOptionsNil

`func (o *ApiAppResponse) SetWhiteLabelingOptionsNil(b bool)`

 SetWhiteLabelingOptionsNil sets the value for WhiteLabelingOptions to be an explicit nil

### UnsetWhiteLabelingOptions
`func (o *ApiAppResponse) UnsetWhiteLabelingOptions()`

UnsetWhiteLabelingOptions ensures that no value is present for WhiteLabelingOptions, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


