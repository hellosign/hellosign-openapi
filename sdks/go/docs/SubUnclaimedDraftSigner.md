# SubUnclaimedDraftSigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | **string** | The email address of the signer. | 
**Name** | **string** | The name of the signer. | 
**Order** | Pointer to **NullableInt32** | The order the signer is required to sign in. | [optional] 

## Methods

### NewSubUnclaimedDraftSigner

`func NewSubUnclaimedDraftSigner(emailAddress string, name string, ) *SubUnclaimedDraftSigner`

NewSubUnclaimedDraftSigner instantiates a new SubUnclaimedDraftSigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubUnclaimedDraftSignerWithDefaults

`func NewSubUnclaimedDraftSignerWithDefaults() *SubUnclaimedDraftSigner`

NewSubUnclaimedDraftSignerWithDefaults instantiates a new SubUnclaimedDraftSigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *SubUnclaimedDraftSigner) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SubUnclaimedDraftSigner) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SubUnclaimedDraftSigner) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.


### GetName

`func (o *SubUnclaimedDraftSigner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubUnclaimedDraftSigner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubUnclaimedDraftSigner) SetName(v string)`

SetName sets Name field to given value.


### GetOrder

`func (o *SubUnclaimedDraftSigner) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *SubUnclaimedDraftSigner) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *SubUnclaimedDraftSigner) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *SubUnclaimedDraftSigner) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### SetOrderNil

`func (o *SubUnclaimedDraftSigner) SetOrderNil(b bool)`

 SetOrderNil sets the value for Order to be an explicit nil

### UnsetOrder
`func (o *SubUnclaimedDraftSigner) UnsetOrder()`

UnsetOrder ensures that no value is present for Order, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


