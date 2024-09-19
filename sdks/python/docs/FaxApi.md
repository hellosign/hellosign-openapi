# ```dropbox_sign.FaxApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```delete_fax```](FaxApi.md#delete_fax) | ```DELETE /fax/{fax_id}``` | Delete Fax|
|[```get_fax_by_id```](FaxApi.md#get_fax_by_id) | ```GET /fax/{fax_id}``` | Get Fax|
|[```get_fax_files```](FaxApi.md#get_fax_files) | ```GET /fax/files/{fax_id}``` | List Fax Files|
|[```list_faxes```](FaxApi.md#list_faxes) | ```GET /fax/list``` | Lists Faxes|
|[```send_fax```](FaxApi.md#send_fax) | ```POST /fax/send``` | Send Fax|


# ```delete_fax```
> ```delete_fax(fax_id)```

Delete Fax

Deletes the specified Fax from the system.

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    try:
        fax_api.delete_fax("[FAX_NUMBER]")
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **str** | Fax ID |  |

### Return type

void (empty response body)

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

# ```get_fax_by_id```
> ```FaxResponse get_fax_by_id(fax_id)```

Get Fax

Returns information about fax

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

    try:
        response = fax_api.get_fax_by_id(client_id)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **str** | Fax ID |  |

### Return type

[**FaxResponse**](FaxResponse.md)

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

# ```get_fax_files```
> ```io.IOBase get_fax_files(fax_id)```

List Fax Files

Returns list of fax files

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    fax_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

    try:
        fax_api.get_fax_files(fax_id)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id` | **str** | Fax ID |  |

### Return type

**io.IOBase**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```list_faxes```
> ```FaxListResponse list_faxes(page, page_size)```

Lists Faxes

Returns properties of multiple faxes

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    page = 1
    page_size = 2

    try:
        response = fax_api.list_faxes(
            page=page,
            page_size=page_size,
        )
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `page` | **int** | Page |  |
| `page_size` | **int** | Page size |  |

### Return type

[**FaxListResponse**](FaxListResponse.md)

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

# ```send_fax```
> ```FaxResponse send_fax(fax_send_request)```

Send Fax

Action to prepare and send a fax

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, apis, models

configuration = Configuration(
    # Configure HTTP basic authorization: api_key
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_api = apis.FaxApi(api_client)

    data = models.FaxCreateRequest(
        area_code=209,
        country="US",
    )

    try:
        response = fax_api.fax_create(data)
        pprint(response)
    except ApiException as e:
        print("Exception when calling Dropbox Sign API: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_send_request` | [**FaxSendRequest**](FaxSendRequest.md) |  |  |

### Return type

[**FaxResponse**](FaxResponse.md)

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

