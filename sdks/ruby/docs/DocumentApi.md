# Dropbox::Sign::DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`document_detect_fields`](DocumentApi.md#document_detect_fields) | **POST** `/document/detect_fields` | Detect Document Fields |


## `document_detect_fields`

> `<DocumentFieldDetectionResponse> document_detect_fields(document_field_detection_request)`

Detect Document Fields

Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

document_field_detection_request = Dropbox::Sign::DocumentFieldDetectionRequest.new
document_field_detection_request.detection_mode = "annotations"
document_field_detection_request.file = File.new("./example_document.pdf", "r")
document_field_detection_request.page_range = "all"

begin
  response = Dropbox::Sign::DocumentApi.new.document_detect_fields(
    document_field_detection_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling DocumentApi#document_detect_fields: #{e}"
end

```

#### Using the `document_detect_fields_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<DocumentFieldDetectionResponse>, Integer, Hash)> document_detect_fields_with_http_info(document_field_detection_request)`

```ruby
begin
  # Detect Document Fields
  data, status_code, headers = api_instance.document_detect_fields_with_http_info(document_field_detection_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DocumentFieldDetectionResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling DocumentApi->document_detect_fields_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `document_field_detection_request` | [**DocumentFieldDetectionRequest**](DocumentFieldDetectionRequest.md) |  |  |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

