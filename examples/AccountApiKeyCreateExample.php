<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$request = (new Dropbox\Sign\Model\AccountApiKeyCreateRequest())
    ->setName("Production");

try {
    $response = (new Dropbox\Sign\Api\ApiKeyApi(config: $config))->apiKeyCreate(
        account_api_key_create_request: $request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling ApiKeyApi#apiKeyCreate: {$e->getMessage()}";
}
