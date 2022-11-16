

# ApiAppResponseOAuth

An object describing the app&#39;s OAuth properties, or null if OAuth is not configured for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `callbackUrl` | ```String``` |  The app&#39;s OAuth callback URL.  |  |
| `secret` | ```String``` |  The app&#39;s OAuth secret, or null if the app does not belong to user.  |  |
| `scopes` | ```List<String>``` |  Array of OAuth scopes used by the app.  |  |
| `chargesUsers` | ```Boolean``` |  Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.  |  |



