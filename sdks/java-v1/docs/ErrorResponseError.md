

# ErrorResponseError

Contains information about an error that occurred.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `errorMsg`<sup>*_required_</sup> | ```String``` |  Message describing an error.  |  |
| `errorName`<sup>*_required_</sup> | [```ErrorNameEnum```](#ErrorNameEnum) |  Name of the error. See the `x-error-codes` catalog in openapi file for a complete list of possible error codes with detailed information including HTTP status codes, causes, remediation steps, and retry guidance.  |  |
| `errorPath` | ```String``` |  Path at which an error occurred.  |  |



## Enum: ErrorNameEnum

| Name | Value |
---- | -----
| BAD_REQUEST | &quot;bad_request&quot; |
| UNAUTHORIZED | &quot;unauthorized&quot; |
| PAYMENT_REQUIRED | &quot;payment_required&quot; |
| FORBIDDEN | &quot;forbidden&quot; |
| NOT_FOUND | &quot;not_found&quot; |
| CONFLICT | &quot;conflict&quot; |
| EXCEEDED_RATE | &quot;exceeded_rate&quot; |
| UNKNOWN | &quot;unknown&quot; |
| TEAM_INVITE_FAILED | &quot;team_invite_failed&quot; |
| MAX_FAXES | &quot;max_faxes&quot; |
| INVALID_RECIPIENT | &quot;invalid_recipient&quot; |
| SIGNATURE_REQUEST_CANCEL_FAILED | &quot;signature_request_cancel_failed&quot; |
| SIGNATURE_REQUEST_REMOVE_FAILED | &quot;signature_request_remove_failed&quot; |
| MAINTENANCE | &quot;maintenance&quot; |
| METHOD_NOT_SUPPORTED | &quot;method_not_supported&quot; |
| INVALID_REMINDER | &quot;invalid_reminder&quot; |
| UNAVAILABLE | &quot;unavailable&quot; |
| UNPROCESSABLE_ENTITY | &quot;unprocessable_entity&quot; |
| SIGNATURE_REQUEST_EXPIRED | &quot;signature_request_expired&quot; |
| DELETED | &quot;deleted&quot; |



