# Dropbox::Sign::TemplateResponseDocument



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `name` | ```String``` |  Name of the associated file.  |  |
| `index` | ```Integer``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |
| `field_groups` | [```Array<TemplateResponseDocumentFieldGroup>```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `form_fields` | [```Array<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `custom_fields` | [```Array<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `static_fields` | [```Array<TemplateResponseDocumentStaticFieldBase>```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.  |  |

