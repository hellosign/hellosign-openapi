# # TemplateResponseDocument



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name` | ```string``` |  Name of the associated file.  |  |
| `index` | ```int``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |
| `field_groups` | [```\Dropbox\Sign\Model\TemplateResponseDocumentFieldGroup[]```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `form_fields` | [```\Dropbox\Sign\Model\TemplateResponseDocumentFormFieldBase[]```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `custom_fields` | [```\Dropbox\Sign\Model\TemplateResponseDocumentCustomFieldBase[]```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `static_fields` | [```\Dropbox\Sign\Model\TemplateResponseDocumentStaticFieldBase[]```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **Note** only available for certain subscriptions.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
