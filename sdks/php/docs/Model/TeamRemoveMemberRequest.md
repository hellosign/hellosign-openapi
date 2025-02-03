# # TeamRemoveMemberRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `account_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN **account_id** or **email_address** is required. If both are provided, the account id prevails.

Account id to remove from your Team. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `email_address` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN **account_id** or **email_address** is required. If both are provided, the account id prevails.

Email address of the Account to remove from your Team. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `new_owner_email_address` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.

**NOTE:** Only available for Enterprise plans. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `new_team_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Id of the new Team. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `new_role` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN A new role member will take in a new Team.

**NOTE:** This parameter is used only if &#x60;new_team_id&#x60; is provided. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
