# # UnclaimedDraftEditAndResendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `editor_options` | [```\Dropbox\Sign\Model\SubEditorOptions```](SubEditorOptions.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `is_for_embedded_signing` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The request created from this draft will also be signable in embedded mode if set to &#x60;true&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `requester_email_address` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The email address of the user that should be designated as the requester of this draft. If not set, original requester&#39;s email address will be used. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `requesting_redirect_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want signers redirected to after they successfully request a signature. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `show_progress_stepper` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. REPLACE_ME_WITH_DESCRIPTION_END |  [default to true] |
| `signing_redirect_url` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want signers redirected to after they successfully sign. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
