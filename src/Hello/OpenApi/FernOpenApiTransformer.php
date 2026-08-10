<?php

declare(strict_types=1);

namespace Hello\OpenApi;

use Symfony\Component\Yaml\Yaml;

/**
 * Transforms translated openapi.yaml into a self-contained Fern-ready spec.
 */
class FernOpenApiTransformer
{
    private const WEBHOOK_DELIVERY_NOTE =
        "\n\n> **Delivery format:** This payload is delivered to your callback URL as an HTTP " .
        "`POST` with `Content-Type: multipart/form-data`. The JSON structure documented below is " .
        "sent as the value of a single form field named `json`. The schema below describes that JSON value.";

    private const HTTP_METHODS = [
        'get',
        'post',
        'put',
        'patch',
        'delete',
        'options',
        'head',
        'trace',
    ];

    /** @var array<string, string> */
    private const DOCUMENTATION_URL_REWRITES = [
        'https://www.hellosign.com/terms' => 'https://sign.dropbox.com/terms',
        'https://www.hellosign.com/features/electronic-id' => 'https://sign.dropbox.com/features/electronic-id',
    ];

    private string $rootDir;

    /** @var array<string, string> */
    private array $refCache = [];

    public int $inlinedCodeSamples = 0;

    public int $inlinedFileRefs = 0;

    public int $normalizedCsharpSamples = 0;

    public int $promotedWebhooks = 0;

    /** @var list<array{ref: string, resolved: string, error: string}> */
    public array $missingRefs = [];

    public function __construct(string $rootDir)
    {
        $this->rootDir = rtrim($rootDir, '/');
    }

    /**
     * @param array<string, mixed> $openapi
     * @return array<string, mixed>
     */
    public function transform(array $openapi): array
    {
        $this->refCache = [];
        $this->inlinedCodeSamples = 0;
        $this->inlinedFileRefs = 0;
        $this->normalizedCsharpSamples = 0;
        $this->promotedWebhooks = 0;
        $this->missingRefs = [];

        $this->inlineCodeSamples($openapi);
        $this->inlineFileRefs($openapi);
        $this->promoteFernWebhooks($openapi);
        $this->consumeXWebhooks($openapi);
        $this->applyDocumentationUrlRewrites($openapi);

        return $openapi;
    }

    /**
     * Fern docs use sign.dropbox.com for customer-facing links.
     *
     * @param array<string, mixed> $openapi
     */
    private function applyDocumentationUrlRewrites(array &$openapi): void
    {
        $this->walk($openapi, function (&$value): void {
            if (!is_string($value)) {
                return;
            }

            $value = strtr($value, self::DOCUMENTATION_URL_REWRITES);
        });
    }

    /**
     * @param array<string, mixed> $openapi
     */
    private function inlineCodeSamples(array &$openapi): void
    {
        $this->walk($openapi, function (&$value): void {
            if (!is_array($value) || !isset($value['x-codeSamples']) || !is_array($value['x-codeSamples'])) {
                return;
            }

            foreach ($value['x-codeSamples'] as &$sample) {
                if (!is_array($sample)) {
                    continue;
                }

                $lang = $sample['lang'] ?? null;
                $shouldNormalizeSource = $this->shouldNormalizeSampleSource(is_string($lang) ? $lang : '');

                if ($lang === 'C#') {
                    $sample['lang'] = 'csharp';
                    $this->normalizedCsharpSamples += 1;
                }

                $ref = $sample['source']['$ref'] ?? null;
                if (!is_string($ref)) {
                    if ($shouldNormalizeSource && isset($sample['source']) && is_string($sample['source'])) {
                        $sample['source'] = $this->normalizeCodeSampleSource($sample['source']);
                    }
                    continue;
                }

                $resolved = $this->resolveRefPath($ref);
                try {
                    $source = $this->readCachedRef($resolved);
                    $sample['source'] = $shouldNormalizeSource
                        ? $this->normalizeCodeSampleSource($source)
                        : $source;
                    $this->inlinedCodeSamples += 1;
                } catch (\RuntimeException $error) {
                    $this->missingRefs[] = [
                        'ref' => $ref,
                        'resolved' => $resolved,
                        'error' => $error->getMessage(),
                    ];
                }
            }
            unset($sample);
        });
    }

    /**
     * @param array<string, mixed> $openapi
     */
    private function inlineFileRefs(array &$openapi): void
    {
        $this->walk($openapi, function (&$value): void {
            if (!is_array($value)) {
                return;
            }

            if (
                isset($value['description'])
                && is_array($value['description'])
                && isset($value['description']['$ref'])
                && is_string($value['description']['$ref'])
                && strpos($value['description']['$ref'], '#') !== 0
            ) {
                $ref = $value['description']['$ref'];
                $resolved = $this->resolveRefPath($ref);
                try {
                    $value['description'] = rtrim($this->readCachedRef($resolved), " \t\n\r\0\x0B");
                    $this->inlinedFileRefs += 1;
                } catch (\RuntimeException $error) {
                    $this->missingRefs[] = [
                        'ref' => $ref,
                        'resolved' => $resolved,
                        'error' => $error->getMessage(),
                    ];
                }
            }

            if (
                isset($value['value'])
                && is_array($value['value'])
                && isset($value['value']['$ref'])
                && is_string($value['value']['$ref'])
                && strpos($value['value']['$ref'], '#') !== 0
            ) {
                $ref = $value['value']['$ref'];
                $resolved = $this->resolveRefPath($ref);
                try {
                    $value['value'] = $this->parseJsonLike($this->readCachedRef($resolved));
                    $this->inlinedFileRefs += 1;
                } catch (\RuntimeException $error) {
                    $this->missingRefs[] = [
                        'ref' => $ref,
                        'resolved' => $resolved,
                        'error' => $error->getMessage(),
                    ];
                }
            }
        });
    }

    /**
     * @param array<string, mixed> $openapi
     */
    private function promoteFernWebhooks(array &$openapi): void
    {
        if (!isset($openapi['paths']) || !is_array($openapi['paths'])) {
            return;
        }

        $webhooks = isset($openapi['webhooks']) && is_array($openapi['webhooks'])
            ? $openapi['webhooks']
            : [];

        foreach ($openapi['paths'] as $pathKey => &$pathItem) {
            if (!is_array($pathItem)) {
                continue;
            }

            $webhookMethods = [];
            foreach (self::HTTP_METHODS as $method) {
                if (
                    isset($pathItem[$method])
                    && is_array($pathItem[$method])
                    && ($pathItem[$method]['x-fern-webhook'] ?? false) === true
                ) {
                    $webhookMethods[] = $method;
                }
            }

            if ($webhookMethods === []) {
                continue;
            }

            foreach ($webhookMethods as $method) {
                $operation = $pathItem[$method];
                $this->prepareWebhookOperation($operation);

                $key = $operation['operationId'] ?? null;
                if (!is_string($key) || $key === '') {
                    $key = trim(preg_replace('/[^a-zA-Z0-9]+/', '_', (string) $pathKey) ?? '', '_');
                }
                if ($key === '') {
                    $key = 'webhook_' . count($webhooks);
                }

                $webhooks[$key] = [$method => $operation];
                unset($pathItem[$method]);
                $this->promotedWebhooks += 1;
            }

            $remainingMethods = [];
            foreach (self::HTTP_METHODS as $method) {
                if (isset($pathItem[$method]) && is_array($pathItem[$method])) {
                    $remainingMethods[] = $method;
                }
            }

            if ($remainingMethods === []) {
                unset($openapi['paths'][$pathKey]);
            }
        }
        unset($pathItem);

        if ($webhooks !== []) {
            $openapi['webhooks'] = $webhooks;
        }
    }

    /**
     * @param array<string, mixed> $openapi
     */
    private function consumeXWebhooks(array &$openapi): void
    {
        if (!isset($openapi['x-webhooks']) || !is_array($openapi['x-webhooks'])) {
            unset($openapi['x-webhooks']);
            return;
        }

        $webhooks = isset($openapi['webhooks']) && is_array($openapi['webhooks'])
            ? $openapi['webhooks']
            : [];

        foreach ($openapi['x-webhooks'] as $entryKey => $entry) {
            if (!is_array($entry)) {
                continue;
            }

            foreach (self::HTTP_METHODS as $method) {
                if (!isset($entry[$method]) || !is_array($entry[$method])) {
                    continue;
                }

                $operation = $entry[$method];
                if (!isset($operation['requestBody']['content']) || !is_array($operation['requestBody']['content'])) {
                    continue;
                }

                $this->prepareWebhookOperation($operation);

                $key = $operation['operationId'] ?? null;
                if (!is_string($key) || $key === '') {
                    $key = trim(preg_replace('/[^a-zA-Z0-9]+/', '_', (string) $entryKey) ?? '', '_');
                }
                if ($key === '') {
                    $key = 'webhook_' . count($webhooks);
                }

                $webhooks[$key] = [$method => $operation];
                $this->promotedWebhooks += 1;
            }
        }

        unset($openapi['x-webhooks']);

        if ($webhooks !== []) {
            $openapi['webhooks'] = $webhooks;
        }
    }

    /**
     * @param array<string, mixed> $operation
     */
    private function prepareWebhookOperation(array &$operation): void
    {
        unset($operation['x-codeSamples'], $operation['x-fern-webhook']);

        if (!isset($operation['requestBody']) || !is_array($operation['requestBody'])) {
            return;
        }

        $existing = isset($operation['requestBody']['description']) && is_string($operation['requestBody']['description'])
            ? $operation['requestBody']['description']
            : '';

        if (strpos($existing, 'Delivery format') === false) {
            $operation['requestBody']['description'] = $existing !== ''
                ? $existing . self::WEBHOOK_DELIVERY_NOTE
                : ltrim(self::WEBHOOK_DELIVERY_NOTE);
        }
    }

    /**
     * @param mixed $value
     */
    private function walk(&$value, callable $visitor): void
    {
        $visitor($value);

        if (!is_array($value)) {
            return;
        }

        foreach ($value as &$item) {
            $this->walk($item, $visitor);
        }
        unset($item);
    }

    private function resolveRefPath(string $ref): string
    {
        if (preg_match('#^https?://#i', $ref) === 1) {
            return $ref;
        }

        return $this->rootDir . '/' . ltrim($ref, './');
    }

    private function readCachedRef(string $resolved): string
    {
        if (!array_key_exists($resolved, $this->refCache)) {
            if (preg_match('#^https?://#i', $resolved) === 1) {
                throw new \RuntimeException('Remote refs are not supported');
            }

            if (!is_readable($resolved)) {
                throw new \RuntimeException("File not readable: {$resolved}");
            }

            $contents = file_get_contents($resolved);
            if ($contents === false) {
                throw new \RuntimeException("Failed to read: {$resolved}");
            }

            $this->refCache[$resolved] = $contents;
        }

        return $this->refCache[$resolved];
    }

    /**
     * Preserve JSON object/array distinction. json_decode(..., true) turns {} into [] in PHP.
     *
     * @return mixed
     */
    private function parseJsonLike(string $text)
    {
        $decoded = json_decode($text, false);
        if (json_last_error() === JSON_ERROR_NONE) {
            return $this->normalizeDecodedJson($decoded);
        }

        return Yaml::parse($text);
    }

    /**
     * @return mixed
     */
    private function normalizeDecodedJson($value)
    {
        if ($value instanceof \stdClass) {
            $normalized = [];
            foreach (get_object_vars($value) as $key => $item) {
                $normalized[$key] = $this->normalizeDecodedJson($item);
            }

            return $normalized === [] ? new \stdClass() : $normalized;
        }

        if (is_array($value)) {
            return array_map([$this, 'normalizeDecodedJson'], $value);
        }

        return $value;
    }

    private function shouldNormalizeSampleSource(string $lang): bool
    {
        return in_array($lang, ['C#', 'csharp', 'TypeScript', 'typescript', 'JavaScript', 'javascript', 'Node'], true);
    }

    private function normalizeCodeSampleSource(string $source): string
    {
        return preg_replace("/^(\s*)'y':/m", '$1y:', $source) ?? $source;
    }
}
