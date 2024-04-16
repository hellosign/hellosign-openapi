# SubSigningOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultType** | **string** | The default type shown (limited to the listed types) | 
**Draw** | Pointer to **bool** | Allows drawing the signature | [optional] [default to false]
**Phone** | Pointer to **bool** | Allows using a smartphone to email the signature | [optional] [default to false]
**Type** | Pointer to **bool** | Allows typing the signature | [optional] [default to false]
**Upload** | Pointer to **bool** | Allows uploading the signature | [optional] [default to false]

## Methods

### NewSubSigningOptions

`func NewSubSigningOptions(defaultType string, ) *SubSigningOptions`

NewSubSigningOptions instantiates a new SubSigningOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubSigningOptionsWithDefaults

`func NewSubSigningOptionsWithDefaults() *SubSigningOptions`

NewSubSigningOptionsWithDefaults instantiates a new SubSigningOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultType

`func (o *SubSigningOptions) GetDefaultType() string`

GetDefaultType returns the DefaultType field if non-nil, zero value otherwise.

### GetDefaultTypeOk

`func (o *SubSigningOptions) GetDefaultTypeOk() (*string, bool)`

GetDefaultTypeOk returns a tuple with the DefaultType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultType

`func (o *SubSigningOptions) SetDefaultType(v string)`

SetDefaultType sets DefaultType field to given value.


### GetDraw

`func (o *SubSigningOptions) GetDraw() bool`

GetDraw returns the Draw field if non-nil, zero value otherwise.

### GetDrawOk

`func (o *SubSigningOptions) GetDrawOk() (*bool, bool)`

GetDrawOk returns a tuple with the Draw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraw

`func (o *SubSigningOptions) SetDraw(v bool)`

SetDraw sets Draw field to given value.

### HasDraw

`func (o *SubSigningOptions) HasDraw() bool`

HasDraw returns a boolean if a field has been set.

### GetPhone

`func (o *SubSigningOptions) GetPhone() bool`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *SubSigningOptions) GetPhoneOk() (*bool, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *SubSigningOptions) SetPhone(v bool)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *SubSigningOptions) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetType

`func (o *SubSigningOptions) GetType() bool`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubSigningOptions) GetTypeOk() (*bool, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubSigningOptions) SetType(v bool)`

SetType sets Type field to given value.

### HasType

`func (o *SubSigningOptions) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpload

`func (o *SubSigningOptions) GetUpload() bool`

GetUpload returns the Upload field if non-nil, zero value otherwise.

### GetUploadOk

`func (o *SubSigningOptions) GetUploadOk() (*bool, bool)`

GetUploadOk returns a tuple with the Upload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpload

`func (o *SubSigningOptions) SetUpload(v bool)`

SetUpload sets Upload field to given value.

### HasUpload

`func (o *SubSigningOptions) HasUpload() bool`

HasUpload returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


