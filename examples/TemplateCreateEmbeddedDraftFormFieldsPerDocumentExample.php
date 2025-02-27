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

$merge_fields_1 = (new Dropbox\Sign\Model\SubMergeField())
    ->setName("Full Name")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_TEXT);

$merge_fields_2 = (new Dropbox\Sign\Model\SubMergeField())
    ->setName("Is Registered?")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_CHECKBOX);

$merge_fields = [
    $merge_fields_1,
    $merge_fields_2,
];

$signer_roles_1 = (new Dropbox\Sign\Model\SubTemplateRole())
    ->setName("Client")
    ->setOrder(0);

$signer_roles_2 = (new Dropbox\Sign\Model\SubTemplateRole())
    ->setName("Witness")
    ->setOrder(1);

$signer_roles = [
    $signer_roles_1,
    $signer_roles_2,
];

$template_create_embedded_draft_request = (new Dropbox\Sign\Model\TemplateCreateEmbeddedDraftRequest())
    ->setClientId("37dee8d8440c66d54cfa05d92c160882")
    ->setMessage("For your approval")
    ->setSubject("Please sign this document")
    ->setTestMode(true)
    ->setTitle("Test Template")
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setCcRoles([
        "Manager",
    ])
    ->setFieldOptions($field_options)
    ->setFormFieldsPerDocument($form_fields_per_document)
    ->setMergeFields($merge_fields)
    ->setSignerRoles($signer_roles);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateCreateEmbeddedDraft(
        template_create_embedded_draft_request: $template_create_embedded_draft_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateCreateEmbeddedDraft: {$e->getMessage()}";
}
