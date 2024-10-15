# # TemplateResponseAccount



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `accountId`<sup>*_required_</sup> | ```string``` |  The id of the Account.  |  |
| `isLocked`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `isPaidHs`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `isPaidHf`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```TemplateResponseAccountQuota```](TemplateResponseAccountQuota.md) |    |  |
| `emailAddress` | ```string``` |  The email address associated with the Account.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
