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
    protected string $language;

    protected array $openapi;

    protected array $translations = [];

    public function __construct(string $language
    ) {
        $this->language = trim(strtolower($language));
    }

    public function run(): void
    {
        $this->loadOpenAPIFile();
        $this->loadTranslations();

        $this->openapi = $this->recurse($this->openapi);

        $this->saveOpenAPIFile();
    }

    protected function loadTranslations(): void
    {
        $file = __DIR__ . "/../translations/{$this->language}.yaml";

        if (!file_exists($file)) {
            throw new Exception(
                "No translation file found for {$this->language}"
            );
        }

        $this->translations = Yaml::parse(file_get_contents($file));
    }

    protected function loadOpenAPIFile(): void
    {
        $file = __DIR__ . '/../openapi-raw.yaml';

        $this->openapi = Yaml::parse(file_get_contents($file));
    }

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

        file_put_contents($file, $yaml);
    }

    protected function recurse($arr)
    {
        foreach ($arr as $k => $v) {
            if (is_iterable($v)) {
                $arr[$k] = $this->recurse($v);

                continue;
            }

            $translationString = str_replace('__translate__', '', $v);

            if (!array_key_exists($translationString, $this->translations)) {
                continue;
            }

            $arr[$k] = $this->translations[$translationString];

            echo "Translating {$translationString}\n";
        }

        return $arr;
    }
}

$language = $argv[1] ?? 'en';

$generate = new GenerateOas($language);
$generate->run();
