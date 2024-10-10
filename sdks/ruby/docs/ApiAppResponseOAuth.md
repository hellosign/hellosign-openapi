# Dropbox::Sign::ApiAppResponseOAuth

An object describing the app&#39;s OAuth properties, or null if OAuth is not configured for the app.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `callback_url`<sup>*_required_</sup> | ```String``` |  The app&#39;s OAuth callback URL.  |  |
| `scopes`<sup>*_required_</sup> | ```Array<String>``` |  Array of OAuth scopes used by the app.  |  |
| `charges_users`<sup>*_required_</sup> | ```Boolean``` |  Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.  |  |
| `secret` | ```String``` |  The app&#39;s OAuth secret, or null if the app does not belong to user.  |  |

