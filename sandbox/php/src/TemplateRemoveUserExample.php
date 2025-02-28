<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$template_remove_user_request = (new Dropbox\Sign\Model\TemplateRemoveUserRequest())
    ->setEmailAddress("george@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateRemoveUser(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        template_remove_user_request: $template_remove_user_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateRemoveUser: {$e->getMessage()}";
}
