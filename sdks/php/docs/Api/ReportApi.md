# Dropbox\Sign\ReportApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**reportCreate()**](ReportApi.md#reportCreate) | **POST** /report/create | Create Report |


## `reportCreate()`

```php
reportCreate($report_create_request): \Dropbox\Sign\Model\ReportCreateResponse
```
Create Report

Request the creation of one or more report(s).  When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$report_create_request = (new Dropbox\Sign\Model\ReportCreateRequest())
    ->setStartDate("09/01/2020")
    ->setEndDate("09/01/2020")
    ->setReportType([
        Dropbox\Sign\Model\ReportCreateRequest::REPORT_TYPE_USER_ACTIVITY,
        Dropbox\Sign\Model\ReportCreateRequest::REPORT_TYPE_DOCUMENT_STATUS,
    ]);

try {
    $response = (new Dropbox\Sign\Api\ReportApi(config: $config))->reportCreate(
        report_create_request: $report_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ReportApi#reportCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **report_create_request** | [**\Dropbox\Sign\Model\ReportCreateRequest**](../Model/ReportCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\ReportCreateResponse**](../Model/ReportCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
