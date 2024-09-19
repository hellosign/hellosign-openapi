# Dropbox::Sign::FaxApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`delete_fax`](FaxApi.md#delete_fax) | **DELETE** `/fax/{fax_id}` | Delete Fax |
| [`get_fax_by_id`](FaxApi.md#get_fax_by_id) | **GET** `/fax/{fax_id}` | Get Fax |
| [`get_fax_files`](FaxApi.md#get_fax_files) | **GET** `/fax/files/{fax_id}` | List Fax Files |
| [`list_faxes`](FaxApi.md#list_faxes) | **GET** `/fax/list` | Lists Faxes |
| [`send_fax`](FaxApi.md#send_fax) | **POST** `/fax/send` | Send Fax |


## `delete_fax`

> `delete_fax(fax_id)`

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
  fax_api.delete_fax("[FAX_NUMBER]")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `delete_fax_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> delete_fax_with_http_info(fax_id)`

```ruby
begin
  # Delete Fax
  data, status_code, headers = api_instance.delete_fax_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->delete_fax_with_http_info: #{e}"
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


## `get_fax_by_id`

> `<FaxResponse> get_fax_by_id(fax_id)`

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
  result = fax_api.get_fax_by_id(fax_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `get_fax_by_id_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxResponse>, Integer, Hash)> get_fax_by_id_with_http_info(fax_id)`

```ruby
begin
  # Get Fax
  data, status_code, headers = api_instance.get_fax_by_id_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->get_fax_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **String** | Fax ID |  |

### Return type

[**FaxResponse**](FaxResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `get_fax_files`

> `File get_fax_files(fax_id)`

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
  result = fax_api.get_fax_files(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `get_fax_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(File, Integer, Hash)> get_fax_files_with_http_info(fax_id)`

```ruby
begin
  # List Fax Files
  data, status_code, headers = api_instance.get_fax_files_with_http_info(fax_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->get_fax_files_with_http_info: #{e}"
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


## `list_faxes`

> `<FaxListResponse> list_faxes(page, page_size)`

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
  result = fax_api.list_faxes({ page: page, page_size: page_size })
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `list_faxes_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxListResponse>, Integer, Hash)> list_faxes_with_http_info(page, page_size)`

```ruby
begin
  # Lists Faxes
  data, status_code, headers = api_instance.list_faxes_with_http_info(page, page_size)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->list_faxes_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `page` | **Integer** | Page |  |
| `page_size` | **Integer** | Page size |  |

### Return type

[**FaxListResponse**](FaxListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `send_fax`

> `<FaxResponse> send_fax(fax_send_request)`

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

data = Dropbox::Sign::FaxCreateRequest.new
data.area_code = 209
data.country = "US"

begin
  result = fax_api.fax_create(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `send_fax_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxResponse>, Integer, Hash)> send_fax_with_http_info(fax_send_request)`

```ruby
begin
  # Send Fax
  data, status_code, headers = api_instance.send_fax_with_http_info(fax_send_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxApi->send_fax_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_send_request` | [**FaxSendRequest**](FaxSendRequest.md) |  |  |

### Return type

[**FaxResponse**](FaxResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

