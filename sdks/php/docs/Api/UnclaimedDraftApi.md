# Dropbox\Sign\UnclaimedDraftApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**unclaimedDraftCreate()**](UnclaimedDraftApi.md#unclaimedDraftCreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| [**unclaimedDraftCreateEmbedded()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| [**unclaimedDraftCreateEmbeddedWithTemplate()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbeddedWithTemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| [**unclaimedDraftEditAndResend()**](UnclaimedDraftApi.md#unclaimedDraftEditAndResend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |


## `unclaimedDraftCreate()`

```php
unclaimedDraftCreate($unclaimed_draft_create_request): \Dropbox\Sign\Model\UnclaimedDraftCreateResponse
```
Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \"Sign and send\" or the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__unclaimedDraftCreate_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimed_draft_create_request** | [**\Dropbox\Sign\Model\UnclaimedDraftCreateRequest**](../Model/UnclaimedDraftCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\UnclaimedDraftCreateResponse**](../Model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbedded()`

```php
unclaimedDraftCreateEmbedded($unclaimed_draft_create_embedded_request): \Dropbox\Sign\Model\UnclaimedDraftCreateResponse
```
Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__unclaimedDraftCreateEmbedded_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimed_draft_create_embedded_request** | [**\Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedRequest**](../Model/UnclaimedDraftCreateEmbeddedRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\UnclaimedDraftCreateResponse**](../Model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbeddedWithTemplate()`

```php
unclaimedDraftCreateEmbeddedWithTemplate($unclaimed_draft_create_embedded_with_template_request): \Dropbox\Sign\Model\UnclaimedDraftCreateResponse
```
Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__unclaimedDraftCreateEmbeddedWithTemplate_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimed_draft_create_embedded_with_template_request** | [**\Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedWithTemplateRequest**](../Model/UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\UnclaimedDraftCreateResponse**](../Model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftEditAndResend()`

```php
unclaimedDraftEditAndResend($signature_request_id, $unclaimed_draft_edit_and_resend_request): \Dropbox\Sign\Model\UnclaimedDraftCreateResponse
```
Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__unclaimedDraftEditAndResend_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The ID of the signature request to edit and resend. | |
| **unclaimed_draft_edit_and_resend_request** | [**\Dropbox\Sign\Model\UnclaimedDraftEditAndResendRequest**](../Model/UnclaimedDraftEditAndResendRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\UnclaimedDraftCreateResponse**](../Model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
