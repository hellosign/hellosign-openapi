# TemplateResponseDocumentStaticFieldBase

An array describing static overlay fields. **Note** only available for certain subscriptions.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```str``` |    |  |
| `api_id` | ```str``` |  A unique id for the static field.  |  |
| `name` | ```str``` |  The name of the static field.  |  |
| `signer` | ```str``` |  The signer of the Static Field.  |  [default to "me_now"] |
| `x` | ```int``` |  The horizontal offset in pixels for this static field.  |  |
| `y` | ```int``` |  The vertical offset in pixels for this static field.  |  |
| `width` | ```int``` |  The width in pixels of this static field.  |  |
| `height` | ```int``` |  The height in pixels of this static field.  |  |
| `required` | ```bool``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```str, none_type``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `font_size` | ```int``` |  Final font size used by this form field.  |  |


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


