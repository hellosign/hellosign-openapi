<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamSettingsGet();
    $company = $response->getSettings()->getCompany();
    $data_residency = $response->getSettings()->getDataResidency();

    print_r($response);
    print_r([
        'team_id' => $response->getTeamId(),
        'company' => [
            'value' => $company->getValue(),
            'is_inherited' => $company->getIsInherited(),
            'source' => $company->getSource(),
            'type' => $company->getType(),
            'writable' => $company->getWritable(),
            'lock' => [
                'mode' => $company->getLock()->getMode(),
                'source' => $company->getLock()->getSource(),
            ],
        ],
        'data_residency' => [
            'value' => $data_residency->getValue(),
            'is_inherited' => $data_residency->getIsInherited(),
            'source' => $data_residency->getSource(),
            'type' => $data_residency->getType(),
            'writable' => $data_residency->getWritable(),
            'lock' => [
                'mode' => $data_residency->getLock()->getMode(),
                'source' => $data_residency->getLock()->getSource(),
            ],
        ],
        'warnings' => $response->getWarnings(),
    ]);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamSettingsGet: {$e->getMessage()}";
}
