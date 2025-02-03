# Dropbox\Sign\ApiAppApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**apiAppCreate()**](ApiAppApi.md#apiAppCreate) | **POST** /api_app | Create API App |
| [**apiAppDelete()**](ApiAppApi.md#apiAppDelete) | **DELETE** /api_app/{client_id} | Delete API App |
| [**apiAppGet()**](ApiAppApi.md#apiAppGet) | **GET** /api_app/{client_id} | Get API App |
| [**apiAppList()**](ApiAppApi.md#apiAppList) | **GET** /api_app/list | List API Apps |
| [**apiAppUpdate()**](ApiAppApi.md#apiAppUpdate) | **PUT** /api_app/{client_id} | Update API App |


## `apiAppCreate()`

```php
apiAppCreate($api_app_create_request): \Dropbox\Sign\Model\ApiAppGetResponse
```
Create API App

Creates a new API App.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__apiAppCreate_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **api_app_create_request** | [**\Dropbox\Sign\Model\ApiAppCreateRequest**](../Model/ApiAppCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppDelete()`

```php
apiAppDelete($client_id)
```
Delete API App

Deletes an API App. Can only be invoked for apps you own.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__apiAppDelete_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to delete. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppGet()`

```php
apiAppGet($client_id): \Dropbox\Sign\Model\ApiAppGetResponse
```
Get API App

Returns an object with information about an API App.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__apiAppGet_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to retrieve. | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppList()`

```php
apiAppList($page, $page_size): \Dropbox\Sign\Model\ApiAppListResponse
```
List API Apps

Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__apiAppList_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Which page number of the API App List to return. Defaults to &#x60;1&#x60;. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\ApiAppListResponse**](../Model/ApiAppListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `apiAppUpdate()`

```php
apiAppUpdate($client_id, $api_app_update_request): \Dropbox\Sign\Model\ApiAppGetResponse
```
Update API App

Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.

### Example

```php
REPLACE_ME_WITH_EXAMPLE_FOR__apiAppUpdate_PHP_CODE
```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **client_id** | **string**| The client id of the API App to update. | |
| **api_app_update_request** | [**\Dropbox\Sign\Model\ApiAppUpdateRequest**](../Model/ApiAppUpdateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\ApiAppGetResponse**](../Model/ApiAppGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
