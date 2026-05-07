<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$grouped_signers_2_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Bob")
    ->setEmailAddress("bob@example.com");

$grouped_signers_2_signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Charlie")
    ->setEmailAddress("charlie@example.com");

$grouped_signers_2_signers = [
    $grouped_signers_2_signers_1,
    $grouped_signers_2_signers_2,
];

$grouped_signers_1_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com");

$grouped_signers_1_signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestSigner())
    ->setName("Jill")
    ->setEmailAddress("jill@example.com");

$grouped_signers_1_signers = [
    $grouped_signers_1_signers_1,
    $grouped_signers_1_signers_2,
];

$signing_options = (new Dropbox\Sign\Model\SubSigningOptions())
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW)
    ->setDraw(true)
    ->setPhone(false)
    ->setType(true)
    ->setUpload(true);

$grouped_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestGroupedSigners())
    ->setGroup("Group #1")
    ->setOrder(0)
    ->setSigners($grouped_signers_1_signers);

$grouped_signers_2 = (new Dropbox\Sign\Model\SubSignatureRequestGroupedSigners())
    ->setGroup("Group #2")
    ->setOrder(1)
    ->setSigners($grouped_signers_2_signers);

$grouped_signers = [
    $grouped_signers_1,
    $grouped_signers_2,
];

$signature_request_create_embedded_request = (new Dropbox\Sign\Model\SignatureRequestCreateEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.")
    ->setSubject("The NDA we talked about")
    ->setTestMode(true)
    ->setTitle("NDA with Acme Co.")
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setCcEmailAddresses([
        "lawyer1@dropboxsign.com",
        "lawyer2@dropboxsign.com",
    ])
    ->setSigningOptions($signing_options)
    ->setGroupedSigners($grouped_signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestCreateEmbedded(
        signature_request_create_embedded_request: $signature_request_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded: {$e->getMessage()}";
}
