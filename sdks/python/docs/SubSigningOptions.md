# SubSigningOptions

This allows the requester to specify the types allowed for creating a signature and specify another signing options.

**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.

**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `default_type`<sup>*_required_</sup> | ```str``` |  The default type shown (limited to the listed types)  |  |
| `draw` | ```bool``` |  Allows drawing the signature  |  [default to False] |
| `phone` | ```bool``` |  Allows using a smartphone to email the signature  |  [default to False] |
| `type` | ```bool``` |  Allows typing the signature  |  [default to False] |
| `upload` | ```bool``` |  Allows uploading the signature  |  [default to False] |
| `force_advanced_signature_details` | ```bool``` |  Turning on advanced signature details for the signature request  |  [default to False] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


