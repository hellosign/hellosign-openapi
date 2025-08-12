import inspect
import openapi_pydantic as oa
from dataclasses import dataclass
from typing import TypedDict
from oseg import generator, model
from oseg.parser import NormalizeStr, PascalCaseOption, CamelCaseOption

ConfigDef = TypedDict(
    "ConfigDef",
    {
        "invokerPackage": str,
        "apiPackage": str,
        "modelPackage": str,
        "artifactId": str | None,
        "oseg.package": str | None,
        "oseg.printApiCallProperty": bool | None,
        "oseg.ignoreOptionalUnset": bool | None,
        "oseg.security": dict[str, any] | None,
    },
)


@dataclass
class ConfigOseg(generator.BaseConfigOseg):
    package: str | None
    printApiCallProperty: bool


class JavaConfig(generator.BaseConfig):
    GENERATOR_NAME = "java"
    oseg: ConfigOseg
    _config: ConfigDef

    PROPS_REQUIRED = {
        "invokerPackage": inspect.cleandoc(
            """
            The root namespace of the source package. This is the SDK package
            you are generating example snippets for. Ex: org.openapitools.client
            """
        ),
        "apiPackage": inspect.cleandoc(
            """
            The API namespace of the source package.
            Ex: org.openapitools.client.api
            """
        ),
        "modelPackage": inspect.cleandoc(
            """
            The Model namespace of the source package.
            Ex: org.openapitools.client.model
            """
        ),
    }

    PROPS_OPTIONAL: dict[str, generator.PropsOptionalT] = {
        "artifactId": {
            "description": inspect.cleandoc(
                """
                artifactId of the source package. (Default: openapi-java-client)
                """
            ),
            "default": "openapi-java-client",
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
        "oseg.printApiCallProperty": {
            "description": inspect.cleandoc(
                """
                Add property name as comment for non-variable values passed to
                the API call method. (Default: true)
                """
            ),
            "default": True,
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
        self.apiPackage = config.get("apiPackage")
        self.modelPackage = config.get("modelPackage")

        assert isinstance(self.invokerPackage, str)
        assert isinstance(self.apiPackage, str)
        assert isinstance(self.modelPackage, str)

        self.artifactId = self._get_value("artifactId")

        self.oseg = ConfigOseg(
            package=self._get_value("oseg.package"),
            printApiCallProperty=self._get_value("oseg.printApiCallProperty"),
            ignoreOptionalUnset=self._get_value("oseg.ignoreOptionalUnset"),
            security=self._parse_security(),
        )


class JavaGenerator(generator.BaseGenerator):
    CONFIG_CLASS = JavaConfig
    FILE_EXTENSION = "java"
    NAME = "java"
    TEMPLATE = f"{NAME}.jinja2"

    RESERVED_KEYWORD_PREPEND = "_"
    RESERVED_KEYWORDS = [
        "_",
        "abstract",
        "apiclient",
        "apiexception",
        "apiresponse",
        "assert",
        "boolean",
        "break",
        "byte",
        "case",
        "catch",
        "char",
        "class",
        "configuration",
        "const",
        "continue",
        "default",
        "do",
        "double",
        "else",
        "enum",
        "extends",
        "file",
        "final",
        "finally",
        "float",
        "for",
        "goto",
        "if",
        "implements",
        "import",
        "instanceof",
        "int",
        "interface",
        "list",
        "localdate",
        "localreturntype",
        "localtime",
        "localvaraccept",
        "localvaraccepts",
        "localvarauthnames",
        "localvarcollectionqueryparams",
        "localvarcontenttype",
        "localvarcontenttypes",
        "localvarcookieparams",
        "localvarformparams",
        "localvarheaderparams",
        "localvarpath",
        "localvarpostbody",
        "localvarqueryparams",
        "long",
        "native",
        "new",
        "null",
        "object",
        "offsetdatetime",
        "package",
        "private",
        "protected",
        "public",
        "return",
        "short",
        "static",
        "strictfp",
        "stringutil",
        "super",
        "switch",
        "synchronized",
        "this",
        "throw",
        "throws",
        "transient",
        "try",
        "void",
        "volatile",
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
        return NormalizeStr.pascal_case(
            f"{name}Api",
            option=PascalCaseOption.LOWERCASE_CONTIGUOUS,
        )

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
                enum_type = NormalizeStr.pascal_case(f"{item.name}Enum")

                if not parent:
                    printable.target_type = enum_type
                else:
                    parent_type = NormalizeStr.pascal_case(parent.type)
                    printable.target_type = f"{parent_type}.{enum_type}"

            for i in item.value:
                printable.value.append(self._handle_value(item, i, parent))

            return printable

        printable.value = self._handle_value(item, item.value, parent)

        return printable

    def print_null(self) -> str:
        return "null"

    def force_print_parameters(self) -> bool:
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

                if parent is None:
                    return self._to_json(value)

                parent_type = NormalizeStr.pascal_case(parent.type)
                enum_type = NormalizeStr.pascal_case(f"{item.name}Enum")

                return f"{parent_type}.{enum_type}.{enum_name}"

            if item.format == model.DataFormat.DATETIME.value:
                return f'OffsetDateTime.parse("{value}")'

            if item.format == model.DataFormat.DATE.value:
                return f'LocalDate.parse("{value}")'

        int_fixed = self._fix_ints(item, value)

        return int_fixed if int_fixed is not None else self._to_json(value)

    def _get_enum_name(
        self,
        item: model.PropertyScalar,
        value: any,
    ) -> str | None:
        if value is None:
            return None

        enum_varname, is_override = self._get_enum_varname(item.schema, value)

        if enum_varname is not None:
            return enum_varname

        if value == "" and "" in item.schema.enum:
            return "Empty"

        return NormalizeStr.underscore(value).upper()

    def _fix_ints(self, item: model.PropertyScalar, value: any) -> any:
        if item.type not in [oa.DataType.INTEGER, oa.DataType.NUMBER] or value is None:
            return None

        if item.format == model.DataFormat.FLOAT.value:
            return f"{value}F"
        elif item.format == model.DataFormat.DOUBLE.value:
            return f"{value}D"
        elif item.format == model.DataFormat.INT64.value:
            return f"{value}L"

        if item.type == oa.DataType.NUMBER:
            return f"BigDecimal.valueOf({value})"

        return value


generator.GeneratorFactory.register(JavaGenerator)
