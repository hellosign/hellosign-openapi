<?php

declare(strict_types=1);

namespace Hello\OpenApi;

use Symfony\Component\Yaml\Yaml;

/**
 * Writes OpenAPI arrays as YAML suitable for Fern consumption.
 */
class FernOpenApiWriter
{
    private const DUMP_INLINE_DEPTH = 999;

    private const TOP_LEVEL_KEY_ORDER = [
        'openapi',
        'info',
        'servers',
        'security',
        'tags',
        'externalDocs',
        'paths',
        'x-webhooks',
        'components',
        'webhooks',
    ];

    /**
     * @param array<string, mixed> $openapi
     */
    public function write(array $openapi, string $targetFile): void
    {
        $ordered = $this->orderTopLevel($openapi);
        $this->ensureQuotedResponseKeys($ordered);

        $yaml = Yaml::dump(
            $ordered,
            self::DUMP_INLINE_DEPTH,
            2,
            Yaml::DUMP_OBJECT_AS_MAP
            ^ Yaml::DUMP_EMPTY_ARRAY_AS_SEQUENCE
            ^ Yaml::DUMP_MULTI_LINE_LITERAL_BLOCK
        );

        $yaml = str_replace('value: []', 'value: {}', $yaml);
        $yaml = str_replace('additionalProperties: []', 'additionalProperties: {}', $yaml);
        $yaml = str_replace('application/json: []', 'application/json: {}', $yaml);
        $yaml = preg_replace('/([0-9x]+)_response_code_remove_me:/i', '\'${1}\':', $yaml ?? '');
        $yaml = $this->expandFlowStyleCollections($yaml ?? '');
        $yaml = $this->normalizeYamlText($yaml);

        file_put_contents($targetFile, $yaml);
    }

    /**
     * Symfony dumps numeric response keys without quotes; Fern/historical output keeps them quoted.
     *
     * @param array<string, mixed> $value
     */
    private function ensureQuotedResponseKeys(array &$value): void
    {
        if (!is_array($value)) {
            return;
        }

        if (isset($value['responses']) && is_array($value['responses'])) {
            $responses = [];
            foreach ($value['responses'] as $code => $response) {
                $responses[(string) $code] = $response;
            }
            $value['responses'] = $responses;
        }

        foreach ($value as &$item) {
            if (is_array($item)) {
                $this->ensureQuotedResponseKeys($item);
            }
        }
        unset($item);
    }

    /**
     * @param array<string, mixed> $value
     * @return array<string, mixed>
     */
    private function orderTopLevel(array $value): array
    {
        $ordered = [];

        foreach (self::TOP_LEVEL_KEY_ORDER as $key) {
            if (array_key_exists($key, $value)) {
                $ordered[$key] = $value[$key];
            }
        }

        foreach ($value as $key => $item) {
            if (!array_key_exists($key, $ordered)) {
                $ordered[$key] = $item;
            }
        }

        return $ordered;
    }

    /**
     * Symfony falls back to JSON-style flow collections at deep nesting; expand them to block YAML.
     */
    private function expandFlowStyleCollections(string $text): string
    {
        $expanded = [];

        foreach (explode("\n", $text) as $line) {
            array_push($expanded, ...$this->expandFlowStyleLine($line));
        }

        return implode("\n", $expanded);
    }

    /**
     * @return list<string>
     */
    private function expandFlowStyleLine(string $line): array
    {
        if (preg_match('/^(\s+)([\w.-]+):\s*\{\s*\}\s*(#.*)?$/', $line, $match)) {
            $suffix = isset($match[3]) ? ' ' . $match[3] : '';

            return [$match[1] . $match[2] . ': {}' . $suffix];
        }

        if (preg_match('/^(\s+)([\w.-]+):\s*\[\]\s*(#.*)?$/', $line, $match)) {
            $suffix = isset($match[3]) ? ' ' . $match[3] : '';

            return [$match[1] . $match[2] . ': []' . $suffix];
        }

        if (preg_match('/^(\s+)([\w.-]+):\s*\[(.*)\]\s*(#.*)?$/', $line, $match)) {
            $items = $this->parseFlowSequenceItems($match[3]);
            if ($items === null) {
                return [$line];
            }

            $lines = [$match[1] . $match[2] . ':'];
            foreach ($items as $item) {
                $lines[] = $match[1] . '  - ' . $item;
            }

            return $lines;
        }

        if (preg_match('/^(\s+)([\w.-]+):\s*\{(.+)\}\s*(#.*)?$/', $line, $match)) {
            $pairs = $this->parseFlowMappingPairs($match[3]);
            if ($pairs === null) {
                return [$line];
            }

            $lines = [$match[1] . $match[2] . ':'];
            foreach ($pairs as [$key, $value]) {
                $lines[] = $match[1] . '  ' . $key . ': ' . $value;
            }

            return $lines;
        }

        return [$line];
    }

    /**
     * @return list<string>|null
     */
    private function parseFlowSequenceItems(string $content): ?array
    {
        $content = trim($content);
        if ($content === '') {
            return [];
        }

        if (preg_match('/[\[{]/', $content)) {
            return null;
        }

        $items = preg_split('/\s*,\s*/', $content);

        return $items === false ? null : $items;
    }

    /**
     * @return list<array{0: string, 1: string}>|null
     */
    private function parseFlowMappingPairs(string $content): ?array
    {
        $content = trim($content);
        if ($content === '') {
            return [];
        }

        if (preg_match('/[\[{]/', $content)) {
            return null;
        }

        $pairs = [];
        foreach (preg_split('/\s*,\s*/', $content) as $segment) {
            if (!preg_match('/^([\w.-]+):\s*(.+)$/', $segment, $part)) {
                return null;
            }

            $pairs[] = [$part[1], $part[2]];
        }

        return $pairs;
    }

    private function normalizeYamlText(string $text): string
    {
        $lines = explode("\n", $text);
        $normalized = [];
        $blockScalarIndent = null;

        for ($i = 0, $count = count($lines); $i < $count; $i += 1) {
            $rawLine = $lines[$i];
            $lineIndent = strlen($rawLine) - strlen(ltrim($rawLine));
            $isBlank = trim($rawLine) === '';

            if ($blockScalarIndent !== null && !$isBlank && $lineIndent <= $blockScalarIndent) {
                $blockScalarIndent = null;
            }

            $outsideBlockScalar = $blockScalarIndent === null;

            if ($outsideBlockScalar) {
                $collapsedItem = $this->collapseExpandedSequenceItem($rawLine, $lines[$i + 1] ?? null);
                if ($collapsedItem !== null) {
                    $normalized[] = $this->quoteAmbiguousPlainKey(
                        $this->unquotePathKey(
                            $this->unquoteSimpleListItem(
                                $this->unquoteSimpleScalar($this->quoteResponseStatusKey($collapsedItem))
                            )
                        )
                    );
                    $i += 1;
                    continue;
                }
            }

            $line = $outsideBlockScalar
                ? $this->quoteAmbiguousPlainKey(
                    $this->unquotePathKey(
                        $this->unquoteSimpleListItem(
                            $this->unquoteSimpleScalar($this->quoteResponseStatusKey($rawLine))
                        )
                    )
                )
                : $rawLine;
            $nextLine = $lines[$i + 1] ?? null;
            $collapsed = $outsideBlockScalar ? $this->collapseEmptyCollection($line, $nextLine) : null;

            if ($collapsed !== null) {
                $normalized[] = $collapsed;
                $i += 1;
                continue;
            }

            $normalized[] = $line;

            if ($outsideBlockScalar && $this->isBlockScalarHeader($line)) {
                $blockScalarIndent = $lineIndent;
            }
        }

        return implode("\n", $normalized);
    }

    private function quoteResponseStatusKey(string $line): string
    {
        return preg_replace("/^(\s+)(\d+):/", "$1'$2':", $line) ?? $line;
    }

    private function unquotePathKey(string $line): string
    {
        if (!preg_match("/^(\s*)'(\/[^']*)':\s*$/", $line, $match)) {
            return $line;
        }

        return $match[1] . $match[2] . ':';
    }

    private function unquoteSimpleListItem(string $line): string
    {
        if (!preg_match("/^(\s*- )'([^']*(?:''[^']*)*)'(\s*(?:#.*)?)$/", $line, $match)) {
            return $line;
        }

        $value = str_replace("''", "'", $match[2]);
        if (!$this->canUsePlainScalar($value)) {
            return $line;
        }

        return $match[1] . $value . $match[3];
    }

    private function unquoteSimpleScalar(string $line): string
    {
        if (!preg_match("/^(\s*(?:-\s*)?[\w.-]+:\s*)'((?:[^']|'')*)'(\s*(?:#.*)?)$/", $line, $match)) {
            return $line;
        }

        $value = str_replace("''", "'", $match[2]);
        if (!$this->canUsePlainScalar($value)) {
            return $line;
        }

        return $match[1] . $value . $match[3];
    }

    private function canUsePlainScalar(string $value): bool
    {
        if ($value === '') {
            return false;
        }

        if (preg_match('/[\n\r]/', $value)) {
            return false;
        }

        if (preg_match('/^\s/', $value) || preg_match('/\s$/', $value)) {
            return false;
        }

        if (preg_match('/^https?:\/\//', $value)) {
            return true;
        }

        if ($value === 'C#') {
            return true;
        }

        if (preg_match('/^\[.*\]$/', $value)) {
            return false;
        }

        if (preg_match('/[\[\]()|]/', $value)) {
            return strpos($value, ': ') === false;
        }

        if (preg_match('/[\[\]{}&,*!>"%@]/', $value)) {
            return false;
        }

        if (preg_match('/:\s/', $value)) {
            return false;
        }

        if (preg_match('/#/', $value)) {
            return false;
        }

        if (in_array(strtolower($value), ['true', 'false', 'null', 'yes', 'no', 'on', 'off', 'y'], true)) {
            return false;
        }

        if (preg_match('/^-?\d+(?:\.\d+)?$/', $value)) {
            return false;
        }

        return true;
    }

    private function collapseExpandedSequenceItem(string $line, ?string $nextLine): ?string
    {
        if ($nextLine === null || !preg_match('/^(\s+)-\s*$/', $line, $dash)) {
            return null;
        }

        if (!preg_match('/^(\s+)(\w.+)$/', $nextLine, $child)) {
            return null;
        }

        if ($child[1] !== $dash[1] . '  ') {
            return null;
        }

        return $dash[1] . '- ' . $child[2];
    }

    private function isBlockScalarHeader(string $line): bool
    {
        return (bool) preg_match('/:\s*[>|][+-]?\s*(?:#.*)?$/', $line);
    }

    private function collapseEmptyCollection(string $line, ?string $nextLine): ?string
    {
        if ($nextLine === null) {
            return null;
        }

        if (!preg_match('/^(\s*(?:-\s*)?[^#\n][^:\n]*):\s*$/', $line, $parent)) {
            return null;
        }

        if (!preg_match('/^(\s+)(\{\}|\[\])\s*$/', $nextLine, $child)) {
            return null;
        }

        $parentIndent = strlen($parent[1]) - strlen(ltrim($parent[1]));
        $childIndent = strlen($child[1]);

        if ($childIndent <= $parentIndent) {
            return null;
        }

        return $parent[1] . ': ' . $child[2];
    }

    private function quoteAmbiguousPlainKey(string $line): string
    {
        $line = preg_replace('/^(\s*)y:/', '$1\'y\':', $line) ?? $line;
        $line = preg_replace('/^(\s*-\s*)y$/', '$1\'y\'', $line) ?? $line;
        $line = preg_replace('/^(\s*-\s*)ON$/', '$1\'ON\'', $line) ?? $line;

        return $line;
    }
}
