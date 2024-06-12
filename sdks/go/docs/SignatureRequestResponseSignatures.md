# SignatureRequestResponseSignatures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignatureId** | Pointer to **string** | Signature identifier. | [optional] 
**SignerGroupGuid** | Pointer to **NullableString** | Signer Group GUID | [optional] 
**SignerEmailAddress** | Pointer to **string** | The email address of the signer. | [optional] 
**SignerName** | Pointer to **NullableString** | The name of the signer. | [optional] 
**SignerRole** | Pointer to **NullableString** | The role of the signer. | [optional] 
**Order** | Pointer to **NullableInt32** | If signer order is assigned this is the 0-based index for this signer. | [optional] 
**StatusCode** | Pointer to **string** | The current status of the signature. eg: awaiting_signature, signed, declined. | [optional] 
**DeclineReason** | Pointer to **NullableString** | The reason provided by the signer for declining the request. | [optional] 
**SignedAt** | Pointer to **NullableInt32** | Time that the document was signed or null. | [optional] 
**LastViewedAt** | Pointer to **NullableInt32** | The time that the document was last viewed by this signer or null. | [optional] 
**LastRemindedAt** | Pointer to **NullableInt32** | The time the last reminder email was sent to the signer or null. | [optional] 
**HasPin** | Pointer to **bool** | Boolean to indicate whether this signature requires a PIN to access. | [optional] 
**HasSmsAuth** | Pointer to **NullableBool** | Boolean to indicate whether this signature has SMS authentication enabled. | [optional] 
**HasSmsDelivery** | Pointer to **NullableBool** | Boolean to indicate whether this signature has SMS delivery enabled. | [optional] 
**SmsPhoneNumber** | Pointer to **NullableString** | The SMS phone number used for authentication or signature request delivery. | [optional] 
**ReassignedBy** | Pointer to **NullableString** | Email address of original signer who reassigned to this signer. | [optional] 
**ReassignmentReason** | Pointer to **NullableString** | Reason provided by original signer who reassigned to this signer. | [optional] 
**ReassignedFrom** | Pointer to **NullableString** | Previous signature identifier. | [optional] 
**Error** | Pointer to **NullableString** | Error message pertaining to this signer, or null. | [optional] 

## Methods

### NewSignatureRequestResponseSignatures

`func NewSignatureRequestResponseSignatures() *SignatureRequestResponseSignatures`

NewSignatureRequestResponseSignatures instantiates a new SignatureRequestResponseSignatures object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestResponseSignaturesWithDefaults

`func NewSignatureRequestResponseSignaturesWithDefaults() *SignatureRequestResponseSignatures`

NewSignatureRequestResponseSignaturesWithDefaults instantiates a new SignatureRequestResponseSignatures object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignatureId

`func (o *SignatureRequestResponseSignatures) GetSignatureId() string`

GetSignatureId returns the SignatureId field if non-nil, zero value otherwise.

### GetSignatureIdOk

`func (o *SignatureRequestResponseSignatures) GetSignatureIdOk() (*string, bool)`

GetSignatureIdOk returns a tuple with the SignatureId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureId

`func (o *SignatureRequestResponseSignatures) SetSignatureId(v string)`

SetSignatureId sets SignatureId field to given value.

### HasSignatureId

`func (o *SignatureRequestResponseSignatures) HasSignatureId() bool`

HasSignatureId returns a boolean if a field has been set.

### GetSignerGroupGuid

`func (o *SignatureRequestResponseSignatures) GetSignerGroupGuid() string`

GetSignerGroupGuid returns the SignerGroupGuid field if non-nil, zero value otherwise.

### GetSignerGroupGuidOk

`func (o *SignatureRequestResponseSignatures) GetSignerGroupGuidOk() (*string, bool)`

GetSignerGroupGuidOk returns a tuple with the SignerGroupGuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerGroupGuid

`func (o *SignatureRequestResponseSignatures) SetSignerGroupGuid(v string)`

SetSignerGroupGuid sets SignerGroupGuid field to given value.

### HasSignerGroupGuid

`func (o *SignatureRequestResponseSignatures) HasSignerGroupGuid() bool`

HasSignerGroupGuid returns a boolean if a field has been set.

### SetSignerGroupGuidNil

`func (o *SignatureRequestResponseSignatures) SetSignerGroupGuidNil(b bool)`

 SetSignerGroupGuidNil sets the value for SignerGroupGuid to be an explicit nil

### UnsetSignerGroupGuid
`func (o *SignatureRequestResponseSignatures) UnsetSignerGroupGuid()`

UnsetSignerGroupGuid ensures that no value is present for SignerGroupGuid, not even an explicit nil
### GetSignerEmailAddress

`func (o *SignatureRequestResponseSignatures) GetSignerEmailAddress() string`

GetSignerEmailAddress returns the SignerEmailAddress field if non-nil, zero value otherwise.

### GetSignerEmailAddressOk

`func (o *SignatureRequestResponseSignatures) GetSignerEmailAddressOk() (*string, bool)`

GetSignerEmailAddressOk returns a tuple with the SignerEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerEmailAddress

`func (o *SignatureRequestResponseSignatures) SetSignerEmailAddress(v string)`

SetSignerEmailAddress sets SignerEmailAddress field to given value.

### HasSignerEmailAddress

`func (o *SignatureRequestResponseSignatures) HasSignerEmailAddress() bool`

HasSignerEmailAddress returns a boolean if a field has been set.

### GetSignerName

`func (o *SignatureRequestResponseSignatures) GetSignerName() string`

GetSignerName returns the SignerName field if non-nil, zero value otherwise.

### GetSignerNameOk

`func (o *SignatureRequestResponseSignatures) GetSignerNameOk() (*string, bool)`

GetSignerNameOk returns a tuple with the SignerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerName

`func (o *SignatureRequestResponseSignatures) SetSignerName(v string)`

SetSignerName sets SignerName field to given value.

### HasSignerName

`func (o *SignatureRequestResponseSignatures) HasSignerName() bool`

HasSignerName returns a boolean if a field has been set.

### SetSignerNameNil

`func (o *SignatureRequestResponseSignatures) SetSignerNameNil(b bool)`

 SetSignerNameNil sets the value for SignerName to be an explicit nil

### UnsetSignerName
`func (o *SignatureRequestResponseSignatures) UnsetSignerName()`

UnsetSignerName ensures that no value is present for SignerName, not even an explicit nil
### GetSignerRole

`func (o *SignatureRequestResponseSignatures) GetSignerRole() string`

GetSignerRole returns the SignerRole field if non-nil, zero value otherwise.

### GetSignerRoleOk

`func (o *SignatureRequestResponseSignatures) GetSignerRoleOk() (*string, bool)`

GetSignerRoleOk returns a tuple with the SignerRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerRole

`func (o *SignatureRequestResponseSignatures) SetSignerRole(v string)`

SetSignerRole sets SignerRole field to given value.

### HasSignerRole

`func (o *SignatureRequestResponseSignatures) HasSignerRole() bool`

HasSignerRole returns a boolean if a field has been set.

### SetSignerRoleNil

`func (o *SignatureRequestResponseSignatures) SetSignerRoleNil(b bool)`

 SetSignerRoleNil sets the value for SignerRole to be an explicit nil

### UnsetSignerRole
`func (o *SignatureRequestResponseSignatures) UnsetSignerRole()`

UnsetSignerRole ensures that no value is present for SignerRole, not even an explicit nil
### GetOrder

`func (o *SignatureRequestResponseSignatures) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *SignatureRequestResponseSignatures) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *SignatureRequestResponseSignatures) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *SignatureRequestResponseSignatures) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### SetOrderNil

`func (o *SignatureRequestResponseSignatures) SetOrderNil(b bool)`

 SetOrderNil sets the value for Order to be an explicit nil

### UnsetOrder
`func (o *SignatureRequestResponseSignatures) UnsetOrder()`

UnsetOrder ensures that no value is present for Order, not even an explicit nil
### GetStatusCode

`func (o *SignatureRequestResponseSignatures) GetStatusCode() string`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *SignatureRequestResponseSignatures) GetStatusCodeOk() (*string, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *SignatureRequestResponseSignatures) SetStatusCode(v string)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *SignatureRequestResponseSignatures) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetDeclineReason

`func (o *SignatureRequestResponseSignatures) GetDeclineReason() string`

GetDeclineReason returns the DeclineReason field if non-nil, zero value otherwise.

### GetDeclineReasonOk

`func (o *SignatureRequestResponseSignatures) GetDeclineReasonOk() (*string, bool)`

GetDeclineReasonOk returns a tuple with the DeclineReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeclineReason

`func (o *SignatureRequestResponseSignatures) SetDeclineReason(v string)`

SetDeclineReason sets DeclineReason field to given value.

### HasDeclineReason

`func (o *SignatureRequestResponseSignatures) HasDeclineReason() bool`

HasDeclineReason returns a boolean if a field has been set.

### SetDeclineReasonNil

`func (o *SignatureRequestResponseSignatures) SetDeclineReasonNil(b bool)`

 SetDeclineReasonNil sets the value for DeclineReason to be an explicit nil

### UnsetDeclineReason
`func (o *SignatureRequestResponseSignatures) UnsetDeclineReason()`

UnsetDeclineReason ensures that no value is present for DeclineReason, not even an explicit nil
### GetSignedAt

`func (o *SignatureRequestResponseSignatures) GetSignedAt() int32`

GetSignedAt returns the SignedAt field if non-nil, zero value otherwise.

### GetSignedAtOk

`func (o *SignatureRequestResponseSignatures) GetSignedAtOk() (*int32, bool)`

GetSignedAtOk returns a tuple with the SignedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedAt

`func (o *SignatureRequestResponseSignatures) SetSignedAt(v int32)`

SetSignedAt sets SignedAt field to given value.

### HasSignedAt

`func (o *SignatureRequestResponseSignatures) HasSignedAt() bool`

HasSignedAt returns a boolean if a field has been set.

### SetSignedAtNil

`func (o *SignatureRequestResponseSignatures) SetSignedAtNil(b bool)`

 SetSignedAtNil sets the value for SignedAt to be an explicit nil

### UnsetSignedAt
`func (o *SignatureRequestResponseSignatures) UnsetSignedAt()`

UnsetSignedAt ensures that no value is present for SignedAt, not even an explicit nil
### GetLastViewedAt

`func (o *SignatureRequestResponseSignatures) GetLastViewedAt() int32`

GetLastViewedAt returns the LastViewedAt field if non-nil, zero value otherwise.

### GetLastViewedAtOk

`func (o *SignatureRequestResponseSignatures) GetLastViewedAtOk() (*int32, bool)`

GetLastViewedAtOk returns a tuple with the LastViewedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastViewedAt

`func (o *SignatureRequestResponseSignatures) SetLastViewedAt(v int32)`

SetLastViewedAt sets LastViewedAt field to given value.

### HasLastViewedAt

`func (o *SignatureRequestResponseSignatures) HasLastViewedAt() bool`

HasLastViewedAt returns a boolean if a field has been set.

### SetLastViewedAtNil

`func (o *SignatureRequestResponseSignatures) SetLastViewedAtNil(b bool)`

 SetLastViewedAtNil sets the value for LastViewedAt to be an explicit nil

### UnsetLastViewedAt
`func (o *SignatureRequestResponseSignatures) UnsetLastViewedAt()`

UnsetLastViewedAt ensures that no value is present for LastViewedAt, not even an explicit nil
### GetLastRemindedAt

`func (o *SignatureRequestResponseSignatures) GetLastRemindedAt() int32`

GetLastRemindedAt returns the LastRemindedAt field if non-nil, zero value otherwise.

### GetLastRemindedAtOk

`func (o *SignatureRequestResponseSignatures) GetLastRemindedAtOk() (*int32, bool)`

GetLastRemindedAtOk returns a tuple with the LastRemindedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRemindedAt

`func (o *SignatureRequestResponseSignatures) SetLastRemindedAt(v int32)`

SetLastRemindedAt sets LastRemindedAt field to given value.

### HasLastRemindedAt

`func (o *SignatureRequestResponseSignatures) HasLastRemindedAt() bool`

HasLastRemindedAt returns a boolean if a field has been set.

### SetLastRemindedAtNil

`func (o *SignatureRequestResponseSignatures) SetLastRemindedAtNil(b bool)`

 SetLastRemindedAtNil sets the value for LastRemindedAt to be an explicit nil

### UnsetLastRemindedAt
`func (o *SignatureRequestResponseSignatures) UnsetLastRemindedAt()`

UnsetLastRemindedAt ensures that no value is present for LastRemindedAt, not even an explicit nil
### GetHasPin

`func (o *SignatureRequestResponseSignatures) GetHasPin() bool`

GetHasPin returns the HasPin field if non-nil, zero value otherwise.

### GetHasPinOk

`func (o *SignatureRequestResponseSignatures) GetHasPinOk() (*bool, bool)`

GetHasPinOk returns a tuple with the HasPin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPin

`func (o *SignatureRequestResponseSignatures) SetHasPin(v bool)`

SetHasPin sets HasPin field to given value.

### HasHasPin

`func (o *SignatureRequestResponseSignatures) HasHasPin() bool`

HasHasPin returns a boolean if a field has been set.

### GetHasSmsAuth

`func (o *SignatureRequestResponseSignatures) GetHasSmsAuth() bool`

GetHasSmsAuth returns the HasSmsAuth field if non-nil, zero value otherwise.

### GetHasSmsAuthOk

`func (o *SignatureRequestResponseSignatures) GetHasSmsAuthOk() (*bool, bool)`

GetHasSmsAuthOk returns a tuple with the HasSmsAuth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasSmsAuth

`func (o *SignatureRequestResponseSignatures) SetHasSmsAuth(v bool)`

SetHasSmsAuth sets HasSmsAuth field to given value.

### HasHasSmsAuth

`func (o *SignatureRequestResponseSignatures) HasHasSmsAuth() bool`

HasHasSmsAuth returns a boolean if a field has been set.

### SetHasSmsAuthNil

`func (o *SignatureRequestResponseSignatures) SetHasSmsAuthNil(b bool)`

 SetHasSmsAuthNil sets the value for HasSmsAuth to be an explicit nil

### UnsetHasSmsAuth
`func (o *SignatureRequestResponseSignatures) UnsetHasSmsAuth()`

UnsetHasSmsAuth ensures that no value is present for HasSmsAuth, not even an explicit nil
### GetHasSmsDelivery

`func (o *SignatureRequestResponseSignatures) GetHasSmsDelivery() bool`

GetHasSmsDelivery returns the HasSmsDelivery field if non-nil, zero value otherwise.

### GetHasSmsDeliveryOk

`func (o *SignatureRequestResponseSignatures) GetHasSmsDeliveryOk() (*bool, bool)`

GetHasSmsDeliveryOk returns a tuple with the HasSmsDelivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasSmsDelivery

`func (o *SignatureRequestResponseSignatures) SetHasSmsDelivery(v bool)`

SetHasSmsDelivery sets HasSmsDelivery field to given value.

### HasHasSmsDelivery

`func (o *SignatureRequestResponseSignatures) HasHasSmsDelivery() bool`

HasHasSmsDelivery returns a boolean if a field has been set.

### SetHasSmsDeliveryNil

`func (o *SignatureRequestResponseSignatures) SetHasSmsDeliveryNil(b bool)`

 SetHasSmsDeliveryNil sets the value for HasSmsDelivery to be an explicit nil

### UnsetHasSmsDelivery
`func (o *SignatureRequestResponseSignatures) UnsetHasSmsDelivery()`

UnsetHasSmsDelivery ensures that no value is present for HasSmsDelivery, not even an explicit nil
### GetSmsPhoneNumber

`func (o *SignatureRequestResponseSignatures) GetSmsPhoneNumber() string`

GetSmsPhoneNumber returns the SmsPhoneNumber field if non-nil, zero value otherwise.

### GetSmsPhoneNumberOk

`func (o *SignatureRequestResponseSignatures) GetSmsPhoneNumberOk() (*string, bool)`

GetSmsPhoneNumberOk returns a tuple with the SmsPhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmsPhoneNumber

`func (o *SignatureRequestResponseSignatures) SetSmsPhoneNumber(v string)`

SetSmsPhoneNumber sets SmsPhoneNumber field to given value.

### HasSmsPhoneNumber

`func (o *SignatureRequestResponseSignatures) HasSmsPhoneNumber() bool`

HasSmsPhoneNumber returns a boolean if a field has been set.

### SetSmsPhoneNumberNil

`func (o *SignatureRequestResponseSignatures) SetSmsPhoneNumberNil(b bool)`

 SetSmsPhoneNumberNil sets the value for SmsPhoneNumber to be an explicit nil

### UnsetSmsPhoneNumber
`func (o *SignatureRequestResponseSignatures) UnsetSmsPhoneNumber()`

UnsetSmsPhoneNumber ensures that no value is present for SmsPhoneNumber, not even an explicit nil
### GetReassignedBy

`func (o *SignatureRequestResponseSignatures) GetReassignedBy() string`

GetReassignedBy returns the ReassignedBy field if non-nil, zero value otherwise.

### GetReassignedByOk

`func (o *SignatureRequestResponseSignatures) GetReassignedByOk() (*string, bool)`

GetReassignedByOk returns a tuple with the ReassignedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedBy

`func (o *SignatureRequestResponseSignatures) SetReassignedBy(v string)`

SetReassignedBy sets ReassignedBy field to given value.

### HasReassignedBy

`func (o *SignatureRequestResponseSignatures) HasReassignedBy() bool`

HasReassignedBy returns a boolean if a field has been set.

### SetReassignedByNil

`func (o *SignatureRequestResponseSignatures) SetReassignedByNil(b bool)`

 SetReassignedByNil sets the value for ReassignedBy to be an explicit nil

### UnsetReassignedBy
`func (o *SignatureRequestResponseSignatures) UnsetReassignedBy()`

UnsetReassignedBy ensures that no value is present for ReassignedBy, not even an explicit nil
### GetReassignmentReason

`func (o *SignatureRequestResponseSignatures) GetReassignmentReason() string`

GetReassignmentReason returns the ReassignmentReason field if non-nil, zero value otherwise.

### GetReassignmentReasonOk

`func (o *SignatureRequestResponseSignatures) GetReassignmentReasonOk() (*string, bool)`

GetReassignmentReasonOk returns a tuple with the ReassignmentReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentReason

`func (o *SignatureRequestResponseSignatures) SetReassignmentReason(v string)`

SetReassignmentReason sets ReassignmentReason field to given value.

### HasReassignmentReason

`func (o *SignatureRequestResponseSignatures) HasReassignmentReason() bool`

HasReassignmentReason returns a boolean if a field has been set.

### SetReassignmentReasonNil

`func (o *SignatureRequestResponseSignatures) SetReassignmentReasonNil(b bool)`

 SetReassignmentReasonNil sets the value for ReassignmentReason to be an explicit nil

### UnsetReassignmentReason
`func (o *SignatureRequestResponseSignatures) UnsetReassignmentReason()`

UnsetReassignmentReason ensures that no value is present for ReassignmentReason, not even an explicit nil
### GetReassignedFrom

`func (o *SignatureRequestResponseSignatures) GetReassignedFrom() string`

GetReassignedFrom returns the ReassignedFrom field if non-nil, zero value otherwise.

### GetReassignedFromOk

`func (o *SignatureRequestResponseSignatures) GetReassignedFromOk() (*string, bool)`

GetReassignedFromOk returns a tuple with the ReassignedFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFrom

`func (o *SignatureRequestResponseSignatures) SetReassignedFrom(v string)`

SetReassignedFrom sets ReassignedFrom field to given value.

### HasReassignedFrom

`func (o *SignatureRequestResponseSignatures) HasReassignedFrom() bool`

HasReassignedFrom returns a boolean if a field has been set.

### SetReassignedFromNil

`func (o *SignatureRequestResponseSignatures) SetReassignedFromNil(b bool)`

 SetReassignedFromNil sets the value for ReassignedFrom to be an explicit nil

### UnsetReassignedFrom
`func (o *SignatureRequestResponseSignatures) UnsetReassignedFrom()`

UnsetReassignedFrom ensures that no value is present for ReassignedFrom, not even an explicit nil
### GetError

`func (o *SignatureRequestResponseSignatures) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *SignatureRequestResponseSignatures) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *SignatureRequestResponseSignatures) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *SignatureRequestResponseSignatures) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *SignatureRequestResponseSignatures) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *SignatureRequestResponseSignatures) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


