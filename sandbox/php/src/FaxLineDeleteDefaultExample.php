<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

$fax_line_delete_request = (new Dropbox\Sign\Model\FaxLineDeleteRequest())
    ->setNumber("[FAX_NUMBER]");

try {
    (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineDelete(
        fax_line_delete_request: $fax_line_delete_request,
    );
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLine#faxLineDelete: {$e->getMessage()}";
}
