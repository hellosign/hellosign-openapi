# Dropbox\Sign\BulkSendJobApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**bulkSendJobGet()**](BulkSendJobApi.md#bulkSendJobGet) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job |
| [**bulkSendJobList()**](BulkSendJobApi.md#bulkSendJobList) | **GET** /bulk_send_job/list | List Bulk Send Jobs |


## `bulkSendJobGet()`

```php
bulkSendJobGet($bulk_send_job_id, $page, $page_size): \Dropbox\Sign\Model\BulkSendJobGetResponse
```
Get Bulk Send Job

Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.

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
    $response = (new Dropbox\Sign\Api\BulkSendJobApi(config: $config))->bulkSendJobGet(
        bulk_send_job_id: "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling BulkSendJobApi#bulkSendJobGet: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **bulk_send_job_id** | **string**| The id of the BulkSendJob to retrieve. | |
| **page** | **int**| Which page number of the BulkSendJob list to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\BulkSendJobGetResponse**](../Model/BulkSendJobGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `bulkSendJobList()`

```php
bulkSendJobList($page, $page_size): \Dropbox\Sign\Model\BulkSendJobListResponse
```
List Bulk Send Jobs

Returns a list of BulkSendJob that you can access.

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
    $response = (new Dropbox\Sign\Api\BulkSendJobApi(config: $config))->bulkSendJobList(
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling BulkSendJobApi#bulkSendJobList: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Which page number of the BulkSendJob List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is 20. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\BulkSendJobListResponse**](../Model/BulkSendJobListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
