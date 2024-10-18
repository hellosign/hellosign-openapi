# Dropbox::Sign::TemplateResponseDocumentCustomFieldText

This class extends `TemplateResponseDocumentCustomFieldBase`

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```String``` |  The type of this Custom Field. Only `text` and `checkbox` are currently supported.<br><br>* Text uses `TemplateResponseDocumentCustomFieldText`<br>* Checkbox uses `TemplateResponseDocumentCustomFieldCheckbox`  |  [default to 'text'] |
| `avg_text_length` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `is_multiline` | ```Boolean``` |  Whether this form field is multiline text.  |  |
| `original_font_size` | ```Integer``` |  Original font size used in this form field&#39;s text.  |  |
| `font_family` | ```String``` |  Font family used in this form field&#39;s text.  |  |

