# UnclaimedDraftResponse

A group of documents that a user can take ownership of via the claim URL.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `signature_request_id` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The ID of the signature request that is represented by this UnclaimedDraft. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `claim_url` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL to be used to claim this UnclaimedDraft. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signing_redirect_url` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want signers redirected to after they successfully sign. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `requesting_redirect_url` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.). REPLACE_ME_WITH_DESCRIPTION_END |  |
| `expires_at` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN When the link expires. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test draft. Signature requests made from test drafts have no legal value. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

