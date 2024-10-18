# # TemplateResponseDocumentCustomFieldText

This class extends `TemplateResponseDocumentCustomFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```string``` |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`  |  [default to 'text'] |
| `avgTextLength`<sup>*_required_</sup> | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline`<sup>*_required_</sup> | ```boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize`<sup>*_required_</sup> | ```number``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily`<sup>*_required_</sup> | ```string``` |  Font family used in this form field&#39;s text.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
