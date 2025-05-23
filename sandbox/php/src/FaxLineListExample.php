<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineList(
        account_id: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineList: {$e->getMessage()}";
}
