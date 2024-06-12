# EmbeddedEditUrlResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Embedded** | Pointer to [**EmbeddedEditUrlResponseEmbedded**](EmbeddedEditUrlResponseEmbedded.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewEmbeddedEditUrlResponse

`func NewEmbeddedEditUrlResponse() *EmbeddedEditUrlResponse`

NewEmbeddedEditUrlResponse instantiates a new EmbeddedEditUrlResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddedEditUrlResponseWithDefaults

`func NewEmbeddedEditUrlResponseWithDefaults() *EmbeddedEditUrlResponse`

NewEmbeddedEditUrlResponseWithDefaults instantiates a new EmbeddedEditUrlResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmbedded

`func (o *EmbeddedEditUrlResponse) GetEmbedded() EmbeddedEditUrlResponseEmbedded`

GetEmbedded returns the Embedded field if non-nil, zero value otherwise.

### GetEmbeddedOk

`func (o *EmbeddedEditUrlResponse) GetEmbeddedOk() (*EmbeddedEditUrlResponseEmbedded, bool)`

GetEmbeddedOk returns a tuple with the Embedded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedded

`func (o *EmbeddedEditUrlResponse) SetEmbedded(v EmbeddedEditUrlResponseEmbedded)`

SetEmbedded sets Embedded field to given value.

### HasEmbedded

`func (o *EmbeddedEditUrlResponse) HasEmbedded() bool`

HasEmbedded returns a boolean if a field has been set.

### GetWarnings

`func (o *EmbeddedEditUrlResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EmbeddedEditUrlResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EmbeddedEditUrlResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EmbeddedEditUrlResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


