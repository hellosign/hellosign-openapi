

# BulkSendJobGetResponseSignatureRequests



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `testMode` | ```Boolean``` |  Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.  |  |
| `signatureRequestId` | ```String``` |  The id of the SignatureRequest.  |  |
| `requesterEmailAddress` | ```String``` |  The email address of the initiator of the SignatureRequest.  |  |
| `title` | ```String``` |  The title the specified Account uses for the SignatureRequest.  |  |
| `originalTitle` | ```String``` |  Default Label for account.  |  |
| `subject` | ```String``` |  The subject in the email that was initially sent to the signers.  |  |
| `message` | ```String``` |  The custom message in the email that was initially sent to the signers.  |  |
| `metadata` | ```Object``` |  The metadata attached to the signature request.  |  |
| `createdAt` | ```Integer``` |  Time the signature request was created.  |  |
| `expiresAt` | ```Integer``` |  The time when the signature request will expire pending signatures.  |  |
| `isComplete` | ```Boolean``` |  Whether or not the SignatureRequest has been fully executed by all signers.  |  |
| `isDeclined` | ```Boolean``` |  Whether or not the SignatureRequest has been declined by a signer.  |  |
| `hasError` | ```Boolean``` |  Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).  |  |
| `filesUrl` | ```String``` |  The URL where a copy of the request&#39;s documents can be downloaded.  |  |
| `signingUrl` | ```String``` |  The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.  |  |
| `detailsUrl` | ```String``` |  The URL where the requester and the signers can view the current status of the SignatureRequest.  |  |
| `ccEmailAddresses` | ```List<String>``` |  A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.  |  |
| `signingRedirectUrl` | ```String``` |  The URL you want the signer redirected to after they successfully sign.  |  |
| `templateIds` | ```List<String>``` |  Templates IDs used in this SignatureRequest (if any).  |  |
| `customFields` | [```List<SignatureRequestResponseCustomFieldBase>```](SignatureRequestResponseCustomFieldBase.md) |  An array of Custom Field objects containing the name and type of each custom field.<br><br>* Text Field uses `SignatureRequestResponseCustomFieldText`<br>* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`  |  |
| `attachments` | [```List<SignatureRequestResponseAttachment>```](SignatureRequestResponseAttachment.md) |  Signer attachments.  |  |
| `responseData` | [```List<SignatureRequestResponseDataBase>```](SignatureRequestResponseDataBase.md) |  An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.  |  |
| `signatures` | [```List<SignatureRequestResponseSignatures>```](SignatureRequestResponseSignatures.md) |  An array of signature objects, 1 for each signer.  |  |
| `bulkSendJobId` | ```String``` |  The id of the BulkSendJob.  |  |



