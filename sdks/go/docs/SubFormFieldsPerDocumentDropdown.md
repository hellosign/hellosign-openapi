# SubFormFieldsPerDocumentDropdown

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | An input field for dropdowns. Use the &#x60;SubFormFieldsPerDocumentDropdown&#x60; class. | [default to "dropdown"]
**Options** | **[]string** | Array of string values representing dropdown values. | 
**Content** | Pointer to **string** | Selected value in &#x60;options&#x60; array. Value must exist in array. | [optional] 
**FontFamily** | Pointer to **string** | Font family for the field. | [optional] 
**FontSize** | Pointer to **int32** | The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE**: Font size may be reduced during processing in order to fit the contents within the dimensions of the field. | [optional] [default to 12]

## Methods

### NewSubFormFieldsPerDocumentDropdown

`func NewSubFormFieldsPerDocumentDropdown(type_ string, options []string, ) *SubFormFieldsPerDocumentDropdown`

NewSubFormFieldsPerDocumentDropdown instantiates a new SubFormFieldsPerDocumentDropdown object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldsPerDocumentDropdownWithDefaults

`func NewSubFormFieldsPerDocumentDropdownWithDefaults() *SubFormFieldsPerDocumentDropdown`

NewSubFormFieldsPerDocumentDropdownWithDefaults instantiates a new SubFormFieldsPerDocumentDropdown object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubFormFieldsPerDocumentDropdown) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldsPerDocumentDropdown) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldsPerDocumentDropdown) SetType(v string)`

SetType sets Type field to given value.


### GetOptions

`func (o *SubFormFieldsPerDocumentDropdown) GetOptions() []string`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *SubFormFieldsPerDocumentDropdown) GetOptionsOk() (*[]string, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *SubFormFieldsPerDocumentDropdown) SetOptions(v []string)`

SetOptions sets Options field to given value.


### GetContent

`func (o *SubFormFieldsPerDocumentDropdown) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *SubFormFieldsPerDocumentDropdown) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *SubFormFieldsPerDocumentDropdown) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *SubFormFieldsPerDocumentDropdown) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetFontFamily

`func (o *SubFormFieldsPerDocumentDropdown) GetFontFamily() string`

GetFontFamily returns the FontFamily field if non-nil, zero value otherwise.

### GetFontFamilyOk

`func (o *SubFormFieldsPerDocumentDropdown) GetFontFamilyOk() (*string, bool)`

GetFontFamilyOk returns a tuple with the FontFamily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontFamily

`func (o *SubFormFieldsPerDocumentDropdown) SetFontFamily(v string)`

SetFontFamily sets FontFamily field to given value.

### HasFontFamily

`func (o *SubFormFieldsPerDocumentDropdown) HasFontFamily() bool`

HasFontFamily returns a boolean if a field has been set.

### GetFontSize

`func (o *SubFormFieldsPerDocumentDropdown) GetFontSize() int32`

GetFontSize returns the FontSize field if non-nil, zero value otherwise.

### GetFontSizeOk

`func (o *SubFormFieldsPerDocumentDropdown) GetFontSizeOk() (*int32, bool)`

GetFontSizeOk returns a tuple with the FontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontSize

`func (o *SubFormFieldsPerDocumentDropdown) SetFontSize(v int32)`

SetFontSize sets FontSize field to given value.

### HasFontSize

`func (o *SubFormFieldsPerDocumentDropdown) HasFontSize() bool`

HasFontSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


