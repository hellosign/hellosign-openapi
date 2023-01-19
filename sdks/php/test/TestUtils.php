<?php

declare(strict_types=1);

namespace HelloSign\Test;

use ArrayAccess;

abstract class TestUtils
{
    public static function getFixtureData(string $filename): array
    {
        $name = explode('\\', $filename);
        $fixtureFile = array_pop($name);
        $contents = file_get_contents(
            __DIR__ . "/../test_fixtures/{$fixtureFile}.json"
        );

        return json_decode(
            $contents,
            true,
            512,
            JSON_THROW_ON_ERROR,
        );
    }

    /**
     * @param ArrayAccess|iterable $data
     */
    public static function toArray($data): array
    {
        return json_decode(json_encode($data), true);
    }
}
