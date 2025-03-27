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

$form_field_rules_1 = (new Dropbox\Sign\Model\SubFormFieldRule())
    ->setId("rule_1")
    ->setTriggerOperator("AND")
    ->setTriggers($form_field_rules_1_triggers)
    ->setActions($form_field_rules_1_actions);

$form_field_rules = [
    $form_field_rules_1,
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

$unclaimed_draft_create_request = (new Dropbox\Sign\Model\UnclaimedDraftCreateRequest())
    ->setType(Dropbox\Sign\Model\UnclaimedDraftCreateRequest::TYPE_REQUEST_SIGNATURE)
    ->setTestMode(false)
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setFormFieldRules($form_field_rules)
    ->setFormFieldsPerDocument($form_fields_per_document);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreate(
        unclaimed_draft_create_request: $unclaimed_draft_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreate: {$e->getMessage()}";
}
