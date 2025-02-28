<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com")
    ->setOrder(1);

$signers = [
    $signers_1,
    $signers_2,
];

$signature_request_create_embedded_request = (new Dropbox\Sign\Model\SignatureRequestCreateEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setFiles([
    ])
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestCreateEmbedded(
        signature_request_create_embedded_request: $signature_request_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded: {$e->getMessage()}";
}
