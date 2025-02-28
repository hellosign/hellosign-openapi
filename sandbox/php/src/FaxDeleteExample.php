<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

try {
    (new Dropbox\Sign\Api\FaxApi(config: $config))->faxDelete(
        fax_id: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxDelete: {$e->getMessage()}";
}
