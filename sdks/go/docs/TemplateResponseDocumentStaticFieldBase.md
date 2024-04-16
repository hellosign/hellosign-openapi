# TemplateResponseDocumentStaticFieldBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiId** | Pointer to **string** | A unique id for the static field. | [optional] 
**Name** | Pointer to **string** | The name of the static field. | [optional] 
**Type** | **string** |  | 
**Signer** | Pointer to **string** | The signer of the Static Field. | [optional] [default to "me_now"]
**X** | Pointer to **int32** | The horizontal offset in pixels for this static field. | [optional] 
**Y** | Pointer to **int32** | The vertical offset in pixels for this static field. | [optional] 
**Width** | Pointer to **int32** | The width in pixels of this static field. | [optional] 
**Height** | Pointer to **int32** | The height in pixels of this static field. | [optional] 
**Required** | Pointer to **bool** | Boolean showing whether or not this field is required. | [optional] 
**Group** | Pointer to **NullableString** | The name of the group this field is in. If this field is not a group, this defaults to &#x60;null&#x60;. | [optional] 

## Methods

### NewTemplateResponseDocumentStaticFieldBase

`func NewTemplateResponseDocumentStaticFieldBase(type_ string, ) *TemplateResponseDocumentStaticFieldBase`

NewTemplateResponseDocumentStaticFieldBase instantiates a new TemplateResponseDocumentStaticFieldBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentStaticFieldBaseWithDefaults

`func NewTemplateResponseDocumentStaticFieldBaseWithDefaults() *TemplateResponseDocumentStaticFieldBase`

NewTemplateResponseDocumentStaticFieldBaseWithDefaults instantiates a new TemplateResponseDocumentStaticFieldBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiId

`func (o *TemplateResponseDocumentStaticFieldBase) GetApiId() string`

GetApiId returns the ApiId field if non-nil, zero value otherwise.

### GetApiIdOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetApiIdOk() (*string, bool)`

GetApiIdOk returns a tuple with the ApiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiId

`func (o *TemplateResponseDocumentStaticFieldBase) SetApiId(v string)`

SetApiId sets ApiId field to given value.

### HasApiId

`func (o *TemplateResponseDocumentStaticFieldBase) HasApiId() bool`

HasApiId returns a boolean if a field has been set.

### GetName

`func (o *TemplateResponseDocumentStaticFieldBase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateResponseDocumentStaticFieldBase) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateResponseDocumentStaticFieldBase) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *TemplateResponseDocumentStaticFieldBase) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateResponseDocumentStaticFieldBase) SetType(v string)`

SetType sets Type field to given value.


### GetSigner

`func (o *TemplateResponseDocumentStaticFieldBase) GetSigner() string`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetSignerOk() (*string, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *TemplateResponseDocumentStaticFieldBase) SetSigner(v string)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *TemplateResponseDocumentStaticFieldBase) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### GetX

`func (o *TemplateResponseDocumentStaticFieldBase) GetX() int32`

GetX returns the X field if non-nil, zero value otherwise.

### GetXOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetXOk() (*int32, bool)`

GetXOk returns a tuple with the X field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetX

`func (o *TemplateResponseDocumentStaticFieldBase) SetX(v int32)`

SetX sets X field to given value.

### HasX

`func (o *TemplateResponseDocumentStaticFieldBase) HasX() bool`

HasX returns a boolean if a field has been set.

### GetY

`func (o *TemplateResponseDocumentStaticFieldBase) GetY() int32`

GetY returns the Y field if non-nil, zero value otherwise.

### GetYOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetYOk() (*int32, bool)`

GetYOk returns a tuple with the Y field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetY

`func (o *TemplateResponseDocumentStaticFieldBase) SetY(v int32)`

SetY sets Y field to given value.

### HasY

`func (o *TemplateResponseDocumentStaticFieldBase) HasY() bool`

HasY returns a boolean if a field has been set.

### GetWidth

`func (o *TemplateResponseDocumentStaticFieldBase) GetWidth() int32`

GetWidth returns the Width field if non-nil, zero value otherwise.

### GetWidthOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetWidthOk() (*int32, bool)`

GetWidthOk returns a tuple with the Width field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWidth

`func (o *TemplateResponseDocumentStaticFieldBase) SetWidth(v int32)`

SetWidth sets Width field to given value.

### HasWidth

`func (o *TemplateResponseDocumentStaticFieldBase) HasWidth() bool`

HasWidth returns a boolean if a field has been set.

### GetHeight

`func (o *TemplateResponseDocumentStaticFieldBase) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *TemplateResponseDocumentStaticFieldBase) SetHeight(v int32)`

SetHeight sets Height field to given value.

### HasHeight

`func (o *TemplateResponseDocumentStaticFieldBase) HasHeight() bool`

HasHeight returns a boolean if a field has been set.

### GetRequired

`func (o *TemplateResponseDocumentStaticFieldBase) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *TemplateResponseDocumentStaticFieldBase) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *TemplateResponseDocumentStaticFieldBase) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetGroup

`func (o *TemplateResponseDocumentStaticFieldBase) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *TemplateResponseDocumentStaticFieldBase) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *TemplateResponseDocumentStaticFieldBase) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *TemplateResponseDocumentStaticFieldBase) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### SetGroupNil

`func (o *TemplateResponseDocumentStaticFieldBase) SetGroupNil(b bool)`

 SetGroupNil sets the value for Group to be an explicit nil

### UnsetGroup
`func (o *TemplateResponseDocumentStaticFieldBase) UnsetGroup()`

UnsetGroup ensures that no value is present for Group, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


