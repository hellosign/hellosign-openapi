# AccountVerifyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | **string** | Email address to run the verification for. | 

## Methods

### NewAccountVerifyRequest

`func NewAccountVerifyRequest(emailAddress string, ) *AccountVerifyRequest`

NewAccountVerifyRequest instantiates a new AccountVerifyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountVerifyRequestWithDefaults

`func NewAccountVerifyRequestWithDefaults() *AccountVerifyRequest`

NewAccountVerifyRequestWithDefaults instantiates a new AccountVerifyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *AccountVerifyRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *AccountVerifyRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *AccountVerifyRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


