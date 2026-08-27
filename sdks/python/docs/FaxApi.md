# ```dropbox_sign.FaxApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```fax_delete```](FaxApi.md#fax_delete) | ```DELETE /fax/{fax_id}``` | Delete Fax|
|[```fax_draft_create```](FaxApi.md#fax_draft_create) | ```POST /fax/draft/create``` | Create Fax Draft|
|[```fax_files```](FaxApi.md#fax_files) | ```GET /fax/files/{fax_id}``` | Download Fax Files|
|[```fax_get```](FaxApi.md#fax_get) | ```GET /fax/{fax_id}``` | Get Fax|
|[```fax_list```](FaxApi.md#fax_list) | ```GET /fax/list``` | Lists Faxes|
|[```fax_send```](FaxApi.md#fax_send) | ```POST /fax/send``` | Send Fax|


# ```fax_delete```
> ```fax_delete(fax_id)```

Delete Fax

Deletes the specified Fax from the system

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        api.FaxApi(api_client).fax_delete(
            fax_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )
    except ApiException as e:
        print("Exception when calling FaxApi#fax_delete: %s\n" % e)

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

# ```fax_draft_create```
> ```FaxDraftCreateResponse fax_draft_create(fax_draft_create_request)```

Create Fax Draft

Creates a Fax draft and returns a URL for preparing and sending the Fax.

When `client_id` is provided, the draft is embedded and the returned URL must be opened in an approved iframe. When `client_id` is omitted, the draft is a normal Fax draft that opens in Dropbox Fax.

### Example

* Basic Authentication (api_key):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    editor_options = models.SubEditorPageOptions(
        force_upload_page=False,
        force_editor_page=True,
        force_review_page=True,
    )
    fax_draft_create_request = models.FaxDraftCreateRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        file_urls=[
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
        ],
        recipients=["+14155552671"],
        editor_options=editor_options,
        test_mode=True,
    )

    try:
        response = api.FaxApi(api_client).fax_draft_create(
            fax_draft_create_request=fax_draft_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxApi#fax_draft_create: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_draft_create_request` | [**FaxDraftCreateRequest**](FaxDraftCreateRequest.md) |  |  |

### Return type

[**FaxDraftCreateResponse**](FaxDraftCreateResponse.md)

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

# ```fax_files```
> ```io.IOBase fax_files(fax_id)```

Download Fax Files

Downloads files associated with a Fax

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxApi(api_client).fax_files(
            fax_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        open("./file_response", "wb").write(response.read())
    except ApiException as e:
        print("Exception when calling FaxApi#fax_files: %s\n" % e)

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

Returns information about a Fax

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxApi(api_client).fax_get(
            fax_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxApi#fax_get: %s\n" % e)

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

Returns properties of multiple Faxes

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.FaxApi(api_client).fax_list(
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxApi#fax_list: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `page` | **int** | Which page number of the Fax List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |

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

Creates and sends a new Fax with the submitted file(s)

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    fax_send_request = models.FaxSendRequest(
        recipient="16690000001",
        sender="16690000000",
        test_mode=True,
        cover_page_to="Jill Fax",
        cover_page_from="Faxer Faxerson",
        cover_page_message="I'm sending you a fax!",
        title="This is what the fax is about!",
        files=[
            open("./example_fax.pdf", "rb").read(),
        ],
    )

    try:
        response = api.FaxApi(api_client).fax_send(
            fax_send_request=fax_send_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling FaxApi#fax_send: %s\n" % e)

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

