# ```dropbox_sign.SignatureRequestApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```signature_request_bulk_create_embedded_with_template```](SignatureRequestApi.md#signature_request_bulk_create_embedded_with_template) | ```POST /signature_request/bulk_create_embedded_with_template``` | Embedded Bulk Send with Template|
|[```signature_request_bulk_send_with_template```](SignatureRequestApi.md#signature_request_bulk_send_with_template) | ```POST /signature_request/bulk_send_with_template``` | Bulk Send with Template|
|[```signature_request_cancel```](SignatureRequestApi.md#signature_request_cancel) | ```POST /signature_request/cancel/{signature_request_id}``` | Cancel Incomplete Signature Request|
|[```signature_request_create_embedded```](SignatureRequestApi.md#signature_request_create_embedded) | ```POST /signature_request/create_embedded``` | Create Embedded Signature Request|
|[```signature_request_create_embedded_with_template```](SignatureRequestApi.md#signature_request_create_embedded_with_template) | ```POST /signature_request/create_embedded_with_template``` | Create Embedded Signature Request with Template|
|[```signature_request_files```](SignatureRequestApi.md#signature_request_files) | ```GET /signature_request/files/{signature_request_id}``` | Download Files|
|[```signature_request_files_as_data_uri```](SignatureRequestApi.md#signature_request_files_as_data_uri) | ```GET /signature_request/files_as_data_uri/{signature_request_id}``` | Download Files as Data Uri|
|[```signature_request_files_as_file_url```](SignatureRequestApi.md#signature_request_files_as_file_url) | ```GET /signature_request/files_as_file_url/{signature_request_id}``` | Download Files as File Url|
|[```signature_request_get```](SignatureRequestApi.md#signature_request_get) | ```GET /signature_request/{signature_request_id}``` | Get Signature Request|
|[```signature_request_list```](SignatureRequestApi.md#signature_request_list) | ```GET /signature_request/list``` | List Signature Requests|
|[```signature_request_release_hold```](SignatureRequestApi.md#signature_request_release_hold) | ```POST /signature_request/release_hold/{signature_request_id}``` | Release On-Hold Signature Request|
|[```signature_request_remind```](SignatureRequestApi.md#signature_request_remind) | ```POST /signature_request/remind/{signature_request_id}``` | Send Request Reminder|
|[```signature_request_remove```](SignatureRequestApi.md#signature_request_remove) | ```POST /signature_request/remove/{signature_request_id}``` | Remove Signature Request Access|
|[```signature_request_send```](SignatureRequestApi.md#signature_request_send) | ```POST /signature_request/send``` | Send Signature Request|
|[```signature_request_send_with_template```](SignatureRequestApi.md#signature_request_send_with_template) | ```POST /signature_request/send_with_template``` | Send with Template|
|[```signature_request_update```](SignatureRequestApi.md#signature_request_update) | ```POST /signature_request/update/{signature_request_id}``` | Update Signature Request|


# ```signature_request_bulk_create_embedded_with_template```
> ```BulkSendJobSendResponse signature_request_bulk_create_embedded_with_template(signature_request_bulk_create_embedded_with_template_request)```

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Only available for Standard plan and higher.

### Example

* Basic Authentication (api_key):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_bulk_create_embedded_with_template_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_create_embedded_with_template_request` | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

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

# ```signature_request_bulk_send_with_template```
> ```BulkSendJobSendResponse signature_request_bulk_send_with_template(signature_request_bulk_send_with_template_request)```

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.  **NOTE:** Only available for Standard plan and higher.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_bulk_send_with_template_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_send_with_template_request` | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

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

# ```signature_request_cancel```
> ```signature_request_cancel(signature_request_id)```

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a  [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_cancel_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the incomplete SignatureRequest to cancel. |  |

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

# ```signature_request_create_embedded```
> ```SignatureRequestGetResponse signature_request_create_embedded(signature_request_create_embedded_request)```

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_create_embedded_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_request` | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_create_embedded_with_template```
> ```SignatureRequestGetResponse signature_request_create_embedded_with_template(signature_request_create_embedded_with_template_request)```

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_create_embedded_with_template_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_with_template_request` | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_files```
> ```io.IOBase signature_request_files(signature_request_id)```

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_files_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |
| `file_type` | **str** | Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. | [optional][default to pdf] |

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

# ```signature_request_files_as_data_uri```
> ```FileResponseDataUri signature_request_files_as_data_uri(signature_request_id)```

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_files_as_data_uri_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |

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

# ```signature_request_files_as_file_url```
> ```FileResponse signature_request_files_as_file_url(signature_request_id)```

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_files_as_file_url_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |
| `force_download` | **int** | By default when opening the &#x60;file_url&#x60; a browser will download the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in the browser. | [optional][default to 1] |

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

# ```signature_request_get```
> ```SignatureRequestGetResponse signature_request_get(signature_request_id)```

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_get_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_list```
> ```SignatureRequestListResponse signature_request_list()```

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_list_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Which account to return SignatureRequests for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. | [optional] |
| `page` | **int** | Which page number of the SignatureRequest List to return. Defaults to &#x60;1&#x60;. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [optional][default to 20] |
| `query` | **str** | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional] |

### Return type

[**SignatureRequestListResponse**](SignatureRequestListResponse.md)

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

# ```signature_request_release_hold```
> ```SignatureRequestGetResponse signature_request_release_hold(signature_request_id)```

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_release_hold_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to release. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_remind```
> ```SignatureRequestGetResponse signature_request_remind(signature_request_id, signature_request_remind_request)```

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE:** This action can **not** be used with embedded signature requests.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_remind_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to send a reminder for. |  |
| `signature_request_remind_request` | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_remove```
> ```signature_request_remove(signature_request_id)```

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### Example

* Basic Authentication (api_key):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_remove_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to remove. |  |

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

# ```signature_request_send```
> ```SignatureRequestGetResponse signature_request_send(signature_request_send_request)```

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_send_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_request` | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_send_with_template```
> ```SignatureRequestGetResponse signature_request_send_with_template(signature_request_send_with_template_request)```

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_send_with_template_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_with_template_request` | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

# ```signature_request_update```
> ```SignatureRequestGetResponse signature_request_update(signature_request_id, signature_request_update_request)```

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.  Updating the email address of a signer will generate a new `signature_id` value.  **NOTE:** This action cannot be performed on a signature request with an appended signature page.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
REPLACE_ME_WITH_EXAMPLE_FOR__signature_request_update_Python_CODE
```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to update. |  |
| `signature_request_update_request` | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

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

