

# OAuthTokenRefreshRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `grantType`<sup>*_required_</sup> | ```String``` |  When refreshing an existing token use `refresh_token`.  |  |
| `refreshToken`<sup>*_required_</sup> | ```String``` |  The token provided when you got the expired access token.  |  |
| `clientId` | ```String``` |  The client ID for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |
| `clientSecret` | ```String``` |  The client secret for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  |  |



