# SubFormFieldsPerDocumentText

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | A text input field. Use the &#x60;SubFormFieldsPerDocumentText&#x60; class. | [default to "text"]
**Placeholder** | Pointer to **string** | Placeholder value for text field. | [optional] 
**AutoFillType** | Pointer to **string** | Auto fill type for populating fields automatically. Check out the list of [auto fill types](/api/reference/constants/#auto-fill-types) to learn more about the possible values. | [optional] 
**LinkId** | Pointer to **string** | Link two or more text fields. Enter data into one linked text field, which automatically fill all other linked text fields. | [optional] 
**Masked** | Pointer to **bool** | Masks entered data. For more information see [Masking sensitive information](https://faq.hellosign.com/hc/en-us/articles/360040742811-Masking-sensitive-information). &#x60;true&#x60; for masking the data in a text field, otherwise &#x60;false&#x60;. | [optional] 
**ValidationType** | Pointer to **string** | Each text field may contain a &#x60;validation_type&#x60; parameter. Check out the list of [validation types](https://faq.hellosign.com/hc/en-us/articles/217115577) to learn more about the possible values.  **NOTE**: When using &#x60;custom_regex&#x60; you are required to pass a second parameter &#x60;validation_custom_regex&#x60; and you can optionally provide &#x60;validation_custom_regex_format_label&#x60; for the error message the user will see in case of an invalid value. | [optional] 
**ValidationCustomRegex** | Pointer to **string** |  | [optional] 
**ValidationCustomRegexFormatLabel** | Pointer to **string** |  | [optional] 
**Content** | Pointer to **string** | Content of a &#x60;me_now&#x60; text field | [optional] 
**FontFamily** | Pointer to **string** | Font family for the field. | [optional] 
**FontSize** | Pointer to **int32** | The initial px font size for the field contents. Can be any integer value between &#x60;7&#x60; and &#x60;49&#x60;.  **NOTE**: Font size may be reduced during processing in order to fit the contents within the dimensions of the field. | [optional] [default to 12]

## Methods

### NewSubFormFieldsPerDocumentText

`func NewSubFormFieldsPerDocumentText(type_ string, ) *SubFormFieldsPerDocumentText`

NewSubFormFieldsPerDocumentText instantiates a new SubFormFieldsPerDocumentText object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldsPerDocumentTextWithDefaults

`func NewSubFormFieldsPerDocumentTextWithDefaults() *SubFormFieldsPerDocumentText`

NewSubFormFieldsPerDocumentTextWithDefaults instantiates a new SubFormFieldsPerDocumentText object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SubFormFieldsPerDocumentText) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldsPerDocumentText) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldsPerDocumentText) SetType(v string)`

SetType sets Type field to given value.


### GetPlaceholder

`func (o *SubFormFieldsPerDocumentText) GetPlaceholder() string`

GetPlaceholder returns the Placeholder field if non-nil, zero value otherwise.

### GetPlaceholderOk

`func (o *SubFormFieldsPerDocumentText) GetPlaceholderOk() (*string, bool)`

GetPlaceholderOk returns a tuple with the Placeholder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlaceholder

`func (o *SubFormFieldsPerDocumentText) SetPlaceholder(v string)`

SetPlaceholder sets Placeholder field to given value.

### HasPlaceholder

`func (o *SubFormFieldsPerDocumentText) HasPlaceholder() bool`

HasPlaceholder returns a boolean if a field has been set.

### GetAutoFillType

`func (o *SubFormFieldsPerDocumentText) GetAutoFillType() string`

GetAutoFillType returns the AutoFillType field if non-nil, zero value otherwise.

### GetAutoFillTypeOk

`func (o *SubFormFieldsPerDocumentText) GetAutoFillTypeOk() (*string, bool)`

GetAutoFillTypeOk returns a tuple with the AutoFillType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoFillType

`func (o *SubFormFieldsPerDocumentText) SetAutoFillType(v string)`

SetAutoFillType sets AutoFillType field to given value.

### HasAutoFillType

`func (o *SubFormFieldsPerDocumentText) HasAutoFillType() bool`

HasAutoFillType returns a boolean if a field has been set.

### GetLinkId

`func (o *SubFormFieldsPerDocumentText) GetLinkId() string`

GetLinkId returns the LinkId field if non-nil, zero value otherwise.

### GetLinkIdOk

`func (o *SubFormFieldsPerDocumentText) GetLinkIdOk() (*string, bool)`

GetLinkIdOk returns a tuple with the LinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkId

`func (o *SubFormFieldsPerDocumentText) SetLinkId(v string)`

SetLinkId sets LinkId field to given value.

### HasLinkId

`func (o *SubFormFieldsPerDocumentText) HasLinkId() bool`

HasLinkId returns a boolean if a field has been set.

### GetMasked

`func (o *SubFormFieldsPerDocumentText) GetMasked() bool`

GetMasked returns the Masked field if non-nil, zero value otherwise.

### GetMaskedOk

`func (o *SubFormFieldsPerDocumentText) GetMaskedOk() (*bool, bool)`

GetMaskedOk returns a tuple with the Masked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasked

`func (o *SubFormFieldsPerDocumentText) SetMasked(v bool)`

SetMasked sets Masked field to given value.

### HasMasked

`func (o *SubFormFieldsPerDocumentText) HasMasked() bool`

HasMasked returns a boolean if a field has been set.

### GetValidationType

`func (o *SubFormFieldsPerDocumentText) GetValidationType() string`

GetValidationType returns the ValidationType field if non-nil, zero value otherwise.

### GetValidationTypeOk

`func (o *SubFormFieldsPerDocumentText) GetValidationTypeOk() (*string, bool)`

GetValidationTypeOk returns a tuple with the ValidationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationType

`func (o *SubFormFieldsPerDocumentText) SetValidationType(v string)`

SetValidationType sets ValidationType field to given value.

### HasValidationType

`func (o *SubFormFieldsPerDocumentText) HasValidationType() bool`

HasValidationType returns a boolean if a field has been set.

### GetValidationCustomRegex

`func (o *SubFormFieldsPerDocumentText) GetValidationCustomRegex() string`

GetValidationCustomRegex returns the ValidationCustomRegex field if non-nil, zero value otherwise.

### GetValidationCustomRegexOk

`func (o *SubFormFieldsPerDocumentText) GetValidationCustomRegexOk() (*string, bool)`

GetValidationCustomRegexOk returns a tuple with the ValidationCustomRegex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationCustomRegex

`func (o *SubFormFieldsPerDocumentText) SetValidationCustomRegex(v string)`

SetValidationCustomRegex sets ValidationCustomRegex field to given value.

### HasValidationCustomRegex

`func (o *SubFormFieldsPerDocumentText) HasValidationCustomRegex() bool`

HasValidationCustomRegex returns a boolean if a field has been set.

### GetValidationCustomRegexFormatLabel

`func (o *SubFormFieldsPerDocumentText) GetValidationCustomRegexFormatLabel() string`

GetValidationCustomRegexFormatLabel returns the ValidationCustomRegexFormatLabel field if non-nil, zero value otherwise.

### GetValidationCustomRegexFormatLabelOk

`func (o *SubFormFieldsPerDocumentText) GetValidationCustomRegexFormatLabelOk() (*string, bool)`

GetValidationCustomRegexFormatLabelOk returns a tuple with the ValidationCustomRegexFormatLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationCustomRegexFormatLabel

`func (o *SubFormFieldsPerDocumentText) SetValidationCustomRegexFormatLabel(v string)`

SetValidationCustomRegexFormatLabel sets ValidationCustomRegexFormatLabel field to given value.

### HasValidationCustomRegexFormatLabel

`func (o *SubFormFieldsPerDocumentText) HasValidationCustomRegexFormatLabel() bool`

HasValidationCustomRegexFormatLabel returns a boolean if a field has been set.

### GetContent

`func (o *SubFormFieldsPerDocumentText) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *SubFormFieldsPerDocumentText) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *SubFormFieldsPerDocumentText) SetContent(v string)`

SetContent sets Content field to given value.

### HasContent

`func (o *SubFormFieldsPerDocumentText) HasContent() bool`

HasContent returns a boolean if a field has been set.

### GetFontFamily

`func (o *SubFormFieldsPerDocumentText) GetFontFamily() string`

GetFontFamily returns the FontFamily field if non-nil, zero value otherwise.

### GetFontFamilyOk

`func (o *SubFormFieldsPerDocumentText) GetFontFamilyOk() (*string, bool)`

GetFontFamilyOk returns a tuple with the FontFamily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontFamily

`func (o *SubFormFieldsPerDocumentText) SetFontFamily(v string)`

SetFontFamily sets FontFamily field to given value.

### HasFontFamily

`func (o *SubFormFieldsPerDocumentText) HasFontFamily() bool`

HasFontFamily returns a boolean if a field has been set.

### GetFontSize

`func (o *SubFormFieldsPerDocumentText) GetFontSize() int32`

GetFontSize returns the FontSize field if non-nil, zero value otherwise.

### GetFontSizeOk

`func (o *SubFormFieldsPerDocumentText) GetFontSizeOk() (*int32, bool)`

GetFontSizeOk returns a tuple with the FontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontSize

`func (o *SubFormFieldsPerDocumentText) SetFontSize(v int32)`

SetFontSize sets FontSize field to given value.

### HasFontSize

`func (o *SubFormFieldsPerDocumentText) HasFontSize() bool`

HasFontSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


