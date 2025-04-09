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

$api_app_create_request = (new Dropbox\Sign\Model\ApiAppCreateRequest())
    ->setName("My Production App")
    ->setDomains([
        "example.com",
    ])
    ->setCustomLogoFile(new SplFileObject("CustomLogoFile.png"))
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($white_labeling_options);

try {
    $response = (new Dropbox\Sign\Api\ApiAppApi(config: $config))->apiAppCreate(
        api_app_create_request: $api_app_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiAppApi#apiAppCreate: {$e->getMessage()}";
}
