# TemplateResponseDocumentCustomFieldBase

An array of Form Field objects containing the name and type of each named field.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```str``` |    |  |
| `api_id` | ```str``` |  The unique ID for this field.  |  |
| `name` | ```str``` |  The name of the Custom Field.  |  |
| `signer` | ```str, none_type``` |  The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).  |  |
| `x` | ```int``` |  The horizontal offset in pixels for this form field.  |  |
| `y` | ```int``` |  The vertical offset in pixels for this form field.  |  |
| `width` | ```int``` |  The width in pixels of this form field.  |  |
| `height` | ```int``` |  The height in pixels of this form field.  |  |
| `required` | ```bool``` |  Boolean showing whether or not this field is required.  |  |
| `group` | ```str, none_type``` |  The name of the group this field is in. If this field is not a group, this defaults to `null`.  |  |


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


