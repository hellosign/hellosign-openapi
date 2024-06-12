# SubBulkSignerList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFields** | Pointer to [**[]SubBulkSignerListCustomField**](SubBulkSignerListCustomField.md) | An array of custom field values. | [optional] 
**Signers** | Pointer to [**[]SubSignatureRequestTemplateSigner**](SubSignatureRequestTemplateSigner.md) | Add Signers to your Templated-based Signature Request. Allows the requester to specify editor options when a preparing a document.  Currently only templates with a single role are supported. All signers must have the same &#x60;role&#x60; value. | [optional] 

## Methods

### NewSubBulkSignerList

`func NewSubBulkSignerList() *SubBulkSignerList`

NewSubBulkSignerList instantiates a new SubBulkSignerList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubBulkSignerListWithDefaults

`func NewSubBulkSignerListWithDefaults() *SubBulkSignerList`

NewSubBulkSignerListWithDefaults instantiates a new SubBulkSignerList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomFields

`func (o *SubBulkSignerList) GetCustomFields() []SubBulkSignerListCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *SubBulkSignerList) GetCustomFieldsOk() (*[]SubBulkSignerListCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *SubBulkSignerList) SetCustomFields(v []SubBulkSignerListCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *SubBulkSignerList) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetSigners

`func (o *SubBulkSignerList) GetSigners() []SubSignatureRequestTemplateSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *SubBulkSignerList) GetSignersOk() (*[]SubSignatureRequestTemplateSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *SubBulkSignerList) SetSigners(v []SubSignatureRequestTemplateSigner)`

SetSigners sets Signers field to given value.

### HasSigners

`func (o *SubBulkSignerList) HasSigners() bool`

HasSigners returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


