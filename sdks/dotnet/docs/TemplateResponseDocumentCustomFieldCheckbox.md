# Dropbox.Sign.Model.TemplateResponseDocumentCustomFieldCheckbox
This class extends `TemplateResponseDocumentCustomFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiId** | **string** |  The unique ID for this field.  | 
**Name** | **string** |  The name of the Custom Field.  | 
**X** | **int** |  The horizontal offset in pixels for this form field.  | 
**Y** | **int** |  The vertical offset in pixels for this form field.  | 
**Width** | **int** |  The width in pixels of this form field.  | 
**Height** | **int** |  The height in pixels of this form field.  | 
**Required** | **bool** |  Boolean showing whether or not this field is required.  | 
**Signer** | **string** |  The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).  | [optional] 
**Group** | **string** |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  | [optional] 
**Type** | **string** |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`  | [default to "checkbox"]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

