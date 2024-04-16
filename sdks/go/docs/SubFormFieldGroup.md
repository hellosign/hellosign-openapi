# SubFormFieldGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupId** | **string** | ID of group. Use this to reference a specific group from the &#x60;group&#x60; value in &#x60;form_fields_per_document&#x60;. | 
**GroupLabel** | **string** | Name of the group | 
**Requirement** | **string** | Examples: &#x60;require_0-1&#x60; &#x60;require_1&#x60; &#x60;require_1-ormore&#x60;  - Check out the list of [acceptable &#x60;requirement&#x60; checkbox type values](/api/reference/constants/#checkbox-field-grouping). - Check out the list of [acceptable &#x60;requirement&#x60; radio type fields](/api/reference/constants/#radio-field-grouping). - Radio groups require **at least** two fields per group. | 

## Methods

### NewSubFormFieldGroup

`func NewSubFormFieldGroup(groupId string, groupLabel string, requirement string, ) *SubFormFieldGroup`

NewSubFormFieldGroup instantiates a new SubFormFieldGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldGroupWithDefaults

`func NewSubFormFieldGroupWithDefaults() *SubFormFieldGroup`

NewSubFormFieldGroupWithDefaults instantiates a new SubFormFieldGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupId

`func (o *SubFormFieldGroup) GetGroupId() string`

GetGroupId returns the GroupId field if non-nil, zero value otherwise.

### GetGroupIdOk

`func (o *SubFormFieldGroup) GetGroupIdOk() (*string, bool)`

GetGroupIdOk returns a tuple with the GroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupId

`func (o *SubFormFieldGroup) SetGroupId(v string)`

SetGroupId sets GroupId field to given value.


### GetGroupLabel

`func (o *SubFormFieldGroup) GetGroupLabel() string`

GetGroupLabel returns the GroupLabel field if non-nil, zero value otherwise.

### GetGroupLabelOk

`func (o *SubFormFieldGroup) GetGroupLabelOk() (*string, bool)`

GetGroupLabelOk returns a tuple with the GroupLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupLabel

`func (o *SubFormFieldGroup) SetGroupLabel(v string)`

SetGroupLabel sets GroupLabel field to given value.


### GetRequirement

`func (o *SubFormFieldGroup) GetRequirement() string`

GetRequirement returns the Requirement field if non-nil, zero value otherwise.

### GetRequirementOk

`func (o *SubFormFieldGroup) GetRequirementOk() (*string, bool)`

GetRequirementOk returns a tuple with the Requirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequirement

`func (o *SubFormFieldGroup) SetRequirement(v string)`

SetRequirement sets Requirement field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


