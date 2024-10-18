

# TemplateResponseDocument



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `name` | ```String``` |  Name of the associated file.  |  |
| `index` | ```Integer``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |
| `fieldGroups` | [```List<TemplateResponseDocumentFieldGroup>```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `formFields` | [```List<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `customFields` | [```List<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `staticFields` | [```List<TemplateResponseDocumentStaticFieldBase>```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.  |  |



