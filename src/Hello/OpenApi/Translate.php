<?php

declare(strict_types=1);

namespace Hello\OpenApi;

class Translate
{
    private const ROOT_DIR = __DIR__ . '/../../..';
    
    private const SURFACE_ID = 'doc';

    /**
     * Language we are currently translating for
     */
    protected string $language;

    /**
     * Keep track of which strings have been translated using the chosen
     * language, which needed to fallback to default language, and which ones
     * did not get translated at all
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
        $raw_file = new RawFile(self::ROOT_DIR . '/openapi-raw.yaml');

        $raw_file->translate(
            self::SURFACE_ID,
            self::ROOT_DIR . "/translations/{$this->language}.yaml",
            self::ROOT_DIR . '/translations/en.yaml'
        );

        $this->translated = $raw_file->getLogs();

        $file = $this->language === 'en'
            ? self::ROOT_DIR . '/openapi.yaml'
            : self::ROOT_DIR . "/openapi-{$this->language}.yaml";

        $raw_file->saveFile($file);
    }

    /**
     * Get final results of translated, fallback, and untranslated strings
     */
    public function getResults(): array
    {
        return $this->translated;
    }

    public function printResults(): void
    {
        echo "\n---------------------\n";
        echo "\nTranslated:\n\n";
        foreach ($this->translated['translated'] as $result) {
            echo "{$result}\n";
        }
        if (empty($this->translated['translated'])) {
            echo "No translated strings\n";
        }

        echo "\n---------------------\n";
        echo "\nTranslated by fallback:\n\n";
        foreach ($this->translated['fallback'] as $result) {
            echo "{$result}\n";
        }
        if (empty($this->translated['fallback'])) {
            echo "No fallback-translated strings\n";
        }

        echo "\n---------------------\n";
        echo "\nUntranslated:\n\n";
        foreach ($this->translated['untranslated'] as $result) {
            echo "{$result}\n";
        }
        if (empty($this->translated['untranslated'])) {
            echo "No untranslated strings\n";
        }

        echo "\n---------------------\n\n";
    }
}
