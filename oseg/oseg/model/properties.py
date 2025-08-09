from __future__ import annotations

from enum import Enum

import openapi_pydantic as oa
from typing import Union, TypeVar, Generic, Protocol
from oseg import parser


SCALAR_TYPES = [
    oa.DataType.BOOLEAN,
    oa.DataType.INTEGER,
    oa.DataType.NUMBER,
    oa.DataType.STRING,
]


class DataFormat(str, Enum):
    DATETIME = "date-time"
    DATE = "date"
    FLOAT = "float"
    DOUBLE = "double"
    INT64 = "int64"


class PropertyInterface(Protocol):
    value: any

    def __init__(
        self,
        schema: oa.Schema,
        name: str,
        value: any,
        is_required: bool,
        is_set: bool,
    ):
        self.schema: oa.Schema = schema
        self.name: str = name
        # maps to property name ignoring conflicts with other identical names
        self.original_name: str = name
        self.value = value
        self.is_array: bool = parser.TypeChecker.is_array(self.schema)
        self.is_required: bool = is_required
        self.is_nullable: bool = parser.TypeChecker.is_nullable(self.schema)
        self.is_set: bool = is_set
        self.type: oa.DataType = self._get_type()

    # todo currently only support single type, not list of types
    def _get_type(self) -> oa.DataType:
        if self.is_array:
            # todo figure out why this happens
            if self.schema.items is None:
                raise NotImplementedError("Array items == None")

            if isinstance(self.schema.items.type, list):
                return self.schema.items.type[0]

            return self.schema.items.type

        if isinstance(self.schema.type, list):
            return self.schema.type[0]

        return self.schema.type

    def _needs_default_value(self) -> bool:
        if self.value is not None:
            return False

        if not self.is_required or self.is_nullable:
            return False

        return True


class PropertyFile(PropertyInterface):
    _T = str | list[str] | None
    _FORMAT_BYTES = "byte"
    value: _T

    def __init__(
        self,
        schema: oa.Schema,
        name: str,
        value: _T,
        is_required: bool,
        is_set: bool,
    ):
        super().__init__(schema, name, value, is_required, is_set)

        self.is_bytes: bool = self.schema.schema_format == self._FORMAT_BYTES

        if self._needs_default_value():
            self.value = "some_file.pdf" if not self.is_array else []


class PropertyFreeForm(PropertyInterface):
    _T = dict[str, any] | list[dict[str, any]] | None
    value: _T
    has_properties: bool

    def __init__(
        self,
        schema: oa.Schema,
        name: str,
        value: _T,
        is_required: bool,
        is_set: bool,
    ):
        super().__init__(schema, name, value, is_required, is_set)

        if self._needs_default_value():
            self.value = {} if not self.is_array else []

        self.has_properties = False

        if not self.is_array:
            self.has_properties = bool(schema.properties == {})
        else:
            self.has_properties = bool(schema.items.properties == {})


class PropertyScalar(PropertyInterface):
    _T_SINGLE = Union[str, int, bool]
    _T_LIST = Union[list[str], list[int], list[bool]]
    _T = Union[_T_SINGLE, _T_LIST, None]
    value: _T

    def __init__(
        self,
        schema: oa.Schema,
        name: str,
        value: _T,
        is_required: bool,
        is_set: bool,
    ):
        super().__init__(schema, name, value, is_required, is_set)

        self.format: str | None = self._set_string_format()
        self.is_enum: bool = self._set_is_enum()
        self._normalize_value()

    def _normalize_value(self) -> None:
        needs_default_value = self._needs_default_value()

        if self.is_array:
            self.value: PropertyScalar._T_LIST
            result = []

            if not needs_default_value and self.value is None:
                return

            for i in self.value if self.value is not None else []:
                if self.type == oa.DataType.STRING:
                    result.append(str(i))
                elif self.type == oa.DataType.BOOLEAN:
                    result.append(bool(i))
                else:
                    i: int
                    result.append(i)

            self.value = result

            return

        if not needs_default_value and self.value is None:
            return

        if self.type == oa.DataType.STRING:
            value = self.value

            if needs_default_value:
                value = self.schema.enum[0] if self.is_enum else f"{self.name}_string"

            self.value = str(value)
        elif self.type == oa.DataType.BOOLEAN:
            value = self.value if not needs_default_value else False
            self.value = bool(value)
        else:
            value = self.value if not needs_default_value else 0
            self.value = value

    def _set_string_format(self) -> str | None:
        if self.is_array:
            return (
                self.schema.items.schema_format
                if hasattr(self.schema.items, "schema_format")
                else None
            )

        return (
            self.schema.schema_format if hasattr(self.schema, "schema_format") else None
        )

    def _set_is_enum(self) -> bool:
        if self.is_array:
            return (
                hasattr(self.schema.items, "enum")
                and self.schema.items.enum is not None
            )

        return hasattr(self.schema, "enum") and self.schema.enum is not None


class PropertyObjectInterface(Protocol):
    schema: oa.Schema
    type: str
    base_type: str | None
    is_nullable: bool
    is_required: bool
    is_set: bool
    name: str
    # maps to property name ignoring conflicts with other identical names
    original_name: str
    properties: dict | list
    is_array: bool


class PropertyObject(PropertyObjectInterface):
    _TYPE = TypeVar("_TYPE", bound=type)

    def __init__(
        self,
        schema: oa.Schema,
        _type: str,
        base_type: str | None,
        is_required: bool,
    ):
        self.schema = schema
        self.type = _type
        # discriminator base type, if any
        self.base_type = base_type
        self.is_required = is_required
        self.is_nullable = parser.TypeChecker.is_nullable(self.schema)
        self.properties: dict[str, PROPERTY_TYPES] = {}
        self.name = _type
        self.original_name = _type
        self.is_set = True
        self.is_array = False

    @property
    def objects(self) -> dict[str, PropertyObject]:
        return self._get_properties_of_type(PropertyObject, False)

    @property
    def array_objects(self) -> dict[str, PropertyObjectArray]:
        return self._get_properties_of_type(PropertyObjectArray, True)

    @property
    def scalars(self) -> dict[str, PropertyScalar]:
        return self._get_properties_of_type(PropertyScalar, False)

    @property
    def array_scalars(self) -> dict[str, PropertyScalar]:
        return self._get_properties_of_type(PropertyScalar, True)

    @property
    def files(self) -> dict[str, PropertyFile]:
        return self._get_properties_of_type(PropertyFile, False)

    @property
    def array_files(self) -> dict[str, PropertyFile]:
        return self._get_properties_of_type(PropertyFile, True)

    @property
    def free_forms(self) -> dict[str, PropertyFreeForm]:
        return self._get_properties_of_type(PropertyFreeForm, False)

    @property
    def array_free_forms(self) -> dict[str, PropertyFreeForm]:
        return self._get_properties_of_type(PropertyFreeForm, True)

    def non_objects(
        self,
        required: bool | None = None,
    ) -> dict[str, PROPERTY_NON_OBJECT_TYPE]:
        all_props = (
            self.scalars
            | self.array_scalars
            | self.files
            | self.array_files
            | self.free_forms
            | self.array_free_forms
        )
        ordered = {}

        for prop_name, prop in all_props.items():
            if (required is None or required is True) and prop.is_required:
                ordered[prop_name] = prop

        for prop_name, prop in all_props.items():
            if (required is None or required is False) and not prop.is_required:
                ordered[prop_name] = prop

        return ordered

    def _get_properties_of_type(
        self,
        type_of: Generic[_TYPE],
        is_array: bool,
    ) -> dict[str, Generic[_TYPE]]:
        result = {}

        for name, prop in self.properties.items():
            if type_of == PropertyObject and isinstance(prop, type_of):
                result[name] = prop

                continue

            if type_of == PropertyObjectArray and isinstance(prop, type_of):
                result[name] = prop

                continue

            if not isinstance(prop, type_of) or prop.is_array != is_array:
                continue

            result[name] = prop

        return result


class PropertyObjectArray(PropertyObjectInterface):
    def __init__(
        self,
        schema: oa.Schema,
        _type: str,
        is_required: bool,
        is_set: bool,
    ):
        self.schema: oa.Schema = schema
        self.type: str = _type
        self.base_type: str = _type
        self.is_required: bool = is_required
        self.is_nullable: bool = parser.TypeChecker.is_nullable(self.schema)
        self.properties: list[PROPERTY_OBJECT_TYPE] = []
        self.name = _type
        self.original_name = _type
        self.is_set = is_set
        self.is_array = True


PROPERTY_NON_OBJECT_TYPE = Union[PropertyFile, PropertyFreeForm, PropertyScalar]
PROPERTY_OBJECT_TYPE = Union[PropertyObject, PropertyObjectArray]
PROPERTY_TYPES = Union[PROPERTY_NON_OBJECT_TYPE, PROPERTY_OBJECT_TYPE]
