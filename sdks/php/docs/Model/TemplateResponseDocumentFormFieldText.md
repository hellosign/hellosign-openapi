# # TemplateResponseDocumentFormFieldText

This class extends &#x60;TemplateResponseDocumentFormFieldBase&#x60;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The type of this form field. See [field types](/api/reference/constants/#field-types).

* Text Field uses &#x60;TemplateResponseDocumentFormFieldText&#x60;
* Dropdown Field uses &#x60;TemplateResponseDocumentFormFieldDropdown&#x60;
* Hyperlink Field uses &#x60;TemplateResponseDocumentFormFieldHyperlink&#x60;
* Checkbox Field uses &#x60;TemplateResponseDocumentFormFieldCheckbox&#x60;
* Radio Field uses &#x60;TemplateResponseDocumentFormFieldRadio&#x60;
* Signature Field uses &#x60;TemplateResponseDocumentFormFieldSignature&#x60;
* Date Signed Field uses &#x60;TemplateResponseDocumentFormFieldDateSigned&#x60;
* Initials Field uses &#x60;TemplateResponseDocumentFormFieldInitials&#x60; REPLACE_ME_WITH_DESCRIPTION_END |  [default to 'text'] |
| `avg_text_length` | [```\Dropbox\Sign\Model\TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `is_multiline` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this form field is multiline text. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `original_font_size` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Original font size used in this form field&#39;s text. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `font_family` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Font family used in this form field&#39;s text. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `validation_type` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Each text field may contain a &#x60;validation_type&#x60; parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `group` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The name of the group this field is in. If this field is not a group, this defaults to &#x60;null&#x60; except for Radio fields. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
