<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new HelloSign\Api\SignatureRequestApi($config);

$signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";
$fileType = "pdf";

try {
    $result = $signatureRequestApi->signatureRequestFiles($signatureRequestId, $fileType);
    copy($result->getRealPath(), __DIR__ . '/file_response.pdf');
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
