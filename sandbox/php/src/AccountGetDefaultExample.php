<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountGet();

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Account#accountGet: {$e->getMessage()}";
}
