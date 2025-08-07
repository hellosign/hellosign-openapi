<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$form_fields_1 = (new Dropbox\Sign\Model\SubUpdateFormField())
    ->setApiId("uniqueIdHere_1")
    ->setName("New name 1");

$form_fields_2 = (new Dropbox\Sign\Model\SubUpdateFormField())
    ->setApiId("uniqueIdHere_2")
    ->setName("New name 2");

$form_fields = [
    $form_fields_1,
    $form_fields_2,
];

$template_update_request = (new Dropbox\Sign\Model\TemplateUpdateRequest())
    ->setAllowFormView(false)
    ->setTitle("Test Title")
    ->setSubject("Test Subject")
    ->setMessage("Test Message")
    ->setCcRoles([
        "CC Role 1",
        "CC Role 2",
    ])
    ->setFormFields($form_fields);

try {
    $response = (new Dropbox\Sign\Api\TemplateApi(config: $config))->templateUpdate(
        template_id: "f57db65d3f933b5316d398057a36176831451a35",
        template_update_request: $template_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TemplateApi#templateUpdate: {$e->getMessage()}";
}
