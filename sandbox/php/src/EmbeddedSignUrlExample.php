<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\EmbeddedApi(config: $config))->embeddedSignUrl(
        signature_id: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling EmbeddedApi#embeddedSignUrl: {$e->getMessage()}";
}
