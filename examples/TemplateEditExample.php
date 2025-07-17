<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$template_edit_request = (new Dropbox\Sign\Model\TemplateEditRequest())
    ->setCcRoles([
        "Role 1",
        "Role 2",
    ]);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateEdit(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        template_edit_request: $template_edit_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateEdit: {$e->getMessage()}";
}
