# Dropbox.Sign.Model.TemplateResponseDocumentFormFieldText
This class extends `TemplateResponseDocumentFormFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiId** | **string** |  A unique id for the form field.  | [optional] 
**Name** | **string** |  The name of the form field.  | [optional] 
**Signer** | **string** |  The signer of the Form Field.  | [optional] 
**X** | **int** |  The horizontal offset in pixels for this form field.  | [optional] 
**Y** | **int** |  The vertical offset in pixels for this form field.  | [optional] 
**Width** | **int** |  The width in pixels of this form field.  | [optional] 
**Height** | **int** |  The height in pixels of this form field.  | [optional] 
**Required** | **bool** |  Boolean showing whether or not this field is required.  | [optional] 
**Type** | **string** |  The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`  | [default to "text"]**AvgTextLength** | [**TemplateResponseFieldAvgTextLength**](TemplateResponseFieldAvgTextLength.md) |    | [optional] **IsMultiline** | **bool** |  Whether this form field is multiline text.  | [optional] **OriginalFontSize** | **int** |  Original font size used in this form field&#39;s text.  | [optional] **FontFamily** | **string** |  Font family used in this form field&#39;s text.  | [optional] **ValidationType** | **string** |  Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  | [optional] **ValidationCustomRegex** | **string** |  When `validation_type` is set to `custom_regex`, this specifies the custom regular expression pattern that will be used to validate the text field.  | [optional] **ValidationCustomRegexFormatLabel** | **string** |  When `validation_type` is set to `custom_regex`, this specifies the error message displayed to the signer when the text does not match the provided regex pattern.  | [optional] **Group** | **string** |  The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

