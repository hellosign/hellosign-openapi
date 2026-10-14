# Dropbox::Sign::TeamResponse

Contains information about your team and its members

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_id` | ```String``` |  The id of a team  |  |
| `parent_team_id` | ```String``` |  _t__Team::PARENT_TEAM_ID  |  |
| `name` | ```String``` |  The name of your Team  |  |
| `accounts` | [```Array<AccountResponse>```](AccountResponse.md) |    |  |
| `invited_accounts` | [```Array<AccountResponse>```](AccountResponse.md) |  A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.  |  |
| `invited_emails` | ```Array<String>``` |  A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.  |  |

