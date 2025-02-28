# Dropbox::Sign::FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`fax_delete`](FaxApi.md#fax_delete) | **DELETE** `/fax/{fax_id}` | Delete Fax |
| [`fax_files`](FaxApi.md#fax_files) | **GET** `/fax/files/{fax_id}` | Download Fax Files |
| [`fax_get`](FaxApi.md#fax_get) | **GET** `/fax/{fax_id}` | Get Fax |
| [`fax_list`](FaxApi.md#fax_list) | **GET** `/fax/list` | Lists Faxes |
| [`fax_send`](FaxApi.md#fax_send) | **POST** `/fax/send` | Send Fax |


## `fax_delete`

> `fax_delete(fax_id)`

Delete Fax

Deletes the specified Fax from the system

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

begin
  Dropbox::Sign::FaxApi.new.fax_delete(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # fax_id
  )
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling FaxApi#fax_delete: #{e}"
end

```

#### Using the `fax_delete_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> fax_delete_with_http_info(fax_id)`

```ruby
begin
  # Delete Fax
  data, status_code, headers = api_instance.fax_delete_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->fax_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **String** | Fax ID |  |

### Return type

nil (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_files`

> `File fax_files(fax_id)`

Download Fax Files

Downloads files associated with a Fax

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

begin
  response = Dropbox::Sign::FaxApi.new.fax_files(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # fax_id
  )

  FileUtils.cp(response.path, "./file_response")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling FaxApi#fax_files: #{e}"
end

```

#### Using the `fax_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(File, Integer, Hash)> fax_files_with_http_info(fax_id)`

```ruby
begin
  # Download Fax Files
  data, status_code, headers = api_instance.fax_files_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->fax_files_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **String** | Fax ID |  |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json


## `fax_get`

> `<FaxGetResponse> fax_get(fax_id)`

Get Fax

Returns information about a Fax

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

begin
  response = Dropbox::Sign::FaxApi.new.fax_get(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # fax_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling FaxApi#fax_get: #{e}"
end

```

#### Using the `fax_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxGetResponse>, Integer, Hash)> fax_get_with_http_info(fax_id)`

```ruby
begin
  # Get Fax
  data, status_code, headers = api_instance.fax_get_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->fax_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **String** | Fax ID |  |

### Return type

[**FaxGetResponse**](FaxGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_list`

> `<FaxListResponse> fax_list(opts)`

Lists Faxes

Returns properties of multiple Faxes

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

begin
  response = Dropbox::Sign::FaxApi.new.fax_list(
    {
          page: 1,
          page_size: 20,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling FaxApi#fax_list: #{e}"
end

```

#### Using the `fax_list_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxListResponse>, Integer, Hash)> fax_list_with_http_info(opts)`

```ruby
begin
  # Lists Faxes
  data, status_code, headers = api_instance.fax_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->fax_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `page` | **Integer** | Which page number of the Fax List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **Integer** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |

### Return type

[**FaxListResponse**](FaxListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_send`

> `<FaxGetResponse> fax_send(fax_send_request)`

Send Fax

Creates and sends a new Fax with the submitted file(s)

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

fax_send_request = Dropbox::Sign::FaxSendRequest.new
fax_send_request.recipient = "16690000001"
fax_send_request.sender = "16690000000"
fax_send_request.test_mode = true
fax_send_request.cover_page_to = "Jill Fax"
fax_send_request.cover_page_from = "Faxer Faxerson"
fax_send_request.cover_page_message = "I'm sending you a fax!"
fax_send_request.title = "This is what the fax is about!"
fax_send_request.files = [
    File.new("./example_fax.pdf", "r"),
]

begin
  response = Dropbox::Sign::FaxApi.new.fax_send(
    fax_send_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling FaxApi#fax_send: #{e}"
end

```

#### Using the `fax_send_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxGetResponse>, Integer, Hash)> fax_send_with_http_info(fax_send_request)`

```ruby
begin
  # Send Fax
  data, status_code, headers = api_instance.fax_send_with_http_info(fax_send_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->fax_send_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_send_request` | [**FaxSendRequest**](FaxSendRequest.md) |  |  |

### Return type

[**FaxGetResponse**](FaxGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

