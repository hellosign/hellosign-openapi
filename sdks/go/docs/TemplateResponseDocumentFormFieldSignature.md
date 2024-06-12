# TemplateResponseDocumentFormFieldSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this form field. See [field types](/api/reference/constants/#field-types).  * Text Field uses &#x60;TemplateResponseDocumentFormFieldText&#x60; * Dropdown Field uses &#x60;TemplateResponseDocumentFormFieldDropdown&#x60; * Hyperlink Field uses &#x60;TemplateResponseDocumentFormFieldHyperlink&#x60; * Checkbox Field uses &#x60;TemplateResponseDocumentFormFieldCheckbox&#x60; * Radio Field uses &#x60;TemplateResponseDocumentFormFieldRadio&#x60; * Signature Field uses &#x60;TemplateResponseDocumentFormFieldSignature&#x60; * Date Signed Field uses &#x60;TemplateResponseDocumentFormFieldDateSigned&#x60; * Initials Field uses &#x60;TemplateResponseDocumentFormFieldInitials&#x60; | [default to "signature"]

## Methods

### NewTemplateResponseDocumentFormFieldSignature

`func NewTemplateResponseDocumentFormFieldSignature(type_ string, ) *TemplateResponseDocumentFormFieldSignature`

NewTemplateResponseDocumentFormFieldSignature instantiates a new TemplateResponseDocumentFormFieldSignature object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentFormFieldSignatureWithDefaults

`func NewTemplateResponseDocumentFormFieldSignatureWithDefaults() *TemplateResponseDocumentFormFieldSignature`

NewTemplateResponseDocumentFormFieldSignatureWithDefaults instantiates a new TemplateResponseDocumentFormFieldSignature object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TemplateResponseDocumentFormFieldSignature) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateResponseDocumentFormFieldSignature) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateResponseDocumentFormFieldSignature) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


