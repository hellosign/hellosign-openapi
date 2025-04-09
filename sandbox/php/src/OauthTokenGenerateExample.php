<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$o_auth_token_generate_request = (new Dropbox\Sign\Model\OAuthTokenGenerateRequest())
    ->setClientId("cc91c61d00f8bb2ece1428035716b")
    ->setClientSecret("1d14434088507ffa390e6f5528465")
    ->setCode("1b0d28d90c86c141")
    ->setState("900e06e2")
    ->setGrantType("authorization_code");

try {
    $response = (new Dropbox\Sign\Api\OAuthApi(config: $config))->oauthTokenGenerate(
        o_auth_token_generate_request: $o_auth_token_generate_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling OAuthApi#oauthTokenGenerate: {$e->getMessage()}";
}
