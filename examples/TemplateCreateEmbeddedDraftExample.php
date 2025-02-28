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
    ->setCcRoles([
        "Manager",
    ])
    ->setFiles([
    ])
    ->setFieldOptions($field_options)
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
