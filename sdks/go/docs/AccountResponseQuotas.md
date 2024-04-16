# AccountResponseQuotas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiSignatureRequestsLeft** | Pointer to **NullableInt32** | API signature requests remaining. | [optional] 
**DocumentsLeft** | Pointer to **NullableInt32** | Signature requests remaining. | [optional] 
**TemplatesTotal** | Pointer to **NullableInt32** | Total API templates allowed. | [optional] 
**TemplatesLeft** | Pointer to **NullableInt32** | API templates remaining. | [optional] 
**SmsVerificationsLeft** | Pointer to **NullableInt32** | SMS verifications  remaining. | [optional] 

## Methods

### NewAccountResponseQuotas

`func NewAccountResponseQuotas() *AccountResponseQuotas`

NewAccountResponseQuotas instantiates a new AccountResponseQuotas object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountResponseQuotasWithDefaults

`func NewAccountResponseQuotasWithDefaults() *AccountResponseQuotas`

NewAccountResponseQuotasWithDefaults instantiates a new AccountResponseQuotas object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiSignatureRequestsLeft

`func (o *AccountResponseQuotas) GetApiSignatureRequestsLeft() int32`

GetApiSignatureRequestsLeft returns the ApiSignatureRequestsLeft field if non-nil, zero value otherwise.

### GetApiSignatureRequestsLeftOk

`func (o *AccountResponseQuotas) GetApiSignatureRequestsLeftOk() (*int32, bool)`

GetApiSignatureRequestsLeftOk returns a tuple with the ApiSignatureRequestsLeft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiSignatureRequestsLeft

`func (o *AccountResponseQuotas) SetApiSignatureRequestsLeft(v int32)`

SetApiSignatureRequestsLeft sets ApiSignatureRequestsLeft field to given value.

### HasApiSignatureRequestsLeft

`func (o *AccountResponseQuotas) HasApiSignatureRequestsLeft() bool`

HasApiSignatureRequestsLeft returns a boolean if a field has been set.

### SetApiSignatureRequestsLeftNil

`func (o *AccountResponseQuotas) SetApiSignatureRequestsLeftNil(b bool)`

 SetApiSignatureRequestsLeftNil sets the value for ApiSignatureRequestsLeft to be an explicit nil

### UnsetApiSignatureRequestsLeft
`func (o *AccountResponseQuotas) UnsetApiSignatureRequestsLeft()`

UnsetApiSignatureRequestsLeft ensures that no value is present for ApiSignatureRequestsLeft, not even an explicit nil
### GetDocumentsLeft

`func (o *AccountResponseQuotas) GetDocumentsLeft() int32`

GetDocumentsLeft returns the DocumentsLeft field if non-nil, zero value otherwise.

### GetDocumentsLeftOk

`func (o *AccountResponseQuotas) GetDocumentsLeftOk() (*int32, bool)`

GetDocumentsLeftOk returns a tuple with the DocumentsLeft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentsLeft

`func (o *AccountResponseQuotas) SetDocumentsLeft(v int32)`

SetDocumentsLeft sets DocumentsLeft field to given value.

### HasDocumentsLeft

`func (o *AccountResponseQuotas) HasDocumentsLeft() bool`

HasDocumentsLeft returns a boolean if a field has been set.

### SetDocumentsLeftNil

`func (o *AccountResponseQuotas) SetDocumentsLeftNil(b bool)`

 SetDocumentsLeftNil sets the value for DocumentsLeft to be an explicit nil

### UnsetDocumentsLeft
`func (o *AccountResponseQuotas) UnsetDocumentsLeft()`

UnsetDocumentsLeft ensures that no value is present for DocumentsLeft, not even an explicit nil
### GetTemplatesTotal

`func (o *AccountResponseQuotas) GetTemplatesTotal() int32`

GetTemplatesTotal returns the TemplatesTotal field if non-nil, zero value otherwise.

### GetTemplatesTotalOk

`func (o *AccountResponseQuotas) GetTemplatesTotalOk() (*int32, bool)`

GetTemplatesTotalOk returns a tuple with the TemplatesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplatesTotal

`func (o *AccountResponseQuotas) SetTemplatesTotal(v int32)`

SetTemplatesTotal sets TemplatesTotal field to given value.

### HasTemplatesTotal

`func (o *AccountResponseQuotas) HasTemplatesTotal() bool`

HasTemplatesTotal returns a boolean if a field has been set.

### SetTemplatesTotalNil

`func (o *AccountResponseQuotas) SetTemplatesTotalNil(b bool)`

 SetTemplatesTotalNil sets the value for TemplatesTotal to be an explicit nil

### UnsetTemplatesTotal
`func (o *AccountResponseQuotas) UnsetTemplatesTotal()`

UnsetTemplatesTotal ensures that no value is present for TemplatesTotal, not even an explicit nil
### GetTemplatesLeft

`func (o *AccountResponseQuotas) GetTemplatesLeft() int32`

GetTemplatesLeft returns the TemplatesLeft field if non-nil, zero value otherwise.

### GetTemplatesLeftOk

`func (o *AccountResponseQuotas) GetTemplatesLeftOk() (*int32, bool)`

GetTemplatesLeftOk returns a tuple with the TemplatesLeft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplatesLeft

`func (o *AccountResponseQuotas) SetTemplatesLeft(v int32)`

SetTemplatesLeft sets TemplatesLeft field to given value.

### HasTemplatesLeft

`func (o *AccountResponseQuotas) HasTemplatesLeft() bool`

HasTemplatesLeft returns a boolean if a field has been set.

### SetTemplatesLeftNil

`func (o *AccountResponseQuotas) SetTemplatesLeftNil(b bool)`

 SetTemplatesLeftNil sets the value for TemplatesLeft to be an explicit nil

### UnsetTemplatesLeft
`func (o *AccountResponseQuotas) UnsetTemplatesLeft()`

UnsetTemplatesLeft ensures that no value is present for TemplatesLeft, not even an explicit nil
### GetSmsVerificationsLeft

`func (o *AccountResponseQuotas) GetSmsVerificationsLeft() int32`

GetSmsVerificationsLeft returns the SmsVerificationsLeft field if non-nil, zero value otherwise.

### GetSmsVerificationsLeftOk

`func (o *AccountResponseQuotas) GetSmsVerificationsLeftOk() (*int32, bool)`

GetSmsVerificationsLeftOk returns a tuple with the SmsVerificationsLeft field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmsVerificationsLeft

`func (o *AccountResponseQuotas) SetSmsVerificationsLeft(v int32)`

SetSmsVerificationsLeft sets SmsVerificationsLeft field to given value.

### HasSmsVerificationsLeft

`func (o *AccountResponseQuotas) HasSmsVerificationsLeft() bool`

HasSmsVerificationsLeft returns a boolean if a field has been set.

### SetSmsVerificationsLeftNil

`func (o *AccountResponseQuotas) SetSmsVerificationsLeftNil(b bool)`

 SetSmsVerificationsLeftNil sets the value for SmsVerificationsLeft to be an explicit nil

### UnsetSmsVerificationsLeft
`func (o *AccountResponseQuotas) UnsetSmsVerificationsLeft()`

UnsetSmsVerificationsLeft ensures that no value is present for SmsVerificationsLeft, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


