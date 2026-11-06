<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountSettingsGet();
    $company = $response->getSettings()->getCompany();

    print_r($response);
    print_r([
        'account_id' => $response->getAccountId(),
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
        'warnings' => $response->getWarnings(),
    ]);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountSettingsGet: {$e->getMessage()}";
}
