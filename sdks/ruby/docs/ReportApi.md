# Dropbox::Sign::ReportApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`report_create`](ReportApi.md#report_create) | **POST** `/report/create` | Create Report |


## `report_create`

> `<ReportCreateResponse> report_create(report_create_request)`

Create Report

Request the creation of one or more report(s).  When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

report_create_request = Dropbox::Sign::ReportCreateRequest.new
report_create_request.start_date = "09/01/2020"
report_create_request.end_date = "09/01/2020"
report_create_request.report_type = [
    "user_activity",
    "document_status",
]

begin
  response = Dropbox::Sign::ReportApi.new.report_create(
    report_create_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling ReportApi#report_create: #{e}"
end

```

#### Using the `report_create_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<ReportCreateResponse>, Integer, Hash)> report_create_with_http_info(report_create_request)`

```ruby
begin
  # Create Report
  data, status_code, headers = api_instance.report_create_with_http_info(report_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReportCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling ReportApi->report_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `report_create_request` | [**ReportCreateRequest**](ReportCreateRequest.md) |  |  |

### Return type

[**ReportCreateResponse**](ReportCreateResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

