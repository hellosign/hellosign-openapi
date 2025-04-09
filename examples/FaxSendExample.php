<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");

$fax_send_request = (new Dropbox\Sign\Model\FaxSendRequest())
    ->setRecipient("16690000001")
    ->setSender("16690000000")
    ->setTestMode(true)
    ->setCoverPageTo("Jill Fax")
    ->setCoverPageFrom("Faxer Faxerson")
    ->setCoverPageMessage("I'm sending you a fax!")
    ->setTitle("This is what the fax is about!")
    ->setFiles([
    ]);

try {
    $response = (new Dropbox\Sign\Api\FaxApi(config: $config))->faxSend(
        fax_send_request: $fax_send_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling FaxApi#faxSend: {$e->getMessage()}";
}
