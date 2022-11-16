

# TemplateResponseDocumentFormField



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `apiId` | ```String``` |  A unique id for the form field.  |  |
| `name` | ```String``` |  The name of the form field.  |  |
| `type` | [```TypeEnum```](#TypeEnum) |  The type of this form field. See [field types](/api/reference/constants/#field-types).  |  |
| `signer` | ```String``` |  The signer of the Form Field.  |  |
| `x` | ```Integer``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```Integer``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```Integer``` |  The width in pixels of this form field.  |  |
| `height` | ```Integer``` |  The height in pixels of this form field.  |  |
| `required` | ```Boolean``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```Boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize` | ```Integer``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily` | ```String``` |  Font family used in this form field&#39;s text.  |  |



## Enum: TypeEnum

Name | Value
---- | -----
| CHECKBOX | &quot;checkbox&quot; |
| CHECKBOX_MERGE | &quot;checkbox-merge&quot; |
| DATE_SIGNED | &quot;date_signed&quot; |
| DROPDOWN | &quot;dropdown&quot; |
| HYPERLINK | &quot;hyperlink&quot; |
| INITIALS | &quot;initials&quot; |
| SIGNATURE | &quot;signature&quot; |
| RADIO | &quot;radio&quot; |
| TEXT | &quot;text&quot; |
| TEXT_MERGE | &quot;text-merge&quot; |



