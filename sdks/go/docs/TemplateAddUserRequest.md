# TemplateAddUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The id of the Account to give access to the Template. &lt;b&gt;Note&lt;/b&gt; The account id prevails if email address is also provided. | [optional] 
**EmailAddress** | Pointer to **string** | The email address of the Account to give access to the Template. &lt;b&gt;Note&lt;/b&gt; The account id prevails if it is also provided. | [optional] 
**SkipNotification** | Pointer to **bool** | If set to &#x60;true&#x60;, the user does not receive an email notification when a template has been shared with them. Defaults to &#x60;false&#x60;. | [optional] [default to false]

## Methods

### NewTemplateAddUserRequest

`func NewTemplateAddUserRequest() *TemplateAddUserRequest`

NewTemplateAddUserRequest instantiates a new TemplateAddUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateAddUserRequestWithDefaults

`func NewTemplateAddUserRequestWithDefaults() *TemplateAddUserRequest`

NewTemplateAddUserRequestWithDefaults instantiates a new TemplateAddUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *TemplateAddUserRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *TemplateAddUserRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *TemplateAddUserRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *TemplateAddUserRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetEmailAddress

`func (o *TemplateAddUserRequest) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *TemplateAddUserRequest) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *TemplateAddUserRequest) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *TemplateAddUserRequest) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetSkipNotification

`func (o *TemplateAddUserRequest) GetSkipNotification() bool`

GetSkipNotification returns the SkipNotification field if non-nil, zero value otherwise.

### GetSkipNotificationOk

`func (o *TemplateAddUserRequest) GetSkipNotificationOk() (*bool, bool)`

GetSkipNotificationOk returns a tuple with the SkipNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipNotification

`func (o *TemplateAddUserRequest) SetSkipNotification(v bool)`

SetSkipNotification sets SkipNotification field to given value.

### HasSkipNotification

`func (o *TemplateAddUserRequest) HasSkipNotification() bool`

HasSkipNotification returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


