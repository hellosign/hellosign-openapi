

# SubSigningOptions

This allows the requester to specify the types allowed for creating a signature.

**Note**: If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `defaultType`<sup>*_required_</sup> | [```DefaultTypeEnum```](#DefaultTypeEnum) |  The default type shown (limited to the listed types)  |  |
| `draw` | ```Boolean``` |  Allows drawing the signature  |  |
| `phone` | ```Boolean``` |  Allows using a smartphone to email the signature  |  |
| `type` | ```Boolean``` |  Allows typing the signature  |  |
| `upload` | ```Boolean``` |  Allows uploading the signature  |  |



## Enum: DefaultTypeEnum

Name | Value
---- | -----
| DRAW | &quot;draw&quot; |
| PHONE | &quot;phone&quot; |
| TYPE | &quot;type&quot; |
| UPLOAD | &quot;upload&quot; |



