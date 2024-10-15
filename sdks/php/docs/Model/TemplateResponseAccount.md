# # TemplateResponseAccount



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `account_id`<sup>*_required_</sup> | ```string``` |  The id of the Account.  |  |
| `is_locked`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `is_paid_hs`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `is_paid_hf`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\TemplateResponseAccountQuota```](TemplateResponseAccountQuota.md) |    |  |
| `email_address` | ```string``` |  The email address associated with the Account.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
