# # SignatureRequestResponseSignatures

An array of signature objects, 1 for each signer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signature_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Signature identifier. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer_group_guid` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Signer Group GUID REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer_email_address` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The email address of the signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer_name` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The name of the signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signer_role` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The role of the signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `order` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN If signer order is assigned this is the 0-based index for this signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `status_code` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The current status of the signature. eg: awaiting_signature, signed, declined. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `decline_reason` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The reason provided by the signer for declining the request. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signed_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Time that the document was signed or null. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `last_viewed_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The time that the document was last viewed by this signer or null. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `last_reminded_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The time the last reminder email was sent to the signer or null. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `has_pin` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Boolean to indicate whether this signature requires a PIN to access. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `has_sms_auth` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Boolean to indicate whether this signature has SMS authentication enabled. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `has_sms_delivery` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Boolean to indicate whether this signature has SMS delivery enabled. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `sms_phone_number` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The SMS phone number used for authentication or signature request delivery. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `reassigned_by` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Email address of original signer who reassigned to this signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `reassignment_reason` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Reason provided by original signer who reassigned to this signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `reassigned_from` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Previous signature identifier. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `error` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Error message pertaining to this signer, or null. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
