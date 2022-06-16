#!/usr/bin/env php
<?php

require_once __DIR__ . '/../vendor/autoload.php';

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
    /**
     * Language we are currently translating for
     *
     * @var string
     */
    protected string $language;

    /**
     * Contains the OpenAPI spec, in array form
     *
     * @var array
     */
    protected array $openapi;

    /**
     * Contains translations from chosen language
     *
     * @var Array<string, string>
     */
    protected array $translations = [];

    public function __construct(string $language)
    {
        $this->language = trim(strtolower($language));
    }

    public function run(): void
    {
        $loaded_file = $this->loadOpenAPIFile();
        $this->remove();
        $this->saveOpenAPIFile();
        unlink($loaded_file);
    }

    protected function remove(): void
    {
        unset($this->openapi['tags']);
    }

    /**
     * Load the OpenAPI YAML file, cast to array.
     * Returns the path of the loaded file.
     */
    protected function loadOpenAPIFile(): string
    {
        $file = $this->language === 'en'
            ? __DIR__ . '/../openapi-sdk-raw.yaml'
            : __DIR__ . "/../openapi-sdk-raw-{$this->language}.yaml";

        if (!file_exists($file)) {
            throw new Exception(
                "No translated file found for {$this->language}"
            );
        }

        $this->openapi = Yaml::parse(file_get_contents($file));

        return $file;
    }

    /**
     * Takes the translated OpenAPI data and saves it to language-specific
     * YAML file
     */
    protected function saveOpenAPIFile(): void
    {
        $file = $this->language === 'en'
            ? __DIR__ . '/../openapi-sdk.yaml'
            : __DIR__ . "/../openapi-{$this->language}-sdk.yaml";

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

$language = $argv[1] ?? 'en';

$generate = new GenerateSdkOas($language);
$generate->run();
