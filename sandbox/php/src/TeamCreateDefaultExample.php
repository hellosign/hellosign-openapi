<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$team_create_request = (new Dropbox\Sign\Model\TeamCreateRequest())
    ->setName("New Team Name");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamCreate(
        team_create_request: $team_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling Team#teamCreate: {$e->getMessage()}";
}
