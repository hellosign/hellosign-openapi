

# SubFormFieldsPerDocumentDropdown

This class extends `SubFormFieldsPerDocumentBase`.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `type`<sup>*_required_</sup> | ```String``` |  An input field for dropdowns. Use the `SubFormFieldsPerDocumentDropdown` class.  |  |
| `options`<sup>*_required_</sup> | ```List<String>``` |  Array of string values representing dropdown values.  |  |
| `content` | ```String``` |  Selected value in `options` array. Value must exist in array.  |  |
| `fontFamily` | [```FontFamilyEnum```](#FontFamilyEnum) |  Font family for the field.  |  |
| `fontSize` | ```Integer``` |  The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.  |  |



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



