<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateRemoveUserRequest();
$data->setEmailAddress("george@dropboxsign.com");

$templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

try {
    $result = $templateApi->templateRemoveUser($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
