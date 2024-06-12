# EmbeddedSignUrlResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Embedded** | Pointer to [**EmbeddedSignUrlResponseEmbedded**](EmbeddedSignUrlResponseEmbedded.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewEmbeddedSignUrlResponse

`func NewEmbeddedSignUrlResponse() *EmbeddedSignUrlResponse`

NewEmbeddedSignUrlResponse instantiates a new EmbeddedSignUrlResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddedSignUrlResponseWithDefaults

`func NewEmbeddedSignUrlResponseWithDefaults() *EmbeddedSignUrlResponse`

NewEmbeddedSignUrlResponseWithDefaults instantiates a new EmbeddedSignUrlResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmbedded

`func (o *EmbeddedSignUrlResponse) GetEmbedded() EmbeddedSignUrlResponseEmbedded`

GetEmbedded returns the Embedded field if non-nil, zero value otherwise.

### GetEmbeddedOk

`func (o *EmbeddedSignUrlResponse) GetEmbeddedOk() (*EmbeddedSignUrlResponseEmbedded, bool)`

GetEmbeddedOk returns a tuple with the Embedded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedded

`func (o *EmbeddedSignUrlResponse) SetEmbedded(v EmbeddedSignUrlResponseEmbedded)`

SetEmbedded sets Embedded field to given value.

### HasEmbedded

`func (o *EmbeddedSignUrlResponse) HasEmbedded() bool`

HasEmbedded returns a boolean if a field has been set.

### GetWarnings

`func (o *EmbeddedSignUrlResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EmbeddedSignUrlResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EmbeddedSignUrlResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EmbeddedSignUrlResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


