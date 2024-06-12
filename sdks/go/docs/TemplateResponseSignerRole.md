# TemplateResponseSignerRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the Role. | [optional] 
**Order** | Pointer to **int32** | If signer order is assigned this is the 0-based index for this role. | [optional] 

## Methods

### NewTemplateResponseSignerRole

`func NewTemplateResponseSignerRole() *TemplateResponseSignerRole`

NewTemplateResponseSignerRole instantiates a new TemplateResponseSignerRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseSignerRoleWithDefaults

`func NewTemplateResponseSignerRoleWithDefaults() *TemplateResponseSignerRole`

NewTemplateResponseSignerRoleWithDefaults instantiates a new TemplateResponseSignerRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TemplateResponseSignerRole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateResponseSignerRole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateResponseSignerRole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateResponseSignerRole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrder

`func (o *TemplateResponseSignerRole) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *TemplateResponseSignerRole) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *TemplateResponseSignerRole) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *TemplateResponseSignerRole) HasOrder() bool`

HasOrder returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


