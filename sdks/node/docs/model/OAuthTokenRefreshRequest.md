# # OAuthTokenRefreshRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `grantType`<sup>*_required_</sup> | ```string``` |  When refreshing an existing token use `refresh_token`.  |  [default to 'refresh_token'] |
| `refreshToken`<sup>*_required_</sup> | ```string``` |  The token provided when you got the expired access token.  |  |
| `clientId` | ```string``` |  The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |
| `clientSecret` | ```string``` |  The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
