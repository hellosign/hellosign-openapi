<?php

declare(strict_types=1);

namespace Hello\OpenApi;

use Symfony\Component\Yaml\Yaml;

class GenerateFernOas
{
    private const ROOT_DIR = __DIR__ . '/../../..';

    public function run(): void
    {
        $inputFile = self::ROOT_DIR . '/openapi.yaml';
        $outputFile = self::ROOT_DIR . '/openapi-fern.yaml';

        if (!is_readable($inputFile)) {
            throw new \RuntimeException("Expected translated OpenAPI file at {$inputFile}. Run Translate first.");
        }

        $openapi = Yaml::parseFile($inputFile);
        if (!is_array($openapi)) {
            throw new \RuntimeException("Failed to parse {$inputFile}");
        }

        $transformer = new FernOpenApiTransformer(self::ROOT_DIR);
        $transformed = $transformer->transform($openapi);

        $writer = new FernOpenApiWriter();
        $writer->write($transformed, $outputFile);

        echo "Created Fern OpenAPI file at openapi-fern.yaml\n";
        echo "  Inlined code sample refs: {$transformer->inlinedCodeSamples}\n";
        echo "  Inlined file refs: {$transformer->inlinedFileRefs}\n";
        echo "  Normalized C# samples: {$transformer->normalizedCsharpSamples}\n";
        echo "  Promoted webhooks: {$transformer->promotedWebhooks}\n";

        if ($transformer->missingRefs !== []) {
            echo "  Missing refs: " . count($transformer->missingRefs) . "\n";
            foreach ($transformer->missingRefs as $missing) {
                echo "    - {$missing['ref']} -> {$missing['resolved']}: {$missing['error']}\n";
            }

            throw new \RuntimeException('Fern OpenAPI generation completed with missing refs.');
        }
    }
}
