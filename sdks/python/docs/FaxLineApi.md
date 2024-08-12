# ```dropbox_sign.FaxLineApi```

All URIs are relative to *https://api.hellosign.com/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[```fax_line_add_user```](FaxLineApi.md#fax_line_add_user) | ```POST /fax_line/add_user``` | Add Fax Line User|
|[```fax_line_area_code_get```](FaxLineApi.md#fax_line_area_code_get) | ```GET /fax_line/area_codes``` | Get Available Fax Line Area Codes|
|[```fax_line_create```](FaxLineApi.md#fax_line_create) | ```POST /fax_line/create``` | Purchase Fax Line|
|[```fax_line_delete```](FaxLineApi.md#fax_line_delete) | ```DELETE /fax_line/delete``` | Delete Fax Line|
|[```fax_line_get```](FaxLineApi.md#fax_line_get) | ```GET /fax_line/{number}``` | Get Fax Line|
|[```fax_line_list```](FaxLineApi.md#fax_line_list) | ```GET /fax_line/list``` | List Fax Lines|
|[```fax_line_remove_user```](FaxLineApi.md#fax_line_remove_user) | ```POST /fax_line/remove_user``` | Remove Fax Line Access|


# ```fax_line_add_user```
> ```FaxLineResponse fax_line_add_user(fax_line_add_user_request)```

Add Fax Line User

Grants a user access to the specified Fax Line.

### Example

* Basic Authentication (api_key):

```python

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


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_area_code_get```
> ```FaxLineAreaCodeGetResponse fax_line_area_code_get(country)```

Get Available Fax Line Area Codes

Returns a response with the area codes available for a given state/provice and city.

### Example

* Basic Authentication (api_key):

```python

```


### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `country` | [**FaxLineAreaCodeGetCountryEnum**](.md) | Filter area codes by country. |  |
| `state` | [**FaxLineAreaCodeGetStateEnum**](.md) | Filter area codes by state. | [optional] |
| `province` | [**FaxLineAreaCodeGetProvinceEnum**](.md) | Filter area codes by province. | [optional] |
| `city` | **str** | Filter area codes by city. | [optional] |

### Return type

[**FaxLineAreaCodeGetResponse**](FaxLineAreaCodeGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_create```
> ```FaxLineResponse fax_line_create(fax_line_create_request)```

Purchase Fax Line

Purchases a new Fax Line.

### Example

* Basic Authentication (api_key):

```python

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


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_delete```
> ```fax_line_delete(fax_line_delete_request)```

Delete Fax Line

Deletes the specified Fax Line from the subscription.

### Example

* Basic Authentication (api_key):

```python

```


### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_line_delete_request` | [**FaxLineDeleteRequest**](FaxLineDeleteRequest.md) |  |  |

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_get```
> ```FaxLineResponse fax_line_get(number)```

Get Fax Line

Returns the properties and settings of a Fax Line.

### Example

* Basic Authentication (api_key):

```python

```


### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `number` | **str** | The Fax Line number. |  |

### Return type

[**FaxLineResponse**](FaxLineResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_list```
> ```FaxLineListResponse fax_line_list()```

List Fax Lines

Returns the properties and settings of multiple Fax Lines.

### Example

* Basic Authentication (api_key):

```python

```


### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Account ID | [optional] |
| `page` | **int** | Page | [optional] |
| `page_size` | **int** | Page size | [optional] |
| `show_team_lines` | **bool** | Show team lines | [optional] |

### Return type

[**FaxLineListResponse**](FaxLineListResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_line_remove_user```
> ```FaxLineResponse fax_line_remove_user(fax_line_remove_user_request)```

Remove Fax Line Access

Removes a user's access to the specified Fax Line.

### Example

* Basic Authentication (api_key):

```python

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


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

