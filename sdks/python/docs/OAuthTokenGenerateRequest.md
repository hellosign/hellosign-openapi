# OAuthTokenGenerateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The client id of the app requesting authorization. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `client_secret`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The secret token of your app. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `code`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The code passed to your callback when the user granted access. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `grant_type`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN When generating a new token use &#x60;authorization_code&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to 'authorization_code'] |
| `state`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Same as the state you specified earlier. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

