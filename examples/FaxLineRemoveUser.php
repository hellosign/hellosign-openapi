<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxLineApi = new Dropbox\Sign\Api\FaxLineApi($config);

$data = new Dropbox\Sign\Model\FaxLineRemoveUserRequest();
$data->setNumber("[FAX_NUMBER]")
    ->setEmailAddress("member@dropboxsign.com");

try {
    $result = $faxLineApi->faxLineRemoveUser($data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
