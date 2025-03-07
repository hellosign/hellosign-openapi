# Dropbox::Sign::BulkSendJobApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`bulk_send_job_get`](BulkSendJobApi.md#bulk_send_job_get) | **GET** `/bulk_send_job/{bulk_send_job_id}` | Get Bulk Send Job |
| [`bulk_send_job_list`](BulkSendJobApi.md#bulk_send_job_list) | **GET** `/bulk_send_job/list` | List Bulk Send Jobs |


## `bulk_send_job_get`

> `<BulkSendJobGetResponse> bulk_send_job_get(bulk_send_job_id, opts)`

Get Bulk Send Job

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::BulkSendJobApi.new.bulk_send_job_get(
    "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174", # bulk_send_job_id
      {
          page: 1,
          page_size: 20,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling BulkSendJobApi#bulk_send_job_get: #{e}"
end

```

#### Using the `bulk_send_job_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<BulkSendJobGetResponse>, Integer, Hash)> bulk_send_job_get_with_http_info(bulk_send_job_id, opts)`

```ruby
begin
  # Get Bulk Send Job
  data, status_code, headers = api_instance.bulk_send_job_get_with_http_info(bulk_send_job_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BulkSendJobGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling BulkSendJobApi->bulk_send_job_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `bulk_send_job_id` | **String** | The id of the BulkSendJob to retrieve. |  |
| `page` | **Integer** | Which page number of the BulkSendJob list to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **Integer** | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional][default to 20] |

### Return type

[**BulkSendJobGetResponse**](BulkSendJobGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `bulk_send_job_list`

> `<BulkSendJobListResponse> bulk_send_job_list(opts)`

List Bulk Send Jobs

Returns a list of BulkSendJob that you can access.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::BulkSendJobApi.new.bulk_send_job_list(
    {
          page: 1,
          page_size: 20,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling BulkSendJobApi#bulk_send_job_list: #{e}"
end

```

#### Using the `bulk_send_job_list_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<BulkSendJobListResponse>, Integer, Hash)> bulk_send_job_list_with_http_info(opts)`

```ruby
begin
  # List Bulk Send Jobs
  data, status_code, headers = api_instance.bulk_send_job_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BulkSendJobListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling BulkSendJobApi->bulk_send_job_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `page` | **Integer** | Which page number of the BulkSendJob List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **Integer** | Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional][default to 20] |

### Return type

[**BulkSendJobListResponse**](BulkSendJobListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

