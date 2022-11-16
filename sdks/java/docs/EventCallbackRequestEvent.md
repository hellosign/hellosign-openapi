

# EventCallbackRequestEvent

Basic information about the event that occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `eventTime`<sup>*_required_</sup> | ```String``` |  Time the event was created (using Unix time).  |  |
| `eventType`<sup>*_required_</sup> | [```EventTypeEnum```](#EventTypeEnum) |  Type of callback event that was triggered.  |  |
| `eventHash`<sup>*_required_</sup> | ```String``` |  Generated hash used to verify source of event data.  |  |
| `eventMetadata`<sup>*_required_</sup> | [```EventCallbackRequestEventMetadata```](EventCallbackRequestEventMetadata.md) |    |  |



## Enum: EventTypeEnum

Name | Value
---- | -----
| ACCOUNT_CONFIRMED | &quot;account_confirmed&quot; |
| UNKNOWN_ERROR | &quot;unknown_error&quot; |
| FILE_ERROR | &quot;file_error&quot; |
| SIGN_URL_INVALID | &quot;sign_url_invalid&quot; |
| SIGNATURE_REQUEST_VIEWED | &quot;signature_request_viewed&quot; |
| SIGNATURE_REQUEST_SIGNED | &quot;signature_request_signed&quot; |
| SIGNATURE_REQUEST_SENT | &quot;signature_request_sent&quot; |
| SIGNATURE_REQUEST_ALL_SIGNED | &quot;signature_request_all_signed&quot; |
| SIGNATURE_REQUEST_EMAIL_BOUNCE | &quot;signature_request_email_bounce&quot; |
| SIGNATURE_REQUEST_REMIND | &quot;signature_request_remind&quot; |
| SIGNATURE_REQUEST_INCOMPLETE_QES | &quot;signature_request_incomplete_qes&quot; |
| SIGNATURE_REQUEST_DESTROYED | &quot;signature_request_destroyed&quot; |
| SIGNATURE_REQUEST_CANCELED | &quot;signature_request_canceled&quot; |
| SIGNATURE_REQUEST_DOWNLOADABLE | &quot;signature_request_downloadable&quot; |
| SIGNATURE_REQUEST_DECLINED | &quot;signature_request_declined&quot; |
| SIGNATURE_REQUEST_REASSIGNED | &quot;signature_request_reassigned&quot; |
| SIGNATURE_REQUEST_INVALID | &quot;signature_request_invalid&quot; |
| SIGNATURE_REQUEST_PREPARED | &quot;signature_request_prepared&quot; |
| SIGNATURE_REQUEST_EXPIRED | &quot;signature_request_expired&quot; |
| TEMPLATE_CREATED | &quot;template_created&quot; |
| TEMPLATE_ERROR | &quot;template_error&quot; |



