# Dropbox::Sign::TemplateResponseDocumentFormFieldHyperlink

This class extends `TemplateResponseDocumentFormFieldBase`

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```String``` |  The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`  |  [default to 'hyperlink'] |
| `avg_text_length` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `is_multiline` | ```Boolean``` |  Whether this form field is multiline text.  |  |
| `original_font_size` | ```Integer``` |  Original font size used in this form field&#39;s text.  |  |
| `font_family` | ```String``` |  Font family used in this form field&#39;s text.  |  |
| `group` | ```String``` |  The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.  |  |

