<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSignSDK\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$api = new HelloSignSDK\Api\ReportApi($config);

$data = new HelloSignSDK\Model\ReportCreateRequest();
$data->setStartDate("09/01/2020")
    ->setEndDate("09/01/2020")
    ->setReportType([
        HelloSignSDK\Model\ReportCreateRequest::REPORT_TYPE_USER_ACTIVITY,
        HelloSignSDK\Model\ReportCreateRequest::REPORT_TYPE_DOCUMENT_STATUS,
    ]);

try {
    $result = $api->reportCreate($data);
    print_r($result);
} catch (HelloSignSDK\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling HelloSign API: "
        . print_r($error->getError());
}
