# SubSigningOptions

This allows the requester to specify the types allowed for creating a signature.

**NOTE:** If &#x60;signing_options&#x60; are not defined in the request, the allowed types will default to those specified in the account settings.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `default_type`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The default type shown (limited to the listed types) REPLACE_ME_WITH_DESCRIPTION_END |  |
| `draw` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows drawing the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `phone` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows using a smartphone to email the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `type` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows typing the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `upload` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows uploading the signature REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

