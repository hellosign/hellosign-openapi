<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$unclaimedDraftApi = new Dropbox\Sign\Api\UnclaimedDraftApi($config);

$signer1 = new Dropbox\Sign\Model\SubUnclaimedDraftTemplateSigner();
$signer1->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$cc1 = new Dropbox\Sign\Model\SubCC();
$cc1->setRole("Accounting")
    ->setEmailAddress("accounting@dropboxsign.com");

$data = new Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedWithTemplateRequest();
$data->setClientId("ec64a202072370a737edf4a0eb7f4437")
    ->setTemplateIds(["61a832ff0d8423f91d503e76bfbcc750f7417c78"])
    ->setRequesterEmailAddress("jack@dropboxsign.com")
    ->setSigners([$signer1])
    ->setCcs([$cc1])
    ->setTestMode(true);

try {
    $result = $unclaimedDraftApi->unclaimedDraftCreateEmbeddedWithTemplate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
