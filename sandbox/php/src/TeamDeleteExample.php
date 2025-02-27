<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    (new Dropbox\Sign\Api\TeamApi(config: $config))->teamDelete();
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamDelete: {$e->getMessage()}";
}
