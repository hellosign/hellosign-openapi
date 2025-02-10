<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new Dropbox\Sign\Api\SignatureRequestApi($config);

$signer1 = new Dropbox\Sign\Model\SubSignatureRequestTemplateSigner();
$signer1->setRole("Client")
    ->setEmailAddress("george@example.com")
    ->setName("George");

$signingOptions = new Dropbox\Sign\Model\SubSigningOptions();
$signingOptions->setDraw(true)
    ->setType(true)
    ->setUpload(true)
    ->setPhone(false)
    ->setDefaultType(Dropbox\Sign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW);

$data = new Dropbox\Sign\Model\SignatureRequestEditEmbeddedWithTemplateRequest();
$data->setClientId("ec64a202072370a737edf4a0eb7f4437")
    ->setTemplateIds(["c26b8a16784a872da37ea946b9ddec7c1e11dff6"])
    ->setSubject("Purchase Order")
    ->setMessage("Glad we could come to an agreement.")
    ->setSigners([$signer1])
    ->setSigningOptions($signingOptions)
    ->setTestMode(true);

$signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

try {
    $result = $signatureRequestApi->signatureRequestEditEmbeddedWithTemplate(
        $signatureRequestId,
        $data
    );
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
