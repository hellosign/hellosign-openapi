# TemplateResponseDocumentFormFieldHyperlink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this form field. See [field types](/api/reference/constants/#field-types).  * Text Field uses &#x60;TemplateResponseDocumentFormFieldText&#x60; * Dropdown Field uses &#x60;TemplateResponseDocumentFormFieldDropdown&#x60; * Hyperlink Field uses &#x60;TemplateResponseDocumentFormFieldHyperlink&#x60; * Checkbox Field uses &#x60;TemplateResponseDocumentFormFieldCheckbox&#x60; * Radio Field uses &#x60;TemplateResponseDocumentFormFieldRadio&#x60; * Signature Field uses &#x60;TemplateResponseDocumentFormFieldSignature&#x60; * Date Signed Field uses &#x60;TemplateResponseDocumentFormFieldDateSigned&#x60; * Initials Field uses &#x60;TemplateResponseDocumentFormFieldInitials&#x60; | [default to "hyperlink"]
**AvgTextLength** | Pointer to [**TemplateResponseFieldAvgTextLength**](TemplateResponseFieldAvgTextLength.md) |  | [optional] 
**IsMultiline** | Pointer to **bool** | Whether this form field is multiline text. | [optional] 
**OriginalFontSize** | Pointer to **int32** | Original font size used in this form field&#39;s text. | [optional] 
**FontFamily** | Pointer to **string** | Font family used in this form field&#39;s text. | [optional] 

## Methods

### NewTemplateResponseDocumentFormFieldHyperlink

`func NewTemplateResponseDocumentFormFieldHyperlink(type_ string, ) *TemplateResponseDocumentFormFieldHyperlink`

NewTemplateResponseDocumentFormFieldHyperlink instantiates a new TemplateResponseDocumentFormFieldHyperlink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentFormFieldHyperlinkWithDefaults

`func NewTemplateResponseDocumentFormFieldHyperlinkWithDefaults() *TemplateResponseDocumentFormFieldHyperlink`

NewTemplateResponseDocumentFormFieldHyperlinkWithDefaults instantiates a new TemplateResponseDocumentFormFieldHyperlink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TemplateResponseDocumentFormFieldHyperlink) SetType(v string)`

SetType sets Type field to given value.


### GetAvgTextLength

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetAvgTextLength() TemplateResponseFieldAvgTextLength`

GetAvgTextLength returns the AvgTextLength field if non-nil, zero value otherwise.

### GetAvgTextLengthOk

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetAvgTextLengthOk() (*TemplateResponseFieldAvgTextLength, bool)`

GetAvgTextLengthOk returns a tuple with the AvgTextLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvgTextLength

`func (o *TemplateResponseDocumentFormFieldHyperlink) SetAvgTextLength(v TemplateResponseFieldAvgTextLength)`

SetAvgTextLength sets AvgTextLength field to given value.

### HasAvgTextLength

`func (o *TemplateResponseDocumentFormFieldHyperlink) HasAvgTextLength() bool`

HasAvgTextLength returns a boolean if a field has been set.

### GetIsMultiline

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetIsMultiline() bool`

GetIsMultiline returns the IsMultiline field if non-nil, zero value otherwise.

### GetIsMultilineOk

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetIsMultilineOk() (*bool, bool)`

GetIsMultilineOk returns a tuple with the IsMultiline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMultiline

`func (o *TemplateResponseDocumentFormFieldHyperlink) SetIsMultiline(v bool)`

SetIsMultiline sets IsMultiline field to given value.

### HasIsMultiline

`func (o *TemplateResponseDocumentFormFieldHyperlink) HasIsMultiline() bool`

HasIsMultiline returns a boolean if a field has been set.

### GetOriginalFontSize

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetOriginalFontSize() int32`

GetOriginalFontSize returns the OriginalFontSize field if non-nil, zero value otherwise.

### GetOriginalFontSizeOk

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetOriginalFontSizeOk() (*int32, bool)`

GetOriginalFontSizeOk returns a tuple with the OriginalFontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalFontSize

`func (o *TemplateResponseDocumentFormFieldHyperlink) SetOriginalFontSize(v int32)`

SetOriginalFontSize sets OriginalFontSize field to given value.

### HasOriginalFontSize

`func (o *TemplateResponseDocumentFormFieldHyperlink) HasOriginalFontSize() bool`

HasOriginalFontSize returns a boolean if a field has been set.

### GetFontFamily

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetFontFamily() string`

GetFontFamily returns the FontFamily field if non-nil, zero value otherwise.

### GetFontFamilyOk

`func (o *TemplateResponseDocumentFormFieldHyperlink) GetFontFamilyOk() (*string, bool)`

GetFontFamilyOk returns a tuple with the FontFamily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontFamily

`func (o *TemplateResponseDocumentFormFieldHyperlink) SetFontFamily(v string)`

SetFontFamily sets FontFamily field to given value.

### HasFontFamily

`func (o *TemplateResponseDocumentFormFieldHyperlink) HasFontFamily() bool`

HasFontFamily returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


