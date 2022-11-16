# HelloSign::SubFormFieldsPerDocumentText

This class extends `SubFormFieldsPerDocumentBase`.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```String``` |  A text input field. Use the `SubFormFieldsPerDocumentText` class.  |  [default to 'text'] |
| `placeholder` | ```String``` |  Placeholder value for text field.  |  |
| `auto_fill_type` | ```String``` |  Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values.  |  |
| `link_id` | ```String``` |  Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields.  |  |
| `masked` | ```Boolean``` |  Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). `true` for masking the data in a text field, otherwise `false`.  |  |
| `validation_type` | ```String``` |  Each text field may contain a `validation_type` parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.<br><br>**NOTE**: When using `custom_regex` you are required to pass a second parameter `validation_custom_regex` and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value.  |  |
| `validation_custom_regex` | ```String``` |    |  |
| `validation_custom_regex_format_label` | ```String``` |    |  |

