

# TeamResponse

Contains information about your team and its members

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `name`<sup>*_required_</sup> | ```String``` |  The name of your Team  |  |
| `accounts`<sup>*_required_</sup> | [```List<AccountResponse>```](AccountResponse.md) |    |  |
| `invitedAccounts`<sup>*_required_</sup> | [```List<AccountResponse>```](AccountResponse.md) |  A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.  |  |
| `invitedEmails`<sup>*_required_</sup> | ```List<String>``` |  A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.  |  |



