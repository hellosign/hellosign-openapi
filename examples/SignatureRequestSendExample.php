<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$field_options = (new Dropbox\Sign\Model\SubFieldOptions())
    ->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

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

$signature_request_send_request = (new Dropbox\Sign\Model\SignatureRequestSendRequest())
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
    ->setMetadata(json_decode(<<<'EOD'
        {
            "custom_id": 1234,
            "custom_text": "NDA #9"
        }
    EOD, true))
    ->setFieldOptions($field_options)
    ->setSigningOptions($signing_options)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestSend(
        signature_request_send_request: $signature_request_send_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestSend: {$e->getMessage()}";
}
