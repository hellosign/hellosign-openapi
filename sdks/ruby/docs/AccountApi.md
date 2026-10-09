# Dropbox::Sign::AccountApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`account_create`](AccountApi.md#account_create) | **POST** `/account/create` | Create Account |
| [`account_get`](AccountApi.md#account_get) | **GET** `/account` | Get Account |
| [`account_settings_get`](AccountApi.md#account_settings_get) | **GET** `/account/settings` | Get account settings |
| [`account_settings_update`](AccountApi.md#account_settings_update) | **POST** `/account/settings` | Modify account settings |
| [`account_update`](AccountApi.md#account_update) | **PUT** `/account` | Update Account |
| [`account_verify`](AccountApi.md#account_verify) | **POST** `/account/verify` | Verify Account |


## `account_create`

> `<AccountCreateResponse> account_create(account_create_request)`

Create Account

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_create_request = Dropbox::Sign::AccountCreateRequest.new
account_create_request.email_address = "newuser@dropboxsign.com"

begin
  response = Dropbox::Sign::AccountApi.new.account_create(
    account_create_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_create: #{e}"
end

```

#### Using the `account_create_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountCreateResponse>, Integer, Hash)> account_create_with_http_info(account_create_request)`

```ruby
begin
  # Create Account
  data, status_code, headers = api_instance.account_create_with_http_info(account_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_create_request` | [**AccountCreateRequest**](AccountCreateRequest.md) |  |  |

### Return type

[**AccountCreateResponse**](AccountCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `account_get`

> `<AccountGetResponse> account_get(opts)`

Get Account

Returns the properties and settings of your Account.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::AccountApi.new.account_get

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_get: #{e}"
end

```

#### Using the `account_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountGetResponse>, Integer, Hash)> account_get_with_http_info(opts)`

```ruby
begin
  # Get Account
  data, status_code, headers = api_instance.account_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **String** | `account_id` or `email_address` is required. If both are provided, the account id prevails.  The ID of the Account. | [optional] |
| `email_address` | **String** | `account_id` or `email_address` is required, If both are provided, the account id prevails.  The email address of the Account. | [optional] |

### Return type

[**AccountGetResponse**](AccountGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `account_settings_get`

> `<AccountSettingsResponse> account_settings_get(opts)`

Get account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::AccountApi.new.account_settings_get
  company = response.settings.company

  p response
  p({
      account_id: response.account_id,
      company: {
          value: company.value,
          is_inherited: company.is_inherited,
          source: company.source,
          type: company.type,
          writable: company.writable,
          lock: {
              mode: company.lock.mode,
              source: company.lock.source,
          },
      },
      warnings: response.warnings,
  })
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_settings_get: #{e}"
end

```

#### Using the `account_settings_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountSettingsResponse>, Integer, Hash)> account_settings_get_with_http_info(opts)`

```ruby
begin
  # Get account settings
  data, status_code, headers = api_instance.account_settings_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountSettingsResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_settings_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **String** | Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](AccountSettingsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `account_settings_update`

> `<AccountSettingsResponse> account_settings_update(account_settings_update_request, opts)`

Modify account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Examples

```ruby
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_settings_update_request = Dropbox::Sign::AccountSettingsUpdateRequest.new
account_settings_update_request.date_format = Dropbox::Sign::DateFormat::MM_DD_YYYY
account_settings_update_request.required_signature_types = [
    Dropbox::Sign::RequiredSignatureType::DRAW,
    Dropbox::Sign::RequiredSignatureType::TYPE,
]
account_settings_update_request.should_enable_tamper_proof = false
account_settings_update_request.unset = ["company"]

begin
  response = Dropbox::Sign::AccountApi.new.account_settings_update(
    account_settings_update_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_settings_update: #{e}"
end

```

#### Using the `account_settings_update_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountSettingsResponse>, Integer, Hash)> account_settings_update_with_http_info(account_settings_update_request, opts)`

```ruby
begin
  # Modify account settings
  data, status_code, headers = api_instance.account_settings_update_with_http_info(account_settings_update_request, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountSettingsResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_settings_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_settings_update_request` | [**AccountSettingsUpdateRequest**](AccountSettingsUpdateRequest.md) |  |  |
| `account_id` | **String** | Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](AccountSettingsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `account_update`

> `<AccountGetResponse> account_update(account_update_request)`

Update Account

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_update_request = Dropbox::Sign::AccountUpdateRequest.new
account_update_request.callback_url = "https://www.example.com/callback"
account_update_request.locale = "en-US"

begin
  response = Dropbox::Sign::AccountApi.new.account_update(
    account_update_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_update: #{e}"
end

```

#### Using the `account_update_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountGetResponse>, Integer, Hash)> account_update_with_http_info(account_update_request)`

```ruby
begin
  # Update Account
  data, status_code, headers = api_instance.account_update_with_http_info(account_update_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_update_request` | [**AccountUpdateRequest**](AccountUpdateRequest.md) |  |  |

### Return type

[**AccountGetResponse**](AccountGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `account_verify`

> `<AccountVerifyResponse> account_verify(account_verify_request)`

Verify Account

Verifies whether an Dropbox Sign Account exists for the given email address.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_verify_request = Dropbox::Sign::AccountVerifyRequest.new
account_verify_request.email_address = "some_user@dropboxsign.com"

begin
  response = Dropbox::Sign::AccountApi.new.account_verify(
    account_verify_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling AccountApi#account_verify: #{e}"
end

```

#### Using the `account_verify_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<AccountVerifyResponse>, Integer, Hash)> account_verify_with_http_info(account_verify_request)`

```ruby
begin
  # Verify Account
  data, status_code, headers = api_instance.account_verify_with_http_info(account_verify_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <AccountVerifyResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling AccountApi->account_verify_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_verify_request` | [**AccountVerifyRequest**](AccountVerifyRequest.md) |  |  |

### Return type

[**AccountVerifyResponse**](AccountVerifyResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

