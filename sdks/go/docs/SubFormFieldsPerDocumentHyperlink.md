# SubFormFieldsPerDocumentHyperlink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | A hyperlink field. Use the &#x60;SubFormFieldsPerDocumentHyperlink&#x60; class. | [default to "hyperlink"]
**Content** | **string** | Link Text. | 
**ContentUrl** | **string** | Link URL. | 
**FontFamily** | Pointer to **string** | Font family for the field. | [optional] 
**FontSize** | Pointer to **int32** | The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE**: Font size may be reduced during processing in order to fit the contents within the dimensions of the field. | [optional] [default to 12]

## Methods

### NewSubFormFieldsPerDocumentHyperlink

`func NewSubFormFieldsPerDocumentHyperlink(type_ string, content string, contentUrl string, ) *SubFormFieldsPerDocumentHyperlink`

NewSubFormFieldsPerDocumentHyperlink instantiates a new SubFormFieldsPerDocumentHyperlink object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldsPerDocumentHyperlinkWithDefaults

`func NewSubFormFieldsPerDocumentHyperlinkWithDefaults() *SubFormFieldsPerDocumentHyperlink`

NewSubFormFieldsPerDocumentHyperlinkWithDefaults instantiates a new SubFormFieldsPerDocumentHyperlink object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubFormFieldsPerDocumentHyperlink) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldsPerDocumentHyperlink) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldsPerDocumentHyperlink) SetType(v string)`

SetType sets Type field to given value.


### GetContent

`func (o *SubFormFieldsPerDocumentHyperlink) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *SubFormFieldsPerDocumentHyperlink) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *SubFormFieldsPerDocumentHyperlink) SetContent(v string)`

SetContent sets Content field to given value.


### GetContentUrl

`func (o *SubFormFieldsPerDocumentHyperlink) GetContentUrl() string`

GetContentUrl returns the ContentUrl field if non-nil, zero value otherwise.

### GetContentUrlOk

`func (o *SubFormFieldsPerDocumentHyperlink) GetContentUrlOk() (*string, bool)`

GetContentUrlOk returns a tuple with the ContentUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentUrl

`func (o *SubFormFieldsPerDocumentHyperlink) SetContentUrl(v string)`

SetContentUrl sets ContentUrl field to given value.


### GetFontFamily

`func (o *SubFormFieldsPerDocumentHyperlink) GetFontFamily() string`

GetFontFamily returns the FontFamily field if non-nil, zero value otherwise.

### GetFontFamilyOk

`func (o *SubFormFieldsPerDocumentHyperlink) GetFontFamilyOk() (*string, bool)`

GetFontFamilyOk returns a tuple with the FontFamily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontFamily

`func (o *SubFormFieldsPerDocumentHyperlink) SetFontFamily(v string)`

SetFontFamily sets FontFamily field to given value.

### HasFontFamily

`func (o *SubFormFieldsPerDocumentHyperlink) HasFontFamily() bool`

HasFontFamily returns a boolean if a field has been set.

### GetFontSize

`func (o *SubFormFieldsPerDocumentHyperlink) GetFontSize() int32`

GetFontSize returns the FontSize field if non-nil, zero value otherwise.

### GetFontSizeOk

`func (o *SubFormFieldsPerDocumentHyperlink) GetFontSizeOk() (*int32, bool)`

GetFontSizeOk returns a tuple with the FontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontSize

`func (o *SubFormFieldsPerDocumentHyperlink) SetFontSize(v int32)`

SetFontSize sets FontSize field to given value.

### HasFontSize

`func (o *SubFormFieldsPerDocumentHyperlink) HasFontSize() bool`

HasFontSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


