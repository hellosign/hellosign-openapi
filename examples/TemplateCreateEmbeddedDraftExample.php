<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$role1 = new Dropbox\Sign\Model\SubTemplateRole();
$role1->setName("Client")
    ->setOrder(0);

$role2 = new Dropbox\Sign\Model\SubTemplateRole();
$role2->setName("Witness")
    ->setOrder(1);

$mergeField1 = new Dropbox\Sign\Model\SubMergeField();
$mergeField1->setName("Full Name")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_TEXT);

$mergeField2 = new Dropbox\Sign\Model\SubMergeField();
$mergeField2->setName("Is Registered?")
    ->setType(Dropbox\Sign\Model\SubMergeField::TYPE_CHECKBOX);

$fieldOptions = new Dropbox\Sign\Model\SubFieldOptions();
$fieldOptions->setDateFormat(Dropbox\Sign\Model\SubFieldOptions::DATE_FORMAT_DD_MM_YYYY);

$data = new Dropbox\Sign\Model\TemplateCreateEmbeddedDraftRequest();
$data->setClientId("37dee8d8440c66d54cfa05d92c160882")
    ->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")])
    ->setTitle("Test Template")
    ->setSubject("Please sign this document")
    ->setMessage("For your approval")
    ->setSignerRoles([$role1, $role2])
    ->setCcRoles(["Manager"])
    ->setMergeFields([$mergeField1, $mergeField2])
    ->setFieldOptions($fieldOptions)
    ->setTestMode(true);

try {
    $result = $templateApi->templateCreateEmbeddedDraft($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
