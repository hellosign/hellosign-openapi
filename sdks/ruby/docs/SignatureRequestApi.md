# Dropbox::Sign::SignatureRequestApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`signature_request_bulk_create_embedded_with_template`](SignatureRequestApi.md#signature_request_bulk_create_embedded_with_template) | **POST** `/signature_request/bulk_create_embedded_with_template` | Embedded Bulk Send with Template |
| [`signature_request_bulk_send_with_template`](SignatureRequestApi.md#signature_request_bulk_send_with_template) | **POST** `/signature_request/bulk_send_with_template` | Bulk Send with Template |
| [`signature_request_cancel`](SignatureRequestApi.md#signature_request_cancel) | **POST** `/signature_request/cancel/{signature_request_id}` | Cancel Incomplete Signature Request |
| [`signature_request_create_embedded`](SignatureRequestApi.md#signature_request_create_embedded) | **POST** `/signature_request/create_embedded` | Create Embedded Signature Request |
| [`signature_request_create_embedded_with_template`](SignatureRequestApi.md#signature_request_create_embedded_with_template) | **POST** `/signature_request/create_embedded_with_template` | Create Embedded Signature Request with Template |
| [`signature_request_edit`](SignatureRequestApi.md#signature_request_edit) | **PUT** `/signature_request/edit/{signature_request_id}` | Edit Signature Request |
| [`signature_request_edit_embedded`](SignatureRequestApi.md#signature_request_edit_embedded) | **PUT** `/signature_request/edit_embedded/{signature_request_id}` | Edit Embedded Signature Request |
| [`signature_request_edit_embedded_with_template`](SignatureRequestApi.md#signature_request_edit_embedded_with_template) | **PUT** `/signature_request/edit_embedded_with_template/{signature_request_id}` | Edit Embedded Signature Request with Template |
| [`signature_request_edit_with_template`](SignatureRequestApi.md#signature_request_edit_with_template) | **PUT** `/signature_request/edit_with_template/{signature_request_id}` | Edit Signature Request With Template |
| [`signature_request_files`](SignatureRequestApi.md#signature_request_files) | **GET** `/signature_request/files/{signature_request_id}` | Download Files |
| [`signature_request_files_as_data_uri`](SignatureRequestApi.md#signature_request_files_as_data_uri) | **GET** `/signature_request/files_as_data_uri/{signature_request_id}` | Download Files as Data Uri |
| [`signature_request_files_as_file_url`](SignatureRequestApi.md#signature_request_files_as_file_url) | **GET** `/signature_request/files_as_file_url/{signature_request_id}` | Download Files as File Url |
| [`signature_request_get`](SignatureRequestApi.md#signature_request_get) | **GET** `/signature_request/{signature_request_id}` | Get Signature Request |
| [`signature_request_list`](SignatureRequestApi.md#signature_request_list) | **GET** `/signature_request/list` | List Signature Requests |
| [`signature_request_release_hold`](SignatureRequestApi.md#signature_request_release_hold) | **POST** `/signature_request/release_hold/{signature_request_id}` | Release On-Hold Signature Request |
| [`signature_request_remind`](SignatureRequestApi.md#signature_request_remind) | **POST** `/signature_request/remind/{signature_request_id}` | Send Request Reminder |
| [`signature_request_remove`](SignatureRequestApi.md#signature_request_remove) | **POST** `/signature_request/remove/{signature_request_id}` | Remove Signature Request Access |
| [`signature_request_send`](SignatureRequestApi.md#signature_request_send) | **POST** `/signature_request/send` | Send Signature Request |
| [`signature_request_send_with_template`](SignatureRequestApi.md#signature_request_send_with_template) | **POST** `/signature_request/send_with_template` | Send with Template |
| [`signature_request_update`](SignatureRequestApi.md#signature_request_update) | **POST** `/signature_request/update/{signature_request_id}` | Update Signature Request |


## `signature_request_bulk_create_embedded_with_template`

> `<BulkSendJobSendResponse> signature_request_bulk_create_embedded_with_template(signature_request_bulk_create_embedded_with_template_request)`

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Only available for Standard plan and higher.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

signer_list_2_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_2_custom_fields_1.name = "company"
signer_list_2_custom_fields_1.value = "123 LLC"

signer_list_2_custom_fields = [
    signer_list_2_custom_fields_1,
]

signer_list_2_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_2_signers_1.role = "Client"
signer_list_2_signers_1.name = "Mary"
signer_list_2_signers_1.email_address = "mary@example.com"
signer_list_2_signers_1.pin = "gd9as5b"

signer_list_2_signers = [
    signer_list_2_signers_1,
]

signer_list_1_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_1_custom_fields_1.name = "company"
signer_list_1_custom_fields_1.value = "ABC Corp"

signer_list_1_custom_fields = [
    signer_list_1_custom_fields_1,
]

signer_list_1_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_1_signers_1.role = "Client"
signer_list_1_signers_1.name = "George"
signer_list_1_signers_1.email_address = "george@example.com"
signer_list_1_signers_1.pin = "d79a3td"

signer_list_1_signers = [
    signer_list_1_signers_1,
]

signer_list_1 = Dropbox::Sign::SubBulkSignerList.new
signer_list_1.custom_fields = signer_list_1_custom_fields
signer_list_1.signers = signer_list_1_signers

signer_list_2 = Dropbox::Sign::SubBulkSignerList.new
signer_list_2.custom_fields = signer_list_2_custom_fields
signer_list_2.signers = signer_list_2_signers

signer_list = [
    signer_list_1,
    signer_list_2,
]

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

signature_request_bulk_create_embedded_with_template_request = Dropbox::Sign::SignatureRequestBulkCreateEmbeddedWithTemplateRequest.new
signature_request_bulk_create_embedded_with_template_request.client_id = "1a659d9ad95bccd307ecad78d72192f8"
signature_request_bulk_create_embedded_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_bulk_create_embedded_with_template_request.message = "Glad we could come to an agreement."
signature_request_bulk_create_embedded_with_template_request.subject = "Purchase Order"
signature_request_bulk_create_embedded_with_template_request.test_mode = true
signature_request_bulk_create_embedded_with_template_request.signer_list = signer_list
signature_request_bulk_create_embedded_with_template_request.ccs = ccs

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_bulk_create_embedded_with_template(
    signature_request_bulk_create_embedded_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_bulk_create_embedded_with_template: #{e}"
end

```

#### Using the `signature_request_bulk_create_embedded_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<BulkSendJobSendResponse>, Integer, Hash)> signature_request_bulk_create_embedded_with_template_with_http_info(signature_request_bulk_create_embedded_with_template_request)`

```ruby
begin
  # Embedded Bulk Send with Template
  data, status_code, headers = api_instance.signature_request_bulk_create_embedded_with_template_with_http_info(signature_request_bulk_create_embedded_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BulkSendJobSendResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_bulk_create_embedded_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_create_embedded_with_template_request` | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_bulk_send_with_template`

> `<BulkSendJobSendResponse> signature_request_bulk_send_with_template(signature_request_bulk_send_with_template_request)`

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.  **NOTE:** Only available for Standard plan and higher.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signer_list_2_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_2_custom_fields_1.name = "company"
signer_list_2_custom_fields_1.value = "123 LLC"

signer_list_2_custom_fields = [
    signer_list_2_custom_fields_1,
]

signer_list_2_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_2_signers_1.role = "Client"
signer_list_2_signers_1.name = "Mary"
signer_list_2_signers_1.email_address = "mary@example.com"
signer_list_2_signers_1.pin = "gd9as5b"

signer_list_2_signers = [
    signer_list_2_signers_1,
]

signer_list_1_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_1_custom_fields_1.name = "company"
signer_list_1_custom_fields_1.value = "ABC Corp"

signer_list_1_custom_fields = [
    signer_list_1_custom_fields_1,
]

signer_list_1_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_1_signers_1.role = "Client"
signer_list_1_signers_1.name = "George"
signer_list_1_signers_1.email_address = "george@example.com"
signer_list_1_signers_1.pin = "d79a3td"

signer_list_1_signers = [
    signer_list_1_signers_1,
]

signer_list_1 = Dropbox::Sign::SubBulkSignerList.new
signer_list_1.custom_fields = signer_list_1_custom_fields
signer_list_1.signers = signer_list_1_signers

signer_list_2 = Dropbox::Sign::SubBulkSignerList.new
signer_list_2.custom_fields = signer_list_2_custom_fields
signer_list_2.signers = signer_list_2_signers

signer_list = [
    signer_list_1,
    signer_list_2,
]

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

signature_request_bulk_send_with_template_request = Dropbox::Sign::SignatureRequestBulkSendWithTemplateRequest.new
signature_request_bulk_send_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_bulk_send_with_template_request.message = "Glad we could come to an agreement."
signature_request_bulk_send_with_template_request.subject = "Purchase Order"
signature_request_bulk_send_with_template_request.test_mode = true
signature_request_bulk_send_with_template_request.signer_list = signer_list
signature_request_bulk_send_with_template_request.ccs = ccs

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_bulk_send_with_template(
    signature_request_bulk_send_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_bulk_send_with_template: #{e}"
end

```

#### Using the `signature_request_bulk_send_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<BulkSendJobSendResponse>, Integer, Hash)> signature_request_bulk_send_with_template_with_http_info(signature_request_bulk_send_with_template_request)`

```ruby
begin
  # Bulk Send with Template
  data, status_code, headers = api_instance.signature_request_bulk_send_with_template_with_http_info(signature_request_bulk_send_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BulkSendJobSendResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_bulk_send_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_send_with_template_request` | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_cancel`

> `signature_request_cancel(signature_request_id)`

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  Dropbox::Sign::SignatureRequestApi.new.signature_request_cancel(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
  )
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_cancel: #{e}"
end

```

#### Using the `signature_request_cancel_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> signature_request_cancel_with_http_info(signature_request_id)`

```ruby
begin
  # Cancel Incomplete Signature Request
  data, status_code, headers = api_instance.signature_request_cancel_with_http_info(signature_request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_cancel_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the incomplete SignatureRequest to cancel. |  |

### Return type

nil (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_create_embedded`

> `<SignatureRequestGetResponse> signature_request_create_embedded(signature_request_create_embedded_request)`

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_2.name = "Jill"
signers_2.email_address = "jill@example.com"
signers_2.order = 1

signers = [
    signers_1,
    signers_2,
]

signature_request_create_embedded_request = Dropbox::Sign::SignatureRequestCreateEmbeddedRequest.new
signature_request_create_embedded_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
signature_request_create_embedded_request.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions."
signature_request_create_embedded_request.subject = "The NDA we talked about"
signature_request_create_embedded_request.test_mode = true
signature_request_create_embedded_request.title = "NDA with Acme Co."
signature_request_create_embedded_request.cc_email_addresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
]
signature_request_create_embedded_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
signature_request_create_embedded_request.signing_options = signing_options
signature_request_create_embedded_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_create_embedded(
    signature_request_create_embedded_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_create_embedded: #{e}"
end

```

#### Using the `signature_request_create_embedded_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_create_embedded_with_http_info(signature_request_create_embedded_request)`

```ruby
begin
  # Create Embedded Signature Request
  data, status_code, headers = api_instance.signature_request_create_embedded_with_http_info(signature_request_create_embedded_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_create_embedded_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_request` | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_create_embedded_with_template`

> `<SignatureRequestGetResponse> signature_request_create_embedded_with_template(signature_request_create_embedded_with_template_request)`

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

signature_request_create_embedded_with_template_request = Dropbox::Sign::SignatureRequestCreateEmbeddedWithTemplateRequest.new
signature_request_create_embedded_with_template_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
signature_request_create_embedded_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_create_embedded_with_template_request.message = "Glad we could come to an agreement."
signature_request_create_embedded_with_template_request.subject = "Purchase Order"
signature_request_create_embedded_with_template_request.test_mode = true
signature_request_create_embedded_with_template_request.signing_options = signing_options
signature_request_create_embedded_with_template_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_create_embedded_with_template(
    signature_request_create_embedded_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_create_embedded_with_template: #{e}"
end

```

#### Using the `signature_request_create_embedded_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_create_embedded_with_template_with_http_info(signature_request_create_embedded_with_template_request)`

```ruby
begin
  # Create Embedded Signature Request with Template
  data, status_code, headers = api_instance.signature_request_create_embedded_with_template_with_http_info(signature_request_create_embedded_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_create_embedded_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_with_template_request` | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_edit`

> `<SignatureRequestGetResponse> signature_request_edit(signature_request_id, signature_request_edit_request)`

Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.  **NOTE:** Edit and resend *will* deduct your signature request quota.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_2.name = "Jill"
signers_2.email_address = "jill@example.com"
signers_2.order = 1

signers = [
    signers_1,
    signers_2,
]

signature_request_edit_request = Dropbox::Sign::SignatureRequestEditRequest.new
signature_request_edit_request.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions."
signature_request_edit_request.subject = "The NDA we talked about"
signature_request_edit_request.test_mode = true
signature_request_edit_request.title = "NDA with Acme Co."
signature_request_edit_request.cc_email_addresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
]
signature_request_edit_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
signature_request_edit_request.metadata = JSON.parse(<<-EOD
    {
        "custom_id": 1234,
        "custom_text": "NDA #9"
    }
    EOD
)
signature_request_edit_request.field_options = field_options
signature_request_edit_request.signing_options = signing_options
signature_request_edit_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_edit_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_edit: #{e}"
end

```

#### Using the `signature_request_edit_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_edit_with_http_info(signature_request_id, signature_request_edit_request)`

```ruby
begin
  # Edit Signature Request
  data, status_code, headers = api_instance.signature_request_edit_with_http_info(signature_request_id, signature_request_edit_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_edit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_request` | [**SignatureRequestEditRequest**](SignatureRequestEditRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_edit_embedded`

> `<SignatureRequestGetResponse> signature_request_edit_embedded(signature_request_id, signature_request_edit_embedded_request)`

Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Edit and resend *will* deduct your signature request quota.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_2.name = "Jill"
signers_2.email_address = "jill@example.com"
signers_2.order = 1

signers = [
    signers_1,
    signers_2,
]

signature_request_edit_embedded_request = Dropbox::Sign::SignatureRequestEditEmbeddedRequest.new
signature_request_edit_embedded_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
signature_request_edit_embedded_request.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions."
signature_request_edit_embedded_request.subject = "The NDA we talked about"
signature_request_edit_embedded_request.test_mode = true
signature_request_edit_embedded_request.title = "NDA with Acme Co."
signature_request_edit_embedded_request.cc_email_addresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
]
signature_request_edit_embedded_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
signature_request_edit_embedded_request.signing_options = signing_options
signature_request_edit_embedded_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit_embedded(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_edit_embedded_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_edit_embedded: #{e}"
end

```

#### Using the `signature_request_edit_embedded_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_edit_embedded_with_http_info(signature_request_id, signature_request_edit_embedded_request)`

```ruby
begin
  # Edit Embedded Signature Request
  data, status_code, headers = api_instance.signature_request_edit_embedded_with_http_info(signature_request_id, signature_request_edit_embedded_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_edit_embedded_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_embedded_request` | [**SignatureRequestEditEmbeddedRequest**](SignatureRequestEditEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_edit_embedded_with_template`

> `<SignatureRequestGetResponse> signature_request_edit_embedded_with_template(signature_request_id, signature_request_edit_embedded_with_template_request)`

Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Edit and resend *will* deduct your signature request quota.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

signature_request_edit_embedded_with_template_request = Dropbox::Sign::SignatureRequestEditEmbeddedWithTemplateRequest.new
signature_request_edit_embedded_with_template_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
signature_request_edit_embedded_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_edit_embedded_with_template_request.message = "Glad we could come to an agreement."
signature_request_edit_embedded_with_template_request.subject = "Purchase Order"
signature_request_edit_embedded_with_template_request.test_mode = true
signature_request_edit_embedded_with_template_request.signing_options = signing_options
signature_request_edit_embedded_with_template_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit_embedded_with_template(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_edit_embedded_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_edit_embedded_with_template: #{e}"
end

```

#### Using the `signature_request_edit_embedded_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_edit_embedded_with_template_with_http_info(signature_request_id, signature_request_edit_embedded_with_template_request)`

```ruby
begin
  # Edit Embedded Signature Request with Template
  data, status_code, headers = api_instance.signature_request_edit_embedded_with_template_with_http_info(signature_request_id, signature_request_edit_embedded_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_edit_embedded_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_embedded_with_template_request` | [**SignatureRequestEditEmbeddedWithTemplateRequest**](SignatureRequestEditEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_edit_with_template`

> `<SignatureRequestGetResponse> signature_request_edit_with_template(signature_request_id, signature_request_edit_with_template_request)`

Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.  **NOTE:** Edit and resend *will* deduct your signature request quota.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

custom_fields_1 = Dropbox::Sign::SubCustomField.new
custom_fields_1.name = "Cost"
custom_fields_1.editor = "Client"
custom_fields_1.required = true
custom_fields_1.value = "$20,000"

custom_fields = [
    custom_fields_1,
]

signature_request_edit_with_template_request = Dropbox::Sign::SignatureRequestEditWithTemplateRequest.new
signature_request_edit_with_template_request.template_ids = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
]
signature_request_edit_with_template_request.message = "Glad we could come to an agreement."
signature_request_edit_with_template_request.subject = "Purchase Order"
signature_request_edit_with_template_request.test_mode = true
signature_request_edit_with_template_request.signing_options = signing_options
signature_request_edit_with_template_request.signers = signers
signature_request_edit_with_template_request.ccs = ccs
signature_request_edit_with_template_request.custom_fields = custom_fields

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit_with_template(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_edit_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_edit_with_template: #{e}"
end

```

#### Using the `signature_request_edit_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_edit_with_template_with_http_info(signature_request_id, signature_request_edit_with_template_request)`

```ruby
begin
  # Edit Signature Request With Template
  data, status_code, headers = api_instance.signature_request_edit_with_template_with_http_info(signature_request_id, signature_request_edit_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_edit_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_with_template_request` | [**SignatureRequestEditWithTemplateRequest**](SignatureRequestEditWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_files`

> `File signature_request_files(signature_request_id, opts)`

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_files(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      {
          file_type: "pdf",
      },
  )

  FileUtils.cp(response.path, "./file_response")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_files: #{e}"
end

```

#### Using the `signature_request_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(File, Integer, Hash)> signature_request_files_with_http_info(signature_request_id, opts)`

```ruby
begin
  # Download Files
  data, status_code, headers = api_instance.signature_request_files_with_http_info(signature_request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_files_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to retrieve. |  |
| `file_type` | **String** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional][default to &#39;pdf&#39;] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/zip, application/json


## `signature_request_files_as_data_uri`

> `<FileResponseDataUri> signature_request_files_as_data_uri(signature_request_id)`

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_files_as_data_uri(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_files_as_data_uri: #{e}"
end

```

#### Using the `signature_request_files_as_data_uri_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FileResponseDataUri>, Integer, Hash)> signature_request_files_as_data_uri_with_http_info(signature_request_id)`

```ruby
begin
  # Download Files as Data Uri
  data, status_code, headers = api_instance.signature_request_files_as_data_uri_with_http_info(signature_request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FileResponseDataUri>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_files_as_data_uri_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_files_as_file_url`

> `<FileResponse> signature_request_files_as_file_url(signature_request_id, opts)`

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_files_as_file_url(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      {
          force_download: 1,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_files_as_file_url: #{e}"
end

```

#### Using the `signature_request_files_as_file_url_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FileResponse>, Integer, Hash)> signature_request_files_as_file_url_with_http_info(signature_request_id, opts)`

```ruby
begin
  # Download Files as File Url
  data, status_code, headers = api_instance.signature_request_files_as_file_url_with_http_info(signature_request_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FileResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_files_as_file_url_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to retrieve. |  |
| `force_download` | **Integer** | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional][default to 1] |

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_get`

> `<SignatureRequestGetResponse> signature_request_get(signature_request_id)`

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_get(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_get: #{e}"
end

```

#### Using the `signature_request_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_get_with_http_info(signature_request_id)`

```ruby
begin
  # Get Signature Request
  data, status_code, headers = api_instance.signature_request_get_with_http_info(signature_request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_list`

> `<SignatureRequestListResponse> signature_request_list(opts)`

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_list(
    {
          account_id: nil,
          page: 1,
          page_size: 20,
          query: nil,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_list: #{e}"
end

```

#### Using the `signature_request_list_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestListResponse>, Integer, Hash)> signature_request_list_with_http_info(opts)`

```ruby
begin
  # List Signature Requests
  data, status_code, headers = api_instance.signature_request_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **String** | Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| `page` | **Integer** | Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **Integer** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |
| `query` | **String** | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional] |

### Return type

[**SignatureRequestListResponse**](SignatureRequestListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_release_hold`

> `<SignatureRequestGetResponse> signature_request_release_hold(signature_request_id)`

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_release_hold(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_release_hold: #{e}"
end

```

#### Using the `signature_request_release_hold_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_release_hold_with_http_info(signature_request_id)`

```ruby
begin
  # Release On-Hold Signature Request
  data, status_code, headers = api_instance.signature_request_release_hold_with_http_info(signature_request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_release_hold_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to release. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_remind`

> `<SignatureRequestGetResponse> signature_request_remind(signature_request_id, signature_request_remind_request)`

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE:** This action can **not** be used with embedded signature requests.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_remind_request = Dropbox::Sign::SignatureRequestRemindRequest.new
signature_request_remind_request.email_address = "john@example.com"

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_remind(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_remind_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_remind: #{e}"
end

```

#### Using the `signature_request_remind_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_remind_with_http_info(signature_request_id, signature_request_remind_request)`

```ruby
begin
  # Send Request Reminder
  data, status_code, headers = api_instance.signature_request_remind_with_http_info(signature_request_id, signature_request_remind_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_remind_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to send a reminder for. |  |
| `signature_request_remind_request` | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `signature_request_remove`

> `signature_request_remove(signature_request_id)`

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
end

begin
  Dropbox::Sign::SignatureRequestApi.new.signature_request_remove(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
  )
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_remove: #{e}"
end

```

#### Using the `signature_request_remove_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> signature_request_remove_with_http_info(signature_request_id)`

```ruby
begin
  # Remove Signature Request Access
  data, status_code, headers = api_instance.signature_request_remove_with_http_info(signature_request_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_remove_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to remove. |  |

### Return type

nil (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `signature_request_send`

> `<SignatureRequestGetResponse> signature_request_send(signature_request_send_request)`

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_2.name = "Jill"
signers_2.email_address = "jill@example.com"
signers_2.order = 1

signers = [
    signers_1,
    signers_2,
]

signature_request_send_request = Dropbox::Sign::SignatureRequestSendRequest.new
signature_request_send_request.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions."
signature_request_send_request.subject = "The NDA we talked about"
signature_request_send_request.test_mode = true
signature_request_send_request.title = "NDA with Acme Co."
signature_request_send_request.cc_email_addresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
]
signature_request_send_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
signature_request_send_request.metadata = JSON.parse(<<-EOD
    {
        "custom_id": 1234,
        "custom_text": "NDA #9"
    }
    EOD
)
signature_request_send_request.field_options = field_options
signature_request_send_request.signing_options = signing_options
signature_request_send_request.signers = signers

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_send(
    signature_request_send_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_send: #{e}"
end

```

#### Using the `signature_request_send_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_send_with_http_info(signature_request_send_request)`

```ruby
begin
  # Send Signature Request
  data, status_code, headers = api_instance.signature_request_send_with_http_info(signature_request_send_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_send_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_request` | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_send_with_template`

> `<SignatureRequestGetResponse> signature_request_send_with_template(signature_request_send_with_template_request)`

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

custom_fields_1 = Dropbox::Sign::SubCustomField.new
custom_fields_1.name = "Cost"
custom_fields_1.editor = "Client"
custom_fields_1.required = true
custom_fields_1.value = "$20,000"

custom_fields = [
    custom_fields_1,
]

signature_request_send_with_template_request = Dropbox::Sign::SignatureRequestSendWithTemplateRequest.new
signature_request_send_with_template_request.template_ids = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
]
signature_request_send_with_template_request.message = "Glad we could come to an agreement."
signature_request_send_with_template_request.subject = "Purchase Order"
signature_request_send_with_template_request.test_mode = true
signature_request_send_with_template_request.signing_options = signing_options
signature_request_send_with_template_request.signers = signers
signature_request_send_with_template_request.ccs = ccs
signature_request_send_with_template_request.custom_fields = custom_fields

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_send_with_template(
    signature_request_send_with_template_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_send_with_template: #{e}"
end

```

#### Using the `signature_request_send_with_template_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_send_with_template_with_http_info(signature_request_send_with_template_request)`

```ruby
begin
  # Send with Template
  data, status_code, headers = api_instance.signature_request_send_with_template_with_http_info(signature_request_send_with_template_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_send_with_template_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_with_template_request` | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `signature_request_update`

> `<SignatureRequestGetResponse> signature_request_update(signature_request_id, signature_request_update_request)`

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.  Updating the email address of a signer will generate a new `signature_id` value.  **NOTE:** This action cannot be performed on a signature request with an appended signature page.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_update_request = Dropbox::Sign::SignatureRequestUpdateRequest.new
signature_request_update_request.signature_id = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"
signature_request_update_request.email_address = "john@example.com"

begin
  response = Dropbox::Sign::SignatureRequestApi.new.signature_request_update(
    "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
      signature_request_update_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling SignatureRequestApi#signature_request_update: #{e}"
end

```

#### Using the `signature_request_update_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<SignatureRequestGetResponse>, Integer, Hash)> signature_request_update_with_http_info(signature_request_id, signature_request_update_request)`

```ruby
begin
  # Update Signature Request
  data, status_code, headers = api_instance.signature_request_update_with_http_info(signature_request_id, signature_request_update_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignatureRequestGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling SignatureRequestApi->signature_request_update_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **String** | The id of the SignatureRequest to update. |  |
| `signature_request_update_request` | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

