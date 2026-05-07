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
 * Post-generation patch for SubFormFieldRuleAction.cs.
 *
 * Between openapi-generator v7.8.0 and v7.12.0 a change was made to the
 * way a few generators create constant names from values. The original
 * way was broken: "change-field-visibility" generated a constant named
 * "TYPE_FIELD_VISIBILITY", dropping the "change" part. The fix generates
 * the correct name, "TYPE_CHANGE_FIELD_VISIBILITY", but also removes the
 * previous (incorrect) names, which is a BC break.
 *
 * To preserve source compatibility this script adds the old names back
 * as aliases (FieldVisibility = ChangeFieldVisibility, etc.). The aliases
 * share a numeric value with their canonical counterparts, which breaks
 * StringEnumConverter: Enum.GetName is not guaranteed to pick the
 * canonical name for ties, and Newtonsoft rejects duplicate
 * [EnumMember] values on the same enum. To make the aliases serialize
 * to the correct OpenAPI wire values under all circumstances, this
 * script also:
 *   - swaps StringEnumConverter for a dedicated TypeEnumJsonConverter
 *     that maps by underlying numeric value, and
 *   - injects that nested converter class into SubFormFieldRuleAction.
 */
class CopyConstants
{
    public function run(): void
    {
        $file = __DIR__ . '/../src/Dropbox.Sign/Model/SubFormFieldRuleAction.cs';
        $contents = file_get_contents($file);

        $contents = $this->addAliases($contents);
        $contents = $this->swapConverter($contents);
        $contents = $this->injectConverterClass($contents);

        file_put_contents($file, $contents);

        $this->stopEmittingDefaultIntValues(__DIR__ . '/../src/Dropbox.Sign/Model');
    }

    /**
     * For optional non-nullable int properties on request-side models
     * openapi-generator emits
     *   [DataMember(Name = "foo", EmitDefaultValue = true)]
     *   public int Foo { get; set; }
     * which forces `"foo": 0` onto the wire whenever the caller never
     * set a value (C# default for int is 0). For fields like font_size
     * the server rejects the default with a 400 ("'font_size' must be
     * between 7 and 49"), and more generally any optional int whose
     * server-side default is not 0 is misrepresented.
     *
     * Scope:
     *   - Only request-side models are patched. Response models keep
     *     EmitDefaultValue = true so that round-trip serialization
     *     preserves explicit zero values that the server sent (tests
     *     under Dropbox.Sign.Test.Api rely on this fidelity). Response
     *     models are identified by the "Response" substring in the
     *     file name, which is the convention for all generated
     *     response types in this SDK.
     *   - Required int properties are left alone: openapi-generator
     *     inserts `IsRequired = true,` between the Name and
     *     EmitDefaultValue tokens, which this regex does not match.
     */
    private function stopEmittingDefaultIntValues(string $modelDir): void
    {
        $pattern = '/(\[DataMember\(Name = "[^"]+", EmitDefaultValue = )true(\)\]\s*\r?\n\s+public int [A-Za-z_][A-Za-z0-9_]* \{ get; set; \})/';

        foreach (glob($modelDir . '/*.cs') as $path) {
            if (strpos(basename($path), 'Response') !== false) {
                continue;
            }

            $contents = file_get_contents($path);
            $patched  = preg_replace($pattern, '$1false$2', $contents);
            if ($patched !== null && $patched !== $contents) {
                file_put_contents($path, $patched);
            }
        }
    }

    private function addAliases(string $contents): string
    {
        $constant_1 = "            ChangeFieldVisibility = 1,";
        $replace_1 = implode("\n", [
            $constant_1,
            '            FieldVisibility = ChangeFieldVisibility,',
        ]);

        $constant_2 = "            ChangeGroupVisibility = 2";
        $replace_2 = implode(",\n", [
            $constant_2,
            '            GroupVisibility = ChangeGroupVisibility',
        ]);

        $contents = str_replace($constant_1, $replace_1, $contents);
        $contents = str_replace($constant_2, $replace_2, $contents);

        return $contents;
    }

    private function swapConverter(string $contents): string
    {
        $needle = "        [JsonConverter(typeof(StringEnumConverter))]\n"
                . "        public enum TypeEnum";

        $replacement = <<<'CS'
        // A dedicated converter is used instead of StringEnumConverter
        // because this enum intentionally carries alias members
        // (FieldVisibility, GroupVisibility) that share a numeric value
        // with their canonical counterparts. StringEnumConverter goes
        // through Enum.GetName, which is not guaranteed to pick the
        // canonical name when multiple members share a value, and
        // Newtonsoft rejects duplicate [EnumMember] values on the same
        // enum. Mapping by numeric value here is unambiguous: both the
        // canonical name and its alias produce the same wire string.
        [JsonConverter(typeof(TypeEnumJsonConverter))]
        public enum TypeEnum
CS;

        return str_replace($needle, $replacement, $contents);
    }

    private function injectConverterClass(string $contents): string
    {
        // Inject the nested converter immediately after the enum's
        // closing brace. Anchor on the enum's tail, which is unique in
        // the file.
        $needle = "            GroupVisibility = ChangeGroupVisibility\n"
                . "        }\n";

        $converter = <<<'CS'
            GroupVisibility = ChangeGroupVisibility
        }

        /// <summary>
        /// Serializes SubFormFieldRuleAction.TypeEnum to and from the
        /// OpenAPI wire values (change-field-visibility,
        /// change-group-visibility). The switch is driven by the
        /// underlying numeric value so that legacy alias members
        /// (FieldVisibility, GroupVisibility) serialize identically to
        /// their canonical counterparts.
        /// </summary>
        public class TypeEnumJsonConverter : JsonConverter<TypeEnum>
        {
            public override void WriteJson(JsonWriter writer, TypeEnum value, JsonSerializer serializer)
            {
                switch (value)
                {
                    case TypeEnum.ChangeFieldVisibility:
                        writer.WriteValue("change-field-visibility");
                        return;
                    case TypeEnum.ChangeGroupVisibility:
                        writer.WriteValue("change-group-visibility");
                        return;
                    default:
                        throw new JsonSerializationException(
                            $"Unknown value for SubFormFieldRuleAction.TypeEnum: {(int)value}");
                }
            }

            public override TypeEnum ReadJson(JsonReader reader, Type objectType, TypeEnum existingValue, bool hasExistingValue, JsonSerializer serializer)
            {
                if (reader.TokenType == JsonToken.Null)
                {
                    throw new JsonSerializationException(
                        "Cannot deserialize null into SubFormFieldRuleAction.TypeEnum");
                }

                var raw = reader.Value?.ToString();
                switch (raw)
                {
                    case "change-field-visibility":
                        return TypeEnum.ChangeFieldVisibility;
                    case "change-group-visibility":
                        return TypeEnum.ChangeGroupVisibility;
                    default:
                        throw new JsonSerializationException(
                            $"Unknown wire value for SubFormFieldRuleAction.TypeEnum: {raw}");
                }
            }
        }

CS;

        return str_replace($needle, $converter, $contents);
    }
}

$copier = new CopyConstants();
$copier->run();
