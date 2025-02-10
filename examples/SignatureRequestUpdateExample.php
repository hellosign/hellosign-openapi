<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$signatureRequestApi = new Dropbox\Sign\Api\SignatureRequestApi($config);

$data = new Dropbox\Sign\Model\SignatureRequestUpdateRequest();
$data->setEmailAddress("john@example.com")
    ->setSignatureId("78caf2a1d01cd39cea2bc1cbb340dac3");

$signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

try {
    $result = $signatureRequestApi->signatureRequestUpdate($signatureRequestId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
