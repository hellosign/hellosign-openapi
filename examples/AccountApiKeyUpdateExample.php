<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$request = (new Dropbox\Sign\Model\AccountApiKeyUpdateRequest())
    ->setName("Billing")
    ->setIsPrimary(true);

try {
    $response = (new Dropbox\Sign\Api\ApiKeyApi(config: $config))->apiKeyUpdate(
        api_key_id: "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e",
        account_api_key_update_request: $request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiKeyApi#apiKeyUpdate: {$e->getMessage()}";
}
