<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$unclaimed_draft_edit_and_resend_request = (new Dropbox\Sign\Model\UnclaimedDraftEditAndResendRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setTestMode(false);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftEditAndResend(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        unclaimed_draft_edit_and_resend_request: $unclaimed_draft_edit_and_resend_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftEditAndResend: {$e->getMessage()}";
}
