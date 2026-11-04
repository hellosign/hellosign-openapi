<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\ApiKeyApi(config: $config))->apiKeyList();

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiKeyApi#apiKeyList: {$e->getMessage()}";
}
