# Dropbox::Sign::TemplateApi

All URIs are relative to *https://api.hellosign.com/v3*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [`template_add_user`](TemplateApi.md#template_add_user) | **POST** `/template/add_user/{template_id}` | Add User to Template |
| [`template_create`](TemplateApi.md#template_create) | **POST** `/template/create` | Create Template |
| [`template_create_embedded_draft`](TemplateApi.md#template_create_embedded_draft) | **POST** `/template/create_embedded_draft` | Create Embedded Template Draft |
| [`template_delete`](TemplateApi.md#template_delete) | **POST** `/template/delete/{template_id}` | Delete Template |
| [`template_files`](TemplateApi.md#template_files) | **GET** `/template/files/{template_id}` | Get Template Files |
| [`template_files_as_data_uri`](TemplateApi.md#template_files_as_data_uri) | **GET** `/template/files_as_data_uri/{template_id}` | Get Template Files as Data Uri |
| [`template_files_as_file_url`](TemplateApi.md#template_files_as_file_url) | **GET** `/template/files_as_file_url/{template_id}` | Get Template Files as File Url |
| [`template_get`](TemplateApi.md#template_get) | **GET** `/template/{template_id}` | Get Template |
| [`template_list`](TemplateApi.md#template_list) | **GET** `/template/list` | List Templates |
| [`template_remove_user`](TemplateApi.md#template_remove_user) | **POST** `/template/remove_user/{template_id}` | Remove User from Template |
| [`template_update_files`](TemplateApi.md#template_update_files) | **POST** `/template/update_files/{template_id}` | Update Template Files |


## `template_add_user`

> `<TemplateGetResponse> template_add_user(template_id, template_add_user_request)`

Add User to Template

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_add_user_request = Dropbox::Sign::TemplateAddUserRequest.new
template_add_user_request.email_address = "george@dropboxsign.com"

begin
  response = Dropbox::Sign::TemplateApi.new.template_add_user(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
      template_add_user_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_add_user: #{e}"
end

```

#### Using the `template_add_user_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateGetResponse>, Integer, Hash)> template_add_user_with_http_info(template_id, template_add_user_request)`

```ruby
begin
  # Add User to Template
  data, status_code, headers = api_instance.template_add_user_with_http_info(template_id, template_add_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_add_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the Template to give the Account access to. |  |
| `template_add_user_request` | [**TemplateAddUserRequest**](TemplateAddUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `template_create`

> `<TemplateCreateResponse> template_create(template_create_request)`

Create Template

Creates a template that can then be used.

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

signer_roles_1 = Dropbox::Sign::SubTemplateRole.new
signer_roles_1.name = "Client"
signer_roles_1.order = 0

signer_roles_2 = Dropbox::Sign::SubTemplateRole.new
signer_roles_2.name = "Witness"
signer_roles_2.order = 1

signer_roles = [
    signer_roles_1,
    signer_roles_2,
]

form_fields_per_document_1 = Dropbox::Sign::SubFormFieldsPerDocumentText.new
form_fields_per_document_1.document_index = 0
form_fields_per_document_1.api_id = "uniqueIdHere_1"
form_fields_per_document_1.type = "text"
form_fields_per_document_1.required = true
form_fields_per_document_1.signer = "1"
form_fields_per_document_1.width = 100
form_fields_per_document_1.height = 16
form_fields_per_document_1.x = 112
form_fields_per_document_1.y = 328
form_fields_per_document_1.name = ""
form_fields_per_document_1.page = 1
form_fields_per_document_1.placeholder = ""
form_fields_per_document_1.validation_type = "numbers_only"

form_fields_per_document_2 = Dropbox::Sign::SubFormFieldsPerDocumentSignature.new
form_fields_per_document_2.document_index = 0
form_fields_per_document_2.api_id = "uniqueIdHere_2"
form_fields_per_document_2.type = "signature"
form_fields_per_document_2.required = true
form_fields_per_document_2.signer = "0"
form_fields_per_document_2.width = 120
form_fields_per_document_2.height = 30
form_fields_per_document_2.x = 530
form_fields_per_document_2.y = 415
form_fields_per_document_2.name = ""
form_fields_per_document_2.page = 1

form_fields_per_document = [
    form_fields_per_document_1,
    form_fields_per_document_2,
]

merge_fields_1 = Dropbox::Sign::SubMergeField.new
merge_fields_1.name = "Full Name"
merge_fields_1.type = "text"

merge_fields_2 = Dropbox::Sign::SubMergeField.new
merge_fields_2.name = "Is Registered?"
merge_fields_2.type = "checkbox"

merge_fields = [
    merge_fields_1,
    merge_fields_2,
]

template_create_request = Dropbox::Sign::TemplateCreateRequest.new
template_create_request.client_id = "37dee8d8440c66d54cfa05d92c160882"
template_create_request.message = "For your approval"
template_create_request.subject = "Please sign this document"
template_create_request.test_mode = true
template_create_request.title = "Test Template"
template_create_request.cc_roles = [
    "Manager",
]
template_create_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
template_create_request.field_options = field_options
template_create_request.signer_roles = signer_roles
template_create_request.form_fields_per_document = form_fields_per_document
template_create_request.merge_fields = merge_fields

begin
  response = Dropbox::Sign::TemplateApi.new.template_create(
    template_create_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_create: #{e}"
end

```

#### Using the `template_create_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateCreateResponse>, Integer, Hash)> template_create_with_http_info(template_create_request)`

```ruby
begin
  # Create Template
  data, status_code, headers = api_instance.template_create_with_http_info(template_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateCreateResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_create_request` | [**TemplateCreateRequest**](TemplateCreateRequest.md) |  |  |

### Return type

[**TemplateCreateResponse**](TemplateCreateResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `template_create_embedded_draft`

> `<TemplateCreateEmbeddedDraftResponse> template_create_embedded_draft(template_create_embedded_draft_request)`

Create Embedded Template Draft

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

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

merge_fields_1 = Dropbox::Sign::SubMergeField.new
merge_fields_1.name = "Full Name"
merge_fields_1.type = "text"

merge_fields_2 = Dropbox::Sign::SubMergeField.new
merge_fields_2.name = "Is Registered?"
merge_fields_2.type = "checkbox"

merge_fields = [
    merge_fields_1,
    merge_fields_2,
]

signer_roles_1 = Dropbox::Sign::SubTemplateRole.new
signer_roles_1.name = "Client"
signer_roles_1.order = 0

signer_roles_2 = Dropbox::Sign::SubTemplateRole.new
signer_roles_2.name = "Witness"
signer_roles_2.order = 1

signer_roles = [
    signer_roles_1,
    signer_roles_2,
]

template_create_embedded_draft_request = Dropbox::Sign::TemplateCreateEmbeddedDraftRequest.new
template_create_embedded_draft_request.client_id = "37dee8d8440c66d54cfa05d92c160882"
template_create_embedded_draft_request.message = "For your approval"
template_create_embedded_draft_request.subject = "Please sign this document"
template_create_embedded_draft_request.test_mode = true
template_create_embedded_draft_request.title = "Test Template"
template_create_embedded_draft_request.cc_roles = [
    "Manager",
]
template_create_embedded_draft_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
template_create_embedded_draft_request.field_options = field_options
template_create_embedded_draft_request.merge_fields = merge_fields
template_create_embedded_draft_request.signer_roles = signer_roles

begin
  response = Dropbox::Sign::TemplateApi.new.template_create_embedded_draft(
    template_create_embedded_draft_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_create_embedded_draft: #{e}"
end

```

#### Using the `template_create_embedded_draft_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateCreateEmbeddedDraftResponse>, Integer, Hash)> template_create_embedded_draft_with_http_info(template_create_embedded_draft_request)`

```ruby
begin
  # Create Embedded Template Draft
  data, status_code, headers = api_instance.template_create_embedded_draft_with_http_info(template_create_embedded_draft_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateCreateEmbeddedDraftResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_create_embedded_draft_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_create_embedded_draft_request` | [**TemplateCreateEmbeddedDraftRequest**](TemplateCreateEmbeddedDraftRequest.md) |  |  |

### Return type

[**TemplateCreateEmbeddedDraftResponse**](TemplateCreateEmbeddedDraftResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## `template_delete`

> `template_delete(template_id)`

Delete Template

Completely deletes the template specified from the account.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  Dropbox::Sign::TemplateApi.new.template_delete(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
  )
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_delete: #{e}"
end

```

#### Using the `template_delete_with_http_info` variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> `<Array(nil, Integer, Hash)> template_delete_with_http_info(template_id)`

```ruby
begin
  # Delete Template
  data, status_code, headers = api_instance.template_delete_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the Template to delete. |  |

### Return type

nil (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `template_files`

> `File template_files(template_id, opts)`

Get Template Files

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::TemplateApi.new.template_files(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
  )

  FileUtils.cp(response.path, "./file_response")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_files: #{e}"
end

```

#### Using the `template_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(File, Integer, Hash)> template_files_with_http_info(template_id, opts)`

```ruby
begin
  # Get Template Files
  data, status_code, headers = api_instance.template_files_with_http_info(template_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_files_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the template files to retrieve. |  |
| `file_type` | **String** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] |

### Return type

**File**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/zip, application/json


## `template_files_as_data_uri`

> `<FileResponseDataUri> template_files_as_data_uri(template_id)`

Get Template Files as Data Uri

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::TemplateApi.new.template_files_as_data_uri(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_files_as_data_uri: #{e}"
end

```

#### Using the `template_files_as_data_uri_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FileResponseDataUri>, Integer, Hash)> template_files_as_data_uri_with_http_info(template_id)`

```ruby
begin
  # Get Template Files as Data Uri
  data, status_code, headers = api_instance.template_files_as_data_uri_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FileResponseDataUri>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_files_as_data_uri_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the template files to retrieve. |  |

### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `template_files_as_file_url`

> `<FileResponse> template_files_as_file_url(template_id, opts)`

Get Template Files as File Url

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::TemplateApi.new.template_files_as_file_url(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
      {
          force_download: 1,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_files_as_file_url: #{e}"
end

```

#### Using the `template_files_as_file_url_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<FileResponse>, Integer, Hash)> template_files_as_file_url_with_http_info(template_id, opts)`

```ruby
begin
  # Get Template Files as File Url
  data, status_code, headers = api_instance.template_files_as_file_url_with_http_info(template_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <FileResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_files_as_file_url_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the template files to retrieve. |  |
| `force_download` | **Integer** | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional][default to 1] |

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `template_get`

> `<TemplateGetResponse> template_get(template_id)`

Get Template

Returns the Template specified by the `template_id` parameter.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::TemplateApi.new.template_get(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_get: #{e}"
end

```

#### Using the `template_get_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateGetResponse>, Integer, Hash)> template_get_with_http_info(template_id)`

```ruby
begin
  # Get Template
  data, status_code, headers = api_instance.template_get_with_http_info(template_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the Template to retrieve. |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `template_list`

> `<TemplateListResponse> template_list(opts)`

List Templates

Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
  response = Dropbox::Sign::TemplateApi.new.template_list(
    {
          account_id: nil,
          page: 1,
          page_size: 20,
          query: nil,
      },
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_list: #{e}"
end

```

#### Using the `template_list_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateListResponse>, Integer, Hash)> template_list_with_http_info(opts)`

```ruby
begin
  # List Templates
  data, status_code, headers = api_instance.template_list_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateListResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_list_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **String** | Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| `page` | **Integer** | Which page number of the Template List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **Integer** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |
| `query` | **String** | String that includes search terms and/or fields to be used to filter the Template objects. | [optional] |

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## `template_remove_user`

> `<TemplateGetResponse> template_remove_user(template_id, template_remove_user_request)`

Remove User from Template

Removes the specified Account's access to the specified Template.

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_remove_user_request = Dropbox::Sign::TemplateRemoveUserRequest.new
template_remove_user_request.email_address = "george@dropboxsign.com"

begin
  response = Dropbox::Sign::TemplateApi.new.template_remove_user(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
      template_remove_user_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_remove_user: #{e}"
end

```

#### Using the `template_remove_user_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateGetResponse>, Integer, Hash)> template_remove_user_with_http_info(template_id, template_remove_user_request)`

```ruby
begin
  # Remove User from Template
  data, status_code, headers = api_instance.template_remove_user_with_http_info(template_id, template_remove_user_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateGetResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_remove_user_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The id of the Template to remove the Account&#39;s access to. |  |
| `template_remove_user_request` | [**TemplateRemoveUserRequest**](TemplateRemoveUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## `template_update_files`

> `<TemplateUpdateFilesResponse> template_update_files(template_id, template_update_files_request)`

Update Template Files

Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

### Examples

```ruby
require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
  config.username = "YOUR_API_KEY"
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_update_files_request = Dropbox::Sign::TemplateUpdateFilesRequest.new
template_update_files_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]

begin
  response = Dropbox::Sign::TemplateApi.new.template_update_files(
    "f57db65d3f933b5316d398057a36176831451a35", # template_id
      template_update_files_request,
  )

  p response
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling TemplateApi#template_update_files: #{e}"
end

```

#### Using the `template_update_files_with_http_info` variant

This returns an Array which contains the response data, status code and headers.

> `<Array(<TemplateUpdateFilesResponse>, Integer, Hash)> template_update_files_with_http_info(template_id, template_update_files_request)`

```ruby
begin
  # Update Template Files
  data, status_code, headers = api_instance.template_update_files_with_http_info(template_id, template_update_files_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TemplateUpdateFilesResponse>
rescue Dropbox::Sign::ApiError => e
  puts "Error when calling TemplateApi->template_update_files_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **String** | The ID of the template whose files to update. |  |
| `template_update_files_request` | [**TemplateUpdateFilesRequest**](TemplateUpdateFilesRequest.md) |  |  |

### Return type

[**TemplateUpdateFilesResponse**](TemplateUpdateFilesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

