<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

$faxApi = new Dropbox\Sign\Api\FaxApi($config);

$faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

try {
    $result = $faxApi->faxFiles($faxId);
    copy($result->getRealPath(), __DIR__ . '/file_response.pdf');
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
