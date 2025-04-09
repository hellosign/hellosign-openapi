<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_update_request = (new Dropbox\Sign\Model\TeamUpdateRequest())
    ->setName("New Team Name");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamUpdate(
        team_update_request: $team_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamUpdate: {$e->getMessage()}";
}
