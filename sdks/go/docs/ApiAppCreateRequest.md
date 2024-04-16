# ApiAppCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CallbackUrl** | Pointer to **string** | The URL at which the ApiApp should receive event callbacks. | [optional] 
**CustomLogoFile** | Pointer to ***os.File** | An image file to use as a custom logo in embedded contexts. (Only applies to some API plans) | [optional] 
**Domains** | **[]string** | The domain names the ApiApp will be associated with. | 
**Name** | **string** | The name you want to assign to the ApiApp. | 
**Oauth** | Pointer to [**SubOAuth**](SubOAuth.md) |  | [optional] 
**Options** | Pointer to [**SubOptions**](SubOptions.md) |  | [optional] 
**WhiteLabelingOptions** | Pointer to [**SubWhiteLabelingOptions**](SubWhiteLabelingOptions.md) |  | [optional] 

## Methods

### NewApiAppCreateRequest

`func NewApiAppCreateRequest(domains []string, name string, ) *ApiAppCreateRequest`

NewApiAppCreateRequest instantiates a new ApiAppCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAppCreateRequestWithDefaults

`func NewApiAppCreateRequestWithDefaults() *ApiAppCreateRequest`

NewApiAppCreateRequestWithDefaults instantiates a new ApiAppCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCallbackUrl

`func (o *ApiAppCreateRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *ApiAppCreateRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *ApiAppCreateRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *ApiAppCreateRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetCustomLogoFile

`func (o *ApiAppCreateRequest) GetCustomLogoFile() *os.File`

GetCustomLogoFile returns the CustomLogoFile field if non-nil, zero value otherwise.

### GetCustomLogoFileOk

`func (o *ApiAppCreateRequest) GetCustomLogoFileOk() (**os.File, bool)`

GetCustomLogoFileOk returns a tuple with the CustomLogoFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomLogoFile

`func (o *ApiAppCreateRequest) SetCustomLogoFile(v *os.File)`

SetCustomLogoFile sets CustomLogoFile field to given value.

### HasCustomLogoFile

`func (o *ApiAppCreateRequest) HasCustomLogoFile() bool`

HasCustomLogoFile returns a boolean if a field has been set.

### GetDomains

`func (o *ApiAppCreateRequest) GetDomains() []string`

GetDomains returns the Domains field if non-nil, zero value otherwise.

### GetDomainsOk

`func (o *ApiAppCreateRequest) GetDomainsOk() (*[]string, bool)`

GetDomainsOk returns a tuple with the Domains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomains

`func (o *ApiAppCreateRequest) SetDomains(v []string)`

SetDomains sets Domains field to given value.


### GetName

`func (o *ApiAppCreateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApiAppCreateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApiAppCreateRequest) SetName(v string)`

SetName sets Name field to given value.


### GetOauth

`func (o *ApiAppCreateRequest) GetOauth() SubOAuth`

GetOauth returns the Oauth field if non-nil, zero value otherwise.

### GetOauthOk

`func (o *ApiAppCreateRequest) GetOauthOk() (*SubOAuth, bool)`

GetOauthOk returns a tuple with the Oauth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauth

`func (o *ApiAppCreateRequest) SetOauth(v SubOAuth)`

SetOauth sets Oauth field to given value.

### HasOauth

`func (o *ApiAppCreateRequest) HasOauth() bool`

HasOauth returns a boolean if a field has been set.

### GetOptions

`func (o *ApiAppCreateRequest) GetOptions() SubOptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *ApiAppCreateRequest) GetOptionsOk() (*SubOptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *ApiAppCreateRequest) SetOptions(v SubOptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *ApiAppCreateRequest) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### GetWhiteLabelingOptions

`func (o *ApiAppCreateRequest) GetWhiteLabelingOptions() SubWhiteLabelingOptions`

GetWhiteLabelingOptions returns the WhiteLabelingOptions field if non-nil, zero value otherwise.

### GetWhiteLabelingOptionsOk

`func (o *ApiAppCreateRequest) GetWhiteLabelingOptionsOk() (*SubWhiteLabelingOptions, bool)`

GetWhiteLabelingOptionsOk returns a tuple with the WhiteLabelingOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhiteLabelingOptions

`func (o *ApiAppCreateRequest) SetWhiteLabelingOptions(v SubWhiteLabelingOptions)`

SetWhiteLabelingOptions sets WhiteLabelingOptions field to given value.

### HasWhiteLabelingOptions

`func (o *ApiAppCreateRequest) HasWhiteLabelingOptions() bool`

HasWhiteLabelingOptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


