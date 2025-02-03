# # TemplateCreateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `form_fields_per_document`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SubFormFieldsPerDocumentBase[]```](SubFormFieldsPerDocumentBase.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

* Text Field use &#x60;SubFormFieldsPerDocumentText&#x60;
* Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60;
* Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60;
* Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60;
* Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60;
* Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60;
* Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60;
* Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60;
* Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60;
* Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer_roles`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SubTemplateRole[]```](SubTemplateRole.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files` | ```\SplFileObject[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `file_urls` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `allow_reassign` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.

**NOTE:** Only available for Premium plan and higher. REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `attachments` | [```\Dropbox\Sign\Model\SubAttachment[]```](SubAttachment.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN A list describing the attachments REPLACE_ME_WITH_DESCRIPTION_END |  |
| `cc_roles` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The CC roles that must be assigned when using the template to send a signature request REPLACE_ME_WITH_DESCRIPTION_END |  |
| `client_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Client id of the app you&#39;re using to create this draft. Used to apply the branding and callback url defined for the app. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `field_options` | [```\Dropbox\Sign\Model\SubFieldOptions```](SubFieldOptions.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `form_field_groups` | [```\Dropbox\Sign\Model\SubFormFieldGroup[]```](SubFormFieldGroup.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `form_field_rules` | [```\Dropbox\Sign\Model\SubFormFieldRule[]```](SubFormFieldRule.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `merge_fields` | [```\Dropbox\Sign\Model\SubMergeField[]```](SubMergeField.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the &#x60;custom_fields&#x60; parameter.
If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `message` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The default template email message. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `metadata` | ```array<string,mixed>``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.

Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `subject` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The template title (alias). REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `title` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The title you want to assign to the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `use_preexisting_fields` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Enable the detection of predefined PDF fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
