# SignatureRequestResponseSignatures

An array of signature objects, 1 for each signer.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signature_id` | ```str``` |  Signature identifier.  |  |
| `signer_group_guid` | ```str``` |  Signer Group GUID  |  |
| `signer_email_address` | ```str``` |  The email address of the signer.  |  |
| `signer_name` | ```str``` |  The name of the signer.  |  |
| `signer_role` | ```str``` |  The role of the signer.  |  |
| `order` | ```int``` |  If signer order is assigned this is the 0-based index for this signer.  |  |
| `status_code` | ```str``` |  The current status of the signature. eg: awaiting_signature, signed, declined.  |  |
| `decline_reason` | ```str``` |  The reason provided by the signer for declining the request.  |  |
| `signed_at` | ```int``` |  Time that the document was signed or null.  |  |
| `last_viewed_at` | ```int``` |  The time that the document was last viewed by this signer or null.  |  |
| `last_reminded_at` | ```int``` |  The time the last reminder email was sent to the signer or null.  |  |
| `has_pin` | ```bool``` |  Boolean to indicate whether this signature requires a PIN to access.  |  |
| `has_sms_auth` | ```bool``` |  Boolean to indicate whether this signature has SMS authentication enabled.  |  |
| `has_sms_delivery` | ```bool``` |  Boolean to indicate whether this signature has SMS delivery enabled.  |  |
| `sms_phone_number` | ```str``` |  The SMS phone number used for authentication or signature request delivery.  |  |
| `reassigned_by` | ```str``` |  Email address of original signer who reassigned to this signer.  |  |
| `reassignment_reason` | ```str``` |  Reason provided by original signer who reassigned to this signer.  |  |
| `reassigned_from` | ```str``` |  Previous signature identifier.  |  |
| `error` | ```str``` |  Error message pertaining to this signer, or null.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

