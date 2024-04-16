# TemplateRemoveUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The id or email address of the Account to remove access to the Template. The account id prevails if both are provided. | [optional] 
**EmailAddress** | Pointer to **string** | The id or email address of the Account to remove access to the Template. The account id prevails if both are provided. | [optional] 

## Methods

### NewTemplateRemoveUserRequest

`func NewTemplateRemoveUserRequest() *TemplateRemoveUserRequest`

NewTemplateRemoveUserRequest instantiates a new TemplateRemoveUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRemoveUserRequestWithDefaults

`func NewTemplateRemoveUserRequestWithDefaults() *TemplateRemoveUserRequest`

NewTemplateRemoveUserRequestWithDefaults instantiates a new TemplateRemoveUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TemplateRemoveUserRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TemplateRemoveUserRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TemplateRemoveUserRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TemplateRemoveUserRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TemplateRemoveUserRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TemplateRemoveUserRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TemplateRemoveUserRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TemplateRemoveUserRequest) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


