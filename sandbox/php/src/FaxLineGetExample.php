<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineGet(
        number: "123-123-1234",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineGet: {$e->getMessage()}";
}
