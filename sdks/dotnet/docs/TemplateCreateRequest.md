# Dropbox.Sign.Model.TemplateCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormFieldsPerDocument** | [**List&lt;SubFormFieldsPerDocumentBase&gt;**](SubFormFieldsPerDocumentBase.md) |  The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`  | 
**SignerRoles** | [**List&lt;SubTemplateRole&gt;**](SubTemplateRole.md) |  An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.  | 
**Files** | **List&lt;System.IO.Stream&gt;** |  Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  | [optional] 
**FileUrls** | **List&lt;string&gt;** |  Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  | [optional] 
**AllowReassign** | **bool** |  Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan and higher.  | [optional] [default to false]
**Attachments** | [**List&lt;SubAttachment&gt;**](SubAttachment.md) |  A list describing the attachments  | [optional] 
**CcRoles** | **List&lt;string&gt;** |  The CC roles that must be assigned when using the template to send a signature request  | [optional] 
**ClientId** | **string** |  Client id of the app you&#39;re using to create this draft. Used to apply the branding and callback url defined for the app.  | [optional] 
**FieldOptions** | [**SubFieldOptions**](SubFieldOptions.md) |    | [optional] 
**FormFieldGroups** | [**List&lt;SubFormFieldGroup&gt;**](SubFormFieldGroup.md) |  Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.  | [optional] 
**FormFieldRules** | [**List&lt;SubFormFieldRule&gt;**](SubFormFieldRule.md) |  Conditional Logic rules for fields defined in `form_fields_per_document`.  | [optional] 
**MergeFields** | [**List&lt;SubMergeField&gt;**](SubMergeField.md) |  Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter. If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document.  | [optional] 
**Message** | **string** |  The default template email message.  | [optional] 
**Metadata** | **Dictionary&lt;string, Object&gt;** |  Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.  | [optional] 
**Subject** | **string** |  The template title (alias).  | [optional] 
**TestMode** | **bool** |  Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.  | [optional] [default to false]
**Title** | **string** |  The title you want to assign to the SignatureRequest.  | [optional] 
**UsePreexistingFields** | **bool** |  Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).  | [optional] [default to false]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

