# SubTemplateRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The role name of the signer that will be displayed when the template is used to create a signature request. | [optional] 
**Order** | Pointer to **NullableInt32** | The order in which this signer role is required to sign. | [optional] 

## Methods

### NewSubTemplateRole

`func NewSubTemplateRole() *SubTemplateRole`

NewSubTemplateRole instantiates a new SubTemplateRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubTemplateRoleWithDefaults

`func NewSubTemplateRoleWithDefaults() *SubTemplateRole`

NewSubTemplateRoleWithDefaults instantiates a new SubTemplateRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SubTemplateRole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubTemplateRole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubTemplateRole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubTemplateRole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrder

`func (o *SubTemplateRole) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *SubTemplateRole) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *SubTemplateRole) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *SubTemplateRole) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### SetOrderNil

`func (o *SubTemplateRole) SetOrderNil(b bool)`

 SetOrderNil sets the value for Order to be an explicit nil

### UnsetOrder
`func (o *SubTemplateRole) UnsetOrder()`

UnsetOrder ensures that no value is present for Order, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


