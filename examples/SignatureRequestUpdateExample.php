<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signature_request_update_request = (new Dropbox\Sign\Model\SignatureRequestUpdateRequest())
    ->setSignatureId("2f9781e1a8e2045224d808c153c2e1d3df6f8f2f")
    ->setEmailAddress("john@example.com");

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestUpdate(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_update_request: $signature_request_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestUpdate: {$e->getMessage()}";
}
