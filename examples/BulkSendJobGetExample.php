<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\BulkSendJobApi(config: $config))->bulkSendJobGet(
        bulk_send_job_id: "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling BulkSendJobApi#bulkSendJobGet: {$e->getMessage()}";
}
