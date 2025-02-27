<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$form_field_groups_1 = (new Dropbox\Sign\Model\SubFormFieldGroup())
    ->setGroupId("RadioItemGroup1")
    ->setGroupLabel("Radio Item Group 1")
    ->setRequirement("require_0-1");

$form_field_groups = [
    $form_field_groups_1,
];

$form_fields_per_document_1 = (new Dropbox\Sign\Model\SubFormFieldsPerDocumentRadio())
    ->setDocumentIndex(0)
    ->setApiId("uniqueIdHere_1")
    ->setType("radio")
    ->setRequired(false)
    ->setSigner("0")
    ->setWidth(18)
    ->setHeight(18)
    ->setX(112)
    ->setY(328)
    ->setGroup("RadioItemGroup1")
    ->setIsChecked(true)
    ->setName("")
    ->setPage(1);

$form_fields_per_document_2 = (new Dropbox\Sign\Model\SubFormFieldsPerDocumentRadio())
    ->setDocumentIndex(0)
    ->setApiId("uniqueIdHere_2")
    ->setType("radio")
    ->setRequired(false)
    ->setSigner("0")
    ->setWidth(18)
    ->setHeight(18)
    ->setX(112)
    ->setY(370)
    ->setGroup("RadioItemGroup1")
    ->setIsChecked(false)
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
    ->setFormFieldGroups($form_field_groups)
    ->setFormFieldsPerDocument($form_fields_per_document);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreateEmbedded(
        unclaimed_draft_create_embedded_request: $unclaimed_draft_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded: {$e->getMessage()}";
}
