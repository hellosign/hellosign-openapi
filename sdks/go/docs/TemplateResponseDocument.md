# TemplateResponseDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the associated file. | [optional] 
**Index** | Pointer to **int32** | Document ordering, the lowest index is displayed first and the highest last (0-based indexing). | [optional] 
**FieldGroups** | Pointer to [**[]TemplateResponseDocumentFieldGroup**](TemplateResponseDocumentFieldGroup.md) | An array of Form Field Group objects. | [optional] 
**FormFields** | Pointer to [**[]TemplateResponseDocumentFormFieldBase**](TemplateResponseDocumentFormFieldBase.md) | An array of Form Field objects containing the name and type of each named field. | [optional] 
**CustomFields** | Pointer to [**[]TemplateResponseDocumentCustomFieldBase**](TemplateResponseDocumentCustomFieldBase.md) | An array of Form Field objects containing the name and type of each named field. | [optional] 
**StaticFields** | Pointer to [**[]TemplateResponseDocumentStaticFieldBase**](TemplateResponseDocumentStaticFieldBase.md) | An array describing static overlay fields. **Note** only available for certain subscriptions. | [optional] 

## Methods

### NewTemplateResponseDocument

`func NewTemplateResponseDocument() *TemplateResponseDocument`

NewTemplateResponseDocument instantiates a new TemplateResponseDocument object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseDocumentWithDefaults

`func NewTemplateResponseDocumentWithDefaults() *TemplateResponseDocument`

NewTemplateResponseDocumentWithDefaults instantiates a new TemplateResponseDocument object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TemplateResponseDocument) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateResponseDocument) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateResponseDocument) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateResponseDocument) HasName() bool`

HasName returns a boolean if a field has been set.

### GetIndex

`func (o *TemplateResponseDocument) GetIndex() int32`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *TemplateResponseDocument) GetIndexOk() (*int32, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *TemplateResponseDocument) SetIndex(v int32)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *TemplateResponseDocument) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetFieldGroups

`func (o *TemplateResponseDocument) GetFieldGroups() []TemplateResponseDocumentFieldGroup`

GetFieldGroups returns the FieldGroups field if non-nil, zero value otherwise.

### GetFieldGroupsOk

`func (o *TemplateResponseDocument) GetFieldGroupsOk() (*[]TemplateResponseDocumentFieldGroup, bool)`

GetFieldGroupsOk returns a tuple with the FieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldGroups

`func (o *TemplateResponseDocument) SetFieldGroups(v []TemplateResponseDocumentFieldGroup)`

SetFieldGroups sets FieldGroups field to given value.

### HasFieldGroups

`func (o *TemplateResponseDocument) HasFieldGroups() bool`

HasFieldGroups returns a boolean if a field has been set.

### GetFormFields

`func (o *TemplateResponseDocument) GetFormFields() []TemplateResponseDocumentFormFieldBase`

GetFormFields returns the FormFields field if non-nil, zero value otherwise.

### GetFormFieldsOk

`func (o *TemplateResponseDocument) GetFormFieldsOk() (*[]TemplateResponseDocumentFormFieldBase, bool)`

GetFormFieldsOk returns a tuple with the FormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFields

`func (o *TemplateResponseDocument) SetFormFields(v []TemplateResponseDocumentFormFieldBase)`

SetFormFields sets FormFields field to given value.

### HasFormFields

`func (o *TemplateResponseDocument) HasFormFields() bool`

HasFormFields returns a boolean if a field has been set.

### GetCustomFields

`func (o *TemplateResponseDocument) GetCustomFields() []TemplateResponseDocumentCustomFieldBase`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateResponseDocument) GetCustomFieldsOk() (*[]TemplateResponseDocumentCustomFieldBase, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateResponseDocument) SetCustomFields(v []TemplateResponseDocumentCustomFieldBase)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateResponseDocument) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetStaticFields

`func (o *TemplateResponseDocument) GetStaticFields() []TemplateResponseDocumentStaticFieldBase`

GetStaticFields returns the StaticFields field if non-nil, zero value otherwise.

### GetStaticFieldsOk

`func (o *TemplateResponseDocument) GetStaticFieldsOk() (*[]TemplateResponseDocumentStaticFieldBase, bool)`

GetStaticFieldsOk returns a tuple with the StaticFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticFields

`func (o *TemplateResponseDocument) SetStaticFields(v []TemplateResponseDocumentStaticFieldBase)`

SetStaticFields sets StaticFields field to given value.

### HasStaticFields

`func (o *TemplateResponseDocument) HasStaticFields() bool`

HasStaticFields returns a boolean if a field has been set.

### SetStaticFieldsNil

`func (o *TemplateResponseDocument) SetStaticFieldsNil(b bool)`

 SetStaticFieldsNil sets the value for StaticFields to be an explicit nil

### UnsetStaticFields
`func (o *TemplateResponseDocument) UnsetStaticFields()`

UnsetStaticFields ensures that no value is present for StaticFields, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


