<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signer_list_2_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("123 LLC");

$signer_list_2_custom_fields = [
    $signer_list_2_custom_fields_1,
];

$signer_list_2_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("Mary")
    ->setEmailAddress("mary@example.com")
    ->setPin("gd9as5b");

$signer_list_2_signers = [
    $signer_list_2_signers_1,
];

$signer_list_1_custom_fields_1 = (new Dropbox\Sign\Model\SubBulkSignerListCustomField())
    ->setName("company")
    ->setValue("ABC Corp");

$signer_list_1_custom_fields = [
    $signer_list_1_custom_fields_1,
];

$signer_list_1_signers_1 = (new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com")
    ->setPin("d79a3td");

$signer_list_1_signers = [
    $signer_list_1_signers_1,
];

$signer_list_1 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_1_custom_fields)
    ->setSigners($signer_list_1_signers);

$signer_list_2 = (new Dropbox\Sign\Model\SubBulkSignerList())
    ->setCustomFields($signer_list_2_custom_fields)
    ->setSigners($signer_list_2_signers);

$signer_list = [
    $signer_list_1,
    $signer_list_2,
];

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$ccs = [
    $ccs_1,
];

$signature_request_bulk_send_with_template_request = (new Dropbox\Sign\Model\SignatureRequestBulkSendWithTemplateRequest())
    ->setTemplateIds([
        "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
    ])
    ->setMessage("Glad we could come to an agreement.")
    ->setSubject("Purchase Order")
    ->setTestMode(true)
    ->setSignerList($signer_list)
    ->setCcs($ccs);

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestBulkSendWithTemplate(
        signature_request_bulk_send_with_template_request: $signature_request_bulk_send_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequestApi#signatureRequestBulkSendWithTemplate: {$e->getMessage()}";
}
