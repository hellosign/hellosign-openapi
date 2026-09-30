<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$editor_options = (new Dropbox\Sign\Model\SubEditorPageOptions())
    ->setForceUploadPage(false)
    ->setForceEditorPage(true)
    ->setForceReviewPage(true);

$fax_draft_create_request = (new Dropbox\Sign\Model\FaxDraftCreateRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setFileUrls([
        "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
    ])
    ->setRecipients([
        "+14155552671",
    ])
    ->setEditorOptions($editor_options)
    ->setTestMode(true);

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxDraftCreate(
        fax_draft_create_request: $fax_draft_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxDraftCreate: {$e->getMessage()}";
}
