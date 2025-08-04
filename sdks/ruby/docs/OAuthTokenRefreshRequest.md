# Dropbox::Sign::OAuthTokenRefreshRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `grant_type`<sup>*_required_</sup> | ```String``` |  When refreshing an existing token use `refresh_token`.  |  [default to 'refresh_token'] |
| `refresh_token`<sup>*_required_</sup> | ```String``` |  The token provided when you got the expired access token.  |  |
| `client_id` | ```String``` |  The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |
| `client_secret` | ```String``` |  The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |

