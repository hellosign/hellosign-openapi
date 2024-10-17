# AccountResponse



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `account_id`<sup>*_required_</sup> | ```str``` |  The ID of the Account  |  |
| `is_locked`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `is_paid_hs`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `is_paid_hf`<sup>*_required_</sup> | ```bool``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```AccountResponseQuotas```](AccountResponseQuotas.md) |    |  |
| `email_address` | ```str``` |  The email address associated with the Account.  |  |
| `callback_url` | ```str``` |  The URL that Dropbox Sign events will `POST` to.  |  |
| `role_code` | ```str``` |  The membership role for the team.  |  |
| `team_id` | ```str``` |  The id of the team account belongs to.  |  |
| `locale` | ```str``` |  The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.  |  |
| `usage` | [```AccountResponseUsage```](AccountResponseUsage.md) |    |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

