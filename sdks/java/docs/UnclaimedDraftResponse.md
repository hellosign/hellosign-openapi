

# UnclaimedDraftResponse

A group of documents that a user can take ownership of via the claim URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signatureRequestId` | ```String``` |  The ID of the signature request that is represented by this UnclaimedDraft.  |  |
| `claimUrl` | ```String``` |  The URL to be used to claim this UnclaimedDraft.  |  |
| `signingRedirectUrl` | ```String``` |  The URL you want signers redirected to after they successfully sign.  |  |
| `requestingRedirectUrl` | ```String``` |  The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.).  |  |
| `expiresAt` | ```Integer``` |  When the link expires.  |  |
| `testMode` | ```Boolean``` |  Whether this is a test draft. Signature requests made from test drafts have no legal value.  |  |



