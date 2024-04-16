# SubFormFieldRuleAction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FieldId** | Pointer to **string** | **field_id** or **group_id** is required, but not both.  Must reference the &#x60;api_id&#x60; of an existing field defined within &#x60;form_fields_per_document&#x60;.  Cannot use with &#x60;group_id&#x60;. Trigger and action fields must belong to the same signer. | [optional] 
**GroupId** | Pointer to **string** | **group_id** or **field_id** is required, but not both.  Must reference the ID of an existing group defined within &#x60;form_field_groups&#x60;.  Cannot use with &#x60;field_id&#x60;. Trigger and action fields and groups must belong to the same signer. | [optional] 
**Hidden** | **bool** | &#x60;true&#x60; to hide the target field when rule is satisfied, otherwise &#x60;false&#x60;. | 
**Type** | **string** |  | 

## Methods

### NewSubFormFieldRuleAction

`func NewSubFormFieldRuleAction(hidden bool, type_ string, ) *SubFormFieldRuleAction`

NewSubFormFieldRuleAction instantiates a new SubFormFieldRuleAction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldRuleActionWithDefaults

`func NewSubFormFieldRuleActionWithDefaults() *SubFormFieldRuleAction`

NewSubFormFieldRuleActionWithDefaults instantiates a new SubFormFieldRuleAction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFieldId

`func (o *SubFormFieldRuleAction) GetFieldId() string`

GetFieldId returns the FieldId field if non-nil, zero value otherwise.

### GetFieldIdOk

`func (o *SubFormFieldRuleAction) GetFieldIdOk() (*string, bool)`

GetFieldIdOk returns a tuple with the FieldId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldId

`func (o *SubFormFieldRuleAction) SetFieldId(v string)`

SetFieldId sets FieldId field to given value.

### HasFieldId

`func (o *SubFormFieldRuleAction) HasFieldId() bool`

HasFieldId returns a boolean if a field has been set.

### GetGroupId

`func (o *SubFormFieldRuleAction) GetGroupId() string`

GetGroupId returns the GroupId field if non-nil, zero value otherwise.

### GetGroupIdOk

`func (o *SubFormFieldRuleAction) GetGroupIdOk() (*string, bool)`

GetGroupIdOk returns a tuple with the GroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupId

`func (o *SubFormFieldRuleAction) SetGroupId(v string)`

SetGroupId sets GroupId field to given value.

### HasGroupId

`func (o *SubFormFieldRuleAction) HasGroupId() bool`

HasGroupId returns a boolean if a field has been set.

### GetHidden

`func (o *SubFormFieldRuleAction) GetHidden() bool`

GetHidden returns the Hidden field if non-nil, zero value otherwise.

### GetHiddenOk

`func (o *SubFormFieldRuleAction) GetHiddenOk() (*bool, bool)`

GetHiddenOk returns a tuple with the Hidden field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHidden

`func (o *SubFormFieldRuleAction) SetHidden(v bool)`

SetHidden sets Hidden field to given value.


### GetType

`func (o *SubFormFieldRuleAction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldRuleAction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldRuleAction) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


