# TemplateResponseDocumentCustomFieldBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiId** | Pointer to **string** | The unique ID for this field. | [optional] 
**Name** | Pointer to **string** | The name of the Custom Field. | [optional] 
**Type** | **string** |  | 
**Signer** | Pointer to **NullableString** | The signer of the Custom Field. Can be &#x60;null&#x60; if field is a merge field (assigned to Sender). | [optional] 
**X** | Pointer to **int32** | The horizontal offset in pixels for this form field. | [optional] 
**Y** | Pointer to **int32** | The vertical offset in pixels for this form field. | [optional] 
**Width** | Pointer to **int32** | The width in pixels of this form field. | [optional] 
**Height** | Pointer to **int32** | The height in pixels of this form field. | [optional] 
**Required** | Pointer to **bool** | Boolean showing whether or not this field is required. | [optional] 
**Group** | Pointer to **NullableString** | The name of the group this field is in. If this field is not a group, this defaults to &#x60;null&#x60;. | [optional] 

## Methods

### NewTemplateResponseDocumentCustomFieldBase

`func NewTemplateResponseDocumentCustomFieldBase(type_ string, ) *TemplateResponseDocumentCustomFieldBase`

NewTemplateResponseDocumentCustomFieldBase instantiates a new TemplateResponseDocumentCustomFieldBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentCustomFieldBaseWithDefaults

`func NewTemplateResponseDocumentCustomFieldBaseWithDefaults() *TemplateResponseDocumentCustomFieldBase`

NewTemplateResponseDocumentCustomFieldBaseWithDefaults instantiates a new TemplateResponseDocumentCustomFieldBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiId

`func (o *TemplateResponseDocumentCustomFieldBase) GetApiId() string`

GetApiId returns the ApiId field if non-nil, zero value otherwise.

### GetApiIdOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetApiIdOk() (*string, bool)`

GetApiIdOk returns a tuple with the ApiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiId

`func (o *TemplateResponseDocumentCustomFieldBase) SetApiId(v string)`

SetApiId sets ApiId field to given value.

### HasApiId

`func (o *TemplateResponseDocumentCustomFieldBase) HasApiId() bool`

HasApiId returns a boolean if a field has been set.

### GetName

`func (o *TemplateResponseDocumentCustomFieldBase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateResponseDocumentCustomFieldBase) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateResponseDocumentCustomFieldBase) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *TemplateResponseDocumentCustomFieldBase) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateResponseDocumentCustomFieldBase) SetType(v string)`

SetType sets Type field to given value.


### GetSigner

`func (o *TemplateResponseDocumentCustomFieldBase) GetSigner() string`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetSignerOk() (*string, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *TemplateResponseDocumentCustomFieldBase) SetSigner(v string)`

SetSigner sets Signer field to given value.

### HasSigner

`func (o *TemplateResponseDocumentCustomFieldBase) HasSigner() bool`

HasSigner returns a boolean if a field has been set.

### SetSignerNil

`func (o *TemplateResponseDocumentCustomFieldBase) SetSignerNil(b bool)`

 SetSignerNil sets the value for Signer to be an explicit nil

### UnsetSigner
`func (o *TemplateResponseDocumentCustomFieldBase) UnsetSigner()`

UnsetSigner ensures that no value is present for Signer, not even an explicit nil
### GetX

`func (o *TemplateResponseDocumentCustomFieldBase) GetX() int32`

GetX returns the X field if non-nil, zero value otherwise.

### GetXOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetXOk() (*int32, bool)`

GetXOk returns a tuple with the X field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetX

`func (o *TemplateResponseDocumentCustomFieldBase) SetX(v int32)`

SetX sets X field to given value.

### HasX

`func (o *TemplateResponseDocumentCustomFieldBase) HasX() bool`

HasX returns a boolean if a field has been set.

### GetY

`func (o *TemplateResponseDocumentCustomFieldBase) GetY() int32`

GetY returns the Y field if non-nil, zero value otherwise.

### GetYOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetYOk() (*int32, bool)`

GetYOk returns a tuple with the Y field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetY

`func (o *TemplateResponseDocumentCustomFieldBase) SetY(v int32)`

SetY sets Y field to given value.

### HasY

`func (o *TemplateResponseDocumentCustomFieldBase) HasY() bool`

HasY returns a boolean if a field has been set.

### GetWidth

`func (o *TemplateResponseDocumentCustomFieldBase) GetWidth() int32`

GetWidth returns the Width field if non-nil, zero value otherwise.

### GetWidthOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetWidthOk() (*int32, bool)`

GetWidthOk returns a tuple with the Width field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWidth

`func (o *TemplateResponseDocumentCustomFieldBase) SetWidth(v int32)`

SetWidth sets Width field to given value.

### HasWidth

`func (o *TemplateResponseDocumentCustomFieldBase) HasWidth() bool`

HasWidth returns a boolean if a field has been set.

### GetHeight

`func (o *TemplateResponseDocumentCustomFieldBase) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *TemplateResponseDocumentCustomFieldBase) SetHeight(v int32)`

SetHeight sets Height field to given value.

### HasHeight

`func (o *TemplateResponseDocumentCustomFieldBase) HasHeight() bool`

HasHeight returns a boolean if a field has been set.

### GetRequired

`func (o *TemplateResponseDocumentCustomFieldBase) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *TemplateResponseDocumentCustomFieldBase) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *TemplateResponseDocumentCustomFieldBase) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetGroup

`func (o *TemplateResponseDocumentCustomFieldBase) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *TemplateResponseDocumentCustomFieldBase) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *TemplateResponseDocumentCustomFieldBase) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *TemplateResponseDocumentCustomFieldBase) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### SetGroupNil

`func (o *TemplateResponseDocumentCustomFieldBase) SetGroupNil(b bool)`

 SetGroupNil sets the value for Group to be an explicit nil

### UnsetGroup
`func (o *TemplateResponseDocumentCustomFieldBase) UnsetGroup()`

UnsetGroup ensures that no value is present for Group, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


