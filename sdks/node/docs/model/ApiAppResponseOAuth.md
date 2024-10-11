# # ApiAppResponseOAuth

An object describing the app&#39;s OAuth properties, or null if OAuth is not configured for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `callbackUrl`<sup>*_required_</sup> | ```string``` |  The app&#39;s OAuth callback URL.  |  |
| `scopes`<sup>*_required_</sup> | ```Array<string>``` |  Array of OAuth scopes used by the app.  |  |
| `chargesUsers`<sup>*_required_</sup> | ```boolean``` |  Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.  |  |
| `secret` | ```string``` |  The app&#39;s OAuth secret. Will be an empty string if the app does not belong to user.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
