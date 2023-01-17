<?php

declare(strict_types=1);

namespace Hello\OpenApi;

use Exception;
use Symfony\Component\Yaml\Yaml;

class RawFile
{
    /**
     * We expect translation key strings to look like
     * "_t__AccountCreate::SUMMARY"
     */
    private const TRANSLATE_PREPEND = '_t__';

    /**
     * We expect markdown key strings to look like
     * "_md__OpenApi::TAG"
     */
    private const MARKDOWN_PREPEND = '_md__';

    /**
     * Custom key to determine a surface on which a spec
     * is to be shown.
     *
     * e.g.
     * x-hideOn: 'SDK'
     * x-hideOn: 'DOC'
     */
    private const HIDE_ON = 'x-hideOn';

    private const PREPENDS = [
        self::TRANSLATE_PREPEND,
        self::MARKDOWN_PREPEND,
    ];

    /**
     * Contains the OpenAPI spec, in array form
     */
    private array $openapi;

    private array $translations = [];

    private array $fallback_translations = [];

    /**
     * Keep track of which strings have been translated using the chosen
     * language, which needed to fallback to default language, and which ones
     * did not get translated at all
     */
    private array $logs = [
        'translated'   => [],
        'fallback'     => [],
        'untranslated' => [],
    ];

    public function __construct(string $filename)
    {
        $this->openapi = Yaml::parse(file_get_contents($filename));
    }

    public function translate(
        string $surface_id,
        string $translation_file,
        string $fallback_file
    ): void {
        $this->loadTranslations($translation_file, $fallback_file);
        $result = $this->recurse($this->openapi, $surface_id);

        $this->logs['translated'] = array_unique($this->logs['translated']);
        $this->logs['fallback'] = array_unique($this->logs['fallback']);
        $this->logs['untranslated'] = array_unique($this->logs['untranslated']);

        $this->openapi = $result->getData();
    }

    public function getData(): array
    {
        return $this->openapi;
    }

    public function setData(array $data): void
    {
        $this->openapi = $data;
    }

    /**
     * Provides information of which strings have been translated using the
     * chosen language, which needed to fallback to default language, and which
     * ones did not get translated at all
     */
    public function getLogs(): array
    {
        return $this->logs;
    }

    public function saveFile(string $targetFile): void
    {
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

        file_put_contents($targetFile, $yaml);
    }

    /**
     * Load both chosen language and fallback translations
     */
    private function loadTranslations(string $file, string $fallback): void
    {
        if (!file_exists($file)) {
            throw new Exception(
                "No translation file found: {$file}"
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
     * Recursive function that iterates through all keys in the OpenAPI spec,
     * searching for strings prepended with TRANSLATE_PREPEND and attempting
     * to translate them.
     */
    private function recurse(array $data, string $surface_id): TranslationResult
    {
        $empty_by_hiding = false;

        foreach ($data as $k => $v) {
            if (is_iterable($v)) {
                if (isset($v[self::HIDE_ON]) && $v[self::HIDE_ON] === $surface_id) {
                    unset($data[$k]);
                    $empty_by_hiding = empty($data);
                } else {
                    $result = $this->recurse($v, $surface_id);
                    if ($result->isAllHidden()) {
                        unset($data[$k]);
                    } else {
                        $data[$k] = $result->getData();
                    }
                }

                continue;
            }

            $translationString = '';
            foreach (self::PREPENDS as $prepend) {
                if (!is_string($v) || strpos($v, $prepend) !== 0) {
                    continue;
                }

                $translationString = str_replace($prepend, '', $v);
                if (array_key_exists($translationString, $this->translations)) {
                    $data[$k] = $this->getTranslation(
                        $prepend,
                        $translationString,
                        $this->translations
                    );
                    $this->logs['translated'][] = $translationString;
                    // We found translation, move on to next data
                    continue 2;
                }

                if (array_key_exists($translationString, $this->fallback_translations)) {
                    $data[$k] = $this->getTranslation(
                        $prepend,
                        $translationString,
                        $this->fallback_translations
                    );
                    $this->logs['fallback'][] = $translationString;
                    // We found fallback translation, move on to next data
                    continue 2;
                }
            }

            if (!empty($translationString)) {
                $this->logs['untranslated'][] = $translationString;
            }
        }

        return new TranslationResult($data, $empty_by_hiding);
    }

    /**
     * @return array|mixed|void
     */
    private function getTranslation(
        string $prepend,
        string $translationString,
        array $translations
    ) {
        switch ($prepend) {
            case self::MARKDOWN_PREPEND:
                // Using $ref property to embed markdown
                return [
                    '$ref' => $translations[$translationString],
                ];
            case self::TRANSLATE_PREPEND:
                return $translations[$translationString];
            default:
                return $translationString;
        }
    }

}
