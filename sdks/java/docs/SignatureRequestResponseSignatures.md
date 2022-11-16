

# SignatureRequestResponseSignatures

An array of signature objects, 1 for each signer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureId` | ```String``` |  Signature identifier.  |  |
| `signerEmailAddress` | ```String``` |  The email address of the signer.  |  |
| `signerName` | ```String``` |  The name of the signer.  |  |
| `signerRole` | ```String``` |  The role of the signer.  |  |
| `order` | ```Integer``` |  If signer order is assigned this is the 0-based index for this signer.  |  |
| `statusCode` | ```String``` |  The current status of the signature. eg: awaiting_signature, signed, declined.  |  |
| `declineReason` | ```String``` |  The reason provided by the signer for declining the request.  |  |
| `signedAt` | ```Integer``` |  Time that the document was signed or null.  |  |
| `lastViewedAt` | ```Integer``` |  The time that the document was last viewed by this signer or null.  |  |
| `lastRemindedAt` | ```Integer``` |  The time the last reminder email was sent to the signer or null.  |  |
| `hasPin` | ```Boolean``` |  Boolean to indicate whether this signature requires a PIN to access.  |  |
| `hasSmsAuth` | ```Boolean``` |  Boolean to indicate whether this signature has SMS authentication enabled.  |  |
| `hasSmsDelivery` | ```Boolean``` |  Boolean to indicate whether this signature has SMS delivery enabled.  |  |
| `smsPhoneNumber` | ```String``` |  The SMS phone number used for authentication or signature request delivery.  |  |
| `reassignedBy` | ```String``` |  Email address of original signer who reassigned to this signer.  |  |
| `reassignmentReason` | ```String``` |  Reason provided by original signer who reassigned to this signer.  |  |
| `reassignedFrom` | ```String``` |  Previous signature identifier.  |  |
| `error` | ```String``` |  Error message pertaining to this signer, or null.  |  |



