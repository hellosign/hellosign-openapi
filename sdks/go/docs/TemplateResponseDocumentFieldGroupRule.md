# TemplateResponseDocumentFieldGroupRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requirement** | Pointer to **string** | Examples: &#x60;require_0-1&#x60; &#x60;require_1&#x60; &#x60;require_1-ormore&#x60;  - Check out the list of [acceptable &#x60;requirement&#x60; checkbox type values](/api/reference/constants/#checkbox-field-grouping). - Check out the list of [acceptable &#x60;requirement&#x60; radio type fields](/api/reference/constants/#radio-field-grouping). - Radio groups require **at least** two fields per group. | [optional] 
**GroupLabel** | Pointer to **string** | Name of the group | [optional] 

## Methods

### NewTemplateResponseDocumentFieldGroupRule

`func NewTemplateResponseDocumentFieldGroupRule() *TemplateResponseDocumentFieldGroupRule`

NewTemplateResponseDocumentFieldGroupRule instantiates a new TemplateResponseDocumentFieldGroupRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentFieldGroupRuleWithDefaults

`func NewTemplateResponseDocumentFieldGroupRuleWithDefaults() *TemplateResponseDocumentFieldGroupRule`

NewTemplateResponseDocumentFieldGroupRuleWithDefaults instantiates a new TemplateResponseDocumentFieldGroupRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequirement

`func (o *TemplateResponseDocumentFieldGroupRule) GetRequirement() string`

GetRequirement returns the Requirement field if non-nil, zero value otherwise.

### GetRequirementOk

`func (o *TemplateResponseDocumentFieldGroupRule) GetRequirementOk() (*string, bool)`

GetRequirementOk returns a tuple with the Requirement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequirement

`func (o *TemplateResponseDocumentFieldGroupRule) SetRequirement(v string)`

SetRequirement sets Requirement field to given value.

### HasRequirement

`func (o *TemplateResponseDocumentFieldGroupRule) HasRequirement() bool`

HasRequirement returns a boolean if a field has been set.

### GetGroupLabel

`func (o *TemplateResponseDocumentFieldGroupRule) GetGroupLabel() string`

GetGroupLabel returns the GroupLabel field if non-nil, zero value otherwise.

### GetGroupLabelOk

`func (o *TemplateResponseDocumentFieldGroupRule) GetGroupLabelOk() (*string, bool)`

GetGroupLabelOk returns a tuple with the GroupLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupLabel

`func (o *TemplateResponseDocumentFieldGroupRule) SetGroupLabel(v string)`

SetGroupLabel sets GroupLabel field to given value.

### HasGroupLabel

`func (o *TemplateResponseDocumentFieldGroupRule) HasGroupLabel() bool`

HasGroupLabel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


