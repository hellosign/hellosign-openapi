#!/usr/bin/env php
<?php

require_once __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_error_handler(function ($level, $msg) {
    echo "Error: {$msg}";
    exit(1);
});

echo "\nCreating translated OpenAPI file ...\n";
$language = $argv[1] ?? 'en';
$generate = new Hello\OpenApi\Translate($language);
$generate->run();
$generate->printResults();

echo "\nCreating SDK-specific OpenAPI file ...\n";
$generate = new Hello\OpenApi\GenerateSdkOas();
$generate->run();
