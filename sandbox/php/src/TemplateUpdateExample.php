<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$template_update_request = (new Dropbox\Sign\Model\TemplateUpdateRequest())
    ->setAllowFormView(false)
    ->setTitle("Test Title")
    ->setSubject("Test Subject")
    ->setMessage("Test Message")
    ->setCcRoles([
        "CC Role 1",
        "CC Role 2",
    ]);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateUpdate(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        template_update_request: $template_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateUpdate: {$e->getMessage()}";
}
