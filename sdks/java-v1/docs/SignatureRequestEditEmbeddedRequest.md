

# SignatureRequestEditEmbeddedRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `clientId`<sup>*_required_</sup> | ```String``` |  Client id of the app you&#39;re using to create this embedded signature request. Used for security purposes.  |  |
| `files` | ```List<File>``` |  Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `fileUrls` | ```List<String>``` |  Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `signers` | [```List<SubSignatureRequestSigner>```](SubSignatureRequestSigner.md) |  Add Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.  |  |
| `groupedSigners` | [```List<SubSignatureRequestGroupedSigners>```](SubSignatureRequestGroupedSigners.md) |  Add Grouped Signers to your Signature Request.<br><br>This endpoint requires either **signers** or **grouped_signers**, but not both.  |  |
| `allowDecline` | ```Boolean``` |  Allows signers to decline to sign a document if `true`. Defaults to `false`.  |  |
| `allowReassign` | ```Boolean``` |  Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.<br><br>**NOTE:** Only available for Premium plan.  |  |
| `attachments` | [```List<SubAttachment>```](SubAttachment.md) |  A list describing the attachments  |  |
| `ccEmailAddresses` | ```List<String>``` |  The email addresses that should be CCed.  |  |
| `customFields` | [```List<SubCustomField>```](SubCustomField.md) |  When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.<br><br>Pre-filled data can be used with &quot;send-once&quot; signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.<br><br>For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.  |  |
| `fieldOptions` | [```SubFieldOptions```](SubFieldOptions.md) |    |  |
| `formFieldGroups` | [```List<SubFormFieldGroup>```](SubFormFieldGroup.md) |  Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.  |  |
| `formFieldRules` | [```List<SubFormFieldRule>```](SubFormFieldRule.md) |  Conditional Logic rules for fields defined in `form_fields_per_document`.  |  |
| `formFieldsPerDocument` | [```List<SubFormFieldsPerDocumentBase>```](SubFormFieldsPerDocumentBase.md) |  The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)<br><br>**NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.<br><br>* Text Field use `SubFormFieldsPerDocumentText`<br>* Dropdown Field use `SubFormFieldsPerDocumentDropdown`<br>* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`<br>* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`<br>* Radio Field use `SubFormFieldsPerDocumentRadio`<br>* Signature Field use `SubFormFieldsPerDocumentSignature`<br>* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`<br>* Initials Field use `SubFormFieldsPerDocumentInitials`<br>* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`<br>* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`  |  |
| `hideTextTags` | ```Boolean``` |  Enables automatic Text Tag removal when set to true.<br><br>**NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.  |  |
| `message` | ```String``` |  The custom message in the email that will be sent to the signers.  |  |
| `metadata` | ```Map<String, Object>``` |  Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.  |  |
| `signingOptions` | [```SubSigningOptions```](SubSigningOptions.md) |    |  |
| `subject` | ```String``` |  The subject in the email that will be sent to the signers.  |  |
| `testMode` | ```Boolean``` |  Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.  |  |
| `title` | ```String``` |  The title you want to assign to the SignatureRequest.  |  |
| `useTextTags` | ```Boolean``` |  Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.  |  |
| `populateAutoFillFields` | ```Boolean``` |  Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer&#39;s information during signing.<br><br>**NOTE:** Keep your signer&#39;s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.  |  |
| `expiresAt` | ```Integer``` |  When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.  |  |



