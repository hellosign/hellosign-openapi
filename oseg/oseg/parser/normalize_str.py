import re
from enum import Enum
from typing import Callable


class CamelCaseOption(Enum):
    UPPERCASE_KEEP = 1
    LOWERCASE_CONTIGUOUS = 2
    LOWERCASE_FIRST_SECTION = 3


class PascalCaseOption(Enum):
    UPPERCASE_KEEP = 1
    LOWERCASE_CONTIGUOUS = 2


class UnderscoreOption(Enum):
    FIRST_CHAR_JOIN = 1
    FIRST_CHAR_SEPARATE = 2


class NormalizeStr:
    _REGEX_CACHE: dict[str, re.Pattern[str]] = {}
    _camelize_cache: dict[str, str] = {}
    _underscore_cache: dict[str, str] = {}

    @classmethod
    def camel_case(
        cls,
        value: str,
        option: CamelCaseOption = CamelCaseOption.UPPERCASE_KEEP,
    ) -> str:
        """camelCase a string

        option: CamelCaseOption
            Keep uppercase characters as-is. Otherwise you won't see
            contiguous uppercase characters.

            For "LD-API-Version":
            UPPERCASE_KEEP: lDAPIVersion
            LOWERCASE_CONTIGUOUS: ldApiVersion
            LOWERCASE_FIRST_SECTION: ldAPIVersion
        """

        if option == CamelCaseOption.LOWERCASE_CONTIGUOUS:
            value = cls.snake_case(value)

        if option == CamelCaseOption.LOWERCASE_FIRST_SECTION:
            values = cls.underscore(value).split("_")
            values[0] = values[0].lower()
            value = "_".join(values)

        return cls.lc_first(cls._camelize(value))

    @classmethod
    def pascal_case(
        cls,
        value: str,
        option: PascalCaseOption = PascalCaseOption.UPPERCASE_KEEP,
    ) -> str:
        """PascalCase a string

        option: PascalCaseOption
            Keep uppercase characters as-is. Otherwise you won't see
            contiguous uppercase characters.

            For "UserID_789":
            UPPERCASE_KEEP:  UserID789
            LOWERCASE_CONTIGUOUS: UserId789
        """

        if option == PascalCaseOption.LOWERCASE_CONTIGUOUS:
            value = cls.snake_case(value)

        return cls.uc_first(cls._camelize(value))

    @classmethod
    def snake_case(cls, value: str) -> str:
        """snake_case a string, all lowercase"""

        return cls.underscore(value).lower()

    @classmethod
    def underscore(
        cls,
        value: str,
        option: UnderscoreOption = UnderscoreOption.FIRST_CHAR_JOIN,
    ) -> str:
        """Underscore the given word.

        Character case is left as-is.

        separate_first_char: UnderscoreOption
            When a string is two characters long and both characters
            are uppercase, separate them with an underscore:

            For "AB":
            FIRST_CHAR_JOIN: AB
            FIRST_CHAR_SEPARATE: A_B

            When a string is three characters or longer and the first two
            characters are uppercase, always separate them with an underscore:

            For "ABC":
            FIRST_CHAR_JOIN: ABC
            FIRST_CHAR_SEPARATE: A_BC

        Copied from openapi-generator
        https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/main/java/org/openapitools/codegen/utils/StringUtils.java
        """

        if value is None:
            return ""

        cache_key = f"{value}_{option.value}"

        if cache_key in cls._underscore_cache:
            return cls._underscore_cache[cache_key]

        if len(value) < 2:
            return value

        replacement_pattern = r"\1_\2"

        # Replace package separator with slash.
        result = cls._get_regex_pattern("underscore_pkg_separator_pattern").sub(
            "/", value
        )
        # Replace $ with two underscores for inner classes.
        result = cls._get_regex_pattern("dollar_pattern").sub("__", result)
        # Replace capital letter with _ plus lowercase letter.
        result = cls._get_regex_pattern("underscore_capital_letter_pattern").sub(
            replacement_pattern, result
        )
        result = cls._get_regex_pattern("underscore_lowercase_pattern").sub(
            replacement_pattern, result
        )
        result = result.replace("-", "_")
        # Replace space with underscore
        result = result.replace(" ", "_")
        # Replace non-alphanumeric with _
        result = cls._get_regex_pattern(
            "underscore_non_alphanumeric_underscore_pattern"
        ).sub("_", result)
        # Replace any double __ with single _ (yes it undoes a step from above)
        result = result.replace("__", "_")
        # Remove trailing whitespace or _
        result = result.strip(" _")

        # the first char is special, it will always be separate from rest
        # when caps and next character is caps
        if (
            option == UnderscoreOption.FIRST_CHAR_SEPARATE
            and len(result) >= 2
            and result[0].isupper()
            and result[1].isupper()
        ):
            result = f"{result[:1].upper()}_{result[1:]}"

        cls._underscore_cache[cache_key] = result

        return result

    @classmethod
    def _camelize(cls, value: str) -> str:
        if value in cls._camelize_cache:
            return cls._camelize_cache[value]

        original = value

        value = cls.underscore(value)

        # Replace all slashes with dots
        value = cls._get_regex_pattern("camelize_slash_pattern").sub(
            lambda m: "." + m.group(1).replace("\\", "\\\\"), value
        )

        # Uppercase first letter of each part split by dots
        value = "".join(cls.uc_first(part) for part in value.split("."))

        # Apply uppercase pattern replacement
        match = cls._get_regex_pattern("camelize_uppercase_pattern").match(value)
        if match:
            value = match.group(1) + match.group(2).upper() + match.group(3)
            value = cls._get_regex_pattern("dollar_pattern").sub("\\$", value)

        # Remove all underscores
        value = cls._get_regex_pattern("camelize_underscore_pattern").sub(
            lambda m: m.group(2).upper() if m.group(2).islower() else m.group(2), value
        )
        value = cls._get_regex_pattern("camelize_simple_underscore_pattern").sub(
            "", value
        )

        # Remove all hyphens
        value = cls._get_regex_pattern("camelize_hyphen_pattern").sub(
            lambda m: m.group(2).upper(), value
        )

        cls._camelize_cache[original] = value

        return value

    @classmethod
    def uc_first(cls, value: str) -> str:
        return f"{value[:1].upper()}{value[1:]}"

    @classmethod
    def lc_first(cls, value: str) -> str:
        return f"{value[:1].lower()}{value[1:]}"

    @classmethod
    def _get_regex_pattern(cls, name: str) -> re.Pattern[str]:
        if name in cls._REGEX_CACHE:
            return cls._REGEX_CACHE[name]

        patterns: dict[str, Callable[[], re.Pattern[str]]] = {
            "dollar_pattern": lambda: re.compile(r"\$"),
            "camelize_slash_pattern": lambda: re.compile(r"\/(.?)"),
            "camelize_uppercase_pattern": lambda: re.compile(r"(\.?)(\w)([^\.]*)$"),
            "camelize_underscore_pattern": lambda: re.compile(r"(_)(.)"),
            "camelize_hyphen_pattern": lambda: re.compile(r"(-)(.)"),
            "camelize_simple_underscore_pattern": lambda: re.compile(r"_"),
            "underscore_capital_letter_pattern": lambda: re.compile(
                r"([A-Z]+)([A-Z][a-z][a-z]+)"
            ),
            "underscore_lowercase_pattern": lambda: re.compile(r"([a-z\d])([A-Z])"),
            "underscore_pkg_separator_pattern": lambda: re.compile(r"\."),
            "underscore_non_alphanumeric_underscore_pattern": lambda: re.compile(
                r"[^a-zA-Z0-9]"
            ),
        }

        if name not in patterns:
            raise NotImplementedError

        cls._REGEX_CACHE[name] = patterns[name]()

        return cls._REGEX_CACHE[name]
