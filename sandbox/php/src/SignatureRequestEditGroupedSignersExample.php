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

$field_options = (new Dropbox\Sign\Model\SubFieldOptions())
    ->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

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

$signature_request_edit_request = (new Dropbox\Sign\Model\SignatureRequestEditRequest())
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
    ->setMetadata(json_decode(<<<'EOD'
        {
            "custom_id": 1234,
            "custom_text": "NDA #9"
        }
    EOD, true))
    ->setFieldOptions($field_options)
    ->setSigningOptions($signing_options)
    ->setGroupedSigners($grouped_signers);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestEdit(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_request: $signature_request_edit_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestEdit: {$e->getMessage()}";
}
