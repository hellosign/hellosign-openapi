# # TemplateResponseDocument



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```string``` |  Name of the associated file.  |  |
| `index` | ```number``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |
| `fieldGroups` | [```Array<TemplateResponseDocumentFieldGroup>```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `formFields` | [```Array<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `customFields` | [```Array<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `staticFields` | [```Array<TemplateResponseDocumentStaticFieldBase>```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **Note** only available for certain subscriptions.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
