# OAuthTokenGenerateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```str``` |  The client id of the app requesting authorization.  |  |
| `client_secret`<sup>*_required_</sup> | ```str``` |  The secret token of your app.  |  |
| `code`<sup>*_required_</sup> | ```str``` |  The code passed to your callback when the user granted access.  |  |
| `grant_type`<sup>*_required_</sup> | ```str``` |  When generating a new token use `authorization_code`.  |  [default to 'authorization_code'] |
| `state`<sup>*_required_</sup> | ```str``` |  Same as the state you specified earlier.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


