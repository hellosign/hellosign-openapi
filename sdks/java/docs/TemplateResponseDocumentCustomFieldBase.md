

# TemplateResponseDocumentCustomFieldBase

An array of Form Field objects containing the name and type of each named field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```String``` |    |  |
| `apiId` | ```String``` |  The unique ID for this field.  |  |
| `name` | ```String``` |  The name of the Custom Field.  |  |
| `signer` | ```String``` |  The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).  |  |
| `x` | ```Integer``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```Integer``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```Integer``` |  The width in pixels of this form field.  |  |
| `height` | ```Integer``` |  The height in pixels of this form field.  |  |
| `required` | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `fontSize` | ```Integer``` |  Final font size used by this form field.  |  |



