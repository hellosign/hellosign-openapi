# # OAuthTokenRefreshRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `grant_type`<sup>*_required_</sup> | ```string``` |  When refreshing an existing token use `refresh_token`.  |  [default to 'refresh_token'] |
| `refresh_token`<sup>*_required_</sup> | ```string``` |  The token provided when you got the expired access token.  |  |
| `client_id` | ```string``` |  The client ID for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |
| `client_secret` | ```string``` |  The client secret for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
