# EmbeddedEditUrlResponseEmbedded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EditUrl** | Pointer to **string** | A template url that can be opened in an iFrame. | [optional] 
**ExpiresAt** | Pointer to **int32** | The specific time that the the &#x60;edit_url&#x60; link expires, in epoch. | [optional] 

## Methods

### NewEmbeddedEditUrlResponseEmbedded

`func NewEmbeddedEditUrlResponseEmbedded() *EmbeddedEditUrlResponseEmbedded`

NewEmbeddedEditUrlResponseEmbedded instantiates a new EmbeddedEditUrlResponseEmbedded object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddedEditUrlResponseEmbeddedWithDefaults

`func NewEmbeddedEditUrlResponseEmbeddedWithDefaults() *EmbeddedEditUrlResponseEmbedded`

NewEmbeddedEditUrlResponseEmbeddedWithDefaults instantiates a new EmbeddedEditUrlResponseEmbedded object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEditUrl

`func (o *EmbeddedEditUrlResponseEmbedded) GetEditUrl() string`

GetEditUrl returns the EditUrl field if non-nil, zero value otherwise.

### GetEditUrlOk

`func (o *EmbeddedEditUrlResponseEmbedded) GetEditUrlOk() (*string, bool)`

GetEditUrlOk returns a tuple with the EditUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditUrl

`func (o *EmbeddedEditUrlResponseEmbedded) SetEditUrl(v string)`

SetEditUrl sets EditUrl field to given value.

### HasEditUrl

`func (o *EmbeddedEditUrlResponseEmbedded) HasEditUrl() bool`

HasEditUrl returns a boolean if a field has been set.

### GetExpiresAt

`func (o *EmbeddedEditUrlResponseEmbedded) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *EmbeddedEditUrlResponseEmbedded) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *EmbeddedEditUrlResponseEmbedded) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *EmbeddedEditUrlResponseEmbedded) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


