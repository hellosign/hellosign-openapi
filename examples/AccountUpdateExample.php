<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$account_update_request = (new Dropbox\Sign\Model\AccountUpdateRequest())
    ->setCallbackUrl("https://www.example.com/callback")
    ->setLocale("en-US");

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountUpdate(
        account_update_request: $account_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountUpdate: {$e->getMessage()}";
}
