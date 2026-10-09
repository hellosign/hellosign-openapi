<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

$team_settings_update_request = (new Dropbox\Sign\Model\TeamSettingsUpdateRequest())
    ->setDataResidency(Dropbox\Sign\Model\DataResidency::EU)
    ->setCompany('Northwind')
    ->setCompanyLock(Dropbox\Sign\Model\TeamSettingLock::ORGANIZATION_ADMINS);

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamSettingsUpdate(
        team_settings_update_request: $team_settings_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamSettingsUpdate: {$e->getMessage()}";
}
