<?php

declare(strict_types=1);

namespace Dropbox\Sign\Test;

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

    public static function toArray(ArrayAccess $data): array
    {
        return json_decode(json_encode($data), true);
    }
}
