# SubFieldOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateFormat** | **string** | Allows requester to specify the date format (see list of allowed [formats](/api/reference/constants/#date-formats))  **Note**: Only available for Premium and higher. | 

## Methods

### NewSubFieldOptions

`func NewSubFieldOptions(dateFormat string, ) *SubFieldOptions`

NewSubFieldOptions instantiates a new SubFieldOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFieldOptionsWithDefaults

`func NewSubFieldOptionsWithDefaults() *SubFieldOptions`

NewSubFieldOptionsWithDefaults instantiates a new SubFieldOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateFormat

`func (o *SubFieldOptions) GetDateFormat() string`

GetDateFormat returns the DateFormat field if non-nil, zero value otherwise.

### GetDateFormatOk

`func (o *SubFieldOptions) GetDateFormatOk() (*string, bool)`

GetDateFormatOk returns a tuple with the DateFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFormat

`func (o *SubFieldOptions) SetDateFormat(v string)`

SetDateFormat sets DateFormat field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


