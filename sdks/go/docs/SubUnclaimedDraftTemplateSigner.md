# SubUnclaimedDraftTemplateSigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Role** | **string** | Must match an existing role in chosen Template(s). | 
**Name** | **string** | The name of the signer filling the role of &#x60;role&#x60;. | 
**EmailAddress** | **string** | The email address of the signer filling the role of &#x60;role&#x60;. | 

## Methods

### NewSubUnclaimedDraftTemplateSigner

`func NewSubUnclaimedDraftTemplateSigner(role string, name string, emailAddress string, ) *SubUnclaimedDraftTemplateSigner`

NewSubUnclaimedDraftTemplateSigner instantiates a new SubUnclaimedDraftTemplateSigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubUnclaimedDraftTemplateSignerWithDefaults

`func NewSubUnclaimedDraftTemplateSignerWithDefaults() *SubUnclaimedDraftTemplateSigner`

NewSubUnclaimedDraftTemplateSignerWithDefaults instantiates a new SubUnclaimedDraftTemplateSigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRole

`func (o *SubUnclaimedDraftTemplateSigner) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SubUnclaimedDraftTemplateSigner) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SubUnclaimedDraftTemplateSigner) SetRole(v string)`

SetRole sets Role field to given value.


### GetName

`func (o *SubUnclaimedDraftTemplateSigner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubUnclaimedDraftTemplateSigner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubUnclaimedDraftTemplateSigner) SetName(v string)`

SetName sets Name field to given value.


### GetEmailAddress

`func (o *SubUnclaimedDraftTemplateSigner) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *SubUnclaimedDraftTemplateSigner) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *SubUnclaimedDraftTemplateSigner) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


