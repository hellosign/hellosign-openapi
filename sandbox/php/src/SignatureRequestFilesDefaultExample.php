<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

try {
    $response = (new Dropbox\Sign\Api\SignatureRequestApi(config: $config))->signatureRequestFiles(
        signature_request_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        file_type: "pdf",
    );

    copy($response->getRealPath(), __DIR__ . '/file_response.zip');
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling SignatureRequest#signatureRequestFiles: {$e->getMessage()}";
}
