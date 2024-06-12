# ReportCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Report** | Pointer to [**ReportResponse**](ReportResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewReportCreateResponse

`func NewReportCreateResponse() *ReportCreateResponse`

NewReportCreateResponse instantiates a new ReportCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportCreateResponseWithDefaults

`func NewReportCreateResponseWithDefaults() *ReportCreateResponse`

NewReportCreateResponseWithDefaults instantiates a new ReportCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReport

`func (o *ReportCreateResponse) GetReport() ReportResponse`

GetReport returns the Report field if non-nil, zero value otherwise.

### GetReportOk

`func (o *ReportCreateResponse) GetReportOk() (*ReportResponse, bool)`

GetReportOk returns a tuple with the Report field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReport

`func (o *ReportCreateResponse) SetReport(v ReportResponse)`

SetReport sets Report field to given value.

### HasReport

`func (o *ReportCreateResponse) HasReport() bool`

HasReport returns a boolean if a field has been set.

### GetWarnings

`func (o *ReportCreateResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReportCreateResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReportCreateResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReportCreateResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


