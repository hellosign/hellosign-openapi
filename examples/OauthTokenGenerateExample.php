<?php

require_once __DIR__ . "/vendor/autoload.php";

$oauthApi = new Dropbox\Sign\Api\OAuthApi(
    Dropbox\Sign\Configuration::getDefaultConfiguration()
);

$data = new Dropbox\Sign\Model\OAuthTokenGenerateRequest();
$data->setState("900e06e2")
    ->setCode("1b0d28d90c86c141")
    ->setClientId("cc91c61d00f8bb2ece1428035716b")
    ->setClientSecret("1d14434088507ffa390e6f5528465");

try {
    $result = $oauthApi->oauthTokenGenerate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
