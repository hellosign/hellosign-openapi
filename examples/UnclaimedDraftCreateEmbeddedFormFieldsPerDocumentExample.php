<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$form_fields_per_document_1 = (new Dropbox\Sign\Model\SubFormFieldsPerDocumentText())
    ->setDocumentIndex(0)
    ->setApiId("uniqueIdHere_1")
    ->setType("text")
    ->setRequired(true)
    ->setSigner("1")
    ->setWidth(100)
    ->setHeight(16)
    ->setX(112)
    ->setY(328)
    ->setName("")
    ->setPage(1)
    ->setPlaceholder("")
    ->setValidationType(Dropbox\Sign\Model\SubFormFieldsPerDocumentText::VALIDATION_TYPE_NUMBERS_ONLY);

$form_fields_per_document_2 = (new Dropbox\Sign\Model\SubFormFieldsPerDocumentSignature())
    ->setDocumentIndex(0)
    ->setApiId("uniqueIdHere_2")
    ->setType("signature")
    ->setRequired(true)
    ->setSigner("0")
    ->setWidth(120)
    ->setHeight(30)
    ->setX(530)
    ->setY(415)
    ->setName("")
    ->setPage(1);

$form_fields_per_document = [
    $form_fields_per_document_1,
    $form_fields_per_document_2,
];

$unclaimed_draft_create_embedded_request = (new Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setRequesterEmailAddress("jack@dropboxsign.com")
    ->setTestMode(false)
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setFormFieldsPerDocument($form_fields_per_document);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreateEmbedded(
        unclaimed_draft_create_embedded_request: $unclaimed_draft_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded: {$e->getMessage()}";
}
