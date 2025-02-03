# # SubSignatureRequestGroupedSigners



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `group`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The name of the group. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signers`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SubSignatureRequestSigner[]```](SubSignatureRequestSigner.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Signers belonging to this Group.

**NOTE:** Only &#x60;name&#x60;, &#x60;email_address&#x60;, and &#x60;pin&#x60; are available to Grouped Signers. We will ignore all other properties, even though they are listed below. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `order` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The order the group is required to sign in. Use this instead of Signer-level &#x60;order&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
