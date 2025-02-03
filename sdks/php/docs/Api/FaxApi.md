# Dropbox\Sign\FaxApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**faxDelete()**](FaxApi.md#faxDelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| [**faxFiles()**](FaxApi.md#faxFiles) | **GET** /fax/files/{fax_id} | Download Fax Files |
| [**faxGet()**](FaxApi.md#faxGet) | **GET** /fax/{fax_id} | Get Fax |
| [**faxList()**](FaxApi.md#faxList) | **GET** /fax/list | Lists Faxes |
| [**faxSend()**](FaxApi.md#faxSend) | **POST** /fax/send | Send Fax |


## `faxDelete()`

```php
faxDelete($fax_id)
```
Delete Fax

Deletes the specified Fax from the system

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__faxDelete_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_id** | **string**| Fax ID | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxFiles()`

```php
faxFiles($fax_id): \SplFileObject
```
Download Fax Files

Downloads files associated with a Fax

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__faxFiles_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_id** | **string**| Fax ID | |

### Return type

**\SplFileObject**

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxGet()`

```php
faxGet($fax_id): \Dropbox\Sign\Model\FaxGetResponse
```
Get Fax

Returns information about a Fax

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__faxGet_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_id** | **string**| Fax ID | |

### Return type

[**\Dropbox\Sign\Model\FaxGetResponse**](../Model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxList()`

```php
faxList($page, $page_size): \Dropbox\Sign\Model\FaxListResponse
```
Lists Faxes

Returns properties of multiple Faxes

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__faxList_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Which page number of the Fax List to return. Defaults to &#x60;1&#x60;. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\FaxListResponse**](../Model/FaxListResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `faxSend()`

```php
faxSend($fax_send_request): \Dropbox\Sign\Model\FaxGetResponse
```
Send Fax

Creates and sends a new Fax with the submitted file(s)

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__faxSend_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **fax_send_request** | [**\Dropbox\Sign\Model\FaxSendRequest**](../Model/FaxSendRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\FaxGetResponse**](../Model/FaxGetResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
