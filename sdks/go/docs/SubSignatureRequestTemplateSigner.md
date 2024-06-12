# SubSignatureRequestTemplateSigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | **string** | Must match an existing role in chosen Template(s). It&#39;s case-sensitive. | 
**Name** | **string** | The name of the signer. | 
**EmailAddress** | **string** | The email address of the signer. | 
**Pin** | Pointer to **string** | The 4- to 12-character access code that will secure this signer&#39;s signature page. | [optional] 
**SmsPhoneNumber** | Pointer to **string** | An E.164 formatted phone number.  By using the feature, you agree you are responsible for obtaining a signer&#39;s consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).  **Note**: Not available in test mode and requires a Standard plan or higher. | [optional] 
**SmsPhoneNumberType** | Pointer to **string** | Specifies the feature used with the &#x60;sms_phone_number&#x60;. Default &#x60;authentication&#x60;.  If &#x60;authentication&#x60;, signer is sent a verification code via SMS that is required to access the document.  If &#x60;delivery&#x60;, a link to complete the signature request is delivered via SMS (_and_ email). | [optional] 

## Methods

### NewSubSignatureRequestTemplateSigner

`func NewSubSignatureRequestTemplateSigner(role string, name string, emailAddress string, ) *SubSignatureRequestTemplateSigner`

NewSubSignatureRequestTemplateSigner instantiates a new SubSignatureRequestTemplateSigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubSignatureRequestTemplateSignerWithDefaults

`func NewSubSignatureRequestTemplateSignerWithDefaults() *SubSignatureRequestTemplateSigner`

NewSubSignatureRequestTemplateSignerWithDefaults instantiates a new SubSignatureRequestTemplateSigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *SubSignatureRequestTemplateSigner) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SubSignatureRequestTemplateSigner) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SubSignatureRequestTemplateSigner) SetRole(v string)`

SetRole sets Role field to given value.


### GetName

`func (o *SubSignatureRequestTemplateSigner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubSignatureRequestTemplateSigner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubSignatureRequestTemplateSigner) SetName(v string)`

SetName sets Name field to given value.


### GetEmailAddress

`func (o *SubSignatureRequestTemplateSigner) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SubSignatureRequestTemplateSigner) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SubSignatureRequestTemplateSigner) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.


### GetPin

`func (o *SubSignatureRequestTemplateSigner) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *SubSignatureRequestTemplateSigner) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *SubSignatureRequestTemplateSigner) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *SubSignatureRequestTemplateSigner) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetSmsPhoneNumber

`func (o *SubSignatureRequestTemplateSigner) GetSmsPhoneNumber() string`

GetSmsPhoneNumber returns the SmsPhoneNumber field if non-nil, zero value otherwise.

### GetSmsPhoneNumberOk

`func (o *SubSignatureRequestTemplateSigner) GetSmsPhoneNumberOk() (*string, bool)`

GetSmsPhoneNumberOk returns a tuple with the SmsPhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmsPhoneNumber

`func (o *SubSignatureRequestTemplateSigner) SetSmsPhoneNumber(v string)`

SetSmsPhoneNumber sets SmsPhoneNumber field to given value.

### HasSmsPhoneNumber

`func (o *SubSignatureRequestTemplateSigner) HasSmsPhoneNumber() bool`

HasSmsPhoneNumber returns a boolean if a field has been set.

### GetSmsPhoneNumberType

`func (o *SubSignatureRequestTemplateSigner) GetSmsPhoneNumberType() string`

GetSmsPhoneNumberType returns the SmsPhoneNumberType field if non-nil, zero value otherwise.

### GetSmsPhoneNumberTypeOk

`func (o *SubSignatureRequestTemplateSigner) GetSmsPhoneNumberTypeOk() (*string, bool)`

GetSmsPhoneNumberTypeOk returns a tuple with the SmsPhoneNumberType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmsPhoneNumberType

`func (o *SubSignatureRequestTemplateSigner) SetSmsPhoneNumberType(v string)`

SetSmsPhoneNumberType sets SmsPhoneNumberType field to given value.

### HasSmsPhoneNumberType

`func (o *SubSignatureRequestTemplateSigner) HasSmsPhoneNumberType() bool`

HasSmsPhoneNumberType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


