<?php

namespace Hello\OpenApi;

class TranslationResult
{
    /**
     * Contains the OpenAPI spec, in array form
     *
     * @var array
     */
    private array $data;

    /**
     * Set to true if data is empty because everything was hidden.
     *
     * @var bool
     */
    public bool $all_hidden;

    public function __construct(array $data, bool $all_hidden)
    {
        $this->data = $data;
        $this->all_hidden = $all_hidden;
    }

    /**
     * Returns data.
     *
     * @return array
     */
    public function getData(): array
    {
        return $this->data;
    }

    /**
     * Returns whether everything was hidden.
     *
     * @return bool
     */
    public function isAllHidden(): bool
    {
        return $this->all_hidden;
    }
}
