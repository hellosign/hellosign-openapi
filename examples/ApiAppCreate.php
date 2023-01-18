<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$apiAppApi = new Dropbox\Sign\Api\ApiAppApi($config);

$oauth = new Dropbox\Sign\Model\SubOAuth();
$oauth->setCallbackUrl("https://example.com/oauth")
    ->setScopes([
        Dropbox\Sign\Model\SubOAuth::SCOPES_BASIC_ACCOUNT_INFO,
        Dropbox\Sign\Model\SubOAuth::SCOPES_REQUEST_SIGNATURE,
    ]);

$whiteLabelingOptions = new Dropbox\Sign\Model\SubWhiteLabelingOptions();
$whiteLabelingOptions->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$customLogoFile = new SplFileObject(__DIR__ . "/CustomLogoFile.png");

$data = new Dropbox\Sign\Model\ApiAppCreateRequest();
$data->setName("My Production App")
    ->setDomains(["example.com"])
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($whiteLabelingOptions)
    ->setCustomLogoFile($customLogoFile);

try {
    $result = $apiAppApi->apiAppCreate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
