# SubCC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | **string** | Must match an existing CC role in chosen Template(s). Multiple CC recipients cannot share the same CC role. | 
**EmailAddress** | **string** | The email address of the CC recipient. | 

## Methods

### NewSubCC

`func NewSubCC(role string, emailAddress string, ) *SubCC`

NewSubCC instantiates a new SubCC object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubCCWithDefaults

`func NewSubCCWithDefaults() *SubCC`

NewSubCCWithDefaults instantiates a new SubCC object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *SubCC) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SubCC) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SubCC) SetRole(v string)`

SetRole sets Role field to given value.


### GetEmailAddress

`func (o *SubCC) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SubCC) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SubCC) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


