<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateFiles(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        file_type: null,
    );

    copy($response->getRealPath(), __DIR__ . '/file_response.zip');
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Template#templateFiles: {$e->getMessage()}";
}
