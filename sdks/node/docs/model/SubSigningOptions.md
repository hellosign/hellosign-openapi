# # SubSigningOptions

This allows the requester to specify the types allowed for creating a signature and specify another signing options.

**NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.

**NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `defaultType`<sup>*_required_</sup> | ```string``` |  The default type shown (limited to the listed types)  |  |
| `draw` | ```boolean``` |  Allows drawing the signature  |  [default to false] |
| `phone` | ```boolean``` |  Allows using a smartphone to email the signature  |  [default to false] |
| `type` | ```boolean``` |  Allows typing the signature  |  [default to false] |
| `upload` | ```boolean``` |  Allows uploading the signature  |  [default to false] |
| `forceAdvancedSignatureDetails` | ```boolean``` |  Turning on advanced signature details for the signature request  |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
