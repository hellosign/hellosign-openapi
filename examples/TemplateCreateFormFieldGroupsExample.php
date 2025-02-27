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

$form_field_groups_1 = (new Dropbox\Sign\Model\SubFormFieldGroup())
    ->setGroupId("RadioItemGroup1")
    ->setGroupLabel("Radio Item Group 1")
    ->setRequirement("require_0-1");

$form_field_groups = [
    $form_field_groups_1,
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

$template_create_request = (new Dropbox\Sign\Model\TemplateCreateRequest())
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
    ->setSignerRoles($signer_roles)
    ->setFormFieldsPerDocument($form_fields_per_document)
    ->setFormFieldGroups($form_field_groups)
    ->setMergeFields($merge_fields);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateCreate(
        template_create_request: $template_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateCreate: {$e->getMessage()}";
}
