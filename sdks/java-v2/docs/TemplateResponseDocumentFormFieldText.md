

# TemplateResponseDocumentFormFieldText

This class extends `TemplateResponseDocumentFormFieldBase`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```String``` |  The type of this form field. See [field types](/api/reference/constants/#field-types).<br><br>* Text Field uses `TemplateResponseDocumentFormFieldText`<br>* Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown`<br>* Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink`<br>* Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox`<br>* Radio Field uses `TemplateResponseDocumentFormFieldRadio`<br>* Signature Field uses `TemplateResponseDocumentFormFieldSignature`<br>* Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned`<br>* Initials Field uses `TemplateResponseDocumentFormFieldInitials`  |  |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```Boolean``` |  Whether this form field is multiline text.  |  |
| `originalFontSize` | ```Integer``` |  Original font size used in this form field&#39;s text.  |  |
| `fontFamily` | ```String``` |  Font family used in this form field&#39;s text.  |  |
| `validationType` | [```ValidationTypeEnum```](#ValidationTypeEnum) |  Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  |  |



## Enum: ValidationTypeEnum

Name | Value
---- | -----
| NUMBERS_ONLY | &quot;numbers_only&quot; |
| LETTERS_ONLY | &quot;letters_only&quot; |
| PHONE_NUMBER | &quot;phone_number&quot; |
| BANK_ROUTING_NUMBER | &quot;bank_routing_number&quot; |
| BANK_ACCOUNT_NUMBER | &quot;bank_account_number&quot; |
| EMAIL_ADDRESS | &quot;email_address&quot; |
| ZIP_CODE | &quot;zip_code&quot; |
| SOCIAL_SECURITY_NUMBER | &quot;social_security_number&quot; |
| EMPLOYER_IDENTIFICATION_NUMBER | &quot;employer_identification_number&quot; |
| CUSTOM_REGEX | &quot;custom_regex&quot; |



