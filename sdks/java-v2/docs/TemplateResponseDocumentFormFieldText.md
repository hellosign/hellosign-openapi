

# TemplateResponseDocumentFormFieldText

_t__TemplateResponseDocumentFormField::DESCRIPTION_EXTENDS

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `type`<sup>*_required_</sup> | ```String``` |  _t__TemplateResponseDocumentFormField::TYPE  |  |
| `avgTextLength` | [```TemplateResponseFieldAvgTextLength```](TemplateResponseFieldAvgTextLength.md) |    |  |
| `isMultiline` | ```Boolean``` |  _t__TemplateResponseDocumentFormField::IS_MULTILINE  |  |
| `originalFontSize` | ```Integer``` |  _t__TemplateResponseDocumentFormField::ORIGINAL_FONT_SIZE  |  |
| `fontFamily` | ```String``` |  _t__TemplateResponseDocumentFormField::FONT_FAMILY  |  |
| `validationType` | [```ValidationTypeEnum```](#ValidationTypeEnum) |  _t__TemplateResponseDocumentFormField::VALIDATION_TYPE  |  |
| `validationCustomRegex` | ```String``` |  _t__TemplateResponseDocumentFormField::CUSTOM_REGEX  |  |
| `validationCustomRegexFormatLabel` | ```String``` |  _t__TemplateResponseDocumentFormField::CUSTOM_REGEX_LABEL  |  |
| `group` | ```String``` |  _t__TemplateResponseDocumentFormField::GROUP  |  |



## Enum: ValidationTypeEnum

| Name | Value |
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



