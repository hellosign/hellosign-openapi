<?php

require_once __DIR__ . "/vendor/autoload.php";

$oauthApi = new Dropbox\Sign\Api\OAuthApi(
    Dropbox\Sign\Configuration::getDefaultConfiguration()
);

$data = new Dropbox\Sign\Model\OAuthTokenRefreshRequest();
$data->setRefreshToken("hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3");

try {
    $result = $oauthApi->oauthTokenRefresh($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
