# SignatureRequestRemindRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | **string** | The email address of the signer to send a reminder to. | 
**Name** | Pointer to **string** | The name of the signer to send a reminder to. Include if two or more signers share an email address. | [optional] 

## Methods

### NewSignatureRequestRemindRequest

`func NewSignatureRequestRemindRequest(emailAddress string, ) *SignatureRequestRemindRequest`

NewSignatureRequestRemindRequest instantiates a new SignatureRequestRemindRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestRemindRequestWithDefaults

`func NewSignatureRequestRemindRequestWithDefaults() *SignatureRequestRemindRequest`

NewSignatureRequestRemindRequestWithDefaults instantiates a new SignatureRequestRemindRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *SignatureRequestRemindRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SignatureRequestRemindRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SignatureRequestRemindRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.


### GetName

`func (o *SignatureRequestRemindRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SignatureRequestRemindRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SignatureRequestRemindRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SignatureRequestRemindRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


