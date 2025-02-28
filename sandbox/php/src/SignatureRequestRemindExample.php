<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signature_request_remind_request = (new Dropbox\Sign\Model\SignatureRequestRemindRequest())
    ->setEmailAddress("john@example.com");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestRemind(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_remind_request: $signature_request_remind_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestRemind: {$e->getMessage()}";
}
