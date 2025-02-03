<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

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
    echo "Exception when calling Report#reportCreate: {$e->getMessage()}";
}
