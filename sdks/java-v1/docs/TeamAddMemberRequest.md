

# TeamAddMemberRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `accountId` | ```String``` |  `account_id` or `email_address` is required. If both are provided, the account id prevails.<br><br>Account id of the user to invite to your Team.  |  |
| `emailAddress` | ```String``` |  `account_id` or `email_address` is required, If both are provided, the account id prevails.<br><br>Email address of the user to invite to your Team.  |  |
| `role` | [```RoleEnum```](#RoleEnum) |  A role member will take in a new Team.<br><br>**Note**: This parameter is used only if `team_id` is provided.  |  |



## Enum: RoleEnum

Name | Value
---- | -----
| MEMBER | &quot;Member&quot; |
| DEVELOPER | &quot;Developer&quot; |
| TEAM_MANAGER | &quot;Team Manager&quot; |
| ADMIN | &quot;Admin&quot; |



