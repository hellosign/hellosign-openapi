# TemplateResponseDocument



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name`<sup>*_required_</sup> | ```str``` |  Name of the associated file.  |  |
| `field_groups`<sup>*_required_</sup> | [```List[TemplateResponseDocumentFieldGroup]```](TemplateResponseDocumentFieldGroup.md) |  An array of Form Field Group objects.  |  |
| `form_fields`<sup>*_required_</sup> | [```List[TemplateResponseDocumentFormFieldBase]```](TemplateResponseDocumentFormFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `custom_fields`<sup>*_required_</sup> | [```List[TemplateResponseDocumentCustomFieldBase]```](TemplateResponseDocumentCustomFieldBase.md) |  An array of Form Field objects containing the name and type of each named field.  |  |
| `static_fields`<sup>*_required_</sup> | [```List[TemplateResponseDocumentStaticFieldBase]```](TemplateResponseDocumentStaticFieldBase.md) |  An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.  |  |
| `index` | ```int``` |  Document ordering, the lowest index is displayed first and the highest last (0-based indexing).  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

