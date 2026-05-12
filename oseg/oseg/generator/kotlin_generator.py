import inspect

import openapi_pydantic as oa
from dataclasses import dataclass
from typing import TypedDict

from oseg import generator, model
from oseg.parser import NormalizeStr, CamelCaseOption

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "groupId": str,
        "packageName": str,
        "artifactId": str | None,
        "oseg.package": str | None,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    package: str | None


class KotlinConfig(generator.BaseConfig):
    GENERATOR_NAME = "kotlin"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "groupId": inspect.cleandoc(
            """
            Generated artifact package's organization. This is the SDK package
            you are generating example snippets for. Ex: org.openapitools
            """
        ),
        "packageName": inspect.cleandoc(
            """
            Generated artifact package name.
            Ex: org.openapitools.client
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "artifactId": {
            "description": inspect.cleandoc(
                """
                artifactId of the source package. (Default: openapi-kotlin-client)
                """
            ),
            "default": "openapi-kotlin-client",
        },
        "oseg.package": {
            "description": inspect.cleandoc(
                """
                Package for your example snippets.
                Ex: oseg.petstore.examples
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

        self.groupId = config.get("groupId")
        self.packageName = config.get("packageName")

        assert isinstance(self.groupId, str)
        assert isinstance(self.packageName, str)

        self.artifactId = self._get_value("artifactId")

        self.oseg = ConfigOseg(
            package=self._get_value("oseg.package"),
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class KotlinGenerator(generator.BaseGenerator):
    CONFIG_CLASS = KotlinConfig
    FILE_EXTENSION = "kt"
    NAME = "kotlin"
    TEMPLATE = f"{NAME}.jinja2"

    RESERVED_KEYWORD_PREPEND = "_"
    RESERVED_KEYWORDS = [
        "_",
        "ApiResponse",
        "abstract",
        "actual",
        "annotation",
        "as",
        "break",
        "class",
        "companion",
        "const",
        "constructor",
        "continue",
        "contract",
        "crossinline",
        "data",
        "delegate",
        "do",
        "dynamic",
        "else",
        "enum",
        "expect",
        "external",
        "false",
        "field",
        "final",
        "finally",
        "for",
        "fun",
        "if",
        "import",
        "in",
        "infix",
        "init",
        "inline",
        "inner",
        "interface",
        "internal",
        "is",
        "it",
        "lateinit",
        "noinline",
        "null",
        "object",
        "open",
        "operator",
        "out",
        "override",
        "package",
        "param",
        "private",
        "property",
        "protected",
        "public",
        "receiver",
        "reified",
        "return",
        "sealed",
        "setparam",
        "super",
        "suspend",
        "tailrec",
        "this",
        "throw",
        "true",
        "try",
        "typealias",
        "typeof",
        "val",
        "var",
        "vararg",
        "when",
        "where",
        "while",
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

        if name == "_":
            return "u"

        return f"{self.RESERVED_KEYWORD_PREPEND}{name}"

    def print_apiname(self, name: str) -> str:
        return NormalizeStr.pascal_case(f"{name}Api")

    def print_classname(self, name: str) -> str:
        return NormalizeStr.pascal_case(name)

    def print_methodname(self, name: str) -> str:
        result = NormalizeStr.camel_case(name)

        # if the original method name starts with _, keep it
        if name.startswith("_"):
            return f"_{result}"

        return result

    def print_propname(self, name: str) -> str:
        return self.unreserve_keyword(
            NormalizeStr.camel_case(
                name,
                CamelCaseOption.LOWERCASE_FIRST_SECTION,
            )
        )

    def print_variablename(self, name: str) -> str:
        return self.unreserve_keyword(
            NormalizeStr.camel_case(
                name,
                CamelCaseOption.LOWERCASE_FIRST_SECTION,
            )
        )

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

            if item.type == oa.DataType.STRING and item.is_enum:
                enum_type = NormalizeStr.pascal_case(f"{item.name}")

                if not parent:
                    parent_type = NormalizeStr.pascal_case(self.operation.api_name)
                    operation_id = NormalizeStr.pascal_case(self.operation.operation_id)
                    printable.target_type = (
                        f"{parent_type}Api.{enum_type}{operation_id}"
                    )

                    for i in item.value:
                        printable.value.append(self._handle_value(item, i, parent))
                else:
                    parent_type = NormalizeStr.pascal_case(parent.type)
                    printable.target_type = f"{parent_type}.{enum_type}"

                    for i in item.value:
                        printable.value.append(self._handle_value(item, i, parent))

                return printable

            for i in item.value:
                printable.value.append(self._handle_value(item, i, parent))

            return printable

        printable.value = self._handle_value(item, item.value, parent)

        return printable

    def print_null(self) -> str:
        return "null"

    def has_named_parameters(self) -> bool:
        return True

    def _handle_value(
        self,
        item: model.PropertyScalar,
        value: any,
        parent: model.PropertyObject | None,
    ) -> any:
        if value is None:
            return self._to_json(value)

        if item.type == oa.DataType.STRING:
            if item.is_enum:
                enum_name = self._get_enum_name(item, value)

                if enum_name is None:
                    return self.print_null()

                if parent is None or item not in parent.properties.values():
                    parent_type = NormalizeStr.pascal_case(self.operation.api_name)
                    operation_id = NormalizeStr.pascal_case(self.operation.operation_id)
                    enum_type = NormalizeStr.uc_first(
                        NormalizeStr.camel_case(
                            value=item.name,
                            option=CamelCaseOption.LOWERCASE_FIRST_SECTION,
                        )
                    )

                    return f"{parent_type}Api.{enum_type}{operation_id}.{value}"

                parent_type = NormalizeStr.pascal_case(parent.type)
                enum_type = NormalizeStr.pascal_case(f"{item.name}")

                return f"{parent_type}.{enum_type}.{enum_name}"

            if item.format == model.DataFormat.DATETIME.value:
                return f'OffsetDateTime.parse("{value}")'

            if item.format == model.DataFormat.DATE.value:
                return f'LocalDate.parse("{value}")'

        if isinstance(value, str):
            return self._escape_dollar(value)

        return self._to_json(value)

    def _get_enum_name(
        self,
        item: model.PropertyScalar,
        value: any,
    ) -> str | None:
        if value is None:
            return None

        value: str

        enum_varname, is_override = self._get_enum_varname(item.schema, value)

        if enum_varname is not None:
            return enum_varname

        if value == "" and "" in item.schema.enum:
            return "Empty"

        return NormalizeStr.camel_case(value.replace("-", "_minus_"))


generator.GeneratorFactory.register(KotlinGenerator)
