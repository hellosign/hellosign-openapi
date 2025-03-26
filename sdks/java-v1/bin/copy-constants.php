#!/usr/bin/env php
<?php

require_once __DIR__ . '/../vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_error_handler(function ($level, $msg) {
    echo "Error: {$msg}";
    exit(1);
});

/**
 * Between openapi-generator v7.8.0 and v7.12.0 a change was made to the way
 * a few generators create constant names from values. The original way was
 * actually broken. For example "change-field-visibility" would generate a
 * constant name of "TYPE_FIELD_VISIBILITY", dropping the "change" part.
 *
 * The fix now generates the correct name, "TYPE_CHANGE_FIELD_VISIBILITY".
 * However, the fix also gets rid of the previous (incorrect) constant names,
 * making the fix a BC break.
 *
 * This simple script just adds the old constant names back, alongside the new
 * ones.
 */
class CopyConstants
{
    public function run(): void
    {
        $file = __DIR__ . '/../src/main/java/com/dropbox/sign/model/SubFormFieldRuleAction.java';
        $contents = file_get_contents($file);

        $constant_1 = '    CHANGE_FIELD_VISIBILITY(String.valueOf("change-field-visibility")),';
        $replace_1 = implode("\n", [
            $constant_1,
            '    FIELD_VISIBILITY(String.valueOf("change-field-visibility")),',
        ]);

        $constant_2 = '    CHANGE_GROUP_VISIBILITY(String.valueOf("change-group-visibility"));';
        $replace_2 = implode("\n", [
            '    CHANGE_GROUP_VISIBILITY(String.valueOf("change-group-visibility")),',
            '    GROUP_VISIBILITY(String.valueOf("change-group-visibility"));',
        ]);

        $contents = str_replace(
            $constant_1,
            $replace_1,
            $contents,
        );

        $contents = str_replace(
            $constant_2,
            $replace_2,
            $contents,
        );

        file_put_contents($file, $contents);
    }
}

$copier = new CopyConstants();
$copier->run();