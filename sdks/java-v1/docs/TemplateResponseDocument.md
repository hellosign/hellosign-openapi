

# TemplateResponseDocument



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `name`<sup>*_required_</sup> | ```String``` |  Name of the associated file.  |  |
| `fieldGroups`<sup>*_required_</sup> | [```List<TemplateResponseDocumentFieldGroup>```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `formFields`<sup>*_required_</sup> | [```List<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `customFields`<sup>*_required_</sup> | [```List<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `staticFields`<sup>*_required_</sup> | [```List<TemplateResponseDocumentStaticFieldBase>```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.  |  |
| `index` | ```Integer``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |



