<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$merge_fields = [
];

$embedded_edit_url_request = (new Dropbox\Sign\Model\EmbeddedEditUrlRequest())
    ->setCcRoles([
        "",
    ])
    ->setMergeFields($merge_fields);

try {
    $response = (new Dropbox\Sign\Api\EmbeddedApi(config: $config))->embeddedEditUrl(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        embedded_edit_url_request: $embedded_edit_url_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling EmbeddedApi#embeddedEditUrl: {$e->getMessage()}";
}
