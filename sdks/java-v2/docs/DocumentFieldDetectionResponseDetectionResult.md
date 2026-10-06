

# DocumentFieldDetectionResponseDetectionResult



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `documentHash`<sup>*_required_</sup> | ```String``` |  The SHA-256 hash of the analyzed document.  |  |
| `detectionMode`<sup>*_required_</sup> | [```String```](String.md) |  The field detection method used to analyze the document: `annotations` or `text_tags`.  |  |
| `pageCount`<sup>*_required_</sup> | ```Integer``` |  The total number of pages in the document.  |  |
| `pagesAnalyzed`<sup>*_required_</sup> | ```String``` |  The zero-based page indexes analyzed, represented by the requested `page_range`, or `all` when every page was analyzed.  |  |
| `detectedAt`<sup>*_required_</sup> | ```Long``` |  The Unix timestamp when the field detection result was generated.  |  |
| `formFieldsPerDocument`<sup>*_required_</sup> | [```List<SubFormFieldsPerDocumentBase>```](SubFormFieldsPerDocumentBase.md) |  The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`  |  |
| `formFieldGroups`<sup>*_required_</sup> | [```List<SubFormFieldGroup>```](SubFormFieldGroup.md) |  Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.  |  |
| `warnings`<sup>*_required_</sup> | [```List<WarningResponse>```](WarningResponse.md) |  Non-fatal issues encountered during field detection.  |  |
| `errors`<sup>*_required_</sup> | [```List<ErrorResponseError>```](ErrorResponseError.md) |  Errors encountered during field detection. Successfully detected fields may still be included in the response.  |  |
| `suggestions`<sup>*_required_</sup> | ```List<String>``` |  Suggestions for improving the field detection results.  |  |



