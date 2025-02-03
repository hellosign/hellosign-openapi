<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$white_labeling_options = (new Dropbox\Sign\Model\SubWhiteLabelingOptions())
    ->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$api_app_update_request = (new Dropbox\Sign\Model\ApiAppUpdateRequest())
    ->setCallbackUrl("https://example.com/dropboxsign")
    ->setName("New Name")
    ->setWhiteLabelingOptions($white_labeling_options);

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppUpdate(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
        api_app_update_request: $api_app_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiApp#apiAppUpdate: {$e->getMessage()}";
}
