# Dropbox::Sign::TemplateResponseDocumentStaticFieldBase

An array describing static overlay fields. **Note** only available for certain subscriptions.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```String``` |    |  |
| `api_id` | ```String``` |  A unique id for the static field.  |  |
| `name` | ```String``` |  The name of the static field.  |  |
| `signer` | ```String``` |  The signer of the Static Field.  |  [default to 'me_now'] |
| `x` | ```Integer``` |  The horizontal offset in pixels for this static field.  |  |
| `y` | ```Integer``` |  The vertical offset in pixels for this static field.  |  |
| `width` | ```Integer``` |  The width in pixels of this static field.  |  |
| `height` | ```Integer``` |  The height in pixels of this static field.  |  |
| `required` | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |

