# TemplateUpdateFilesResponseTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | Pointer to **string** | The id of the Template. | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateUpdateFilesResponseTemplate

`func NewTemplateUpdateFilesResponseTemplate() *TemplateUpdateFilesResponseTemplate`

NewTemplateUpdateFilesResponseTemplate instantiates a new TemplateUpdateFilesResponseTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateUpdateFilesResponseTemplateWithDefaults

`func NewTemplateUpdateFilesResponseTemplateWithDefaults() *TemplateUpdateFilesResponseTemplate`

NewTemplateUpdateFilesResponseTemplateWithDefaults instantiates a new TemplateUpdateFilesResponseTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateId

`func (o *TemplateUpdateFilesResponseTemplate) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *TemplateUpdateFilesResponseTemplate) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *TemplateUpdateFilesResponseTemplate) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *TemplateUpdateFilesResponseTemplate) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateUpdateFilesResponseTemplate) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateUpdateFilesResponseTemplate) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateUpdateFilesResponseTemplate) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateUpdateFilesResponseTemplate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


