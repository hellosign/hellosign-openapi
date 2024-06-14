# # TeamResponse

Contains information about your team and its members

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```string``` |  The name of your Team  |  |
| `accounts` | [```Array<AccountResponse>```](AccountResponse.md) |    |  |
| `invitedAccounts` | [```Array<AccountResponse>```](AccountResponse.md) |  A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.  |  |
| `invitedEmails` | ```Array<string>``` |  A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
