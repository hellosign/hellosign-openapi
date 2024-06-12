# SubSignatureRequestGroupedSigners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Group** | **string** | The name of the group. | 
**Order** | Pointer to **NullableInt32** | The order the group is required to sign in. Use this instead of Signer-level &#x60;order&#x60;. | [optional] 
**Signers** | [**[]SubSignatureRequestSigner**](SubSignatureRequestSigner.md) | Signers belonging to this Group.  **NOTE**: Only &#x60;name&#x60;, &#x60;email_address&#x60;, and &#x60;pin&#x60; are available to Grouped Signers. We will ignore all other properties, even though they are listed below. | 

## Methods

### NewSubSignatureRequestGroupedSigners

`func NewSubSignatureRequestGroupedSigners(group string, signers []SubSignatureRequestSigner, ) *SubSignatureRequestGroupedSigners`

NewSubSignatureRequestGroupedSigners instantiates a new SubSignatureRequestGroupedSigners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubSignatureRequestGroupedSignersWithDefaults

`func NewSubSignatureRequestGroupedSignersWithDefaults() *SubSignatureRequestGroupedSigners`

NewSubSignatureRequestGroupedSignersWithDefaults instantiates a new SubSignatureRequestGroupedSigners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroup

`func (o *SubSignatureRequestGroupedSigners) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *SubSignatureRequestGroupedSigners) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *SubSignatureRequestGroupedSigners) SetGroup(v string)`

SetGroup sets Group field to given value.


### GetOrder

`func (o *SubSignatureRequestGroupedSigners) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *SubSignatureRequestGroupedSigners) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *SubSignatureRequestGroupedSigners) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *SubSignatureRequestGroupedSigners) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### SetOrderNil

`func (o *SubSignatureRequestGroupedSigners) SetOrderNil(b bool)`

 SetOrderNil sets the value for Order to be an explicit nil

### UnsetOrder
`func (o *SubSignatureRequestGroupedSigners) UnsetOrder()`

UnsetOrder ensures that no value is present for Order, not even an explicit nil
### GetSigners

`func (o *SubSignatureRequestGroupedSigners) GetSigners() []SubSignatureRequestSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *SubSignatureRequestGroupedSigners) GetSignersOk() (*[]SubSignatureRequestSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *SubSignatureRequestGroupedSigners) SetSigners(v []SubSignatureRequestSigner)`

SetSigners sets Signers field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


