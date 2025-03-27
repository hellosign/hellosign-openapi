<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$form_field_rules_1_triggers_1 = (new Dropbox\Sign\Model\SubFormFieldRuleTrigger())
    ->setId("uniqueIdHere_1")
    ->setOperator(Dropbox\Sign\Model\SubFormFieldRuleTrigger::OPERATOR_IS)
    ->setValue("foo");

$form_field_rules_1_triggers = [
    $form_field_rules_1_triggers_1,
];

$form_field_rules_1_actions_1 = (new Dropbox\Sign\Model\SubFormFieldRuleAction())
    ->setHidden(true)
    ->setType(Dropbox\Sign\Model\SubFormFieldRuleAction::TYPE_CHANGE_FIELD_VISIBILITY)
    ->setFieldId("uniqueIdHere_2");

$form_field_rules_1_actions = [
    $form_field_rules_1_actions_1,
];

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

$form_fields_per_document_1 = (new Dropbox\Sign\Model\SubFormFieldsPerDocumentText())
    ->setDocumentIndex(0)
    ->setApiId("uniqueIdHere_1")
    ->setType("text")
    ->setRequired(true)
    ->setSigner("0")
    ->setWidth(100)
    ->setHeight(16)
    ->setX(112)
    ->setY(328)
    ->setName("")
    ->setPage(1)
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

$form_field_rules_1 = (new Dropbox\Sign\Model\SubFormFieldRule())
    ->setId("rule_1")
    ->setTriggerOperator("AND")
    ->setTriggers($form_field_rules_1_triggers)
    ->setActions($form_field_rules_1_actions);

$form_field_rules = [
    $form_field_rules_1,
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
    ->setFormFieldRules($form_field_rules)
    ->setMergeFields($merge_fields);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateCreate(
        template_create_request: $template_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateCreate: {$e->getMessage()}";
}
