# ```dropbox_sign.FaxApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```fax_delete```](FaxApi.md#fax_delete) | ```DELETE /fax/{fax_id}``` | Delete Fax|
|[```fax_files```](FaxApi.md#fax_files) | ```GET /fax/files/{fax_id}``` | List Fax Files|
|[```fax_get```](FaxApi.md#fax_get) | ```GET /fax/{fax_id}``` | Get Fax|
|[```fax_list```](FaxApi.md#fax_list) | ```GET /fax/list``` | Lists Faxes|
|[```fax_send```](FaxApi.md#fax_send) | ```POST /fax/send``` | Send Fax|


# ```fax_delete```
> ```fax_delete(fax_id)```

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
        fax_api.fax_delete("fa5c8a0b0f492d768749333ad6fcc214c111e967")
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
**204** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```fax_files```
> ```io.IOBase fax_files(fax_id)```

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
        response = fax_api.fax_files(fax_id)
        open("file_response.pdf", "wb").write(response.read())
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

# ```fax_get```
> ```FaxGetResponse fax_get(fax_id)```

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

    fax_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

    try:
        response = fax_api.fax_get(fax_id)
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

[**FaxGetResponse**](FaxGetResponse.md)

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

# ```fax_list```
> ```FaxListResponse fax_list()```

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
        response = fax_api.fax_list(
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
| `page` | **int** | Page | [optional][default to 1] |
| `page_size` | **int** | Page size | [optional][default to 20] |

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

# ```fax_send```
> ```FaxGetResponse fax_send(fax_send_request)```

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

    data = models.FaxSendRequest(
        files=[open("example_signature_request.pdf", "rb")],
        test_mode=True,
        recipient="16690000001",
        sender="16690000000",
        cover_page_to="Jill Fax",
        cover_page_message="I'm sending you a fax!",
        cover_page_from="Faxer Faxerson",
        title="This is what the fax is about!",
    )

    try:
        response = fax_api.fax_send(data)
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

[**FaxGetResponse**](FaxGetResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

