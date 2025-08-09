import inspect
from dataclasses import dataclass

from jinja2.runtime import Macro
from mock import mock
from typing import TypedDict
from oseg import generator, model, parser

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "packageName": str,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    pass


class MockConfig(generator.BaseConfig):
    GENERATOR_NAME = "mock"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "packageName": inspect.cleandoc(
            """
            The package name of the source package. This is the SDK package
            you are generating example snippets for. Ex: openapi_client
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "oseg.ignoreOptionalUnset": {
            "description": inspect.cleandoc(
                """
                Skip printing optional properties that do not have
                a value. (Default: true)
                """
            ),
            "default": True,
        },
        "oseg.security": {
            "description": inspect.cleandoc(
                """
                Security scheme definitions
                """
            ),
            "default": {},
        },
    }

    def __init__(self, config: ConfigDef):
        super().__init__(config)

        self.packageName = config.get("packageName")
        assert isinstance(self.packageName, str)

        self.oseg = ConfigOseg(
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class MockGenerator(generator.BaseGenerator):
    FILE_EXTENSION = "mock"
    NAME = "mock"
    TEMPLATE = f"{NAME}.jinja2"

    RESERVED_KEYWORD_PREPEND = "var_"
    RESERVED_KEYWORDS = [
        "try",
        "while",
        "with",
    ]
    RESERVED_KEYWORDS_SECONDARY = [
        "configuration",
        "version",
    ]

    _config: MockConfig

    def is_reserved_keyword(self, name: str, secondary: bool = False) -> bool:
        parsed = parser.NormalizeStr.snake_case(name)

        if secondary:
            return parsed in self.RESERVED_KEYWORDS_SECONDARY

        return parsed in self.RESERVED_KEYWORDS

    def unreserve_keyword(
        self,
        name: str,
        force: bool = False,
        secondary: bool = False,
    ) -> str:
        if not force and not self.is_reserved_keyword(name, secondary):
            return name

        if not name.startswith(self.RESERVED_KEYWORD_PREPEND):
            return f"{self.RESERVED_KEYWORD_PREPEND}{name}"

        return name

    def print_apiname(self, name: str) -> str:
        return parser.NormalizeStr.pascal_case(f"{name}Api")

    def print_classname(self, name: str) -> str:
        return parser.NormalizeStr.pascal_case(name)

    def print_methodname(self, name: str) -> str:
        return parser.NormalizeStr.camel_case(name)

    def print_propname(self, name: str) -> str:
        name = parser.NormalizeStr.snake_case(name)

        if self.is_reserved_keyword(name):
            return self.unreserve_keyword(name)

        return name

    def print_variablename(self, name: str) -> str:
        name = parser.NormalizeStr.snake_case(name)

        if self.is_reserved_keyword(name):
            return self.unreserve_keyword(name)

        return name

    def print_scalar(
        self,
        parent: model.PropertyObject,
        item: model.PropertyScalar,
    ) -> model.PrintableScalar:
        printable = model.PrintableScalar()
        printable.value = None

        if item.is_array:
            printable.is_array = True

            if item.value is None:
                return printable

            printable.value = []

            for i in item.value:
                printable.value.append(self._handle_value(item, i))

            return printable

        printable.value = self._handle_value(item, item.value)

        return printable

    def print_null(self) -> str:
        return "None"

    def _handle_value(
        self,
        item: model.PropertyScalar,
        value: any,
    ) -> any:
        if item.is_enum:
            enum_varname, is_override = self._get_enum_varname(item.schema, value)

            if enum_varname is not None:
                return enum_varname

        if isinstance(value, str):
            return value

        return self._to_json(value)


def scalar_macro_callback(printable: model.PrintableScalar) -> str | None:
    if printable.value is None:
        return None

    if printable.is_array:
        return "[" + ",".join(printable.value) + "]"

    return str(printable.value)


def freeform_macro_callback(printable: model.PrintableFreeForm) -> str | None:
    if printable.value is None:
        return None

    if printable.is_array:
        return "[" + ",".join(printable.value) + "]"

    return str(printable.value)


def object_macro_callback(printable: model.PrintableObject) -> str | None:
    if printable.value is None:
        return None

    if printable.is_array:
        return ("[" + ",".join(printable.value) + "]").lower()

    return str(printable.value).lower()


def print_security_macro_callback(printable: model.PrintableSecurity) -> str:
    comment = "# " if not printable.is_primary else ""

    if printable.method == "basic":
        return f"{comment}{printable.method}: {printable.value}:{printable.value_2}"

    return f"{comment}{printable.method}: {printable.value}"


scalar_mock = mock.MagicMock(spec="__call__")
scalar_mock.side_effect = scalar_macro_callback

freeform_mock = mock.MagicMock(spec="__call__")
freeform_mock.side_effect = freeform_macro_callback

object_mock = mock.MagicMock(spec="__call__")
object_mock.side_effect = object_macro_callback

security_mock = mock.MagicMock(spec="__call__")
security_mock.side_effect = print_security_macro_callback

JINJA_MACROS: dict[str, Macro] = {
    "print_security": security_mock,
    "print_object": object_mock,
    "print_object_array": object_mock,
    "print_scalar": scalar_mock,
    "print_scalar_array": scalar_mock,
    "print_file": scalar_mock,
    "print_file_array": scalar_mock,
    "print_free_form": freeform_mock,
    "print_free_form_array": freeform_mock,
}
