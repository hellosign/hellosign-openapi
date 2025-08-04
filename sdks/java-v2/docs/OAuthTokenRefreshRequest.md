

# OAuthTokenRefreshRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `grantType`<sup>*_required_</sup> | ```String``` |  When refreshing an existing token use `refresh_token`.  |  |
| `refreshToken`<sup>*_required_</sup> | ```String``` |  The token provided when you got the expired access token.  |  |
| `clientId` | ```String``` |  The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |
| `clientSecret` | ```String``` |  The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.  |  |



