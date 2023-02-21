

# TemplateResponseDocumentFormFieldBase

An array of Form Field objects containing the name and type of each named field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```String``` |    |  |
| `apiId` | ```String``` |  A unique id for the form field.  |  |
| `name` | ```String``` |  The name of the form field.  |  |
| `signer` | ```String``` |  The signer of the Form Field.  |  |
| `x` | ```Integer``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```Integer``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```Integer``` |  The width in pixels of this form field.  |  |
| `height` | ```Integer``` |  The height in pixels of this form field.  |  |
| `required` | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.  |  |
| `fontSize` | ```Integer``` |  Final font size used by this form field.  |  |



