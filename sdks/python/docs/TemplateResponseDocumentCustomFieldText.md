# TemplateResponseDocumentCustomFieldText

This class extends `TemplateResponseDocumentCustomFieldBase`

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```str``` |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`  |  [default to 'text'] |
| `avg_text_length`<sup>*_required_</sup> | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `is_multiline`<sup>*_required_</sup> | ```bool``` |  Whether this form field is multiline text.  |  |
| `original_font_size`<sup>*_required_</sup> | ```int``` |  Original font size used in this form field&#39;s text.  |  |
| `font_family`<sup>*_required_</sup> | ```str``` |  Font family used in this form field&#39;s text.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

