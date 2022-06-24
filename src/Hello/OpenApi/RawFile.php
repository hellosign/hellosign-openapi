<?php

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
     * Special value for identifying all surfaces. (sdk and doc)
     */
    private const ALL_SURFACES = 'all';

    /**
     * Custom key to determine a surface on which a spec
     * is to be shown.
     *
     * e.g.
     * x-hideOn: 'SDK'
     * x-hideOn: 'DOC'
     * x-hideOn: 'NONE'
     */
    private const HIDE_ON = 'x-hideOn';

    private const PREPENDS = [
        self::TRANSLATE_PREPEND,
        self::MARKDOWN_PREPEND,
    ];

    /**
     * Contains the OpenAPI spec, in array form
     *
     * @var array
     */
    private array $openapi;

    /**
     * @var mixed
     */
    private $translations;

    /**
     * @var mixed
     */
    private $fallback_translations;

    /**
     * Keep track of which strings have been translated using the chosen
     * language, which needed to fallback to default language, and which ones
     * did not get translated at all
     *
     * @var array[]
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

    /**
     * @param string $surface_id
     * @param string $translation_file
     * @param string $fallback_file
     * @param array $logs
     * @return array
     * @throws Exception
     */
    public function translate(
        string $surface_id,
        string $translation_file,
        string $fallback_file
    ): array {
        $this->loadTranslations($translation_file, $fallback_file);
        $result = $this->recurse($this->openapi, $surface_id);

        $this->logs['translated'] = array_unique($this->logs['translated']);
        $this->logs['fallback'] = array_unique($this->logs['fallback']);
        $this->logs['untranslated'] = array_unique($this->logs['untranslated']);

        return $result;
    }

    /**
     * Provides information of which strings have been translated using the
     * chosen language, which needed to fallback to default language, and which
     * ones did not get translated at all
     *
     * @return array[]
     */
    public function getLogs(): array
    {
        return $this->logs;
    }

    /**
     * Load both chosen language and fallback translations
     * @throws Exception
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
     * @param array $data
     * @param string $surface_id
     * @return array
     */
    private function recurse(array $data, string $surface_id): array
    {
        foreach ($data as $k => $v) {
            if (is_iterable($v)) {
                if (isset($v[self::HIDE_ON])
                    && ($v[self::HIDE_ON] === $surface_id
                        || $v[self::HIDE_ON] === self::ALL_SURFACES)
                ) {
                    unset($data[$k]);
                } else {
                    $data[$k] = $this->recurse($v, $surface_id);
                }

                continue;
            }

            $translationString = '';
            foreach (self::PREPENDS as $prepend) {
                if (strpos($v, $prepend) !== 0) {
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

        return $data;
    }

    /**
     * @param string $prepend
     * @param string $translationString
     * @param array $translations
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
