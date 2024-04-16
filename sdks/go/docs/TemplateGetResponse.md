# TemplateGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Template** | Pointer to [**TemplateResponse**](TemplateResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateGetResponse

`func NewTemplateGetResponse() *TemplateGetResponse`

NewTemplateGetResponse instantiates a new TemplateGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateGetResponseWithDefaults

`func NewTemplateGetResponseWithDefaults() *TemplateGetResponse`

NewTemplateGetResponseWithDefaults instantiates a new TemplateGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplate

`func (o *TemplateGetResponse) GetTemplate() TemplateResponse`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *TemplateGetResponse) GetTemplateOk() (*TemplateResponse, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *TemplateGetResponse) SetTemplate(v TemplateResponse)`

SetTemplate sets Template field to given value.

### HasTemplate

`func (o *TemplateGetResponse) HasTemplate() bool`

HasTemplate returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateGetResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateGetResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateGetResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateGetResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


