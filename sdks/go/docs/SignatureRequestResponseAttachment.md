# SignatureRequestResponseAttachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID for this attachment. | 
**Signer** | **string** | The Signer this attachment is assigned to. | 
**Name** | **string** | The name of this attachment. | 
**Required** | **bool** | A boolean value denoting if this attachment is required. | 
**Instructions** | Pointer to **NullableString** | Instructions for Signer. | [optional] 
**UploadedAt** | Pointer to **NullableInt32** | Timestamp when attachment was uploaded by Signer. | [optional] 

## Methods

### NewSignatureRequestResponseAttachment

`func NewSignatureRequestResponseAttachment(id string, signer string, name string, required bool, ) *SignatureRequestResponseAttachment`

NewSignatureRequestResponseAttachment instantiates a new SignatureRequestResponseAttachment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestResponseAttachmentWithDefaults

`func NewSignatureRequestResponseAttachmentWithDefaults() *SignatureRequestResponseAttachment`

NewSignatureRequestResponseAttachmentWithDefaults instantiates a new SignatureRequestResponseAttachment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SignatureRequestResponseAttachment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SignatureRequestResponseAttachment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SignatureRequestResponseAttachment) SetId(v string)`

SetId sets Id field to given value.


### GetSigner

`func (o *SignatureRequestResponseAttachment) GetSigner() string`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *SignatureRequestResponseAttachment) GetSignerOk() (*string, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *SignatureRequestResponseAttachment) SetSigner(v string)`

SetSigner sets Signer field to given value.


### GetName

`func (o *SignatureRequestResponseAttachment) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SignatureRequestResponseAttachment) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SignatureRequestResponseAttachment) SetName(v string)`

SetName sets Name field to given value.


### GetRequired

`func (o *SignatureRequestResponseAttachment) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SignatureRequestResponseAttachment) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SignatureRequestResponseAttachment) SetRequired(v bool)`

SetRequired sets Required field to given value.


### GetInstructions

`func (o *SignatureRequestResponseAttachment) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *SignatureRequestResponseAttachment) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *SignatureRequestResponseAttachment) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *SignatureRequestResponseAttachment) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### SetInstructionsNil

`func (o *SignatureRequestResponseAttachment) SetInstructionsNil(b bool)`

 SetInstructionsNil sets the value for Instructions to be an explicit nil

### UnsetInstructions
`func (o *SignatureRequestResponseAttachment) UnsetInstructions()`

UnsetInstructions ensures that no value is present for Instructions, not even an explicit nil
### GetUploadedAt

`func (o *SignatureRequestResponseAttachment) GetUploadedAt() int32`

GetUploadedAt returns the UploadedAt field if non-nil, zero value otherwise.

### GetUploadedAtOk

`func (o *SignatureRequestResponseAttachment) GetUploadedAtOk() (*int32, bool)`

GetUploadedAtOk returns a tuple with the UploadedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadedAt

`func (o *SignatureRequestResponseAttachment) SetUploadedAt(v int32)`

SetUploadedAt sets UploadedAt field to given value.

### HasUploadedAt

`func (o *SignatureRequestResponseAttachment) HasUploadedAt() bool`

HasUploadedAt returns a boolean if a field has been set.

### SetUploadedAtNil

`func (o *SignatureRequestResponseAttachment) SetUploadedAtNil(b bool)`

 SetUploadedAtNil sets the value for UploadedAt to be an explicit nil

### UnsetUploadedAt
`func (o *SignatureRequestResponseAttachment) UnsetUploadedAt()`

UnsetUploadedAt ensures that no value is present for UploadedAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


