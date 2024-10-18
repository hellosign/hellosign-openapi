# TemplateResponseDocumentStaticFieldBase

An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `api_id`<sup>*_required_</sup> | ```str``` |  A unique id for the static field.  |  |
| `name`<sup>*_required_</sup> | ```str``` |  The name of the static field.  |  |
| `type`<sup>*_required_</sup> | ```str``` |    |  |
| `signer`<sup>*_required_</sup> | ```str``` |  The signer of the Static Field.  |  [default to 'me_now'] |
| `x`<sup>*_required_</sup> | ```int``` |  The horizontal offset in pixels for this static field.  |  |
| `y`<sup>*_required_</sup> | ```int``` |  The vertical offset in pixels for this static field.  |  |
| `width`<sup>*_required_</sup> | ```int``` |  The width in pixels of this static field.  |  |
| `height`<sup>*_required_</sup> | ```int``` |  The height in pixels of this static field.  |  |
| `required`<sup>*_required_</sup> | ```bool``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```str``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

