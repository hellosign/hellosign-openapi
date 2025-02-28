<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_create_request = (new Dropbox\Sign\Model\FaxLineCreateRequest())
    ->setAreaCode(209)
    ->setCountry(Dropbox\Sign\Model\FaxLineCreateRequest::COUNTRY_US);

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineCreate(
        fax_line_create_request: $fax_line_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineCreate: {$e->getMessage()}";
}
