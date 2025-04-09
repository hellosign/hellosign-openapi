<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_add_member_request = (new Dropbox\Sign\Model\TeamAddMemberRequest())
    ->setAccountId("f57db65d3f933b5316d398057a36176831451a35");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamAddMember(
        team_add_member_request: $team_add_member_request,
        team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamAddMember: {$e->getMessage()}";
}
