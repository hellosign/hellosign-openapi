# Dropbox::Sign::FaxLineApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`fax_line_add_user`](FaxLineApi.md#fax_line_add_user) | **PUT** `/fax_line/add_user` | Add Fax Line User |
| [`fax_line_area_code_get`](FaxLineApi.md#fax_line_area_code_get) | **GET** `/fax_line/area_codes` | Get Available Fax Line Area Codes |
| [`fax_line_create`](FaxLineApi.md#fax_line_create) | **POST** `/fax_line/create` | Purchase Fax Line |
| [`fax_line_delete`](FaxLineApi.md#fax_line_delete) | **DELETE** `/fax_line` | Delete Fax Line |
| [`fax_line_get`](FaxLineApi.md#fax_line_get) | **GET** `/fax_line` | Get Fax Line |
| [`fax_line_list`](FaxLineApi.md#fax_line_list) | **GET** `/fax_line/list` | List Fax Lines |
| [`fax_line_remove_user`](FaxLineApi.md#fax_line_remove_user) | **PUT** `/fax_line/remove_user` | Remove Fax Line Access |


## `fax_line_add_user`

> `<FaxLineResponse> fax_line_add_user(fax_line_add_user_request)`

Add Fax Line User

Grants a user access to the specified Fax Line.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineAddUserRequest.new
data.number = "[FAX_NUMBER]"
data.email_address = "member@dropboxsign.com"

begin
  result = fax_line_api.fax_line_add_user(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_add_user_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineResponse>, Integer, Hash)> fax_line_add_user_with_http_info(fax_line_add_user_request)`

```ruby
begin
  # Add Fax Line User
  data, status_code, headers = api_instance.fax_line_add_user_with_http_info(fax_line_add_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_add_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_line_add_user_request` | [**FaxLineAddUserRequest**](FaxLineAddUserRequest.md) |  |  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `fax_line_area_code_get`

> `<FaxLineAreaCodeGetResponse> fax_line_area_code_get(country, opts)`

Get Available Fax Line Area Codes

Returns a response with the area codes available for a given state/provice and city.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

begin
  result = fax_line_api.fax_line_area_code_get("US", "CA")
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_area_code_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineAreaCodeGetResponse>, Integer, Hash)> fax_line_area_code_get_with_http_info(country, opts)`

```ruby
begin
  # Get Available Fax Line Area Codes
  data, status_code, headers = api_instance.fax_line_area_code_get_with_http_info(country, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineAreaCodeGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_area_code_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `country` | **String** | Filter area codes by country. |  |
| `state` | **String** | Filter area codes by state. | [optional] |
| `province` | **String** | Filter area codes by province. | [optional] |
| `city` | **String** | Filter area codes by city. | [optional] |

### Return type

[**FaxLineAreaCodeGetResponse**](FaxLineAreaCodeGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_line_create`

> `<FaxLineResponse> fax_line_create(fax_line_create_request)`

Purchase Fax Line

Purchases a new Fax Line.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineCreateRequest.new
data.area_code = 209
data.country = "US"

begin
  result = fax_line_api.fax_line_create(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_create_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineResponse>, Integer, Hash)> fax_line_create_with_http_info(fax_line_create_request)`

```ruby
begin
  # Purchase Fax Line
  data, status_code, headers = api_instance.fax_line_create_with_http_info(fax_line_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_line_create_request` | [**FaxLineCreateRequest**](FaxLineCreateRequest.md) |  |  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `fax_line_delete`

> `fax_line_delete(fax_line_delete_request)`

Delete Fax Line

Deletes the specified Fax Line from the subscription.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineDeleteRequest.new
data.number = "[FAX_NUMBER]"

begin
  fax_line_api.fax_line_delete(data)
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_delete_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> fax_line_delete_with_http_info(fax_line_delete_request)`

```ruby
begin
  # Delete Fax Line
  data, status_code, headers = api_instance.fax_line_delete_with_http_info(fax_line_delete_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_line_delete_request` | [**FaxLineDeleteRequest**](FaxLineDeleteRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `fax_line_get`

> `<FaxLineResponse> fax_line_get(number)`

Get Fax Line

Returns the properties and settings of a Fax Line.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

begin
  result = fax_line_api.fax_line_get("[NUMBER]")
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineResponse>, Integer, Hash)> fax_line_get_with_http_info(number)`

```ruby
begin
  # Get Fax Line
  data, status_code, headers = api_instance.fax_line_get_with_http_info(number)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `number` | **String** | The Fax Line number. |  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_line_list`

> `<FaxLineListResponse> fax_line_list(opts)`

List Fax Lines

Returns the properties and settings of multiple Fax Lines.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

begin
  result = fax_line_api.fax_line_list()
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_list_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineListResponse>, Integer, Hash)> fax_line_list_with_http_info(opts)`

```ruby
begin
  # List Fax Lines
  data, status_code, headers = api_instance.fax_line_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **String** | Account ID | [optional] |
| `page` | **Integer** | Page | [optional][default to 1] |
| `page_size` | **Integer** | Page size | [optional][default to 20] |
| `show_team_lines` | **Boolean** | Show team lines | [optional] |

### Return type

[**FaxLineListResponse**](FaxLineListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `fax_line_remove_user`

> `<FaxLineResponse> fax_line_remove_user(fax_line_remove_user_request)`

Remove Fax Line Access

Removes a user's access to the specified Fax Line.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineRemoveUserRequest.new
data.number = "[FAX_NUMBER]"
data.email_address = "member@dropboxsign.com"

begin
  result = fax_line_api.fax_line_remove_user(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end

```

#### Using the `fax_line_remove_user_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FaxLineResponse>, Integer, Hash)> fax_line_remove_user_with_http_info(fax_line_remove_user_request)`

```ruby
begin
  # Remove Fax Line Access
  data, status_code, headers = api_instance.fax_line_remove_user_with_http_info(fax_line_remove_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FaxLineResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling FaxLineApi->fax_line_remove_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_line_remove_user_request` | [**FaxLineRemoveUserRequest**](FaxLineRemoveUserRequest.md) |  |  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

