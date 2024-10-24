

# FaxResponseTransmission



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `recipient`<sup>*_required_</sup> | ```String``` |  Fax Transmission Recipient  |  |
| `sender`<sup>*_required_</sup> | ```String``` |  Fax Transmission Sender  |  |
| `statusCode`<sup>*_required_</sup> | [```StatusCodeEnum```](#StatusCodeEnum) |  Fax Transmission Status Code  |  |
| `sentAt` | ```Integer``` |  Fax Transmission Sent Timestamp  |  |



## Enum: StatusCodeEnum

| Name | Value |
---- | -----
| SUCCESS | &quot;success&quot; |
| TRANSMITTING | &quot;transmitting&quot; |
| ERROR_COULD_NOT_FAX | &quot;error_could_not_fax&quot; |
| ERROR_UNKNOWN | &quot;error_unknown&quot; |
| ERROR_BUSY | &quot;error_busy&quot; |
| ERROR_NO_ANSWER | &quot;error_no_answer&quot; |
| ERROR_DISCONNECTED | &quot;error_disconnected&quot; |
| ERROR_BAD_DESTINATION | &quot;error_bad_destination&quot; |



