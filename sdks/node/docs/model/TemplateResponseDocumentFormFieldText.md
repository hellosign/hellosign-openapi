# # TemplateResponseDocumentFormFieldText

This class extends `TemplateResponseDocumentFormFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```string``` |  The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`  |  [default to 'text'] |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize` | ```number``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily` | ```string``` |  Font family used in this form field&#39;s text.  |  |
| `validationType` | ```string``` |  Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  |  |
| `validationCustomRegex` | ```string``` |  When `validation_type` is set to `custom_regex`, this specifies the custom regular expression pattern that will be used to validate the text field.  |  |
| `validationCustomRegexFormatLabel` | ```string``` |  When `validation_type` is set to `custom_regex`, this specifies the error message displayed to the signer when the text does not match the provided regex pattern.  |  |
| `group` | ```string``` |  The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
