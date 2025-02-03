# # SubFormFieldsPerDocumentText

This class extends &#x60;SubFormFieldsPerDocumentBase&#x60;.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN A text input field. Use the &#x60;SubFormFieldsPerDocumentText&#x60; class. REPLACE_ME_WITH_DESCRIPTION_END |  [default to 'text'] |
| `placeholder` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Placeholder value for text field. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `auto_fill_type` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `link_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `masked` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). &#x60;true&#x60; for masking the data in a text field, otherwise &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `validation_type` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Each text field may contain a &#x60;validation_type&#x60; parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.

**NOTE:** When using &#x60;custom_regex&#x60; you are required to pass a second parameter &#x60;validation_custom_regex&#x60; and you can optionally provide &#x60;validation_custom_regex_format_label&#x60; for the error message the user will see in case of an invalid value. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `validation_custom_regex` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `validation_custom_regex_format_label` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `content` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Content of a &#x60;me_now&#x60; text field REPLACE_ME_WITH_DESCRIPTION_END |  |
| `font_family` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Font family for the field. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `font_size` | ```int``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.

**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field. REPLACE_ME_WITH_DESCRIPTION_END |  [default to 12] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
