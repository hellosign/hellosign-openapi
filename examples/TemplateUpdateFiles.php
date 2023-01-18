<?php

require_once __DIR__ . "/vendor/autoload.php";

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();

// Configure HTTP basic authorization: api_key
$config->setUsername("YOUR_API_KEY");

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$templateApi = new Dropbox\Sign\Api\TemplateApi($config);

$data = new Dropbox\Sign\Model\TemplateUpdateFilesRequest();
$data->setFiles([new SplFileObject(__DIR__ . "/example_signature_request.pdf")]);

$templateId = "5de8179668f2033afac48da1868d0093bf133266";

try {
    $result = $templateApi->templateUpdateFiles($templateId, $data);
    print_r($result);
} catch (Dropbox\Sign\ApiException $e) {
    $error = $e->getResponseObject();
    echo "Exception when calling Dropbox Sign API: "
        . print_r($error->getError());
}
