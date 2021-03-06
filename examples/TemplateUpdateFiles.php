<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = HelloSignSDK\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$api = new HelloSignSDK\Api\TemplateApi($config);

$data = new HelloSignSDK\Model\TemplateUpdateFilesRequest();
$data->setFileUrl(["https://app.hellosign.com/docs/example_signature_request.pdf"]);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $api->templateUpdateFiles($templateId, $data);
    print_r($result);
} catch (HelloSignSDK\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling HelloSign API: "
        . print_r($error->getError());
}
