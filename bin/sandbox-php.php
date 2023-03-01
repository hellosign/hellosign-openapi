<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "Adding 'version' to DEV composer.json\n\n";

$file = __DIR__ . '/../sandbox/php/artifacts/package/composer.json';
$composer_file = file_get_contents($file);
$composer_file = json_decode($composer_file, true);

$composer_file['version'] = 'dev-main';
$json = json_encode($composer_file, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
file_put_contents($file, $json);
