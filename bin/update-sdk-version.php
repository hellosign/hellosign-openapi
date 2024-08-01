<?php

require_once __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_error_handler(function ($level, $msg) {
    echo "Error: {$msg}";
    exit(1);
});

$updater = new Hello\Release\UpdateVersion(
    sdk: $argv[1] ?? null,
    version: $argv[2] ?? null,
);
$updater->run();
