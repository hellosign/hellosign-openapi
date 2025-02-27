<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signers_1 = (new Dropbox\Sign\Model\SubUnclaimedDraftSigner())
    ->setName("Jack")
    ->setEmailAddress("jack@example.com")
    ->setOrder(0);

$signers = [
    $signers_1,
];

$unclaimed_draft_create_request = (new Dropbox\Sign\Model\UnclaimedDraftCreateRequest())
    ->setType(Dropbox\Sign\Model\UnclaimedDraftCreateRequest::TYPE_REQUEST_SIGNATURE)
    ->setTestMode(true)
    ->setFiles([
    ])
    ->setSigners($signers);

try {
    $response = (new Dropbox\Sign\Api\UnclaimedDraftApi(config: $config))->unclaimedDraftCreate(
        unclaimed_draft_create_request: $unclaimed_draft_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling UnclaimedDraftApi#unclaimedDraftCreate: {$e->getMessage()}";
}
