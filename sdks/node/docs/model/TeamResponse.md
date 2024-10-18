# # TeamResponse

Contains information about your team and its members

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name`<sup>*_required_</sup> | ```string``` |  The name of your Team  |  |
| `accounts`<sup>*_required_</sup> | [```Array<AccountResponse>```](AccountResponse.md) |    |  |
| `invitedAccounts`<sup>*_required_</sup> | [```Array<AccountResponse>```](AccountResponse.md) |  A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.  |  |
| `invitedEmails`<sup>*_required_</sup> | ```Array<string>``` |  A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
