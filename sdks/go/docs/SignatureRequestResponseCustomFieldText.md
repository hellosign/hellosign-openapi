# SignatureRequestResponseCustomFieldText

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of this Custom Field. Only &#39;text&#39; and &#39;checkbox&#39; are currently supported. | [default to "text"]
**Value** | Pointer to **string** | A text string for text fields | [optional] 

## Methods

### NewSignatureRequestResponseCustomFieldText

`func NewSignatureRequestResponseCustomFieldText(type_ string, ) *SignatureRequestResponseCustomFieldText`

NewSignatureRequestResponseCustomFieldText instantiates a new SignatureRequestResponseCustomFieldText object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestResponseCustomFieldTextWithDefaults

`func NewSignatureRequestResponseCustomFieldTextWithDefaults() *SignatureRequestResponseCustomFieldText`

NewSignatureRequestResponseCustomFieldTextWithDefaults instantiates a new SignatureRequestResponseCustomFieldText object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SignatureRequestResponseCustomFieldText) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SignatureRequestResponseCustomFieldText) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SignatureRequestResponseCustomFieldText) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *SignatureRequestResponseCustomFieldText) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SignatureRequestResponseCustomFieldText) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SignatureRequestResponseCustomFieldText) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SignatureRequestResponseCustomFieldText) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


