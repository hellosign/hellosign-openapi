<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\ApiKeyApi(config: $config))->apiKeyGet(
        api_key_id: "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiKeyApi#apiKeyGet: {$e->getMessage()}";
}
