<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$teamApi = new HelloSign\Api\TeamApi($config);

$data = new HelloSign\Model\TeamRemoveMemberRequest();
$data->setEmailAddress("teammate@dropboxsign.com")
    ->setNewOwnerEmailAddress("new_teammate@dropboxsign.com");

try {
    $result = $teamApi->teamRemoveMember($data);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
