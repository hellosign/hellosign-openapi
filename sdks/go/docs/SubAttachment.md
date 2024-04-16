# SubAttachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instructions** | Pointer to **string** | The instructions for uploading the attachment. | [optional] 
**Name** | **string** | The name of attachment. | 
**Required** | Pointer to **bool** | Determines if the attachment must be uploaded. | [optional] [default to false]
**SignerIndex** | **int32** | The signer&#39;s index in the &#x60;signers&#x60; parameter (0-based indexing).  **NOTE**: Only one signer can be assigned per attachment. | 

## Methods

### NewSubAttachment

`func NewSubAttachment(name string, signerIndex int32, ) *SubAttachment`

NewSubAttachment instantiates a new SubAttachment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubAttachmentWithDefaults

`func NewSubAttachmentWithDefaults() *SubAttachment`

NewSubAttachmentWithDefaults instantiates a new SubAttachment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstructions

`func (o *SubAttachment) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *SubAttachment) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *SubAttachment) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *SubAttachment) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetName

`func (o *SubAttachment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubAttachment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubAttachment) SetName(v string)`

SetName sets Name field to given value.


### GetRequired

`func (o *SubAttachment) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SubAttachment) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SubAttachment) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *SubAttachment) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetSignerIndex

`func (o *SubAttachment) GetSignerIndex() int32`

GetSignerIndex returns the SignerIndex field if non-nil, zero value otherwise.

### GetSignerIndexOk

`func (o *SubAttachment) GetSignerIndexOk() (*int32, bool)`

GetSignerIndexOk returns a tuple with the SignerIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerIndex

`func (o *SubAttachment) SetSignerIndex(v int32)`

SetSignerIndex sets SignerIndex field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


