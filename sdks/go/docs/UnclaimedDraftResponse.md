# UnclaimedDraftResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignatureRequestId** | Pointer to **NullableString** | The ID of the signature request that is represented by this UnclaimedDraft. | [optional] 
**ClaimUrl** | Pointer to **string** | The URL to be used to claim this UnclaimedDraft. | [optional] 
**SigningRedirectUrl** | Pointer to **NullableString** | The URL you want signers redirected to after they successfully sign. | [optional] 
**RequestingRedirectUrl** | Pointer to **NullableString** | The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.). | [optional] 
**ExpiresAt** | Pointer to **NullableInt32** | When the link expires. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test draft. Signature requests made from test drafts have no legal value. | [optional] 

## Methods

### NewUnclaimedDraftResponse

`func NewUnclaimedDraftResponse() *UnclaimedDraftResponse`

NewUnclaimedDraftResponse instantiates a new UnclaimedDraftResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnclaimedDraftResponseWithDefaults

`func NewUnclaimedDraftResponseWithDefaults() *UnclaimedDraftResponse`

NewUnclaimedDraftResponseWithDefaults instantiates a new UnclaimedDraftResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignatureRequestId

`func (o *UnclaimedDraftResponse) GetSignatureRequestId() string`

GetSignatureRequestId returns the SignatureRequestId field if non-nil, zero value otherwise.

### GetSignatureRequestIdOk

`func (o *UnclaimedDraftResponse) GetSignatureRequestIdOk() (*string, bool)`

GetSignatureRequestIdOk returns a tuple with the SignatureRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequestId

`func (o *UnclaimedDraftResponse) SetSignatureRequestId(v string)`

SetSignatureRequestId sets SignatureRequestId field to given value.

### HasSignatureRequestId

`func (o *UnclaimedDraftResponse) HasSignatureRequestId() bool`

HasSignatureRequestId returns a boolean if a field has been set.

### SetSignatureRequestIdNil

`func (o *UnclaimedDraftResponse) SetSignatureRequestIdNil(b bool)`

 SetSignatureRequestIdNil sets the value for SignatureRequestId to be an explicit nil

### UnsetSignatureRequestId
`func (o *UnclaimedDraftResponse) UnsetSignatureRequestId()`

UnsetSignatureRequestId ensures that no value is present for SignatureRequestId, not even an explicit nil
### GetClaimUrl

`func (o *UnclaimedDraftResponse) GetClaimUrl() string`

GetClaimUrl returns the ClaimUrl field if non-nil, zero value otherwise.

### GetClaimUrlOk

`func (o *UnclaimedDraftResponse) GetClaimUrlOk() (*string, bool)`

GetClaimUrlOk returns a tuple with the ClaimUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimUrl

`func (o *UnclaimedDraftResponse) SetClaimUrl(v string)`

SetClaimUrl sets ClaimUrl field to given value.

### HasClaimUrl

`func (o *UnclaimedDraftResponse) HasClaimUrl() bool`

HasClaimUrl returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *UnclaimedDraftResponse) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *UnclaimedDraftResponse) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *UnclaimedDraftResponse) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *UnclaimedDraftResponse) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### SetSigningRedirectUrlNil

`func (o *UnclaimedDraftResponse) SetSigningRedirectUrlNil(b bool)`

 SetSigningRedirectUrlNil sets the value for SigningRedirectUrl to be an explicit nil

### UnsetSigningRedirectUrl
`func (o *UnclaimedDraftResponse) UnsetSigningRedirectUrl()`

UnsetSigningRedirectUrl ensures that no value is present for SigningRedirectUrl, not even an explicit nil
### GetRequestingRedirectUrl

`func (o *UnclaimedDraftResponse) GetRequestingRedirectUrl() string`

GetRequestingRedirectUrl returns the RequestingRedirectUrl field if non-nil, zero value otherwise.

### GetRequestingRedirectUrlOk

`func (o *UnclaimedDraftResponse) GetRequestingRedirectUrlOk() (*string, bool)`

GetRequestingRedirectUrlOk returns a tuple with the RequestingRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingRedirectUrl

`func (o *UnclaimedDraftResponse) SetRequestingRedirectUrl(v string)`

SetRequestingRedirectUrl sets RequestingRedirectUrl field to given value.

### HasRequestingRedirectUrl

`func (o *UnclaimedDraftResponse) HasRequestingRedirectUrl() bool`

HasRequestingRedirectUrl returns a boolean if a field has been set.

### SetRequestingRedirectUrlNil

`func (o *UnclaimedDraftResponse) SetRequestingRedirectUrlNil(b bool)`

 SetRequestingRedirectUrlNil sets the value for RequestingRedirectUrl to be an explicit nil

### UnsetRequestingRedirectUrl
`func (o *UnclaimedDraftResponse) UnsetRequestingRedirectUrl()`

UnsetRequestingRedirectUrl ensures that no value is present for RequestingRedirectUrl, not even an explicit nil
### GetExpiresAt

`func (o *UnclaimedDraftResponse) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *UnclaimedDraftResponse) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *UnclaimedDraftResponse) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *UnclaimedDraftResponse) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *UnclaimedDraftResponse) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *UnclaimedDraftResponse) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetTestMode

`func (o *UnclaimedDraftResponse) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *UnclaimedDraftResponse) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *UnclaimedDraftResponse) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *UnclaimedDraftResponse) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


