# TemplateCreateEmbeddedDraftRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Client id of the app you&#39;re using to create this draft. Used to apply the branding and callback url defined for the app. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files` | ```List[io.IOBase]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `file_urls` | ```List[str]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `allow_ccs` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template. REPLACE_ME_WITH_DESCRIPTION_END |  [default to True] |
| `allow_reassign` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.

**NOTE:** Only available for Premium plan and higher. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `attachments` | [```List[SubAttachment]```](SubAttachment.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN A list describing the attachments REPLACE_ME_WITH_DESCRIPTION_END |  |
| `cc_roles` | ```List[str]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The CC roles that must be assigned when using the template to send a signature request REPLACE_ME_WITH_DESCRIPTION_END |  |
| `editor_options` | [```SubEditorOptions```](SubEditorOptions.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `field_options` | [```SubFieldOptions```](SubFieldOptions.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `force_signer_roles` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Provide users the ability to review/edit the template signer roles. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `force_subject_message` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Provide users the ability to review/edit the template subject and message. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `form_field_groups` | [```List[SubFormFieldGroup]```](SubFormFieldGroup.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `form_field_rules` | [```List[SubFormFieldRule]```](SubFormFieldRule.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `form_fields_per_document` | [```List[SubFormFieldsPerDocumentBase]```](SubFormFieldsPerDocumentBase.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

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
| `merge_fields` | [```List[SubMergeField]```](SubMergeField.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the &#x60;custom_fields&#x60; parameter.
If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `message` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The default template email message. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `metadata` | ```Dict[str, object]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.

Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `show_preview` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN This allows the requester to enable the editor/preview experience.

- &#x60;show_preview&#x3D;true&#x60;: Allows requesters to enable the editor/preview experience.
- &#x60;show_preview&#x3D;false&#x60;: Allows requesters to disable the editor/preview experience. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `show_progress_stepper` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. REPLACE_ME_WITH_DESCRIPTION_END |  [default to True] |
| `signer_roles` | [```List[SubTemplateRole]```](SubTemplateRole.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `skip_me_now` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Disables the &quot;Me (Now)&quot; option for the person preparing the document. Does not work with type &#x60;send_document&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `subject` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The template title (alias). REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `title` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The title you want to assign to the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `use_preexisting_fields` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Enable the detection of predefined PDF fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

