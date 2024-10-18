# # TemplateResponseDocument



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name`<sup>*_required_</sup> | ```string``` |  Name of the associated file.  |  |
| `fieldGroups`<sup>*_required_</sup> | [```Array<TemplateResponseDocumentFieldGroup>```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `formFields`<sup>*_required_</sup> | [```Array<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `customFields`<sup>*_required_</sup> | [```Array<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `staticFields`<sup>*_required_</sup> | [```Array<TemplateResponseDocumentStaticFieldBase>```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.  |  |
| `index` | ```number``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
