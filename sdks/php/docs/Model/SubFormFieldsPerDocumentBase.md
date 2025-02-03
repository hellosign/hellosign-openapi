# # SubFormFieldsPerDocumentBase

The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

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
* Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `document_index`<sup>*_required_</sup> | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Represents the integer index of the &#x60;file&#x60; or &#x60;file_url&#x60; document the field should be attached to. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `api_id`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN An identifier for the field that is unique across all documents in the request. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `height`<sup>*_required_</sup> | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Size of the field in pixels. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `required`<sup>*_required_</sup> | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this field is required. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.

**NOTE:** To set the value of the field as the preparer you must set this to &#x60;me_now&#x60;

**NOTE:** If type is &#x60;text-merge&#x60; or &#x60;checkbox-merge&#x60;, you must set this to sender in order to use pre-filled data. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `width`<sup>*_required_</sup> | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Size of the field in pixels. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `x`<sup>*_required_</sup> | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Location coordinates of the field in pixels. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `y`<sup>*_required_</sup> | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Location coordinates of the field in pixels. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `name` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Display name for the field. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `page` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Page in the document where the field should be placed (requires documents be PDF files).

- When the page number parameter is supplied, the API will use the new coordinate system.
- Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
