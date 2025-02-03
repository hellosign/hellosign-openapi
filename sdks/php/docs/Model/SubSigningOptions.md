# # SubSigningOptions

This allows the requester to specify the types allowed for creating a signature.

**NOTE:** If &#x60;signing_options&#x60; are not defined in the request, the allowed types will default to those specified in the account settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `default_type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The default type shown (limited to the listed types) REPLACE_ME_WITH_DESCRIPTION_END |  |
| `draw` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows drawing the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `phone` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows using a smartphone to email the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `type` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows typing the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `upload` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows uploading the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
