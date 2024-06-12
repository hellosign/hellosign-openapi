# EmbeddedSignUrlResponseEmbedded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignUrl** | Pointer to **string** | A signature url that can be opened in an iFrame. | [optional] 
**ExpiresAt** | Pointer to **int32** | The specific time that the the &#x60;sign_url&#x60; link expires, in epoch. | [optional] 

## Methods

### NewEmbeddedSignUrlResponseEmbedded

`func NewEmbeddedSignUrlResponseEmbedded() *EmbeddedSignUrlResponseEmbedded`

NewEmbeddedSignUrlResponseEmbedded instantiates a new EmbeddedSignUrlResponseEmbedded object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddedSignUrlResponseEmbeddedWithDefaults

`func NewEmbeddedSignUrlResponseEmbeddedWithDefaults() *EmbeddedSignUrlResponseEmbedded`

NewEmbeddedSignUrlResponseEmbeddedWithDefaults instantiates a new EmbeddedSignUrlResponseEmbedded object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignUrl

`func (o *EmbeddedSignUrlResponseEmbedded) GetSignUrl() string`

GetSignUrl returns the SignUrl field if non-nil, zero value otherwise.

### GetSignUrlOk

`func (o *EmbeddedSignUrlResponseEmbedded) GetSignUrlOk() (*string, bool)`

GetSignUrlOk returns a tuple with the SignUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignUrl

`func (o *EmbeddedSignUrlResponseEmbedded) SetSignUrl(v string)`

SetSignUrl sets SignUrl field to given value.

### HasSignUrl

`func (o *EmbeddedSignUrlResponseEmbedded) HasSignUrl() bool`

HasSignUrl returns a boolean if a field has been set.

### GetExpiresAt

`func (o *EmbeddedSignUrlResponseEmbedded) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *EmbeddedSignUrlResponseEmbedded) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *EmbeddedSignUrlResponseEmbedded) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *EmbeddedSignUrlResponseEmbedded) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


