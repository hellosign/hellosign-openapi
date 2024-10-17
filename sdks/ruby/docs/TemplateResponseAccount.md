# Dropbox::Sign::TemplateResponseAccount



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id`<sup>*_required_</sup> | ```String``` |  The id of the Account.  |  |
| `is_locked`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `is_paid_hs`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `is_paid_hf`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```TemplateResponseAccountQuota```](TemplateResponseAccountQuota.md) |    |  |
| `email_address` | ```String``` |  The email address associated with the Account.  |  |

