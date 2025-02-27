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
