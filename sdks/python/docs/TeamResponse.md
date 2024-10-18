# TeamResponse

Contains information about your team and its members

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name`<sup>*_required_</sup> | ```str``` |  The name of your Team  |  |
| `accounts`<sup>*_required_</sup> | [```List[AccountResponse]```](AccountResponse.md) |    |  |
| `invited_accounts`<sup>*_required_</sup> | [```List[AccountResponse]```](AccountResponse.md) |  A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.  |  |
| `invited_emails`<sup>*_required_</sup> | ```List[str]``` |  A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

