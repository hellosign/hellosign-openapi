# SubFormFieldsPerDocumentDropdown

This class extends `SubFormFieldsPerDocumentBase`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `type`<sup>*_required_</sup> | ```str``` |  An input field for dropdowns. Use the `SubFormFieldsPerDocumentDropdown` class.  |  [default to 'dropdown'] |
| `options`<sup>*_required_</sup> | ```List[str]``` |  Array of string values representing dropdown values.  |  |
| `content` | ```str``` |  Selected value in `options` array. Value must exist in array.  |  |
| `font_family` | ```str``` |  Font family for the field.  |  |
| `font_size` | ```int``` |  The initial px font size for the field contents. Can be any integer value between `7` and `49`.<br><br>**NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.  |  [default to 12] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

