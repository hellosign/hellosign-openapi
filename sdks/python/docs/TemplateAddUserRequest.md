# TemplateAddUserRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `account_id` | ```str``` |  The id of the Account to give access to the Template.<br>**NOTE:** The account id prevails if email address is also provided.  |  |
| `email_address` | ```str``` |  The email address of the Account to give access to the Template.<br>**NOTE:** The account id prevails if it is also provided.  |  |
| `skip_notification` | ```bool``` |  If set to `true`, the user does not receive an email notification when a template has been shared with them. Defaults to `false`.  |  [default to False] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


