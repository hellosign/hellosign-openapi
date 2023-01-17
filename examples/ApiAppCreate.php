<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$apiAppApi = new HelloSign\Api\ApiAppApi($config);

$oauth = new HelloSign\Model\SubOAuth();
$oauth->setCallbackUrl("https://example.com/oauth")
    ->setScopes([
        HelloSign\Model\SubOAuth::SCOPES_BASIC_ACCOUNT_INFO,
        HelloSign\Model\SubOAuth::SCOPES_REQUEST_SIGNATURE,
    ]);

$whiteLabelingOptions = new HelloSign\Model\SubWhiteLabelingOptions();
$whiteLabelingOptions->setPrimaryButtonColor("#00b3e6")
    ->setPrimaryButtonTextColor("#ffffff");

$customLogoFile = new SplFileObject(__DIR__ . "/CustomLogoFile.png");

$data = new HelloSign\Model\ApiAppCreateRequest();
$data->setName("My Production App")
    ->setDomains(["example.com"])
    ->setOauth($oauth)
    ->setWhiteLabelingOptions($whiteLabelingOptions)
    ->setCustomLogoFile($customLogoFile);

try {
    $result = $apiAppApi->apiAppCreate($data);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
