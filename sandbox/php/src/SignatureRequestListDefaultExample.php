<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestList(
        account_id: null,
        page: 1,
        page_size: 20,
        query: null,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequest#signatureRequestList: {$e->getMessage()}";
}
