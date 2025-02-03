<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppGet(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiApp#apiAppGet: {$e->getMessage()}";
}
