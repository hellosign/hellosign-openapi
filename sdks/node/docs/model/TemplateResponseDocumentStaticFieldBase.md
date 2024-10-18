# # TemplateResponseDocumentStaticFieldBase

An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```string``` |    |  |
| `apiId` | ```string``` |  A unique id for the static field.  |  |
| `name` | ```string``` |  The name of the static field.  |  |
| `signer` | ```string``` |  The signer of the Static Field.  |  [default to 'me_now'] |
| `x` | ```number``` |  The horizontal offset in pixels for this static field.  |  |
| `y` | ```number``` |  The vertical offset in pixels for this static field.  |  |
| `width` | ```number``` |  The width in pixels of this static field.  |  |
| `height` | ```number``` |  The height in pixels of this static field.  |  |
| `required` | ```boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```string``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
