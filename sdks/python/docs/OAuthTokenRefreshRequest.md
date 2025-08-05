# OAuthTokenRefreshRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `grant_type`<sup>*_required_</sup> | ```str``` |  When refreshing an existing token use `refresh_token`.  |  [default to 'refresh_token'] |
| `refresh_token`<sup>*_required_</sup> | ```str``` |  The token provided when you got the expired access token.  |  |
| `client_id` | ```str``` |  The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |
| `client_secret` | ```str``` |  The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


