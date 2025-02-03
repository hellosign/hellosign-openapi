<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$team_remove_member_request = (new Dropbox\Sign\Model\TeamRemoveMemberRequest())
    ->setEmailAddress("teammate@dropboxsign.com")
    ->setNewOwnerEmailAddress("new_teammate@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamRemoveMember(
        team_remove_member_request: $team_remove_member_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Team#teamRemoveMember: {$e->getMessage()}";
}
