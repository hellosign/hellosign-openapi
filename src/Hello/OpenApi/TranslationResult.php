<?php

declare(strict_types=1);

namespace Hello\OpenApi;

/**
 * Represents a result of translating the openapi raw file.
 * The all hidden flag is useful to unset empty collections which occur as a
 * result of hiding all the spec within them.
 *
 * @see RawFile::translate()
 */
class TranslationResult
{
    /**
     * Contains the OpenAPI spec, in array form
     */
    private array $data;

    /**
     * Set to true if data is empty because everything was hidden.
     */
    public bool $all_hidden;

    public function __construct(array $data, bool $all_hidden)
    {
        $this->data = $data;
        $this->all_hidden = $all_hidden;
    }

    public function getData(): array
    {
        return $this->data;
    }

    /**
     * Returns whether everything was hidden.
     */
    public function isAllHidden(): bool
    {
        return $this->all_hidden;
    }
}
