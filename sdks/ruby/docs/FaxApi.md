# Dropbox::Sign::FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`fax_delete`](FaxApi.md#fax_delete) | **DELETE** `/fax/{fax_id}` | Delete Fax |
| [`fax_files`](FaxApi.md#fax_files) | **GET** `/fax/files/{fax_id}` | List Fax Files |
| [`fax_get`](FaxApi.md#fax_get) | **GET** `/fax/{fax_id}` | Get Fax |
| [`fax_list`](FaxApi.md#fax_list) | **GET** `/fax/list` | Lists Faxes |
| [`fax_send`](FaxApi.md#fax_send) | **POST** `/fax/send` | Send Fax |


## `fax_delete`

> `fax_delete(fax_id)`

Delete Fax

Deletes the specified Fax from the system.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

begin
  fax_api.fax_delete("fa5c8a0b0f492d768749333ad6fcc214c111e967")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
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

List Fax Files

Returns list of fax files

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

begin
  file_bin = fax_api.fax_files(data)
  FileUtils.cp(file_bin.path, "path/to/file.pdf")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(File, Integer, Hash)> fax_files_with_http_info(fax_id)`

```ruby
begin
  # List Fax Files
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

Returns information about fax

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

fax_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

begin
  result = fax_api.fax_get(fax_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
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

Returns properties of multiple faxes

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

page = 1
page_size = 2

begin
  result = fax_api.fax_list({ page: page, page_size: page_size })
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
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
| `page` | **Integer** | Page | [optional][default to 1] |
| `page_size` | **Integer** | Page size | [optional][default to 20] |

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

Action to prepare and send a fax

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

data = Dropbox::Sign::FaxSendRequest.new
data.files = [File.new("example_signature_request.pdf", "r")]
data.test_mode = true
data.recipient = "16690000001"
data.sender = "16690000000"
data.cover_page_to = "Jill Fax"
data.cover_page_message = "I'm sending you a fax!"
data.cover_page_from = "Faxer Faxerson"
data.title = "This is what the fax is about!"

begin
  result = fax_api.fax_send(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
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

