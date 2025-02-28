<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_add_user_request = (new Dropbox\Sign\Model\FaxLineAddUserRequest())
    ->setNumber("[FAX_NUMBER]")
    ->setEmailAddress("member@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineAddUser(
        fax_line_add_user_request: $fax_line_add_user_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineAddUser: {$e->getMessage()}";
}
