<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new HelloSign\Api\SignatureRequestApi($config);

$signer1 = new HelloSign\Model\SubSignatureRequestTemplateSigner();
$signer1->setRole("Client")
    ->setEmailAddress("george@example.com")
    ->setName("George");

$cc1 = new HelloSign\Model\SubCC();
$cc1->setRole("Accounting")
    ->setEmailAddress("accounting@example.com");

$customField1 = new HelloSign\Model\SubCustomField();
$customField1->setName("Cost")
    ->setValue("$20,000")
    ->setEditor("Client")
    ->setRequired(true);

$signingOptions = new HelloSign\Model\SubSigningOptions();
$signingOptions->setDraw(true)
    ->setType(true)
    ->setUpload(true)
    ->setPhone(false)
    ->setDefaultType(HelloSign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW);

$data = new HelloSign\Model\SignatureRequestSendWithTemplateRequest();
$data->setTemplateIds(["c26b8a16784a872da37ea946b9ddec7c1e11dff6"])
    ->setSubject("Purchase Order")
    ->setMessage("Glad we could come to an agreement.")
    ->setSigners([$signer1])
    ->setCcs([$cc1])
    ->setCustomFields([$customField1])
    ->setSigningOptions($signingOptions)
    ->setTestMode(true);

try {
    $result = $signatureRequestApi->signatureRequestSendWithTemplate($data);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
