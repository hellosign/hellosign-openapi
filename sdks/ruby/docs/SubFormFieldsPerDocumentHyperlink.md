# Dropbox::Sign::SubFormFieldsPerDocumentHyperlink

This class extends `SubFormFieldsPerDocumentBase`.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `type`<sup>*_required_</sup> | ```String``` |  A hyperlink field. Use the `SubFormFieldsPerDocumentHyperlink` class.  |  [default to 'hyperlink'] |
| `content`<sup>*_required_</sup> | ```String``` |  Link Text.  |  |
| `content_url`<sup>*_required_</sup> | ```String``` |  Link URL.  |  |
| `font_family` | ```String``` |  Font family for the field.  |  |
| `font_size` | ```Integer``` |  The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.  |  [default to 12] |

