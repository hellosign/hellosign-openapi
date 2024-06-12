# SubCustomField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Editor** | Pointer to **string** | Used to create editable merge fields. When the value matches a role passed in with &#x60;signers&#x60;, that role can edit the data that was pre-filled to that field. This field is optional, but required when this custom field object is set to &#x60;required &#x3D; true&#x60;.  **Note**: Editable merge fields are only supported for single signer requests (or the first signer in ordered signature requests). If used when there are multiple signers in an unordered signature request, the editor value is ignored and the field won&#39;t be editable. | [optional] 
**Name** | **string** | The name of a custom field. When working with pre-filled data, the custom field&#39;s name must have a matching merge field name or the field will remain empty on the document during signing. | 
**Required** | Pointer to **bool** | Used to set an editable merge field when working with pre-filled data. When &#x60;true&#x60;, the custom field must specify a signer role in &#x60;editor&#x60;. | [optional] [default to false]
**Value** | Pointer to **string** | The string that resolves (aka \&quot;pre-fills\&quot;) to the merge field on the final document(s) used for signing. | [optional] 

## Methods

### NewSubCustomField

`func NewSubCustomField(name string, ) *SubCustomField`

NewSubCustomField instantiates a new SubCustomField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubCustomFieldWithDefaults

`func NewSubCustomFieldWithDefaults() *SubCustomField`

NewSubCustomFieldWithDefaults instantiates a new SubCustomField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEditor

`func (o *SubCustomField) GetEditor() string`

GetEditor returns the Editor field if non-nil, zero value otherwise.

### GetEditorOk

`func (o *SubCustomField) GetEditorOk() (*string, bool)`

GetEditorOk returns a tuple with the Editor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditor

`func (o *SubCustomField) SetEditor(v string)`

SetEditor sets Editor field to given value.

### HasEditor

`func (o *SubCustomField) HasEditor() bool`

HasEditor returns a boolean if a field has been set.

### GetName

`func (o *SubCustomField) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubCustomField) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubCustomField) SetName(v string)`

SetName sets Name field to given value.


### GetRequired

`func (o *SubCustomField) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SubCustomField) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SubCustomField) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *SubCustomField) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetValue

`func (o *SubCustomField) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SubCustomField) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SubCustomField) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SubCustomField) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


