<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_delete_request = (new Dropbox\Sign\Model\FaxLineDeleteRequest())
    ->setNumber("[FAX_NUMBER]");

try {
    (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineDelete(
        fax_line_delete_request: $fax_line_delete_request,
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineDelete: {$e->getMessage()}";
}
