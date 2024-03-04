

# SubOAuth

OAuth related parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `callbackUrl` | ```String``` |  The callback URL to be used for OAuth flows. (Required if `oauth[scopes]` is provided)  |  |
| `scopes` | [```List&lt;ScopesEnum&gt;```](#List&lt;ScopesEnum&gt;) |  A list of [OAuth scopes](/api/reference/tag/OAuth) to be granted to the app. (Required if `oauth[callback_url]` is provided).  |  |



## Enum: List&lt;ScopesEnum&gt;

Name | Value
---- | -----
| REQUEST_SIGNATURE | &quot;request_signature&quot; |
| BASIC_ACCOUNT_INFO | &quot;basic_account_info&quot; |
| ACCOUNT_ACCESS | &quot;account_access&quot; |
| SIGNATURE_REQUEST_ACCESS | &quot;signature_request_access&quot; |
| TEMPLATE_ACCESS | &quot;template_access&quot; |
| TEAM_ACCESS | &quot;team_access&quot; |
| API_APP_ACCESS | &quot;api_app_access&quot; |
| EMPTY | &quot;&quot; |



