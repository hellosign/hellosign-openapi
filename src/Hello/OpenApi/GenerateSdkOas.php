<?php

declare(strict_types=1);

namespace Hello\OpenApi;

class GenerateSdkOas
{
    private const ROOT_DIR = __DIR__ . '/../../..';

    private const SURFACE_ID = 'sdk';

    public function run(): void
    {
        $raw_file = new RawFile(self::ROOT_DIR . '/openapi-raw.yaml');
        $translation_file = self::ROOT_DIR . '/translations/en.yaml';
        $raw_file->translate(
            self::SURFACE_ID,
            $translation_file,
            $translation_file
        );

        $data = $raw_file->getData();
        unset($data['tags']);
        $raw_file->setData($data);

        $raw_file->saveFile(self::ROOT_DIR . '/openapi-sdk.yaml');
    }
}
