# Dropbox::Sign::UnclaimedDraftApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`unclaimed_draft_create`](UnclaimedDraftApi.md#unclaimed_draft_create) | **POST** `/unclaimed_draft/create` | Create Unclaimed Draft |
| [`unclaimed_draft_create_embedded`](UnclaimedDraftApi.md#unclaimed_draft_create_embedded) | **POST** `/unclaimed_draft/create_embedded` | Create Embedded Unclaimed Draft |
| [`unclaimed_draft_create_embedded_with_template`](UnclaimedDraftApi.md#unclaimed_draft_create_embedded_with_template) | **POST** `/unclaimed_draft/create_embedded_with_template` | Create Embedded Unclaimed Draft with Template |
| [`unclaimed_draft_edit_and_resend`](UnclaimedDraftApi.md#unclaimed_draft_edit_and_resend) | **POST** `/unclaimed_draft/edit_and_resend/{signature_request_id}` | Edit and Resend Unclaimed Draft |


## `unclaimed_draft_create`

> `<UnclaimedDraftCreateResponse> unclaimed_draft_create(unclaimed_draft_create_request)`

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \"Sign and send\" or the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signers_1 = Dropbox::Sign::SubUnclaimedDraftSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers = [
    signers_1,
]

unclaimed_draft_create_request = Dropbox::Sign::UnclaimedDraftCreateRequest.new
unclaimed_draft_create_request.type = "request_signature"
unclaimed_draft_create_request.test_mode = true
unclaimed_draft_create_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
unclaimed_draft_create_request.signers = signers

begin
  response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create(
    unclaimed_draft_create_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create: #{e}"
end

```

#### Using the `unclaimed_draft_create_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<UnclaimedDraftCreateResponse>, Integer, Hash)> unclaimed_draft_create_with_http_info(unclaimed_draft_create_request)`

```ruby
begin
  # Create Unclaimed Draft
  data, status_code, headers = api_instance.unclaimed_draft_create_with_http_info(unclaimed_draft_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnclaimedDraftCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling UnclaimedDraftApi->unclaimed_draft_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_request` | [**UnclaimedDraftCreateRequest**](UnclaimedDraftCreateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `unclaimed_draft_create_embedded`

> `<UnclaimedDraftCreateResponse> unclaimed_draft_create_embedded(unclaimed_draft_create_embedded_request)`

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

unclaimed_draft_create_embedded_request = Dropbox::Sign::UnclaimedDraftCreateEmbeddedRequest.new
unclaimed_draft_create_embedded_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_create_embedded_request.requester_email_address = "jack@dropboxsign.com"
unclaimed_draft_create_embedded_request.test_mode = true
unclaimed_draft_create_embedded_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]

begin
  response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create_embedded(
    unclaimed_draft_create_embedded_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create_embedded: #{e}"
end

```

#### Using the `unclaimed_draft_create_embedded_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<UnclaimedDraftCreateResponse>, Integer, Hash)> unclaimed_draft_create_embedded_with_http_info(unclaimed_draft_create_embedded_request)`

```ruby
begin
  # Create Embedded Unclaimed Draft
  data, status_code, headers = api_instance.unclaimed_draft_create_embedded_with_http_info(unclaimed_draft_create_embedded_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnclaimedDraftCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling UnclaimedDraftApi->unclaimed_draft_create_embedded_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_embedded_request` | [**UnclaimedDraftCreateEmbeddedRequest**](UnclaimedDraftCreateEmbeddedRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `unclaimed_draft_create_embedded_with_template`

> `<UnclaimedDraftCreateResponse> unclaimed_draft_create_embedded_with_template(unclaimed_draft_create_embedded_with_template_request)`

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@dropboxsign.com"

ccs = [
    ccs_1,
]

signers_1 = Dropbox::Sign::SubUnclaimedDraftTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

unclaimed_draft_create_embedded_with_template_request = Dropbox::Sign::UnclaimedDraftCreateEmbeddedWithTemplateRequest.new
unclaimed_draft_create_embedded_with_template_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_create_embedded_with_template_request.requester_email_address = "jack@dropboxsign.com"
unclaimed_draft_create_embedded_with_template_request.template_ids = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
]
unclaimed_draft_create_embedded_with_template_request.test_mode = false
unclaimed_draft_create_embedded_with_template_request.ccs = ccs
unclaimed_draft_create_embedded_with_template_request.signers = signers

begin
  response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create_embedded_with_template(
    unclaimed_draft_create_embedded_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create_embedded_with_template: #{e}"
end

```

#### Using the `unclaimed_draft_create_embedded_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<UnclaimedDraftCreateResponse>, Integer, Hash)> unclaimed_draft_create_embedded_with_template_with_http_info(unclaimed_draft_create_embedded_with_template_request)`

```ruby
begin
  # Create Embedded Unclaimed Draft with Template
  data, status_code, headers = api_instance.unclaimed_draft_create_embedded_with_template_with_http_info(unclaimed_draft_create_embedded_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnclaimedDraftCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling UnclaimedDraftApi->unclaimed_draft_create_embedded_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_embedded_with_template_request` | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](UnclaimedDraftCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `unclaimed_draft_edit_and_resend`

> `<UnclaimedDraftCreateResponse> unclaimed_draft_edit_and_resend(signature_request_id, unclaimed_draft_edit_and_resend_request)`

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

unclaimed_draft_edit_and_resend_request = Dropbox::Sign::UnclaimedDraftEditAndResendRequest.new
unclaimed_draft_edit_and_resend_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_edit_and_resend_request.test_mode = false

begin
  response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_edit_and_resend(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      unclaimed_draft_edit_and_resend_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_edit_and_resend: #{e}"
end

```

#### Using the `unclaimed_draft_edit_and_resend_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<UnclaimedDraftCreateResponse>, Integer, Hash)> unclaimed_draft_edit_and_resend_with_http_info(signature_request_id, unclaimed_draft_edit_and_resend_request)`

```ruby
begin
  # Edit and Resend Unclaimed Draft
  data, status_code, headers = api_instance.unclaimed_draft_edit_and_resend_with_http_info(signature_request_id, unclaimed_draft_edit_and_resend_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UnclaimedDraftCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling UnclaimedDraftApi->unclaimed_draft_edit_and_resend_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The ID of the signature request to edit and resend. |  |
| `unclaimed_draft_edit_and_resend_request` | [**UnclaimedDraftEditAndResendRequest**](UnclaimedDraftEditAndResendRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

