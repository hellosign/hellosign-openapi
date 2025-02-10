<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateAddUserRequest();
$data->setEmailAddress("george@dropboxsign.com");

$templateId = "f57db65d3f933b5316d398057a36176831451a35";

try {
    $result = $templateApi->templateAddUser($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
