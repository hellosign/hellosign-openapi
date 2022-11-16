

# SignatureRequestUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureId`<sup>*_required_</sup> | ```String``` |  The signature ID for the recipient.  |  |
| `emailAddress` | ```String``` |  The new email address for the recipient.<br><br>**NOTE**: Optional if `name` is provided.  |  |
| `name` | ```String``` |  The new name for the recipient.<br><br>**NOTE**: Optional if `email_address` is provided.  |  |
| `expiresAt` | ```Integer``` |  The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable.  |  |



