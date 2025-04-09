# SignatureRequestResponse

Contains information about a signature request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `test_mode` | ```bool``` |  Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.  |  [default to False] |
| `signature_request_id` | ```str``` |  The id of the SignatureRequest.  |  |
| `requester_email_address` | ```str``` |  The email address of the initiator of the SignatureRequest.  |  |
| `title` | ```str``` |  The title the specified Account uses for the SignatureRequest.  |  |
| `original_title` | ```str``` |  Default Label for account.  |  |
| `subject` | ```str``` |  The subject in the email that was initially sent to the signers.  |  |
| `message` | ```str``` |  The custom message in the email that was initially sent to the signers.  |  |
| `metadata` | ```Dict[str, object]``` |  The metadata attached to the signature request.  |  |
| `created_at` | ```int``` |  Time the signature request was created.  |  |
| `expires_at` | ```int``` |  The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.  |  |
| `is_complete` | ```bool``` |  Whether or not the SignatureRequest has been fully executed by all signers.  |  |
| `is_declined` | ```bool``` |  Whether or not the SignatureRequest has been declined by a signer.  |  |
| `has_error` | ```bool``` |  Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).  |  |
| `files_url` | ```str``` |  The URL where a copy of the request&#39;s documents can be downloaded.  |  |
| `signing_url` | ```str``` |  The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.  |  |
| `details_url` | ```str``` |  The URL where the requester and the signers can view the current status of the SignatureRequest.  |  |
| `cc_email_addresses` | ```List[str]``` |  A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.  |  |
| `signing_redirect_url` | ```str``` |  The URL you want the signer redirected to after they successfully sign.  |  |
| `final_copy_uri` | ```str``` |  The path where the completed document can be downloaded  |  |
| `template_ids` | ```List[str]``` |  Templates IDs used in this SignatureRequest (if any).  |  |
| `custom_fields` | [```List[SignatureRequestResponseCustomFieldBase]```](SignatureRequestResponseCustomFieldBase.md) |  An array of Custom Field objects containing the name and type of each custom field.<br><br>* Text Field uses `SignatureRequestResponseCustomFieldText`<br>* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`  |  |
| `attachments` | [```List[SignatureRequestResponseAttachment]```](SignatureRequestResponseAttachment.md) |  Signer attachments.  |  |
| `response_data` | [```List[SignatureRequestResponseDataBase]```](SignatureRequestResponseDataBase.md) |  An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.  |  |
| `signatures` | [```List[SignatureRequestResponseSignatures]```](SignatureRequestResponseSignatures.md) |  An array of signature objects, 1 for each signer.  |  |
| `bulk_send_job_id` | ```str``` |  The ID of the Bulk Send job which sent the signature request, if applicable.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


