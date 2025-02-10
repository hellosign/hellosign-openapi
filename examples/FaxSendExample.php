<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$data = new Dropbox\Sign\Model\FaxSendRequest();
$data->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")])
    ->setTestMode(true)
    ->setRecipient("16690000001")
    ->setSender("16690000000")
    ->setCoverPageTo("Jill Fax")
    ->setCoverPageMessage("I'm sending you a fax!")
    ->setCoverPageFrom("Faxer Faxerson")
    ->setTitle("This is what the fax is about!");

try {
    $result = $faxApi->faxSend($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
