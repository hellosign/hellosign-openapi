

# TemplateResponseDocumentStaticFieldBase

An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `apiId`<sup>*_required_</sup> | ```String``` |  A unique id for the static field.  |  |
| `name`<sup>*_required_</sup> | ```String``` |  The name of the static field.  |  |
| `type`<sup>*_required_</sup> | ```String``` |    |  |
| `signer`<sup>*_required_</sup> | ```String``` |  The signer of the Static Field.  |  |
| `x`<sup>*_required_</sup> | ```Integer``` |  The horizontal offset in pixels for this static field.  |  |
| `y`<sup>*_required_</sup> | ```Integer``` |  The vertical offset in pixels for this static field.  |  |
| `width`<sup>*_required_</sup> | ```Integer``` |  The width in pixels of this static field.  |  |
| `height`<sup>*_required_</sup> | ```Integer``` |  The height in pixels of this static field.  |  |
| `required`<sup>*_required_</sup> | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |



