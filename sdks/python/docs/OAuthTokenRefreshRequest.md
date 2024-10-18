# OAuthTokenRefreshRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `grant_type`<sup>*_required_</sup> | ```str``` |  When refreshing an existing token use `refresh_token`.  |  [default to 'refresh_token'] |
| `refresh_token`<sup>*_required_</sup> | ```str``` |  The token provided when you got the expired access token.  |  |
| `client_id` | ```str``` |  The client ID for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |
| `client_secret` | ```str``` |  The client secret for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

