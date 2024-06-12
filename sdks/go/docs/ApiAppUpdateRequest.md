# ApiAppUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallbackUrl** | Pointer to **string** | The URL at which the API App should receive event callbacks. | [optional] 
**CustomLogoFile** | Pointer to ***os.File** | An image file to use as a custom logo in embedded contexts. (Only applies to some API plans) | [optional] 
**Domains** | Pointer to **[]string** | The domain names the ApiApp will be associated with. | [optional] 
**Name** | Pointer to **string** | The name you want to assign to the ApiApp. | [optional] 
**Oauth** | Pointer to [**SubOAuth**](SubOAuth.md) |  | [optional] 
**Options** | Pointer to [**SubOptions**](SubOptions.md) |  | [optional] 
**WhiteLabelingOptions** | Pointer to [**SubWhiteLabelingOptions**](SubWhiteLabelingOptions.md) |  | [optional] 

## Methods

### NewApiAppUpdateRequest

`func NewApiAppUpdateRequest() *ApiAppUpdateRequest`

NewApiAppUpdateRequest instantiates a new ApiAppUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppUpdateRequestWithDefaults

`func NewApiAppUpdateRequestWithDefaults() *ApiAppUpdateRequest`

NewApiAppUpdateRequestWithDefaults instantiates a new ApiAppUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallbackUrl

`func (o *ApiAppUpdateRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ApiAppUpdateRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ApiAppUpdateRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *ApiAppUpdateRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetCustomLogoFile

`func (o *ApiAppUpdateRequest) GetCustomLogoFile() *os.File`

GetCustomLogoFile returns the CustomLogoFile field if non-nil, zero value otherwise.

### GetCustomLogoFileOk

`func (o *ApiAppUpdateRequest) GetCustomLogoFileOk() (**os.File, bool)`

GetCustomLogoFileOk returns a tuple with the CustomLogoFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomLogoFile

`func (o *ApiAppUpdateRequest) SetCustomLogoFile(v *os.File)`

SetCustomLogoFile sets CustomLogoFile field to given value.

### HasCustomLogoFile

`func (o *ApiAppUpdateRequest) HasCustomLogoFile() bool`

HasCustomLogoFile returns a boolean if a field has been set.

### GetDomains

`func (o *ApiAppUpdateRequest) GetDomains() []string`

GetDomains returns the Domains field if non-nil, zero value otherwise.

### GetDomainsOk

`func (o *ApiAppUpdateRequest) GetDomainsOk() (*[]string, bool)`

GetDomainsOk returns a tuple with the Domains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomains

`func (o *ApiAppUpdateRequest) SetDomains(v []string)`

SetDomains sets Domains field to given value.

### HasDomains

`func (o *ApiAppUpdateRequest) HasDomains() bool`

HasDomains returns a boolean if a field has been set.

### GetName

`func (o *ApiAppUpdateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApiAppUpdateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApiAppUpdateRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApiAppUpdateRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOauth

`func (o *ApiAppUpdateRequest) GetOauth() SubOAuth`

GetOauth returns the Oauth field if non-nil, zero value otherwise.

### GetOauthOk

`func (o *ApiAppUpdateRequest) GetOauthOk() (*SubOAuth, bool)`

GetOauthOk returns a tuple with the Oauth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauth

`func (o *ApiAppUpdateRequest) SetOauth(v SubOAuth)`

SetOauth sets Oauth field to given value.

### HasOauth

`func (o *ApiAppUpdateRequest) HasOauth() bool`

HasOauth returns a boolean if a field has been set.

### GetOptions

`func (o *ApiAppUpdateRequest) GetOptions() SubOptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ApiAppUpdateRequest) GetOptionsOk() (*SubOptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ApiAppUpdateRequest) SetOptions(v SubOptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ApiAppUpdateRequest) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### GetWhiteLabelingOptions

`func (o *ApiAppUpdateRequest) GetWhiteLabelingOptions() SubWhiteLabelingOptions`

GetWhiteLabelingOptions returns the WhiteLabelingOptions field if non-nil, zero value otherwise.

### GetWhiteLabelingOptionsOk

`func (o *ApiAppUpdateRequest) GetWhiteLabelingOptionsOk() (*SubWhiteLabelingOptions, bool)`

GetWhiteLabelingOptionsOk returns a tuple with the WhiteLabelingOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhiteLabelingOptions

`func (o *ApiAppUpdateRequest) SetWhiteLabelingOptions(v SubWhiteLabelingOptions)`

SetWhiteLabelingOptions sets WhiteLabelingOptions field to given value.

### HasWhiteLabelingOptions

`func (o *ApiAppUpdateRequest) HasWhiteLabelingOptions() bool`

HasWhiteLabelingOptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


