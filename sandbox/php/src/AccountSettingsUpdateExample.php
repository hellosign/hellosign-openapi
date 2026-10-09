<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername('YOUR_API_KEY');
// $config->setAccessToken('YOUR_ACCESS_TOKEN');

$account_settings_update_request = (new Dropbox\Sign\Model\AccountSettingsUpdateRequest())
    ->setDateFormat(Dropbox\Sign\Model\DateFormat::MM_DD_YYYY)
    ->setRequiredSignatureTypes([
        Dropbox\Sign\Model\RequiredSignatureType::DRAW,
        Dropbox\Sign\Model\RequiredSignatureType::TYPE,
    ])
    ->setShouldEnableTamperProof(false)
    ->setUnset(['company']);

try {
    $response = (new Dropbox\Sign\Api\AccountApi(config: $config))->accountSettingsUpdate(
        account_settings_update_request: $account_settings_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling AccountApi#accountSettingsUpdate: {$e->getMessage()}";
}
