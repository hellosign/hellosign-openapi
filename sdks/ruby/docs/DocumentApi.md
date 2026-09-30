# Dropbox::Sign::DocumentApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`document_detect_fields`](DocumentApi.md#document_detect_fields) | **POST** `/document/detect_fields` | Detect Document Fields |


## `document_detect_fields`

> `<DocumentFieldDetectionResponse> document_detect_fields(detection_mode, opts)`

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

begin
  response = Dropbox::Sign::SignatureRequestApi.new.document_detect_fields(
    "annotations", # detection_mode
      {
          file: File.new("./example_document.pdf", "r"),
          file_url: nil,
          page_range: "all",
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#document_detect_fields: #{e}"
end

```

#### Using the `document_detect_fields_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<DocumentFieldDetectionResponse>, Integer, Hash)> document_detect_fields_with_http_info(detection_mode, opts)`

```ruby
begin
  # Detect Document Fields
  data, status_code, headers = api_instance.document_detect_fields_with_http_info(detection_mode, opts)
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
| `detection_mode` | **String** | The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags. |  |
| `file` | **File** | The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| `file_url` | **String** | The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both. | [optional] |
| `page_range` | **String** | The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`. | [optional] |

### Return type

[**DocumentFieldDetectionResponse**](DocumentFieldDetectionResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

