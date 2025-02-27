<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$ccs_1 = (new Dropbox\Sign\Model\SubCC())
    ->setRole("Accounting")
    ->setEmailAddress("accounting@dropboxsign.com");

$ccs = [
    $ccs_1,
];

$signers_1 = (new Dropbox\Sign\Model\SubUnclaimedDraftTemplateSigner())
    ->setRole("Client")
    ->setName("George")
    ->setEmailAddress("george@example.com");

$signers = [
    $signers_1,
];

$unclaimed_draft_create_embedded_with_template_request = (new Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedWithTemplateRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setRequesterEmailAddress("jack@dropboxsign.com")
    ->setTemplateIds([
        "61a832ff0d8423f91d503e76bfbcc750f7417c78",
    ])
    ->setTestMode(false)
    ->setCcs($ccs)
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreateEmbeddedWithTemplate(
        unclaimed_draft_create_embedded_with_template_request: $unclaimed_draft_create_embedded_with_template_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate: {$e->getMessage()}";
}
