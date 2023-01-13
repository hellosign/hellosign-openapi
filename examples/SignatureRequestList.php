<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new HelloSign\Api\SignatureRequestApi($config);

$accountId = null;
$page = 1;

try {
    $result = $signatureRequestApi->signatureRequestList($accountId, $page);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling HelloSign API: "
        . print_r($error->getError());
}
