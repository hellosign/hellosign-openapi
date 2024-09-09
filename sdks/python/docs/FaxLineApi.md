# ```dropbox_sign.FaxLineApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```fax_line_add_user```](FaxLineApi.md#fax_line_add_user) | ```PUT /fax_line/add_user``` | Add Fax Line User|
|[```fax_line_area_code_get```](FaxLineApi.md#fax_line_area_code_get) | ```GET /fax_line/area_codes``` | Get Available Fax Line Area Codes|
|[```fax_line_create```](FaxLineApi.md#fax_line_create) | ```POST /fax_line/create``` | Purchase Fax Line|
|[```fax_line_delete```](FaxLineApi.md#fax_line_delete) | ```DELETE /fax_line``` | Delete Fax Line|
|[```fax_line_get```](FaxLineApi.md#fax_line_get) | ```GET /fax_line``` | Get Fax Line|
|[```fax_line_list```](FaxLineApi.md#fax_line_list) | ```GET /fax_line/list``` | List Fax Lines|
|[```fax_line_remove_user```](FaxLineApi.md#fax_line_remove_user) | ```PUT /fax_line/remove_user``` | Remove Fax Line Access|


# ```fax_line_add_user```
> ```FaxLineResponse fax_line_add_user(fax_line_add_user_request)```

Add Fax Line User

Grants a user access to the specified Fax Line.

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    data = models.FaxLineAddUserRequest(
        number="[FAX_NUMBER]",
        email_address="member@dropboxsign.com",
    )

    try:
        response = fax_line_api.fax_line_add_user(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    try:
        response = fax_line_api.fax_line_area_code_get("US", "CA")
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `country` | **str** | Filter area codes by country. |  |
| `state` | **str** | Filter area codes by state. | [optional] |
| `province` | **str** | Filter area codes by province. | [optional] |
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    data = models.FaxLineCreateRequest(
        area_code=209,
        country="US",
    )

    try:
        response = fax_line_api.fax_line_create(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    data = models.FaxLineDeleteRequest(
        number="[FAX_NUMBER]",
    )

    try:
        fax_line_api.fax_line_delete(data)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    try:
        response = fax_line_api.fax_line_get("[FAX_NUMBER]")
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    try:
        response = fax_line_api.fax_line_list()
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Account ID | [optional] |
| `page` | **int** | Page | [optional][default to 1] |
| `page_size` | **int** | Page size | [optional][default to 20] |
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
from pprint import pprint

from dropbox_sign import \
    ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_line_api = apis.FaxLineApi(api_client)

    data = models.FaxLineRemoveUserRequest(
        number="[FAX_NUMBER]",
        email_address="member@dropboxsign.com",
    )

    try:
        response = fax_line_api.fax_line_remove_user(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
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

