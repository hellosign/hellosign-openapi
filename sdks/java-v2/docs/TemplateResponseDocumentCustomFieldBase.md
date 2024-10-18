

# TemplateResponseDocumentCustomFieldBase

An array of Form Field objects containing the name and type of each named field.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `apiId`<sup>*_required_</sup> | ```String``` |  The unique ID for this field.  |  |
| `name`<sup>*_required_</sup> | ```String``` |  The name of the Custom Field.  |  |
| `type`<sup>*_required_</sup> | ```String``` |    |  |
| `x`<sup>*_required_</sup> | ```Integer``` |  The horizontal offset in pixels for this form field.  |  |
| `y`<sup>*_required_</sup> | ```Integer``` |  The vertical offset in pixels for this form field.  |  |
| `width`<sup>*_required_</sup> | ```Integer``` |  The width in pixels of this form field.  |  |
| `height`<sup>*_required_</sup> | ```Integer``` |  The height in pixels of this form field.  |  |
| `required`<sup>*_required_</sup> | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `signer` | ```String``` |  The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |



