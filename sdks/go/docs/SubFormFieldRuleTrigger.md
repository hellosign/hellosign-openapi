# SubFormFieldRuleTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Must reference the &#x60;api_id&#x60; of an existing field defined within &#x60;form_fields_per_document&#x60;. Trigger and action fields and groups must belong to the same signer. | 
**Operator** | **string** | Different field types allow different &#x60;operator&#x60; values: - Field type of **text**:   - **is**: exact match   - **not**: not exact match   - **match**: regular expression, without /. Example:     - OK &#x60;[a-zA-Z0-9]&#x60;     - Not OK &#x60;/[a-zA-Z0-9]/&#x60; - Field type of **dropdown**:   - **is**: exact match, single value   - **not**: not exact match, single value   - **any**: exact match, array of values.   - **none**: not exact match, array of values. - Field type of **checkbox**:   - **is**: exact match, single value   - **not**: not exact match, single value - Field type of **radio**:   - **is**: exact match, single value   - **not**: not exact match, single value | 
**Value** | Pointer to **string** | **value** or **values** is required, but not both.  The value to match against **operator**.  - When **operator** is one of the following, **value** must be &#x60;String&#x60;:   - &#x60;is&#x60;   - &#x60;not&#x60;   - &#x60;match&#x60;  Otherwise, - **checkbox**: When **type** of trigger is **checkbox**, **value** must be &#x60;0&#x60; or &#x60;1&#x60; - **radio**: When **type** of trigger is **radio**, **value** must be &#x60;1&#x60; | [optional] 
**Values** | Pointer to **[]string** | **values** or **value** is required, but not both.  The values to match against **operator** when it is one of the following:  - &#x60;any&#x60; - &#x60;none&#x60; | [optional] 

## Methods

### NewSubFormFieldRuleTrigger

`func NewSubFormFieldRuleTrigger(id string, operator string, ) *SubFormFieldRuleTrigger`

NewSubFormFieldRuleTrigger instantiates a new SubFormFieldRuleTrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldRuleTriggerWithDefaults

`func NewSubFormFieldRuleTriggerWithDefaults() *SubFormFieldRuleTrigger`

NewSubFormFieldRuleTriggerWithDefaults instantiates a new SubFormFieldRuleTrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubFormFieldRuleTrigger) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubFormFieldRuleTrigger) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubFormFieldRuleTrigger) SetId(v string)`

SetId sets Id field to given value.


### GetOperator

`func (o *SubFormFieldRuleTrigger) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *SubFormFieldRuleTrigger) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *SubFormFieldRuleTrigger) SetOperator(v string)`

SetOperator sets Operator field to given value.


### GetValue

`func (o *SubFormFieldRuleTrigger) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SubFormFieldRuleTrigger) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SubFormFieldRuleTrigger) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SubFormFieldRuleTrigger) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetValues

`func (o *SubFormFieldRuleTrigger) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *SubFormFieldRuleTrigger) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *SubFormFieldRuleTrigger) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *SubFormFieldRuleTrigger) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


