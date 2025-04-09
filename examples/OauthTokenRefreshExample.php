<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$o_auth_token_refresh_request = (new Dropbox\Sign\Model\OAuthTokenRefreshRequest())
    ->setGrantType("refresh_token")
    ->setRefreshToken("hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3");

try {
    $response = (new Dropbox\Sign\Api\OAuthApi(config: $config))->oauthTokenRefresh(
        o_auth_token_refresh_request: $o_auth_token_refresh_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling OAuthApi#oauthTokenRefresh: {$e->getMessage()}";
}
