# ReportCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndDate** | **string** | The (inclusive) end date for the report data in &#x60;MM/DD/YYYY&#x60; format. | 
**ReportType** | **[]string** | The type(s) of the report you are requesting. Allowed values are &#x60;user_activity&#x60; and &#x60;document_status&#x60;. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status). | 
**StartDate** | **string** | The (inclusive) start date for the report data in &#x60;MM/DD/YYYY&#x60; format. | 

## Methods

### NewReportCreateRequest

`func NewReportCreateRequest(endDate string, reportType []string, startDate string, ) *ReportCreateRequest`

NewReportCreateRequest instantiates a new ReportCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportCreateRequestWithDefaults

`func NewReportCreateRequestWithDefaults() *ReportCreateRequest`

NewReportCreateRequestWithDefaults instantiates a new ReportCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndDate

`func (o *ReportCreateRequest) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReportCreateRequest) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReportCreateRequest) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.


### GetReportType

`func (o *ReportCreateRequest) GetReportType() []string`

GetReportType returns the ReportType field if non-nil, zero value otherwise.

### GetReportTypeOk

`func (o *ReportCreateRequest) GetReportTypeOk() (*[]string, bool)`

GetReportTypeOk returns a tuple with the ReportType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportType

`func (o *ReportCreateRequest) SetReportType(v []string)`

SetReportType sets ReportType field to given value.


### GetStartDate

`func (o *ReportCreateRequest) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ReportCreateRequest) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ReportCreateRequest) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


