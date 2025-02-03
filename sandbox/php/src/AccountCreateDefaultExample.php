<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$account_create_request = (new Dropbox\Sign\Model\AccountCreateRequest())
    ->setEmailAddress("newuser@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountCreate(
        account_create_request: $account_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Account#accountCreate: {$e->getMessage()}";
}
