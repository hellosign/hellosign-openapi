<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$bulkSendJobApi = new Dropbox\Sign\Api\BulkSendJobApi($config);

$bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

try {
    $result = $bulkSendJobApi->bulkSendJobGet($bulkSendJobId);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
