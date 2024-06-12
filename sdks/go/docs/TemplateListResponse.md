# TemplateListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Templates** | Pointer to [**[]TemplateResponse**](TemplateResponse.md) | List of templates that the API caller has access to. | [optional] 
**ListInfo** | Pointer to [**ListInfoResponse**](ListInfoResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewTemplateListResponse

`func NewTemplateListResponse() *TemplateListResponse`

NewTemplateListResponse instantiates a new TemplateListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateListResponseWithDefaults

`func NewTemplateListResponseWithDefaults() *TemplateListResponse`

NewTemplateListResponseWithDefaults instantiates a new TemplateListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplates

`func (o *TemplateListResponse) GetTemplates() []TemplateResponse`

GetTemplates returns the Templates field if non-nil, zero value otherwise.

### GetTemplatesOk

`func (o *TemplateListResponse) GetTemplatesOk() (*[]TemplateResponse, bool)`

GetTemplatesOk returns a tuple with the Templates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplates

`func (o *TemplateListResponse) SetTemplates(v []TemplateResponse)`

SetTemplates sets Templates field to given value.

### HasTemplates

`func (o *TemplateListResponse) HasTemplates() bool`

HasTemplates returns a boolean if a field has been set.

### GetListInfo

`func (o *TemplateListResponse) GetListInfo() ListInfoResponse`

GetListInfo returns the ListInfo field if non-nil, zero value otherwise.

### GetListInfoOk

`func (o *TemplateListResponse) GetListInfoOk() (*ListInfoResponse, bool)`

GetListInfoOk returns a tuple with the ListInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetListInfo

`func (o *TemplateListResponse) SetListInfo(v ListInfoResponse)`

SetListInfo sets ListInfo field to given value.

### HasListInfo

`func (o *TemplateListResponse) HasListInfo() bool`

HasListInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateListResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateListResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateListResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateListResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


