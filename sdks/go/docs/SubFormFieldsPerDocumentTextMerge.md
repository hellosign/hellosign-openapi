# SubFormFieldsPerDocumentTextMerge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | A text field that has default text set using pre-filled data. Use the &#x60;SubFormFieldsPerDocumentTextMerge&#x60; class. | [default to "text-merge"]
**FontFamily** | Pointer to **string** | Font family for the field. | [optional] 
**FontSize** | Pointer to **int32** | The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE**: Font size may be reduced during processing in order to fit the contents within the dimensions of the field. | [optional] [default to 12]

## Methods

### NewSubFormFieldsPerDocumentTextMerge

`func NewSubFormFieldsPerDocumentTextMerge(type_ string, ) *SubFormFieldsPerDocumentTextMerge`

NewSubFormFieldsPerDocumentTextMerge instantiates a new SubFormFieldsPerDocumentTextMerge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldsPerDocumentTextMergeWithDefaults

`func NewSubFormFieldsPerDocumentTextMergeWithDefaults() *SubFormFieldsPerDocumentTextMerge`

NewSubFormFieldsPerDocumentTextMergeWithDefaults instantiates a new SubFormFieldsPerDocumentTextMerge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubFormFieldsPerDocumentTextMerge) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldsPerDocumentTextMerge) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldsPerDocumentTextMerge) SetType(v string)`

SetType sets Type field to given value.


### GetFontFamily

`func (o *SubFormFieldsPerDocumentTextMerge) GetFontFamily() string`

GetFontFamily returns the FontFamily field if non-nil, zero value otherwise.

### GetFontFamilyOk

`func (o *SubFormFieldsPerDocumentTextMerge) GetFontFamilyOk() (*string, bool)`

GetFontFamilyOk returns a tuple with the FontFamily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontFamily

`func (o *SubFormFieldsPerDocumentTextMerge) SetFontFamily(v string)`

SetFontFamily sets FontFamily field to given value.

### HasFontFamily

`func (o *SubFormFieldsPerDocumentTextMerge) HasFontFamily() bool`

HasFontFamily returns a boolean if a field has been set.

### GetFontSize

`func (o *SubFormFieldsPerDocumentTextMerge) GetFontSize() int32`

GetFontSize returns the FontSize field if non-nil, zero value otherwise.

### GetFontSizeOk

`func (o *SubFormFieldsPerDocumentTextMerge) GetFontSizeOk() (*int32, bool)`

GetFontSizeOk returns a tuple with the FontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontSize

`func (o *SubFormFieldsPerDocumentTextMerge) SetFontSize(v int32)`

SetFontSize sets FontSize field to given value.

### HasFontSize

`func (o *SubFormFieldsPerDocumentTextMerge) HasFontSize() bool`

HasFontSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


