<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$reportApi = new HelloSign\Api\ReportApi($config);

$data = new HelloSign\Model\ReportCreateRequest();
$data->setStartDate("09/01/2020")
    ->setEndDate("09/01/2020")
    ->setReportType([
        HelloSign\Model\ReportCreateRequest::REPORT_TYPE_USER_ACTIVITY,
        HelloSign\Model\ReportCreateRequest::REPORT_TYPE_DOCUMENT_STATUS,
    ]);

try {
    $result = $reportApi->reportCreate($data);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling HelloSign API: "
        . print_r($error->getError());
}
