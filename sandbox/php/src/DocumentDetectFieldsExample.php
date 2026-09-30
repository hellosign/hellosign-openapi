<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->documentDetectFields(
        detection_mode: "annotations",
        file: new SplFileObject("./example_document.pdf"),
        page_range: "all",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#documentDetectFields: {$e->getMessage()}";
}
