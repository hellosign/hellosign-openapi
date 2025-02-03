# # OAuthTokenRefreshRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `grant_type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN When refreshing an existing token use &#x60;refresh_token&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to 'refresh_token'] |
| `refresh_token`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The token provided when you got the expired access token. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `client_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The client ID for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `client_secret` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The client secret for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
