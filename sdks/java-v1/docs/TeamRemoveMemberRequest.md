

# TeamRemoveMemberRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `accountId` | ```String``` |  **account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Account id to remove from your Team.  |  |
| `emailAddress` | ```String``` |  **account_id** or **email_address** is required. If both are provided, the account id prevails.<br><br>Email address of the Account to remove from your Team.  |  |
| `newOwnerEmailAddress` | ```String``` |  The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.<br><br>**NOTE:** Only available for Enterprise plans.  |  |
| `newTeamId` | ```String``` |  Id of the new Team.  |  |
| `newRole` | [```NewRoleEnum```](#NewRoleEnum) |  A new role member will take in a new Team.<br><br>**NOTE:** This parameter is used only if `new_team_id` is provided.  |  |



## Enum: NewRoleEnum

| Name | Value |
---- | -----
| MEMBER | &quot;Member&quot; |
| CUSTOM_SIGN_13034 | &quot;Custom SIGN-13034&quot; |
| CUSTOM_SIGN_13047 | &quot;Custom SIGN-13047&quot; |
| DEVELOPER | &quot;Developer&quot; |
| TEAM_MANAGER | &quot;Team Manager&quot; |
| ADMIN | &quot;Admin&quot; |



