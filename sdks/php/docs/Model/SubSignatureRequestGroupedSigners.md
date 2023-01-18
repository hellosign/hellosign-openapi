# # SubSignatureRequestGroupedSigners



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `group`<sup>*_required_</sup> | ```string``` |  The name of the group.  |  |
| `signers`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SubSignatureRequestSigner[]```](SubSignatureRequestSigner.md) |  Signers belonging to this Group.<br><br>**NOTE**: Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will ignore all other properties, even though they are listed below.  |  |
| `order` | ```int``` |  The order the group is required to sign in. Use this instead of Signer-level `order`.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
