<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$unclaimed_draft_create_embedded_request = (new Dropbox\Sign\Model\UnclaimedDraftCreateEmbeddedRequest())
    ->setClientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a")
    ->setRequesterEmailAddress("jack@dropboxsign.com")
    ->setTestMode(true)
    ->setFiles([
    ]);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreateEmbedded(
        unclaimed_draft_create_embedded_request: $unclaimed_draft_create_embedded_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded: {$e->getMessage()}";
}
