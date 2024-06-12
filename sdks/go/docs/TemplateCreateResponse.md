# TemplateCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Template** | Pointer to [**TemplateCreateResponseTemplate**](TemplateCreateResponseTemplate.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateCreateResponse

`func NewTemplateCreateResponse() *TemplateCreateResponse`

NewTemplateCreateResponse instantiates a new TemplateCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCreateResponseWithDefaults

`func NewTemplateCreateResponseWithDefaults() *TemplateCreateResponse`

NewTemplateCreateResponseWithDefaults instantiates a new TemplateCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplate

`func (o *TemplateCreateResponse) GetTemplate() TemplateCreateResponseTemplate`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *TemplateCreateResponse) GetTemplateOk() (*TemplateCreateResponseTemplate, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *TemplateCreateResponse) SetTemplate(v TemplateCreateResponseTemplate)`

SetTemplate sets Template field to given value.

### HasTemplate

`func (o *TemplateCreateResponse) HasTemplate() bool`

HasTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCreateResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCreateResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCreateResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCreateResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


