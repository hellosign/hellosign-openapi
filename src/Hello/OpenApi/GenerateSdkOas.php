<?php

declare(strict_types=1);

namespace Hello\OpenApi;

class GenerateSdkOas
{
    private const ROOT_DIR = __DIR__ . '/../../..';

    private const SURFACE_ID = 'sdk';

    private bool $testing;

    public function __construct(bool $testing = false)
    {
        $this->testing = $testing;
    }

    public function run(): void
    {
        $raw_file = new RawFile(self::ROOT_DIR . '/openapi-raw.yaml');
        $translation_file = self::ROOT_DIR . '/translations/en.yaml';
        $raw_file->translate(
            self::SURFACE_ID,
            $translation_file,
            $translation_file,
            $this->testing
        );

        $data = $raw_file->getData();
        unset($data['tags']);
        $raw_file->setData($data);

        $output_file = $this->testing
            ? self::ROOT_DIR . '/openapi-sdk-testing.yaml'
            : self::ROOT_DIR . '/openapi-sdk.yaml';
        $raw_file->saveFile($output_file);
    }
}
