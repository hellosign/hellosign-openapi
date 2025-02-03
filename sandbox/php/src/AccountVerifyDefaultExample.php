<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$account_verify_request = (new Dropbox\Sign\Model\AccountVerifyRequest())
    ->setEmailAddress("some_user@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountVerify(
        account_verify_request: $account_verify_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Account#accountVerify: {$e->getMessage()}";
}
