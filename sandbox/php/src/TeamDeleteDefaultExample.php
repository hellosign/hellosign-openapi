<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    (new Dropbox\Sign\Api\TeamApi(config: $config))->teamDelete();
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Team#teamDelete: {$e->getMessage()}";
}
