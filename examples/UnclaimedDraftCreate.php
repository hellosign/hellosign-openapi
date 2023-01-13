<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$unclaimedDraftApi = new HelloSign\Api\UnclaimedDraftApi($config);

$signer1 = new HelloSign\Model\SubUnclaimedDraftSigner();
$signer1->setEmailAddress("jack@example.com")
    ->setName("Jack")
    ->setOrder(0);

$signer2 = new HelloSign\Model\SubUnclaimedDraftSigner();
$signer2->setEmailAddress("jill@example.com")
    ->setName("Jill")
    ->setOrder(1);

$signingOptions = new HelloSign\Model\SubSigningOptions();
$signingOptions->setDraw(true)
    ->setType(true)
    ->setUpload(true)
    ->setPhone(false)
    ->setDefaultType(HelloSign\Model\SubSigningOptions::DEFAULT_TYPE_DRAW);

$fieldOptions = new HelloSign\Model\SubFieldOptions();
$fieldOptions->setDateFormat(HelloSign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$data = new HelloSign\Model\UnclaimedDraftCreateRequest();
$data->setSubject("The NDA we talked about")
    ->setType(HelloSign\Model\UnclaimedDraftCreateRequest::TYPE_REQUEST_SIGNATURE)
    ->setMessage("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
    ->setSigners([$signer1, $signer2])
    ->setCcEmailAddresses([
        "lawyer@hellosign.com",
        "lawyer@example.com",
    ])
    ->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")])
    ->setMetadata([
        "custom_id" => 1234,
        "custom_text" => "NDA #9",
    ])
    ->setSigningOptions($signingOptions)
    ->setFieldOptions($fieldOptions)
    ->setTestMode(true);

try {
    $result = $unclaimedDraftApi->unclaimedDraftCreate($data);
    print_r($result);
} catch (HelloSign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling HelloSign API: "
        . print_r($error->getError());
}
