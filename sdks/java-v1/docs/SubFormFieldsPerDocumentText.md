

# SubFormFieldsPerDocumentText

This class extends `SubFormFieldsPerDocumentBase`.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `type`<sup>*_required_</sup> | ```String``` |  A text input field. Use the `SubFormFieldsPerDocumentText` class.  |  |
| `placeholder` | ```String``` |  Placeholder value for text field.  |  |
| `autoFillType` | ```String``` |  Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values.  |  |
| `linkId` | ```String``` |  Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields.  |  |
| `masked` | ```Boolean``` |  Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). `true` for masking the data in a text field, otherwise `false`.  |  |
| `validationType` | [```ValidationTypeEnum```](#ValidationTypeEnum) |  Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.<br><br>**NOTE:** When using `custom_regex` you are required to pass a second parameter `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value.  |  |
| `validationCustomRegex` | ```String``` |    |  |
| `validationCustomRegexFormatLabel` | ```String``` |    |  |
| `content` | ```String``` |  Content of a `me_now` text field  |  |
| `fontFamily` | [```FontFamilyEnum```](#FontFamilyEnum) |  Font family for the field.  |  |
| `fontSize` | ```Integer``` |  The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.  |  |



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



## Enum: FontFamilyEnum

| Name | Value |
---- | -----
| HELVETICA | &quot;helvetica&quot; |
| ARIAL | &quot;arial&quot; |
| COURIER | &quot;courier&quot; |
| CALIBRI | &quot;calibri&quot; |
| CAMBRIA | &quot;cambria&quot; |
| GEORGIA | &quot;georgia&quot; |
| TIMES | &quot;times&quot; |
| TREBUCHET | &quot;trebuchet&quot; |
| VERDANA | &quot;verdana&quot; |
| ROBOTO | &quot;roboto&quot; |
| ROBOTO_MONO | &quot;robotoMono&quot; |
| NOTO_SANS | &quot;notoSans&quot; |
| NOTO_SERIF | &quot;notoSerif&quot; |
| NOTO_CJK_JP_REGULAR | &quot;notoCJK-JP-Regular&quot; |
| NOTO_HEBREW_REGULAR | &quot;notoHebrew-Regular&quot; |
| NOTO_SAN_THAI_MERGED | &quot;notoSanThaiMerged&quot; |



