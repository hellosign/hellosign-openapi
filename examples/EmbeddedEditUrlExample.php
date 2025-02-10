<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$embeddedApi = new Dropbox\Sign\Api\EmbeddedApi($config);

$data = new Dropbox\Sign\Model\EmbeddedEditUrlRequest();
$data->setCcRoles([""])
    ->setMergeFields([]);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $embeddedApi->embeddedEditUrl($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
