#!/usr/bin/env php
<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Hello\OpenApi\RawFile;
use Symfony\Component\Yaml\Yaml;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_error_handler(function ($level, $msg) {
    echo "Error: {$msg}";
    exit(1);
});

class GenerateSdkOas
{
    private const SURFACE_ID = 'sdk';

    /**
     * Contains the OpenAPI spec, in array form
     *
     * @var array
     */
    protected array $openapi;

    public function run(): void
    {
        $raw_file = new RawFile(__DIR__ . '/../openapi-raw.yaml');
        $translation_file = __DIR__ . '/../translations/en.yaml';
        $this->openapi = $raw_file->translate(
            self::SURFACE_ID,
            $translation_file,
            $translation_file
        );
        $this->remove();
        $this->saveOpenAPIFile();
    }

    protected function remove(): void
    {
        unset($this->openapi['tags']);
    }

    /**
     * Takes the translated OpenAPI data and saves it to language-specific
     * YAML file
     */
    protected function saveOpenAPIFile(): void
    {
        $file = __DIR__ . '/../openapi-sdk.yaml';

        $yaml = Yaml::dump(
            $this->openapi,
            10,
            2,
            Yaml::DUMP_OBJECT_AS_MAP
            ^ Yaml::DUMP_EMPTY_ARRAY_AS_SEQUENCE
            ^ Yaml::DUMP_MULTI_LINE_LITERAL_BLOCK
        );

        // An empty JSON response of `{}` can't be represented as a PHP array
        $yaml = str_replace('value: []', 'value: {}', $yaml);
        $yaml = str_replace('metadata: []', 'metadata: {}', $yaml);
        $yaml = str_replace('additionalProperties: []', 'additionalProperties: {}', $yaml);
        $yaml = str_replace('application/json: []', 'application/json: {}', $yaml);

        file_put_contents($file, $yaml);
    }
}

$generate = new GenerateSdkOas();
$generate->run();
