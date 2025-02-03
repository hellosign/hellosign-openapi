# Dropbox\Sign\TemplateApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**templateAddUser()**](TemplateApi.md#templateAddUser) | **POST** /template/add_user/{template_id} | Add User to Template |
| [**templateCreate()**](TemplateApi.md#templateCreate) | **POST** /template/create | Create Template |
| [**templateCreateEmbeddedDraft()**](TemplateApi.md#templateCreateEmbeddedDraft) | **POST** /template/create_embedded_draft | Create Embedded Template Draft |
| [**templateDelete()**](TemplateApi.md#templateDelete) | **POST** /template/delete/{template_id} | Delete Template |
| [**templateFiles()**](TemplateApi.md#templateFiles) | **GET** /template/files/{template_id} | Get Template Files |
| [**templateFilesAsDataUri()**](TemplateApi.md#templateFilesAsDataUri) | **GET** /template/files_as_data_uri/{template_id} | Get Template Files as Data Uri |
| [**templateFilesAsFileUrl()**](TemplateApi.md#templateFilesAsFileUrl) | **GET** /template/files_as_file_url/{template_id} | Get Template Files as File Url |
| [**templateGet()**](TemplateApi.md#templateGet) | **GET** /template/{template_id} | Get Template |
| [**templateList()**](TemplateApi.md#templateList) | **GET** /template/list | List Templates |
| [**templateRemoveUser()**](TemplateApi.md#templateRemoveUser) | **POST** /template/remove_user/{template_id} | Remove User from Template |
| [**templateUpdateFiles()**](TemplateApi.md#templateUpdateFiles) | **POST** /template/update_files/{template_id} | Update Template Files |


## `templateAddUser()`

```php
templateAddUser($template_id, $template_add_user_request): \Dropbox\Sign\Model\TemplateGetResponse
```
Add User to Template

Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateAddUserRequest();
$data->setEmailAddress("george@dropboxsign.com");

$templateId = "f57db65d3f933b5316d398057a36176831451a35";

try {
    $result = $templateApi->templateAddUser($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the Template to give the Account access to. | |
| **template_add_user_request** | [**\Dropbox\Sign\Model\TemplateAddUserRequest**](../Model/TemplateAddUserRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TemplateGetResponse**](../Model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateCreate()`

```php
templateCreate($template_create_request): \Dropbox\Sign\Model\TemplateCreateResponse
```
Create Template

Creates a template that can then be used.

### Example

```php
<?php

require_once __DIR__ . '/vendor/autoload.php';

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername('YOUR_API_KEY');

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$role1 = new Dropbox\Sign\Model\SubTemplateRole();
$role1->setName('Client')
    ->setOrder(0);

$role2 = new Dropbox\Sign\Model\SubTemplateRole();
$role2->setName('Witness')
    ->setOrder(1);

$mergeField1 = new Dropbox\Sign\Model\SubMergeField();
$mergeField1->setName('Full Name')
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_TEXT);

$mergeField2 = new Dropbox\Sign\Model\SubMergeField();
$mergeField2->setName('Is Registered?')
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_CHECKBOX);

$fieldOptions = new Dropbox\Sign\Model\SubFieldOptions();
$fieldOptions->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$data = new Dropbox\Sign\Model\TemplateCreateRequest();
$data->setClientId('37dee8d8440c66d54cfa05d92c160882')
    ->setFiles([new SplFileObject(__DIR__ . '/example_signature_request.pdf')])
    ->setTitle('Test Template')
    ->setSubject('Please sign this document')
    ->setMessage('For your approval')
    ->setSignerRoles([$role1, $role2])
    ->setCcRoles(['Manager'])
    ->setMergeFields([$mergeField1, $mergeField2])
    ->setFieldOptions($fieldOptions)
    ->setTestMode(true);

try {
    $result = $templateApi->templateCreate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo 'Exception when calling Dropbox Sign API: '
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_create_request** | [**\Dropbox\Sign\Model\TemplateCreateRequest**](../Model/TemplateCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TemplateCreateResponse**](../Model/TemplateCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateCreateEmbeddedDraft()`

```php
templateCreateEmbeddedDraft($template_create_embedded_draft_request): \Dropbox\Sign\Model\TemplateCreateEmbeddedDraftResponse
```
Create Embedded Template Draft

The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$role1 = new Dropbox\Sign\Model\SubTemplateRole();
$role1->setName("Client")
    ->setOrder(0);

$role2 = new Dropbox\Sign\Model\SubTemplateRole();
$role2->setName("Witness")
    ->setOrder(1);

$mergeField1 = new Dropbox\Sign\Model\SubMergeField();
$mergeField1->setName("Full Name")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_TEXT);

$mergeField2 = new Dropbox\Sign\Model\SubMergeField();
$mergeField2->setName("Is Registered?")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_CHECKBOX);

$fieldOptions = new Dropbox\Sign\Model\SubFieldOptions();
$fieldOptions->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$data = new Dropbox\Sign\Model\TemplateCreateEmbeddedDraftRequest();
$data->setClientId("37dee8d8440c66d54cfa05d92c160882")
    ->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")])
    ->setTitle("Test Template")
    ->setSubject("Please sign this document")
    ->setMessage("For your approval")
    ->setSignerRoles([$role1, $role2])
    ->setCcRoles(["Manager"])
    ->setMergeFields([$mergeField1, $mergeField2])
    ->setFieldOptions($fieldOptions)
    ->setTestMode(true);

try {
    $result = $templateApi->templateCreateEmbeddedDraft($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_create_embedded_draft_request** | [**\Dropbox\Sign\Model\TemplateCreateEmbeddedDraftRequest**](../Model/TemplateCreateEmbeddedDraftRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TemplateCreateEmbeddedDraftResponse**](../Model/TemplateCreateEmbeddedDraftResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateDelete()`

```php
templateDelete($template_id)
```
Delete Template

Completely deletes the template specified from the account.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $templateApi->templateDelete($templateId);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the Template to delete. | |

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

## `templateFiles()`

```php
templateFiles($template_id, $file_type): \SplFileObject
```
Get Template Files

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";
$fileType = "pdf";

try {
    $result = $templateApi->templateFiles($templateId, $fileType);
    copy($result->getRealPath(), __DIR__ . '/file_response.pdf');
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the template files to retrieve. | |
| **file_type** | **string**| Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] |

### Return type

**\SplFileObject**

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/zip`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateFilesAsDataUri()`

```php
templateFilesAsDataUri($template_id): \Dropbox\Sign\Model\FileResponseDataUri
```
Get Template Files as Data Uri

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $templateApi->templateFilesAsDataUri($templateId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the template files to retrieve. | |

### Return type

[**\Dropbox\Sign\Model\FileResponseDataUri**](../Model/FileResponseDataUri.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateFilesAsFileUrl()`

```php
templateFilesAsFileUrl($template_id, $force_download): \Dropbox\Sign\Model\FileResponse
```
Get Template Files as File Url

Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $templateApi->templateFilesAsFileUrl($templateId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the template files to retrieve. | |
| **force_download** | **int**| By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional] [default to 1] |

### Return type

[**\Dropbox\Sign\Model\FileResponse**](../Model/FileResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateGet()`

```php
templateGet($template_id): \Dropbox\Sign\Model\TemplateGetResponse
```
Get Template

Returns the Template specified by the `template_id` parameter.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$templateId = "f57db65d3f933b5316d398057a36176831451a35";

try {
    $result = $templateApi->templateGet($templateId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the Template to retrieve. | |

### Return type

[**\Dropbox\Sign\Model\TemplateGetResponse**](../Model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateList()`

```php
templateList($account_id, $page, $page_size, $query): \Dropbox\Sign\Model\TemplateListResponse
```
List Templates

Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$accountId = "f57db65d3f933b5316d398057a36176831451a35";

try {
    $result = $templateApi->templateList($accountId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_id** | **string**| Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| **page** | **int**| Which page number of the Template List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string**| String that includes search terms and/or fields to be used to filter the Template objects. | [optional] |

### Return type

[**\Dropbox\Sign\Model\TemplateListResponse**](../Model/TemplateListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateRemoveUser()`

```php
templateRemoveUser($template_id, $template_remove_user_request): \Dropbox\Sign\Model\TemplateGetResponse
```
Remove User from Template

Removes the specified Account's access to the specified Template.

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateRemoveUserRequest();
$data->setEmailAddress("george@dropboxsign.com");

$templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

try {
    $result = $templateApi->templateRemoveUser($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The id of the Template to remove the Account&#39;s access to. | |
| **template_remove_user_request** | [**\Dropbox\Sign\Model\TemplateRemoveUserRequest**](../Model/TemplateRemoveUserRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TemplateGetResponse**](../Model/TemplateGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `templateUpdateFiles()`

```php
templateUpdateFiles($template_id, $template_update_files_request): \Dropbox\Sign\Model\TemplateUpdateFilesResponse
```
Update Template Files

Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).

### Example

```php
<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateUpdateFilesRequest();
$data->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")]);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $templateApi->templateUpdateFiles($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **template_id** | **string**| The ID of the template whose files to update. | |
| **template_update_files_request** | [**\Dropbox\Sign\Model\TemplateUpdateFilesRequest**](../Model/TemplateUpdateFilesRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TemplateUpdateFilesResponse**](../Model/TemplateUpdateFilesResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
