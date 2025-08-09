import inspect
import openapi_pydantic as oa
from dataclasses import dataclass
from typing import TypedDict
from oseg import generator, model
from oseg.parser import NormalizeStr, PascalCaseOption

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "npmName": str,
        "oseg.npmName": str | None,
        "oseg.printApiCallProperty": bool | None,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    npmName: str | None
    printApiCallProperty: bool | None


class TypescriptNodeConfig(generator.BaseConfig):
    GENERATOR_NAME = "typescript-node"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "npmName": inspect.cleandoc(
            """
            The package name of the source package. This is the SDK package
            you are generating example snippets for. Ex: openapi_client
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "oseg.npmName": {
            "description": inspect.cleandoc(
                """
                The package name to use in the package.json, for your example snippets.
                Ex: @oseg/petstore_examples
                """
            ),
            "default": None,
        },
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

        self.npmName = config.get("npmName")
        assert isinstance(self.npmName, str)

        self.oseg = ConfigOseg(
            npmName=self._get_value("oseg.npmName"),
            printApiCallProperty=self._get_value("oseg.printApiCallProperty"),
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class TypescriptNodeGenerator(generator.BaseGenerator):
    CONFIG_CLASS = TypescriptNodeConfig
    FILE_EXTENSION = "ts"
    NAME = "typescript-node"
    TEMPLATE = f"{NAME}.jinja2"

    RESERVED_KEYWORD_PREPEND = "_"
    RESERVED_KEYWORDS = [
        "abstract",
        "await",
        "boolean",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "double",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "final",
        "finally",
        "float",
        "for",
        "formParams",
        "function",
        "goto",
        "headerParams",
        "if",
        "implements",
        "import",
        "in",
        "instanceof",
        "int",
        "interface",
        "let",
        "long",
        "native",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "queryParameters",
        "requestOptions",
        "return",
        "short",
        "static",
        "super",
        "switch",
        "synchronized",
        "this",
        "throw",
        "transient",
        "true",
        "try",
        "typeof",
        "useFormData",
        "var",
        "varLocalDeferred",
        "varLocalPath",
        "void",
        "volatile",
        "while",
        "with",
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
        return NormalizeStr.camel_case(name)

    def print_propname(self, name: str) -> str:
        return self.unreserve_keyword(NormalizeStr.camel_case(name))

    def print_variablename(self, name: str) -> str:
        return self.unreserve_keyword(NormalizeStr.camel_case(name))

    def print_scalar(
        self,
        parent: model.PropertyObject | None,
        item: model.PropertyScalar,
    ) -> model.PrintableScalar:
        printable = model.PrintableScalar()
        printable.value = None
        printable.is_enum = item.is_enum
        printable.target_type = self._get_target_type(item=item, parent=parent)

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

    def print_null(self) -> str:
        return "undefined"

    def _get_target_type(
        self,
        item: model.PropertyScalar,
        parent: model.PropertyObject | None,
    ) -> str | None:
        if item.type == oa.DataType.STRING and item.is_enum:
            if parent is None:
                return None

            parent_type = NormalizeStr.pascal_case(parent.type)
            enum_type = NormalizeStr.pascal_case(f"{item.name}Enum")

            return f"{parent_type}.{enum_type}"

        return None

    def _handle_value(
        self,
        item: model.PropertyScalar,
        value: any,
        parent: model.PropertyObject | None,
    ) -> any:
        if item.type != oa.DataType.STRING:
            return self._to_json(value)

        if item.is_enum:
            enum_name = self._get_enum_name(item, value)

            if enum_name is None:
                return self.print_null()

            if parent is None:
                return self._to_json(value)

            parent_type = NormalizeStr.pascal_case(parent.type)
            enum_type = NormalizeStr.pascal_case(f"{item.name}Enum")
            enum_name = NormalizeStr.pascal_case(
                enum_name,
                option=PascalCaseOption.LOWERCASE_CONTIGUOUS,
            )

            final = f"models.{parent_type}.{enum_type}.{enum_name}"

            # if currently in api call method, append ".toString()" to enums
            if parent and self.property_container.body == parent:
                if self.property_container.request.has_formdata:
                    final += ".toString()"

            return final

        if item.format == model.DataFormat.DATETIME.value:
            return f'new Date("{value}")'

        if item.format == model.DataFormat.DATE.value:
            return self._to_json(value)

        return self._to_json(value)

    def _get_enum_name(
        self,
        item: model.PropertyScalar,
        value: any,
    ) -> str | None:
        enum_varname, is_override = self._get_enum_varname(item.schema, value)

        if enum_varname is not None:
            return enum_varname

        if value == "" and "" in item.schema.enum:
            return "Empty"

        if value is None:
            return None

        return NormalizeStr.pascal_case(value)


generator.GeneratorFactory.register(TypescriptNodeGenerator)
