

# ErrorResponseError

Contains information about an error that occurred.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `errorMsg`<sup>*_required_</sup> | ```String``` |  Message describing an error.  |  |
| `errorName`<sup>*_required_</sup> | [```ErrorNameEnum```](#ErrorNameEnum) |  Name of the error.  |  |
| `errorPath` | ```String``` |  Path at which an error occurred.  |  |



## Enum: ErrorNameEnum

| Name | Value |
---- | -----
| BAD_REQUEST | &quot;bad_request&quot; |
| UNAUTHORIZED | &quot;unauthorized&quot; |
| PAYMENT_REQUIRED | &quot;payment_required&quot; |
| FORBIDDEN | &quot;forbidden&quot; |
| NOT_FOUND | &quot;not_found&quot; |
| METHOD_NOT_SUPPORTED | &quot;method_not_supported&quot; |
| CONFLICT | &quot;conflict&quot; |
| DELETED | &quot;deleted&quot; |
| UNPROCESSABLE_ENTITY | &quot;unprocessable_entity&quot; |
| EXCEEDED_RATE | &quot;exceeded_rate&quot; |
| MAX_FAXES | &quot;max_faxes&quot; |
| UNAVAILABLE | &quot;unavailable&quot; |
| MAINTENANCE | &quot;maintenance&quot; |
| INVALID_RECIPIENT | &quot;invalid_recipient&quot; |
| INVALID_REMINDER | &quot;invalid_reminder&quot; |
| TEAM_INVITE_FAILED | &quot;team_invite_failed&quot; |
| SIGNATURE_REQUEST_CANCEL_FAILED | &quot;signature_request_cancel_failed&quot; |
| SIGNATURE_REQUEST_REMOVE_FAILED | &quot;signature_request_remove_failed&quot; |
| SIGNATURE_REQUEST_EXPIRED | &quot;signature_request_expired&quot; |
| UNKNOWN | &quot;unknown&quot; |



