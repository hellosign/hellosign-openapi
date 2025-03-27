# ```dropbox_sign.TemplateApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```template_add_user```](TemplateApi.md#template_add_user) | ```POST /template/add_user/{template_id}``` | Add User to Template|
|[```template_create```](TemplateApi.md#template_create) | ```POST /template/create``` | Create Template|
|[```template_create_embedded_draft```](TemplateApi.md#template_create_embedded_draft) | ```POST /template/create_embedded_draft``` | Create Embedded Template Draft|
|[```template_delete```](TemplateApi.md#template_delete) | ```POST /template/delete/{template_id}``` | Delete Template|
|[```template_files```](TemplateApi.md#template_files) | ```GET /template/files/{template_id}``` | Get Template Files|
|[```template_files_as_data_uri```](TemplateApi.md#template_files_as_data_uri) | ```GET /template/files_as_data_uri/{template_id}``` | Get Template Files as Data Uri|
|[```template_files_as_file_url```](TemplateApi.md#template_files_as_file_url) | ```GET /template/files_as_file_url/{template_id}``` | Get Template Files as File Url|
|[```template_get```](TemplateApi.md#template_get) | ```GET /template/{template_id}``` | Get Template|
|[```template_list```](TemplateApi.md#template_list) | ```GET /template/list``` | List Templates|
|[```template_remove_user```](TemplateApi.md#template_remove_user) | ```POST /template/remove_user/{template_id}``` | Remove User from Template|
|[```template_update_files```](TemplateApi.md#template_update_files) | ```POST /template/update_files/{template_id}``` | Update Template Files|


# ```template_add_user```
> ```TemplateGetResponse template_add_user(template_id, template_add_user_request)```

Add User to Template

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    template_add_user_request = models.TemplateAddUserRequest(
        email_address="george@dropboxsign.com",
    )

    try:
        response = api.TemplateApi(api_client).template_add_user(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_add_user_request=template_add_user_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_add_user: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the Template to give the Account access to. |  |
| `template_add_user_request` | [**TemplateAddUserRequest**](TemplateAddUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_create```
> ```TemplateCreateResponse template_create(template_create_request)```

Create Template

Creates a template that can then be used.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    signer_roles_1 = models.SubTemplateRole(
        name="Client",
        order=0,
    )

    signer_roles_2 = models.SubTemplateRole(
        name="Witness",
        order=1,
    )

    signer_roles = [
        signer_roles_1,
        signer_roles_2,
    ]

    form_fields_per_document_1 = models.SubFormFieldsPerDocumentText(
        document_index=0,
        api_id="uniqueIdHere_1",
        type="text",
        required=True,
        signer="1",
        width=100,
        height=16,
        x=112,
        y=328,
        name="",
        page=1,
        placeholder="",
        validation_type="numbers_only",
    )

    form_fields_per_document_2 = models.SubFormFieldsPerDocumentSignature(
        document_index=0,
        api_id="uniqueIdHere_2",
        type="signature",
        required=True,
        signer="0",
        width=120,
        height=30,
        x=530,
        y=415,
        name="",
        page=1,
    )

    form_fields_per_document = [
        form_fields_per_document_1,
        form_fields_per_document_2,
    ]

    merge_fields_1 = models.SubMergeField(
        name="Full Name",
        type="text",
    )

    merge_fields_2 = models.SubMergeField(
        name="Is Registered?",
        type="checkbox",
    )

    merge_fields = [
        merge_fields_1,
        merge_fields_2,
    ]

    template_create_request = models.TemplateCreateRequest(
        client_id="37dee8d8440c66d54cfa05d92c160882",
        message="For your approval",
        subject="Please sign this document",
        test_mode=True,
        title="Test Template",
        cc_roles=[
            "Manager",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        field_options=field_options,
        signer_roles=signer_roles,
        form_fields_per_document=form_fields_per_document,
        merge_fields=merge_fields,
    )

    try:
        response = api.TemplateApi(api_client).template_create(
            template_create_request=template_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_create: %s\n" % e)

```
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_create_embedded_draft```
> ```TemplateCreateEmbeddedDraftResponse template_create_embedded_draft(template_create_embedded_draft_request)```

Create Embedded Template Draft

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    merge_fields_1 = models.SubMergeField(
        name="Full Name",
        type="text",
    )

    merge_fields_2 = models.SubMergeField(
        name="Is Registered?",
        type="checkbox",
    )

    merge_fields = [
        merge_fields_1,
        merge_fields_2,
    ]

    signer_roles_1 = models.SubTemplateRole(
        name="Client",
        order=0,
    )

    signer_roles_2 = models.SubTemplateRole(
        name="Witness",
        order=1,
    )

    signer_roles = [
        signer_roles_1,
        signer_roles_2,
    ]

    template_create_embedded_draft_request = models.TemplateCreateEmbeddedDraftRequest(
        client_id="37dee8d8440c66d54cfa05d92c160882",
        message="For your approval",
        subject="Please sign this document",
        test_mode=True,
        title="Test Template",
        cc_roles=[
            "Manager",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        field_options=field_options,
        merge_fields=merge_fields,
        signer_roles=signer_roles,
    )

    try:
        response = api.TemplateApi(api_client).template_create_embedded_draft(
            template_create_embedded_draft_request=template_create_embedded_draft_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling TemplateApi#template_create_embedded_draft: %s\n"
            % e
        )

```
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_delete```
> ```template_delete(template_id)```

Delete Template

Completely deletes the template specified from the account.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        api.TemplateApi(api_client).template_delete(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
        )
    except ApiException as e:
        print("Exception when calling TemplateApi#template_delete: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the Template to delete. |  |

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_files```
> ```io.IOBase template_files(template_id)```

Get Template Files

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_files(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
        )

        open("./file_response", "wb").write(response.read())
    except ApiException as e:
        print("Exception when calling TemplateApi#template_files: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the template files to retrieve. |  |
| `file_type` | **str** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] |

### Return type

**io.IOBase**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/zip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_files_as_data_uri```
> ```FileResponseDataUri template_files_as_data_uri(template_id)```

Get Template Files as Data Uri

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_files_as_data_uri(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_files_as_data_uri: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the template files to retrieve. |  |

### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_files_as_file_url```
> ```FileResponse template_files_as_file_url(template_id)```

Get Template Files as File Url

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_files_as_file_url(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            force_download=1,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_files_as_file_url: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the template files to retrieve. |  |
| `force_download` | **int** | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional][default to 1] |

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_get```
> ```TemplateGetResponse template_get(template_id)```

Get Template

Returns the Template specified by the `template_id` parameter.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_get(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_get: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the Template to retrieve. |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_list```
> ```TemplateListResponse template_list()```

List Templates

Returns a list of the Templates that are accessible by you.

Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.TemplateApi(api_client).template_list(
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_list: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| `page` | **int** | Which page number of the Template List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |
| `query` | **str** | String that includes search terms and/or fields to be used to filter the Template objects. | [optional] |

### Return type

[**TemplateListResponse**](TemplateListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_remove_user```
> ```TemplateGetResponse template_remove_user(template_id, template_remove_user_request)```

Remove User from Template

Removes the specified Account's access to the specified Template.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    template_remove_user_request = models.TemplateRemoveUserRequest(
        email_address="george@dropboxsign.com",
    )

    try:
        response = api.TemplateApi(api_client).template_remove_user(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_remove_user_request=template_remove_user_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_remove_user: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The id of the Template to remove the Account&#39;s access to. |  |
| `template_remove_user_request` | [**TemplateRemoveUserRequest**](TemplateRemoveUserRequest.md) |  |  |

### Return type

[**TemplateGetResponse**](TemplateGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```template_update_files```
> ```TemplateUpdateFilesResponse template_update_files(template_id, template_update_files_request)```

Update Template Files

Overlays a new file with the overlay of an existing template. The new file(s) must:

1. have the same or higher page count
2. the same orientation as the file(s) being replaced.

This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.

Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.

It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.

If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    template_update_files_request = models.TemplateUpdateFilesRequest(
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
    )

    try:
        response = api.TemplateApi(api_client).template_update_files(
            template_id="f57db65d3f933b5316d398057a36176831451a35",
            template_update_files_request=template_update_files_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TemplateApi#template_update_files: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_id` | **str** | The ID of the template whose files to update. |  |
| `template_update_files_request` | [**TemplateUpdateFilesRequest**](TemplateUpdateFilesRequest.md) |  |  |

### Return type

[**TemplateUpdateFilesResponse**](TemplateUpdateFilesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

