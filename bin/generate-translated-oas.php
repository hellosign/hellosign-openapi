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

class GenerateOas
{
    private const SURFACE_ID = 'doc';

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
     * Keep track of which strings have been translated using the chosen
     * language, which needed to fallback to default language, and which ones
     * did not get translated at all
     *
     * @var array[]
     */
    protected array $translated = [
        'translated'   => [],
        'fallback'     => [],
        'untranslated' => [],
    ];

    public function __construct(string $language)
    {
        $this->language = trim(strtolower($language));
    }

    public function run(): void
    {
        $raw_file = new RawFile(__DIR__ . '/../openapi-raw.yaml');
        $translation_file = __DIR__ . "/../translations/{$this->language}.yaml";
        $fallback_file = __DIR__ . '/../translations/en.yaml';

        $this->openapi = $raw_file->translate(
            self::SURFACE_ID,
            $translation_file,
            $fallback_file,
            $this->translated
        );

        $this->saveOpenAPIFile();
    }

    /**
     * Get final results of translated, fallback, and untranslated strings
     *
     * @return array[]
     */
    public function getResults(): array
    {
        return $this->translated;
    }

    /**
     * Takes the translated OpenAPI data and saves it to language-specific
     * YAML file
     */
    protected function saveOpenAPIFile(): void
    {
        $file = $this->language === 'en'
            ? __DIR__ . '/../openapi.yaml'
            : __DIR__ . "/../openapi-{$this->language}.yaml";

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

$generate = new GenerateOas($language);
$generate->run();

$results = $generate->getResults();

echo "\n---------------------\n";
echo "\nTranslated:\n\n";
foreach ($results['translated'] as $result) {
    echo "{$result}\n";
}
if (empty($results['translated'])) {
    echo "No translated strings\n";
}

echo "\n---------------------\n";
echo "\nTranslated by fallback:\n\n";
foreach ($results['fallback'] as $result) {
    echo "{$result}\n";
}
if (empty($results['fallback'])) {
    echo "No fallback-translated strings\n";
}

echo "\n---------------------\n";
echo "\nUntranslated:\n\n";
foreach ($results['untranslated'] as $result) {
    echo "{$result}\n";
}
if (empty($results['untranslated'])) {
    echo "No untranslated strings\n";
}

echo "\n---------------------\n";
