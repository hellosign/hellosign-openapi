<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_remove_member_request = (new Dropbox\Sign\Model\TeamRemoveMemberRequest())
    ->setAccountId("f57db65d3f933b5316d398057a36176831451a35");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamRemoveMember(
        team_remove_member_request: $team_remove_member_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamRemoveMember: {$e->getMessage()}";
}
