# SubBulkSignerList



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `custom_fields` | [```List[SubBulkSignerListCustomField]```](SubBulkSignerListCustomField.md) |  An array of custom field values.  |  |
| `signers` | [```List[SubSignatureRequestTemplateSigner]```](SubSignatureRequestTemplateSigner.md) |  Add Signers to your Templated-based Signature Request. Allows the requester to specify editor options when a preparing a document.<br><br>Currently only templates with a single role are supported. All signers must have the same `role` value.  |  |
| `metadata` | ```Dict[str, object]``` |  Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.<br><br>Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


