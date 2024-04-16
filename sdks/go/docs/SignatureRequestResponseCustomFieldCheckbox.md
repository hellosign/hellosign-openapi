# SignatureRequestResponseCustomFieldCheckbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this Custom Field. Only &#39;text&#39; and &#39;checkbox&#39; are currently supported. | [default to "checkbox"]
**Value** | Pointer to **bool** | A true/false for checkbox fields | [optional] 

## Methods

### NewSignatureRequestResponseCustomFieldCheckbox

`func NewSignatureRequestResponseCustomFieldCheckbox(type_ string, ) *SignatureRequestResponseCustomFieldCheckbox`

NewSignatureRequestResponseCustomFieldCheckbox instantiates a new SignatureRequestResponseCustomFieldCheckbox object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestResponseCustomFieldCheckboxWithDefaults

`func NewSignatureRequestResponseCustomFieldCheckboxWithDefaults() *SignatureRequestResponseCustomFieldCheckbox`

NewSignatureRequestResponseCustomFieldCheckboxWithDefaults instantiates a new SignatureRequestResponseCustomFieldCheckbox object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SignatureRequestResponseCustomFieldCheckbox) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SignatureRequestResponseCustomFieldCheckbox) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SignatureRequestResponseCustomFieldCheckbox) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *SignatureRequestResponseCustomFieldCheckbox) GetValue() bool`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SignatureRequestResponseCustomFieldCheckbox) GetValueOk() (*bool, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SignatureRequestResponseCustomFieldCheckbox) SetValue(v bool)`

SetValue sets Value field to given value.

### HasValue

`func (o *SignatureRequestResponseCustomFieldCheckbox) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


