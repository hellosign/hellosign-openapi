# SignatureRequestResponseCustomFieldBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this Custom Field. Only &#39;text&#39; and &#39;checkbox&#39; are currently supported. | 
**Name** | **string** | The name of the Custom Field. | 
**Required** | Pointer to **bool** | A boolean value denoting if this field is required. | [optional] 
**ApiId** | Pointer to **string** | The unique ID for this field. | [optional] 
**Editor** | Pointer to **string** | The name of the Role that is able to edit this field. | [optional] 

## Methods

### NewSignatureRequestResponseCustomFieldBase

`func NewSignatureRequestResponseCustomFieldBase(type_ string, name string, ) *SignatureRequestResponseCustomFieldBase`

NewSignatureRequestResponseCustomFieldBase instantiates a new SignatureRequestResponseCustomFieldBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestResponseCustomFieldBaseWithDefaults

`func NewSignatureRequestResponseCustomFieldBaseWithDefaults() *SignatureRequestResponseCustomFieldBase`

NewSignatureRequestResponseCustomFieldBaseWithDefaults instantiates a new SignatureRequestResponseCustomFieldBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SignatureRequestResponseCustomFieldBase) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SignatureRequestResponseCustomFieldBase) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SignatureRequestResponseCustomFieldBase) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *SignatureRequestResponseCustomFieldBase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SignatureRequestResponseCustomFieldBase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SignatureRequestResponseCustomFieldBase) SetName(v string)`

SetName sets Name field to given value.


### GetRequired

`func (o *SignatureRequestResponseCustomFieldBase) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SignatureRequestResponseCustomFieldBase) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SignatureRequestResponseCustomFieldBase) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *SignatureRequestResponseCustomFieldBase) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetApiId

`func (o *SignatureRequestResponseCustomFieldBase) GetApiId() string`

GetApiId returns the ApiId field if non-nil, zero value otherwise.

### GetApiIdOk

`func (o *SignatureRequestResponseCustomFieldBase) GetApiIdOk() (*string, bool)`

GetApiIdOk returns a tuple with the ApiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiId

`func (o *SignatureRequestResponseCustomFieldBase) SetApiId(v string)`

SetApiId sets ApiId field to given value.

### HasApiId

`func (o *SignatureRequestResponseCustomFieldBase) HasApiId() bool`

HasApiId returns a boolean if a field has been set.

### GetEditor

`func (o *SignatureRequestResponseCustomFieldBase) GetEditor() string`

GetEditor returns the Editor field if non-nil, zero value otherwise.

### GetEditorOk

`func (o *SignatureRequestResponseCustomFieldBase) GetEditorOk() (*string, bool)`

GetEditorOk returns a tuple with the Editor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditor

`func (o *SignatureRequestResponseCustomFieldBase) SetEditor(v string)`

SetEditor sets Editor field to given value.

### HasEditor

`func (o *SignatureRequestResponseCustomFieldBase) HasEditor() bool`

HasEditor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


