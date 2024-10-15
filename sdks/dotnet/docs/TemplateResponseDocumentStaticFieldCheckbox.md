# Dropbox.Sign.Model.TemplateResponseDocumentStaticFieldCheckbox
This class extends `TemplateResponseDocumentStaticFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiId** | **string** |  A unique id for the static field.  | 
**Name** | **string** |  The name of the static field.  | 
**Signer** | **string** |  The signer of the Static Field.  | [default to "me_now"]
**X** | **int** |  The horizontal offset in pixels for this static field.  | 
**Y** | **int** |  The vertical offset in pixels for this static field.  | 
**Width** | **int** |  The width in pixels of this static field.  | 
**Height** | **int** |  The height in pixels of this static field.  | 
**Required** | **bool** |  Boolean showing whether or not this field is required.  | 
**Group** | **string** |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  | [optional] 
**Type** | **string** |  The type of this static field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentStaticFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentStaticFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentStaticFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentStaticFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentStaticFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentStaticFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentStaticFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentStaticFieldInitials`  | [default to "checkbox"]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

