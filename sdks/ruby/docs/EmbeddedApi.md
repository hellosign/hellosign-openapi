# Dropbox::Sign::EmbeddedApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`embedded_edit_url`](EmbeddedApi.md#embedded_edit_url) | **POST** `/embedded/edit_url/{template_id}` | Get Embedded Template Edit URL |
| [`embedded_sign_url`](EmbeddedApi.md#embedded_sign_url) | **GET** `/embedded/sign_url/{signature_id}` | Get Embedded Sign URL |


## `embedded_edit_url`

> `<EmbeddedEditUrlResponse> embedded_edit_url(template_id, embedded_edit_url_request)`

Get Embedded Template Edit URL

Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

merge_fields = [
]

embedded_edit_url_request = Dropbox::Sign::EmbeddedEditUrlRequest.new
embedded_edit_url_request.cc_roles = [
    "",
]
embedded_edit_url_request.merge_fields = merge_fields

begin
  response = Dropbox::Sign::EmbeddedApi.new.embedded_edit_url(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
      embedded_edit_url_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling EmbeddedApi#embedded_edit_url: #{e}"
end

```

#### Using the `embedded_edit_url_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<EmbeddedEditUrlResponse>, Integer, Hash)> embedded_edit_url_with_http_info(template_id, embedded_edit_url_request)`

```ruby
begin
  # Get Embedded Template Edit URL
  data, status_code, headers = api_instance.embedded_edit_url_with_http_info(template_id, embedded_edit_url_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EmbeddedEditUrlResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling EmbeddedApi->embedded_edit_url_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the template to edit. |  |
| `embedded_edit_url_request` | [**EmbeddedEditUrlRequest**](EmbeddedEditUrlRequest.md) |  |  |

### Return type

[**EmbeddedEditUrlResponse**](EmbeddedEditUrlResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `embedded_sign_url`

> `<EmbeddedSignUrlResponse> embedded_sign_url(signature_id)`

Get Embedded Sign URL

Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::EmbeddedApi.new.embedded_sign_url(
    "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b", # signature_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling EmbeddedApi#embedded_sign_url: #{e}"
end

```

#### Using the `embedded_sign_url_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<EmbeddedSignUrlResponse>, Integer, Hash)> embedded_sign_url_with_http_info(signature_id)`

```ruby
begin
  # Get Embedded Sign URL
  data, status_code, headers = api_instance.embedded_sign_url_with_http_info(signature_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EmbeddedSignUrlResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling EmbeddedApi->embedded_sign_url_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_id` | **String** | The id of the signature to get a signature url for. |  |

### Return type

[**EmbeddedSignUrlResponse**](EmbeddedSignUrlResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

