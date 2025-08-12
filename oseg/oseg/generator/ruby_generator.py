import inspect
import openapi_pydantic as oa
from dataclasses import dataclass
from typing import TypedDict
from oseg import generator, model
from oseg.parser import NormalizeStr

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "gemName": str,
        "moduleName": str,
        "oseg.printApiCallProperty": bool | None,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    printApiCallProperty: bool | None


class RubyConfig(generator.BaseConfig):
    GENERATOR_NAME = "ruby"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "gemName": inspect.cleandoc(
            """
            The gem name of the source package. This is the SDK package
            you are generating example snippets for. Ex: openapi_client
            """
        ),
        "moduleName": inspect.cleandoc(
            """
            The module name of the source package. This is the SDK package
            you are generating example snippets for. Ex: OpenAPIClient
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "oseg.printApiCallProperty": {
            "description": inspect.cleandoc(
                """
                Add property name as comment for non-variable values passed to
                the API call method. (Default: true)
                """
            ),
            "default": {},
        },
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

        self.gemName = config.get("gemName")
        self.moduleName = config.get("moduleName")

        assert isinstance(self.gemName, str)
        assert isinstance(self.moduleName, str)

        self.oseg = ConfigOseg(
            printApiCallProperty=self._get_value("oseg.printApiCallProperty"),
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class RubyGenerator(generator.BaseGenerator):
    CONFIG_CLASS = RubyConfig
    FILE_EXTENSION = "rb"
    NAME = "ruby"
    TEMPLATE = f"{NAME}.jinja2"

    RESERVED_KEYWORD_PREPEND = "_"
    RESERVED_KEYWORDS = [
        "__file__",
        "__line__",
        "_header_accept",
        "_header_accept_result",
        "_header_content_type",
        "alias",
        "and",
        "auth_names",
        "begin",
        "break",
        "case",
        "class",
        "def",
        "defined?",
        "do",
        "else",
        "elsif",
        "end",
        "ensure",
        "false",
        "for",
        "form_params",
        "header_params",
        "if",
        "in",
        "local_var_path",
        "module",
        "next",
        "nil",
        "not",
        "or",
        "post_body",
        "query_params",
        "redo",
        "rescue",
        "retry",
        "return",
        "self",
        "send",
        "super",
        "then",
        "true",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield",
    ]

    config: CONFIG_CLASS

    def is_reserved_keyword(self, name: str, secondary: bool = False) -> bool:
        return name.lower() in self.RESERVED_KEYWORDS

    def unreserve_keyword(
        self,
        name: str,
        force: bool = False,
        secondary: bool = False,
    ) -> str:
        if not force and not self.is_reserved_keyword(name, secondary):
            return name

        return f"{self.RESERVED_KEYWORD_PREPEND}{name}"

    def print_apiname(self, name: str) -> str:
        return NormalizeStr.pascal_case(f"{name}Api")

    def print_classname(self, name: str) -> str:
        return NormalizeStr.pascal_case(name)

    def print_methodname(self, name: str) -> str:
        return NormalizeStr.snake_case(name)

    def print_propname(self, name: str) -> str:
        return self.unreserve_keyword(NormalizeStr.snake_case(name))

    def print_variablename(self, name: str) -> str:
        return self.unreserve_keyword(NormalizeStr.snake_case(name))

    def print_scalar(
        self,
        parent: model.PropertyObject,
        item: model.PropertyScalar,
    ) -> model.PrintableScalar:
        printable = model.PrintableScalar()
        printable.value = None
        printable.is_enum = item.is_enum

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
        return "nil"

    def _handle_value(self, item: model.PropertyScalar, value: any) -> any:
        if value is None:
            return self.print_null()

        if item.type == oa.DataType.STRING:
            if item.format == model.DataFormat.DATETIME.value:
                return f'Date.parse("{value}").to_time'

            if item.format == model.DataFormat.DATE.value:
                return f'Date.parse("{value}").to_date'

        int_fixed = self._fix_ints(item, value)

        return int_fixed if int_fixed is not None else self._to_json(value)

    def _fix_ints(self, item: model.PropertyScalar, value: any) -> any:
        if item.type not in [oa.DataType.INTEGER, oa.DataType.NUMBER] or value is None:
            return None

        if item.type == oa.DataType.NUMBER:
            return f"({value}).to_f"

        return value


generator.GeneratorFactory.register(RubyGenerator)
