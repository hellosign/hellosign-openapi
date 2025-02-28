<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppDelete(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppDelete: {$e->getMessage()}";
}
