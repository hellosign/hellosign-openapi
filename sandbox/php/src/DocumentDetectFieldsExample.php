<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$document_field_detection_request = (new Dropbox\Sign\Model\DocumentFieldDetectionRequest())
    ->setDetectionMode("annotations")
    ->setFile(new SplFileObject("./example_document.pdf"))
    ->setPageRange("all");

try {
    $response = (new Dropbox\Sign\Api\DocumentApi(config: $config))->documentDetectFields(
        document_field_detection_request: $document_field_detection_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling DocumentApi#documentDetectFields: {$e->getMessage()}";
}
