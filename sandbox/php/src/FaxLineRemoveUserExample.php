<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_line_remove_user_request = (new Dropbox\Sign\Model\FaxLineRemoveUserRequest())
    ->setNumber("[FAX_NUMBER]")
    ->setEmailAddress("member@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\FaxLineApi(config: $config))->faxLineRemoveUser(
        fax_line_remove_user_request: $fax_line_remove_user_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxLineApi#faxLineRemoveUser: {$e->getMessage()}";
}
