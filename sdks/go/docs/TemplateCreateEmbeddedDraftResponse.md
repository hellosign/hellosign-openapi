# TemplateCreateEmbeddedDraftResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Template** | Pointer to [**TemplateCreateEmbeddedDraftResponseTemplate**](TemplateCreateEmbeddedDraftResponseTemplate.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateCreateEmbeddedDraftResponse

`func NewTemplateCreateEmbeddedDraftResponse() *TemplateCreateEmbeddedDraftResponse`

NewTemplateCreateEmbeddedDraftResponse instantiates a new TemplateCreateEmbeddedDraftResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCreateEmbeddedDraftResponseWithDefaults

`func NewTemplateCreateEmbeddedDraftResponseWithDefaults() *TemplateCreateEmbeddedDraftResponse`

NewTemplateCreateEmbeddedDraftResponseWithDefaults instantiates a new TemplateCreateEmbeddedDraftResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplate

`func (o *TemplateCreateEmbeddedDraftResponse) GetTemplate() TemplateCreateEmbeddedDraftResponseTemplate`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *TemplateCreateEmbeddedDraftResponse) GetTemplateOk() (*TemplateCreateEmbeddedDraftResponseTemplate, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *TemplateCreateEmbeddedDraftResponse) SetTemplate(v TemplateCreateEmbeddedDraftResponseTemplate)`

SetTemplate sets Template field to given value.

### HasTemplate

`func (o *TemplateCreateEmbeddedDraftResponse) HasTemplate() bool`

HasTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCreateEmbeddedDraftResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCreateEmbeddedDraftResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCreateEmbeddedDraftResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCreateEmbeddedDraftResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


