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

class GenerateOas
{
    /**
     * We expect translation key strings to look like
     * "_t__AccountCreate::SUMMARY"
     */
    protected const TRANSLATE_PREPEND = '_t__';

    /**
     * We expect markdown key strings to look like
     * "_md__OpenApi::TAG"
     */
    protected const MARKDOWN_PREPEND = '_md__';

    protected const PREPENDS = [
        self::TRANSLATE_PREPEND,
        self::MARKDOWN_PREPEND,
    ];

    /**
     * Contains translations from default language "en"
     *
     * @var Array<string, string>
     */
    protected array $fallback_translations = [];

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
        $this->loadOpenAPIFile();
        $this->loadTranslations();

        $this->openapi = $this->recurse($this->openapi);

        $this->saveOpenAPIFile();

        $this->translated['translated'] = array_unique($this->translated['translated']);
        $this->translated['fallback'] = array_unique($this->translated['fallback']);
        $this->translated['untranslated'] = array_unique($this->translated['untranslated']);
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
     * Load both chosen language and fallback translations
     */
    protected function loadTranslations(): void
    {
        $file = __DIR__ . "/../translations/{$this->language}.yaml";
        $fallback = __DIR__ . '/../translations/en.yaml';

        if (!file_exists($file)) {
            throw new Exception(
                "No translation file found for {$this->language}"
            );
        }

        if (!file_exists($fallback)) {
            throw new Exception(
                "Fallback translation file not found at {$fallback}"
            );
        }

        $this->translations = Yaml::parse(file_get_contents($file));
        $this->fallback_translations = Yaml::parse(file_get_contents($fallback));
    }

    /**
     * Load the OpenAPI YAML file, cast to array
     */
    protected function loadOpenAPIFile(): void
    {
        $file = __DIR__ . '/../openapi-raw.yaml';

        $this->openapi = Yaml::parse(file_get_contents($file));
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

    /**
     * Recursive function that iterates through all keys in the OpenAPI spec,
     * searching for strings prepended with TRANSLATE_PREPEND and attempting
     * to translate them.
     */
    protected function recurse(iterable $data): iterable
    {
        foreach ($data as $k => $v) {
            if (is_iterable($v)) {
                $data[$k] = $this->recurse($v);

                continue;
            }

            $translationString = '';
            foreach (self::PREPENDS as $prepend) {
                if (strpos($v, $prepend) !== 0) {
                    continue;
                }

                $translationString = str_replace($prepend, '', $v);
                if (array_key_exists($translationString, $this->translations)) {
                    $data[$k] = $this->getTranslation($prepend, $translationString, $this->translations);
                    $this->translated['translated'][] = $translationString;
                    // We found translation, move on to next data
                    continue 2;
                }

                if (array_key_exists($translationString, $this->fallback_translations)) {
                    $data[$k] = $this->getTranslation($prepend, $translationString, $this->fallback_translations);
                    $this->translated['fallback'][] = $translationString;
                    // We found fallback translation, move on to next data
                    continue 2;
                }
            }

            if (!empty($translationString)) {
                $this->translated['untranslated'][] = $translationString;
            }
        }

        return $data;
    }

    /**
     * @param string $prepend
     * @param string $translationString
     * @param array $translations
     * @return array|mixed|void
     */
    protected function getTranslation(string $prepend, string $translationString, array $translations)
    {
        switch ($prepend) {
            case self::MARKDOWN_PREPEND:
                // Using $ref property to embed markdown
                return [
                    '$ref' => $translations[$translationString]
                ];
            case self::TRANSLATE_PREPEND:
                return $translations[$translationString];
            default:
                return $translationString;
        }
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
    echo "No unstranslated strings\n";
}

echo "\n---------------------\n";
