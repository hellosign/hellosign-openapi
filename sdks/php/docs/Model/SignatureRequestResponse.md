# # SignatureRequestResponse

Contains information about a signature request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test signature request. Test requests have no legal value. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `signature_request_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The id of the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `requester_email_address` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The email address of the initiator of the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `title` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The title the specified Account uses for the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `original_title` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Default Label for account. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `subject` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The subject in the email that was initially sent to the signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `message` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The custom message in the email that was initially sent to the signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `metadata` | ```array<string,mixed>``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The metadata attached to the signature request. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `created_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Time the signature request was created. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `expires_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `is_complete` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether or not the SignatureRequest has been fully executed by all signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `is_declined` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether or not the SignatureRequest has been declined by a signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `has_error` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings). REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL where a copy of the request&#39;s documents can be downloaded. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signing_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `details_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL where the requester and the signers can view the current status of the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `cc_email_addresses` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signing_redirect_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want the signer redirected to after they successfully sign. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `final_copy_uri` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The path where the completed document can be downloaded REPLACE_ME_WITH_DESCRIPTION_END |  |
| `template_ids` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Templates IDs used in this SignatureRequest (if any). REPLACE_ME_WITH_DESCRIPTION_END |  |
| `custom_fields` | [```\Dropbox\Sign\Model\SignatureRequestResponseCustomFieldBase[]```](SignatureRequestResponseCustomFieldBase.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array of Custom Field objects containing the name and type of each custom field.

* Text Field uses &#x60;SignatureRequestResponseCustomFieldText&#x60;
* Checkbox Field uses &#x60;SignatureRequestResponseCustomFieldCheckbox&#x60; REPLACE_ME_WITH_DESCRIPTION_END |  |
| `attachments` | [```\Dropbox\Sign\Model\SignatureRequestResponseAttachment[]```](SignatureRequestResponseAttachment.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Signer attachments. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `response_data` | [```\Dropbox\Sign\Model\SignatureRequestResponseDataBase[]```](SignatureRequestResponseDataBase.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signatures` | [```\Dropbox\Sign\Model\SignatureRequestResponseSignatures[]```](SignatureRequestResponseSignatures.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array of signature objects, 1 for each signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `bulk_send_job_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The ID of the Bulk Send job which sent the signature request, if applicable. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
