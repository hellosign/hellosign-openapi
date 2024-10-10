# # AccountResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `accountId`<sup>*_required_</sup> | ```string``` |  The ID of the Account  |  |
| `isLocked`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `isPaidHs`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `isPaidHf`<sup>*_required_</sup> | ```boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```AccountResponseQuotas```](AccountResponseQuotas.md) |    |  |
| `emailAddress` | ```string``` |  The email address associated with the Account.  |  |
| `callbackUrl` | ```string``` |  The URL that Dropbox Sign events will `POST` to.  |  |
| `roleCode` | ```string``` |  The membership role for the team.  |  |
| `teamId` | ```string``` |  The id of the team account belongs to.  |  |
| `locale` | ```string``` |  The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.  |  |
| `usage` | [```AccountResponseUsage```](AccountResponseUsage.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
