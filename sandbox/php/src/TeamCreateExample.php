<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_create_request = (new Dropbox\Sign\Model\TeamCreateRequest())
    ->setName("New Team Name");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamCreate(
        team_create_request: $team_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamCreate: {$e->getMessage()}";
}
