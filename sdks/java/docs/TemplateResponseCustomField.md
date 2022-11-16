

# TemplateResponseCustomField



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```String``` |  The name of the Custom Field.  |  |
| `type` | [```TypeEnum```](#TypeEnum) |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.  |  |
| `x` | ```Integer``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```Integer``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```Integer``` |  The width in pixels of this form field.  |  |
| `height` | ```Integer``` |  The height in pixels of this form field.  |  |
| `required` | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `apiId` | ```String``` |  The unique ID for this field.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```Boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize` | ```Integer``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily` | ```String``` |  Font family used in this form field&#39;s text.  |  |



## Enum: TypeEnum

Name | Value
---- | -----
| TEXT | &quot;text&quot; |
| CHECKBOX | &quot;checkbox&quot; |



