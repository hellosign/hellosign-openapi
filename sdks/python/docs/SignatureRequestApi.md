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
> ```SignatureRequestGetResponse signature_request_send()```

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
| `files` | **List[io.IOBase]** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] |
| `file_urls` | [**List[str]**](str.md) | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] |
| `signers` | [**List[SubSignatureRequestSigner]**](SubSignatureRequestSigner.md) | Add Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both. | [optional] |
| `grouped_signers` | [**List[SubSignatureRequestGroupedSigners]**](SubSignatureRequestGroupedSigners.md) | Add Grouped Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both. | [optional] |
| `allow_decline` | **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional][default to False] |
| `allow_reassign` | **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **NOTE:** Only available for Premium plan and higher. | [optional][default to False] |
| `attachments` | [**List[SubAttachment]**](SubAttachment.md) | A list describing the attachments | [optional] |
| `cc_email_addresses` | [**List[str]**](str.md) | The email addresses that should be CCed. | [optional] |
| `client_id` | **str** | The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app. | [optional] |
| `custom_fields` | [**List[SubCustomField]**](SubCustomField.md) | When used together with merge fields, &#x60;custom_fields&#x60; allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \\\&quot;send-once\\\&quot; signature requests by adding merge fields with &#x60;form_fields_per_document&#x60; or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with &#x60;custom_fields&#x60; together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing &#x60;custom_fields&#x60; on subsequent signature requests referencing that template. | [optional] |
| `field_options` | [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] |
| `form_field_groups` | [**List[SubFormFieldGroup]**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] |
| `form_field_rules` | [**List[SubFormFieldRule]**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] |
| `form_fields_per_document` | [**List[SubFormFieldsPerDocumentBase]**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | [optional] |
| `hide_text_tags` | **bool** | Enables automatic Text Tag removal when set to true.  **NOTE:** Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on &#x60;false&#x60; and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information. | [optional][default to False] |
| `is_qualified_signature` | **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [Qualified Electronic Signatures](https://www.hellosign.com/features/qualified-electronic-signatures) (QES), which requires a face-to-face call to verify the signer&#39;s identity.&lt;br&gt; **NOTE:** QES is only available on the Premium API plan as an add-on purchase. Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. | [optional][default to False] |
| `is_eid` | **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [electronic identification (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify their identity with an eID provider to sign a document.&lt;br&gt; **NOTE:** eID is only available on the Premium API plan. Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. | [optional][default to False] |
| `message` | **str** | The custom message in the email that will be sent to the signers. | [optional] |
| `metadata` | [**Dict[str, object]**](Dict.md) | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] |
| `signing_options` | [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] |
| `signing_redirect_url` | **str** | The URL you want signers redirected to after they successfully sign. | [optional] |
| `subject` | **str** | The subject in the email that will be sent to the signers. | [optional] |
| `test_mode` | **bool** | Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional][default to False] |
| `title` | **str** | The title you want to assign to the SignatureRequest. | [optional] |
| `use_text_tags` | **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or &#x60;false&#x60;. | [optional][default to False] |
| `expires_at` | **int** | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. | [optional] |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

