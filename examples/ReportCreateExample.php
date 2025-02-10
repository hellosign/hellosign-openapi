<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$reportApi = new Dropbox\Sign\Api\ReportApi($config);

$data = new Dropbox\Sign\Model\ReportCreateRequest();
$data->setStartDate("09/01/2020")
    ->setEndDate("09/01/2020")
    ->setReportType([
        Dropbox\Sign\Model\ReportCreateRequest::REPORT_TYPE_USER_ACTIVITY,
        Dropbox\Sign\Model\ReportCreateRequest::REPORT_TYPE_DOCUMENT_STATUS,
    ]);

try {
    $result = $reportApi->reportCreate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
