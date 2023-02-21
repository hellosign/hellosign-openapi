# Dropbox.Sign.Model.TemplateResponseDocumentFormFieldDropdown
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
**Group** | **string** |  The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.  | [optional] 
**FontSize** | **int** |  Final font size used by this form field.  | [optional] 
**Type** | **string** |  The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`  | [default to "dropdown"]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

