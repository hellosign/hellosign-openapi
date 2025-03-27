# Dropbox\Sign\SignatureRequestApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**signatureRequestBulkCreateEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestBulkCreateEmbeddedWithTemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template |
| [**signatureRequestBulkSendWithTemplate()**](SignatureRequestApi.md#signatureRequestBulkSendWithTemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template |
| [**signatureRequestCancel()**](SignatureRequestApi.md#signatureRequestCancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request |
| [**signatureRequestCreateEmbedded()**](SignatureRequestApi.md#signatureRequestCreateEmbedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request |
| [**signatureRequestCreateEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestCreateEmbeddedWithTemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template |
| [**signatureRequestEdit()**](SignatureRequestApi.md#signatureRequestEdit) | **PUT** /signature_request/edit/{signature_request_id} | Edit Signature Request |
| [**signatureRequestEditEmbedded()**](SignatureRequestApi.md#signatureRequestEditEmbedded) | **PUT** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request |
| [**signatureRequestEditEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestEditEmbeddedWithTemplate) | **PUT** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template |
| [**signatureRequestEditWithTemplate()**](SignatureRequestApi.md#signatureRequestEditWithTemplate) | **PUT** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template |
| [**signatureRequestFiles()**](SignatureRequestApi.md#signatureRequestFiles) | **GET** /signature_request/files/{signature_request_id} | Download Files |
| [**signatureRequestFilesAsDataUri()**](SignatureRequestApi.md#signatureRequestFilesAsDataUri) | **GET** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri |
| [**signatureRequestFilesAsFileUrl()**](SignatureRequestApi.md#signatureRequestFilesAsFileUrl) | **GET** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url |
| [**signatureRequestGet()**](SignatureRequestApi.md#signatureRequestGet) | **GET** /signature_request/{signature_request_id} | Get Signature Request |
| [**signatureRequestList()**](SignatureRequestApi.md#signatureRequestList) | **GET** /signature_request/list | List Signature Requests |
| [**signatureRequestReleaseHold()**](SignatureRequestApi.md#signatureRequestReleaseHold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request |
| [**signatureRequestRemind()**](SignatureRequestApi.md#signatureRequestRemind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder |
| [**signatureRequestRemove()**](SignatureRequestApi.md#signatureRequestRemove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access |
| [**signatureRequestSend()**](SignatureRequestApi.md#signatureRequestSend) | **POST** /signature_request/send | Send Signature Request |
| [**signatureRequestSendWithTemplate()**](SignatureRequestApi.md#signatureRequestSendWithTemplate) | **POST** /signature_request/send_with_template | Send with Template |
| [**signatureRequestUpdate()**](SignatureRequestApi.md#signatureRequestUpdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request |


## `signatureRequestBulkCreateEmbeddedWithTemplate()`

```php
signatureRequestBulkCreateEmbeddedWithTemplate($signature_request_bulk_create_embedded_with_template_request): \Dropbox\Sign\Model\BulkSendJobSendResponse
```
Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Only available for Standard plan and higher.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$signer_list_2_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("123 LLC");

$signer_list_2_custom_fields = [
    $signer_list_2_custom_fields_1,
];

$signer_list_2_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("Mary")
    ->setEmailAddress("mary@example.com")
    ->setPin("gd9as5b");

$signer_list_2_signers = [
    $signer_list_2_signers_1,
];

$signer_list_1_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("ABC Corp");

$signer_list_1_custom_fields = [
    $signer_list_1_custom_fields_1,
];

$signer_list_1_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com")
    ->setPin("d79a3td");

$signer_list_1_signers = [
    $signer_list_1_signers_1,
];

$signer_list_1 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_1_custom_fields)
    ->setSigners($signer_list_1_signers);

$signer_list_2 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_2_custom_fields)
    ->setSigners($signer_list_2_signers);

$signer_list = [
    $signer_list_1,
    $signer_list_2,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$signature_request_bulk_create_embedded_with_template_request = (new Dropbox\Sign\Model\SignatureRequestBulkCreateEmbeddedWithTemplateRequest())
    ->setClientId("1a659d9ad95bccd307ecad78d72192f8")
    ->setTemplateIds([
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSignerList($signer_list)
    ->setCcs($ccs);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestBulkCreateEmbeddedWithTemplate(
        signature_request_bulk_create_embedded_with_template_request: $signature_request_bulk_create_embedded_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_bulk_create_embedded_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](../Model/SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\BulkSendJobSendResponse**](../Model/BulkSendJobSendResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestBulkSendWithTemplate()`

```php
signatureRequestBulkSendWithTemplate($signature_request_bulk_send_with_template_request): \Dropbox\Sign\Model\BulkSendJobSendResponse
```
Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.  **NOTE:** Only available for Standard plan and higher.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signer_list_2_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("123 LLC");

$signer_list_2_custom_fields = [
    $signer_list_2_custom_fields_1,
];

$signer_list_2_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("Mary")
    ->setEmailAddress("mary@example.com")
    ->setPin("gd9as5b");

$signer_list_2_signers = [
    $signer_list_2_signers_1,
];

$signer_list_1_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("ABC Corp");

$signer_list_1_custom_fields = [
    $signer_list_1_custom_fields_1,
];

$signer_list_1_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com")
    ->setPin("d79a3td");

$signer_list_1_signers = [
    $signer_list_1_signers_1,
];

$signer_list_1 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_1_custom_fields)
    ->setSigners($signer_list_1_signers);

$signer_list_2 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_2_custom_fields)
    ->setSigners($signer_list_2_signers);

$signer_list = [
    $signer_list_1,
    $signer_list_2,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$signature_request_bulk_send_with_template_request = (new Dropbox\Sign\Model\SignatureRequestBulkSendWithTemplateRequest())
    ->setTemplateIds([
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSignerList($signer_list)
    ->setCcs($ccs);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestBulkSendWithTemplate(
        signature_request_bulk_send_with_template_request: $signature_request_bulk_send_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestBulkSendWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_bulk_send_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestBulkSendWithTemplateRequest**](../Model/SignatureRequestBulkSendWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\BulkSendJobSendResponse**](../Model/BulkSendJobSendResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestCancel()`

```php
signatureRequestCancel($signature_request_id)
```
Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestCancel(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestCancel: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the incomplete SignatureRequest to cancel. | |

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

## `signatureRequestCreateEmbedded()`

```php
signatureRequestCreateEmbedded($signature_request_create_embedded_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com")
    ->setOrder(1);

$signers = [
    $signers_1,
    $signers_2,
];

$signature_request_create_embedded_request = (new Dropbox\Sign\Model\SignatureRequestCreateEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setFiles([
    ])
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestCreateEmbedded(
        signature_request_create_embedded_request: $signature_request_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_create_embedded_request** | [**\Dropbox\Sign\Model\SignatureRequestCreateEmbeddedRequest**](../Model/SignatureRequestCreateEmbeddedRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestCreateEmbeddedWithTemplate()`

```php
signatureRequestCreateEmbeddedWithTemplate($signature_request_create_embedded_with_template_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$signature_request_create_embedded_with_template_request = (new Dropbox\Sign\Model\SignatureRequestCreateEmbeddedWithTemplateRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setTemplateIds([
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestCreateEmbeddedWithTemplate(
        signature_request_create_embedded_with_template_request: $signature_request_create_embedded_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_create_embedded_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestCreateEmbeddedWithTemplateRequest**](../Model/SignatureRequestCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEdit()`

```php
signatureRequestEdit($signature_request_id, $signature_request_edit_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.  **NOTE:** Edit and resend will not deduct your signature request quota.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$field_options = (new Dropbox\Sign\Model\SubFieldOptions())
    ->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com")
    ->setOrder(1);

$signers = [
    $signers_1,
    $signers_2,
];

$signature_request_edit_request = (new Dropbox\Sign\Model\SignatureRequestEditRequest())
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setFiles([
    ])
    ->setMetadata(json_decode(<<<'EOD'
        {
            "custom_id": 1234,
            "custom_text": "NDA #9"
        }
    EOD, true))
    ->setFieldOptions($field_options)
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestEdit(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_request: $signature_request_edit_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestEdit: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to edit. | |
| **signature_request_edit_request** | [**\Dropbox\Sign\Model\SignatureRequestEditRequest**](../Model/SignatureRequestEditRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditEmbedded()`

```php
signatureRequestEditEmbedded($signature_request_id, $signature_request_edit_embedded_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com")
    ->setOrder(1);

$signers = [
    $signers_1,
    $signers_2,
];

$signature_request_edit_embedded_request = (new Dropbox\Sign\Model\SignatureRequestEditEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setFiles([
    ])
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestEditEmbedded(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_embedded_request: $signature_request_edit_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestEditEmbedded: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to edit. | |
| **signature_request_edit_embedded_request** | [**\Dropbox\Sign\Model\SignatureRequestEditEmbeddedRequest**](../Model/SignatureRequestEditEmbeddedRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditEmbeddedWithTemplate()`

```php
signatureRequestEditEmbeddedWithTemplate($signature_request_id, $signature_request_edit_embedded_with_template_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$signature_request_edit_embedded_with_template_request = (new Dropbox\Sign\Model\SignatureRequestEditEmbeddedWithTemplateRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setTemplateIds([
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestEditEmbeddedWithTemplate(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_embedded_with_template_request: $signature_request_edit_embedded_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to edit. | |
| **signature_request_edit_embedded_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestEditEmbeddedWithTemplateRequest**](../Model/SignatureRequestEditEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditWithTemplate()`

```php
signatureRequestEditWithTemplate($signature_request_id, $signature_request_edit_with_template_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.  **NOTE:** Edit and resend will not deduct your signature request quota.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$custom_fields_1 = (new Dropbox\Sign\Model\SubCustomField())
    ->setName("Cost")
    ->setEditor("Client")
    ->setRequired(true)
    ->setValue("\$20,000");

$custom_fields = [
    $custom_fields_1,
];

$signature_request_edit_with_template_request = (new Dropbox\Sign\Model\SignatureRequestEditWithTemplateRequest())
    ->setTemplateIds([
        "61a832ff0d8423f91d503e76bfbcc750f7417c78",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSigningOptions($signing_options)
    ->setSigners($signers)
    ->setCcs($ccs)
    ->setCustomFields($custom_fields);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestEditWithTemplate(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_with_template_request: $signature_request_edit_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestEditWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to edit. | |
| **signature_request_edit_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestEditWithTemplateRequest**](../Model/SignatureRequestEditWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestFiles()`

```php
signatureRequestFiles($signature_request_id, $file_type): \SplFileObject
```
Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestFiles(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        file_type: "pdf",
    );

    copy($response->getRealPath(), __DIR__ . '/file_response');
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestFiles: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to retrieve. | |
| **file_type** | **string**| Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] [default to &#39;pdf&#39;] |

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

## `signatureRequestFilesAsDataUri()`

```php
signatureRequestFilesAsDataUri($signature_request_id): \Dropbox\Sign\Model\FileResponseDataUri
```
Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestFilesAsDataUri(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestFilesAsDataUri: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to retrieve. | |

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

## `signatureRequestFilesAsFileUrl()`

```php
signatureRequestFilesAsFileUrl($signature_request_id, $force_download): \Dropbox\Sign\Model\FileResponse
```
Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestFilesAsFileUrl(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        force_download: 1,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestFilesAsFileUrl: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to retrieve. | |
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

## `signatureRequestGet()`

```php
signatureRequestGet($signature_request_id): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestGet(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to retrieve. | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestList()`

```php
signatureRequestList($account_id, $page, $page_size, $query): \Dropbox\Sign\Model\SignatureRequestListResponse
```
List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestList(
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestList: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **account_id** | **string**| Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| **page** | **int**| Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string**| String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional] |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestListResponse**](../Model/SignatureRequestListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestReleaseHold()`

```php
signatureRequestReleaseHold($signature_request_id): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestReleaseHold(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestReleaseHold: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to release. | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestRemind()`

```php
signatureRequestRemind($signature_request_id, $signature_request_remind_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE:** This action can **not** be used with embedded signature requests.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signature_request_remind_request = (new Dropbox\Sign\Model\SignatureRequestRemindRequest())
    ->setEmailAddress("john@example.com");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestRemind(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_remind_request: $signature_request_remind_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestRemind: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to send a reminder for. | |
| **signature_request_remind_request** | [**\Dropbox\Sign\Model\SignatureRequestRemindRequest**](../Model/SignatureRequestRemindRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestRemove()`

```php
signatureRequestRemove($signature_request_id)
```
Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestRemove(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestRemove: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to remove. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestSend()`

```php
signatureRequestSend($signature_request_send_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$field_options = (new Dropbox\Sign\Model\SubFieldOptions())
    ->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com")
    ->setOrder(1);

$signers = [
    $signers_1,
    $signers_2,
];

$signature_request_send_request = (new Dropbox\Sign\Model\SignatureRequestSendRequest())
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setFiles([
    ])
    ->setMetadata(json_decode(<<<'EOD'
        {
            "custom_id": 1234,
            "custom_text": "NDA #9"
        }
    EOD, true))
    ->setFieldOptions($field_options)
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestSend(
        signature_request_send_request: $signature_request_send_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestSend: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_send_request** | [**\Dropbox\Sign\Model\SignatureRequestSendRequest**](../Model/SignatureRequestSendRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestSendWithTemplate()`

```php
signatureRequestSendWithTemplate($signature_request_send_with_template_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$custom_fields_1 = (new Dropbox\Sign\Model\SubCustomField())
    ->setName("Cost")
    ->setEditor("Client")
    ->setRequired(true)
    ->setValue("\$20,000");

$custom_fields = [
    $custom_fields_1,
];

$signature_request_send_with_template_request = (new Dropbox\Sign\Model\SignatureRequestSendWithTemplateRequest())
    ->setTemplateIds([
        "61a832ff0d8423f91d503e76bfbcc750f7417c78",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSigningOptions($signing_options)
    ->setSigners($signers)
    ->setCcs($ccs)
    ->setCustomFields($custom_fields);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestSendWithTemplate(
        signature_request_send_with_template_request: $signature_request_send_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestSendWithTemplate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_send_with_template_request** | [**\Dropbox\Sign\Model\SignatureRequestSendWithTemplateRequest**](../Model/SignatureRequestSendWithTemplateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestUpdate()`

```php
signatureRequestUpdate($signature_request_id, $signature_request_update_request): \Dropbox\Sign\Model\SignatureRequestGetResponse
```
Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.  Updating the email address of a signer will generate a new `signature_id` value.  **NOTE:** This action cannot be performed on a signature request with an appended signature page.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signature_request_update_request = (new Dropbox\Sign\Model\SignatureRequestUpdateRequest())
    ->setSignatureId("2f9781e1a8e2045224d808c153c2e1d3df6f8f2f")
    ->setEmailAddress("john@example.com");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestUpdate(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_update_request: $signature_request_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestUpdate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signature_request_id** | **string**| The id of the SignatureRequest to update. | |
| **signature_request_update_request** | [**\Dropbox\Sign\Model\SignatureRequestUpdateRequest**](../Model/SignatureRequestUpdateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\SignatureRequestGetResponse**](../Model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
