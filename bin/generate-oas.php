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

$testing = in_array('--testing', $argv, true);
$language = 'en';
foreach (array_slice($argv, 1) as $arg) {
    if ($arg[0] !== '-') {
        $language = $arg;
        break;
    }
}

echo "\nCreating translated OpenAPI file ...\n";
$generate = new Hello\OpenApi\Translate($language);
$generate->run();
$generate->printResults();

echo "\nCreating SDK-specific OpenAPI file ...\n";
$generate = new Hello\OpenApi\GenerateSdkOas();
$generate->run();

if ($testing) {
    echo "\nCreating testing SDK OpenAPI file (no hideOn filtering) ...\n";
    $generate = new Hello\OpenApi\GenerateSdkOas(true);
    $generate->run();
}

echo "\nCreating Fern-specific OpenAPI file ...\n";
$generate = new Hello\OpenApi\GenerateFernOas();
$generate->run();
