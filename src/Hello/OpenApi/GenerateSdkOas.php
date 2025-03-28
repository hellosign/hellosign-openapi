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
        $data['paths'] = $this->removeApplicationJsonFromFormDataOperations(
            $data['paths'],
        );
        unset($data['tags']);
        $raw_file->setData($data);

        $raw_file->saveFile(self::ROOT_DIR . '/openapi-sdk.yaml');
    }

    private function removeApplicationJsonFromFormDataOperations(array $paths): array
    {
        foreach ($paths as $path => $methods) {
            foreach ($methods as $method => $operation) {
                if (
                    empty($operation['requestBody'])
                    || empty($operation['requestBody']['content'])
                ) {
                    continue;
                }

                $content = $operation['requestBody']['content'];

                if (empty($content['multipart/form-data'])) {
                    continue;
                }

                $json_examples = $content['application/json']['examples'] ?? [];
                unset($content['application/json']);
                $content['multipart/form-data']['examples'] = $json_examples;

                $operation['requestBody']['content'] = $content;
                $paths[$path][$method]['requestBody']['content'] = $content;
            }
        }

        return $paths;
    }
}
