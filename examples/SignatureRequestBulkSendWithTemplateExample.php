<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new Dropbox\Sign\Api\SignatureRequestApi($config);

$signerList1Signer = new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner();
$signerList1Signer->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com")
    ->setPin("d79a3td");

$signerList1CustomFields = new Dropbox\Sign\Model\SubBulkSignerListCustomField();
$signerList1CustomFields->setName("company")
    ->setValue("ABC Corp");

$signerList1 = new Dropbox\Sign\Model\SubBulkSignerList();
$signerList1->setSigners([$signerList1Signer])
    ->setCustomFields([$signerList1CustomFields]);

$signerList2Signer = new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner();
$signerList2Signer->setRole("Client")
    ->setName("Mary")
    ->setEmailAddress("mary@example.com")
    ->setPin("gd9as5b");

$signerList2CustomFields = new Dropbox\Sign\Model\SubBulkSignerListCustomField();
$signerList2CustomFields->setName("company")
    ->setValue("123 LLC");

$signerList2 = new Dropbox\Sign\Model\SubBulkSignerList();
$signerList2->setSigners([$signerList2Signer])
    ->setCustomFields([$signerList2CustomFields]);

$cc1 = new Dropbox\Sign\Model\SubCC();
$cc1->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$data = new Dropbox\Sign\Model\SignatureRequestBulkSendWithTemplateRequest();
$data->setTemplateIds(["c26b8a16784a872da37ea946b9ddec7c1e11dff6"])
    ->setSubject("Purchase Order")
    ->setMessage("Glad we could come to an agreement.")
    ->setSignerList([$signerList1, $signerList2])
    ->setCcs([$cc1])
    ->setTestMode(true);

try {
    $result = $signatureRequestApi->signatureRequestBulkSendWithTemplate($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
