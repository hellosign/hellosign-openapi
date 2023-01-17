<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$embeddedApi = new HelloSign\Api\EmbeddedApi($config);

$signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

try {
    $result = $embeddedApi->embeddedSignUrl($signatureId);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
