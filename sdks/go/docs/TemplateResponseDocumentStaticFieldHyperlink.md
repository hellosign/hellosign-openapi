# TemplateResponseDocumentStaticFieldHyperlink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this static field. See [field types](/api/reference/constants/#field-types).  * Text Field uses &#x60;TemplateResponseDocumentStaticFieldText&#x60; * Dropdown Field uses &#x60;TemplateResponseDocumentStaticFieldDropdown&#x60; * Hyperlink Field uses &#x60;TemplateResponseDocumentStaticFieldHyperlink&#x60; * Checkbox Field uses &#x60;TemplateResponseDocumentStaticFieldCheckbox&#x60; * Radio Field uses &#x60;TemplateResponseDocumentStaticFieldRadio&#x60; * Signature Field uses &#x60;TemplateResponseDocumentStaticFieldSignature&#x60; * Date Signed Field uses &#x60;TemplateResponseDocumentStaticFieldDateSigned&#x60; * Initials Field uses &#x60;TemplateResponseDocumentStaticFieldInitials&#x60; | [default to "hyperlink"]

## Methods

### NewTemplateResponseDocumentStaticFieldHyperlink

`func NewTemplateResponseDocumentStaticFieldHyperlink(type_ string, ) *TemplateResponseDocumentStaticFieldHyperlink`

NewTemplateResponseDocumentStaticFieldHyperlink instantiates a new TemplateResponseDocumentStaticFieldHyperlink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentStaticFieldHyperlinkWithDefaults

`func NewTemplateResponseDocumentStaticFieldHyperlinkWithDefaults() *TemplateResponseDocumentStaticFieldHyperlink`

NewTemplateResponseDocumentStaticFieldHyperlinkWithDefaults instantiates a new TemplateResponseDocumentStaticFieldHyperlink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TemplateResponseDocumentStaticFieldHyperlink) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateResponseDocumentStaticFieldHyperlink) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateResponseDocumentStaticFieldHyperlink) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


