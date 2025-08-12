import inspect
import openapi_pydantic as oa
from dataclasses import dataclass
from typing import TypedDict
from oseg import generator, model
from oseg.parser import NormalizeStr

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "invokerPackage": str,
        "composerPackageName": str | None,
        "oseg.namespace": str | None,
        "oseg.composerPackageName": str | None,
        "oseg.autoloadLocation": str | None,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    namespace: str | None
    composerPackageName: str | None
    autoloadLocation: str | None


class PhpConfig(generator.BaseConfig):
    GENERATOR_NAME = "php"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "invokerPackage": inspect.cleandoc(
            """
            The namespace of the source package. This is the SDK package
            you are generating example snippets for. Ex: Yay\\Pets
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "composerPackageName": {
            "description": inspect.cleandoc(
                """
                Composer package name of the source package.
                (Default: openapi/client)
                """
            ),
            "default": "openapi/client",
        },
        "oseg.namespace": {
            "description": inspect.cleandoc(
                """
                Namespace for your example snippets.
                Ex: OSEG\\PetStoreExamples
                """
            ),
            "default": None,
        },
        "oseg.composerPackageName": {
            "description": inspect.cleandoc(
                """
                The name to use in the composer package name, for your example snippets.
                Ex: oseg/petstore_examples
                """
            ),
            "default": None,
        },
        "oseg.autoloadLocation": {
            "description": inspect.cleandoc(
                """
                Path to Composer autoloader.
                Ex: __DIR__ . '/../vendor/autoload.php'
                """
            ),
            "default": None,
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

        self.invokerPackage = config.get("invokerPackage")
        assert isinstance(self.invokerPackage, str)

        self.composerPackageName = self._get_value("composerPackageName")

        self.oseg = ConfigOseg(
            namespace=self._get_value("oseg.namespace"),
            composerPackageName=self._get_value("oseg.composerPackageName"),
            autoloadLocation=self._get_value("oseg.autoloadLocation"),
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class PhpGenerator(generator.BaseGenerator):
    CONFIG_CLASS = PhpConfig
    FILE_EXTENSION = "php"
    NAME = "php"
    TEMPLATE = f"{NAME}.jinja2"

    # reserved keyword functionality only applicable to enums
    RESERVED_KEYWORD_PREPEND = "_"
    RESERVED_KEYWORDS = [
        "__halt_compiler",
        "_header_accept",
        "_tempbody",
        "abstract",
        "and",
        "array",
        "as",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "die",
        "do",
        "echo",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "eval",
        "exit",
        "extends",
        "final",
        "for",
        "foreach",
        "formparams",
        "function",
        "global",
        "goto",
        "headerparams",
        "httpbody",
        "if",
        "implements",
        "include",
        "include_once",
        "instanceof",
        "insteadof",
        "interface",
        "isset",
        "list",
        "namespace",
        "new",
        "or",
        "print",
        "private",
        "protected",
        "public",
        "queryparams",
        "require",
        "require_once",
        "resourcepath",
        "return",
        "static",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "while",
        "xor",
    ]

    config: CONFIG_CLASS

    def is_reserved_keyword(self, name: str, secondary: bool = False) -> bool:
        return False

    def unreserve_keyword(
        self,
        name: str,
        force: bool = False,
        secondary: bool = False,
    ) -> str:
        return name

    def print_apiname(self, name: str) -> str:
        return NormalizeStr.pascal_case(f"{name}Api")

    def print_classname(self, name: str) -> str:
        return NormalizeStr.pascal_case(name)

    def print_methodname(self, name: str) -> str:
        return NormalizeStr.camel_case(name)

    def print_propname(self, name: str) -> str:
        return NormalizeStr.snake_case(name)

    def print_variablename(self, name: str) -> str:
        name = NormalizeStr.snake_case(name)

        if not name.startswith("$"):
            return "$" + name

        return name

    def print_scalar(
        self,
        parent: model.PropertyObject | None,
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
                printable.value.append(self._handle_value(item, i, parent))

            return printable

        printable.value = self._handle_value(item, item.value, parent)

        return printable

    def has_named_parameters(self) -> bool:
        return True

    def print_null(self) -> str:
        return "null"

    def _handle_value(
        self,
        item: model.PropertyScalar,
        value: any,
        parent: model.PropertyObject | None,
    ) -> any:
        if item.value is None:
            return self._to_json(value)

        if item.type == oa.DataType.STRING:
            # if enum but no parent, use the literal value
            if item.is_enum and parent is not None:
                namespace = self.config.invokerPackage
                enum_name = self._get_enum_name(item, item.name, value)
                parent_type = NormalizeStr.pascal_case(parent.type)

                return f"{namespace}\\Model\\{parent_type}::{enum_name}"

            if item.format in [
                model.DataFormat.DATETIME.value,
                model.DataFormat.DATE.value,
            ]:
                return f'new \\DateTime("{value}")'

        if isinstance(value, str):
            return self._escape_dollar(value)

        return self._to_json(value)

    def _get_enum_name(
        self,
        item: model.PropertyScalar,
        name: str,
        value: any,
    ) -> str:
        enum_varname, is_override = self._get_enum_varname(item.schema, value)

        if enum_varname is not None:
            if is_override:
                return enum_varname

            return NormalizeStr.underscore(f"{name}_{enum_varname}").upper()

        if value == "" or value is None:
            return NormalizeStr.underscore(f"{name}_EMPTY").upper()

        name = NormalizeStr.underscore(name)
        value = NormalizeStr.underscore(value)

        if value.lower() in self.RESERVED_KEYWORDS:
            value = f"{self.RESERVED_KEYWORD_PREPEND}{value}"

        return f"{name}_{value}".upper()


generator.GeneratorFactory.register(PhpGenerator)
