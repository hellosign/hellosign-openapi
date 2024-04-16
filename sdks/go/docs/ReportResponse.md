# ReportResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **string** | A message indicating the requested operation&#39;s success | [optional] 
**StartDate** | Pointer to **string** | The (inclusive) start date for the report data in MM/DD/YYYY format. | [optional] 
**EndDate** | Pointer to **string** | The (inclusive) end date for the report data in MM/DD/YYYY format. | [optional] 
**ReportType** | Pointer to **[]string** | The type(s) of the report you are requesting. Allowed values are \&quot;user_activity\&quot; and \&quot;document_status\&quot;. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status). | [optional] 

## Methods

### NewReportResponse

`func NewReportResponse() *ReportResponse`

NewReportResponse instantiates a new ReportResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportResponseWithDefaults

`func NewReportResponseWithDefaults() *ReportResponse`

NewReportResponseWithDefaults instantiates a new ReportResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ReportResponse) GetSuccess() string`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ReportResponse) GetSuccessOk() (*string, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ReportResponse) SetSuccess(v string)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ReportResponse) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetStartDate

`func (o *ReportResponse) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ReportResponse) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ReportResponse) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ReportResponse) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ReportResponse) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReportResponse) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReportResponse) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ReportResponse) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetReportType

`func (o *ReportResponse) GetReportType() []string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *ReportResponse) GetReportTypeOk() (*[]string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *ReportResponse) SetReportType(v []string)`

SetReportType sets ReportType field to given value.

### HasReportType

`func (o *ReportResponse) HasReportType() bool`

HasReportType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


