# TemplateCreateEmbeddedDraftResponseTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | Pointer to **string** | The id of the Template. | [optional] 
**EditUrl** | Pointer to **string** | Link to edit the template. | [optional] 
**ExpiresAt** | Pointer to **int32** | When the link expires. | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateCreateEmbeddedDraftResponseTemplate

`func NewTemplateCreateEmbeddedDraftResponseTemplate() *TemplateCreateEmbeddedDraftResponseTemplate`

NewTemplateCreateEmbeddedDraftResponseTemplate instantiates a new TemplateCreateEmbeddedDraftResponseTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCreateEmbeddedDraftResponseTemplateWithDefaults

`func NewTemplateCreateEmbeddedDraftResponseTemplateWithDefaults() *TemplateCreateEmbeddedDraftResponseTemplate`

NewTemplateCreateEmbeddedDraftResponseTemplateWithDefaults instantiates a new TemplateCreateEmbeddedDraftResponseTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateId

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetEditUrl

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetEditUrl() string`

GetEditUrl returns the EditUrl field if non-nil, zero value otherwise.

### GetEditUrlOk

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetEditUrlOk() (*string, bool)`

GetEditUrlOk returns a tuple with the EditUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditUrl

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) SetEditUrl(v string)`

SetEditUrl sets EditUrl field to given value.

### HasEditUrl

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) HasEditUrl() bool`

HasEditUrl returns a boolean if a field has been set.

### GetExpiresAt

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCreateEmbeddedDraftResponseTemplate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


