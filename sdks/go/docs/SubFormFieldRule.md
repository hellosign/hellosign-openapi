# SubFormFieldRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Must be unique across all defined rules. | 
**TriggerOperator** | **string** | Currently only &#x60;AND&#x60; is supported. Support for &#x60;OR&#x60; is being worked on. | [default to "AND"]
**Triggers** | [**[]SubFormFieldRuleTrigger**](SubFormFieldRuleTrigger.md) | An array of trigger definitions, the \&quot;if this\&quot; part of \&quot;**if this**, then that\&quot;. Currently only a single trigger per rule is allowed. | 
**Actions** | [**[]SubFormFieldRuleAction**](SubFormFieldRuleAction.md) | An array of action definitions, the \&quot;then that\&quot; part of \&quot;if this, **then that**\&quot;. Any number of actions may be attached to a single rule. | 

## Methods

### NewSubFormFieldRule

`func NewSubFormFieldRule(id string, triggerOperator string, triggers []SubFormFieldRuleTrigger, actions []SubFormFieldRuleAction, ) *SubFormFieldRule`

NewSubFormFieldRule instantiates a new SubFormFieldRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldRuleWithDefaults

`func NewSubFormFieldRuleWithDefaults() *SubFormFieldRule`

NewSubFormFieldRuleWithDefaults instantiates a new SubFormFieldRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubFormFieldRule) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubFormFieldRule) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubFormFieldRule) SetId(v string)`

SetId sets Id field to given value.


### GetTriggerOperator

`func (o *SubFormFieldRule) GetTriggerOperator() string`

GetTriggerOperator returns the TriggerOperator field if non-nil, zero value otherwise.

### GetTriggerOperatorOk

`func (o *SubFormFieldRule) GetTriggerOperatorOk() (*string, bool)`

GetTriggerOperatorOk returns a tuple with the TriggerOperator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggerOperator

`func (o *SubFormFieldRule) SetTriggerOperator(v string)`

SetTriggerOperator sets TriggerOperator field to given value.


### GetTriggers

`func (o *SubFormFieldRule) GetTriggers() []SubFormFieldRuleTrigger`

GetTriggers returns the Triggers field if non-nil, zero value otherwise.

### GetTriggersOk

`func (o *SubFormFieldRule) GetTriggersOk() (*[]SubFormFieldRuleTrigger, bool)`

GetTriggersOk returns a tuple with the Triggers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTriggers

`func (o *SubFormFieldRule) SetTriggers(v []SubFormFieldRuleTrigger)`

SetTriggers sets Triggers field to given value.


### GetActions

`func (o *SubFormFieldRule) GetActions() []SubFormFieldRuleAction`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *SubFormFieldRule) GetActionsOk() (*[]SubFormFieldRuleAction, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *SubFormFieldRule) SetActions(v []SubFormFieldRuleAction)`

SetActions sets Actions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


