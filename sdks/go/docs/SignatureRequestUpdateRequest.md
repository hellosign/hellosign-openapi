# SignatureRequestUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | Pointer to **string** | The new email address for the recipient.  This will generate a new &#x60;signature_id&#x60; value.  **NOTE**: Optional if &#x60;name&#x60; is provided. | [optional] 
**Name** | Pointer to **string** | The new name for the recipient.  **NOTE**: Optional if &#x60;email_address&#x60; is provided. | [optional] 
**SignatureId** | **string** | The signature ID for the recipient. | 
**ExpiresAt** | Pointer to **NullableInt32** | The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. | [optional] 

## Methods

### NewSignatureRequestUpdateRequest

`func NewSignatureRequestUpdateRequest(signatureId string, ) *SignatureRequestUpdateRequest`

NewSignatureRequestUpdateRequest instantiates a new SignatureRequestUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestUpdateRequestWithDefaults

`func NewSignatureRequestUpdateRequestWithDefaults() *SignatureRequestUpdateRequest`

NewSignatureRequestUpdateRequestWithDefaults instantiates a new SignatureRequestUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *SignatureRequestUpdateRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SignatureRequestUpdateRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SignatureRequestUpdateRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *SignatureRequestUpdateRequest) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetName

`func (o *SignatureRequestUpdateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SignatureRequestUpdateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SignatureRequestUpdateRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SignatureRequestUpdateRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSignatureId

`func (o *SignatureRequestUpdateRequest) GetSignatureId() string`

GetSignatureId returns the SignatureId field if non-nil, zero value otherwise.

### GetSignatureIdOk

`func (o *SignatureRequestUpdateRequest) GetSignatureIdOk() (*string, bool)`

GetSignatureIdOk returns a tuple with the SignatureId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureId

`func (o *SignatureRequestUpdateRequest) SetSignatureId(v string)`

SetSignatureId sets SignatureId field to given value.


### GetExpiresAt

`func (o *SignatureRequestUpdateRequest) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *SignatureRequestUpdateRequest) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *SignatureRequestUpdateRequest) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *SignatureRequestUpdateRequest) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *SignatureRequestUpdateRequest) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *SignatureRequestUpdateRequest) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


