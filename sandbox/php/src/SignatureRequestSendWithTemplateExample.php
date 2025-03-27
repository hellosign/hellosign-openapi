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

$signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$custom_fields_1 = (new Dropbox\Sign\Model\SubCustomField())
    ->setName("Cost")
    ->setEditor("Client")
    ->setRequired(true)
    ->setValue("\$20,000");

$custom_fields = [
    $custom_fields_1,
];

$signature_request_send_with_template_request = (new Dropbox\Sign\Model\SignatureRequestSendWithTemplateRequest())
    ->setTemplateIds([
        "61a832ff0d8423f91d503e76bfbcc750f7417c78",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSigningOptions($signing_options)
    ->setSigners($signers)
    ->setCcs($ccs)
    ->setCustomFields($custom_fields);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestSendWithTemplate(
        signature_request_send_with_template_request: $signature_request_send_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestSendWithTemplate: {$e->getMessage()}";
}
