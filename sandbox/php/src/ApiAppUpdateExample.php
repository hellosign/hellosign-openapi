<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$oauth = (new Dropbox\Sign\Model\SubOAuth())
    ->setCallbackUrl("https://example.com/oauth")
    ->setScopes([
        Dropbox\Sign\Model\SubOAuth::SCOPES_BASIC_ACCOUNT_INFO,
        Dropbox\Sign\Model\SubOAuth::SCOPES_REQUEST_SIGNATURE,
    ]);

$white_labeling_options = (new Dropbox\Sign\Model\SubWhiteLabelingOptions())
    ->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$api_app_update_request = (new Dropbox\Sign\Model\ApiAppUpdateRequest())
    ->setCallbackUrl("https://example.com/dropboxsign")
    ->setName("New Name")
    ->setDomains([
        "example.com",
    ])
    ->setCustomLogoFile(new SplFileObject("CustomLogoFile.png"))
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($white_labeling_options);

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppUpdate(
        client_id: "0dd3b823a682527788c4e40cb7b6f7e9",
        api_app_update_request: $api_app_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppUpdate: {$e->getMessage()}";
}
