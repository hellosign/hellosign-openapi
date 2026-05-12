from __future__ import annotations
import openapi_pydantic as oa
from oseg import model, parser


class PropertyContainer:
    _sorted: parser.SortedProperties

    def __init__(self, request: model.Request):
        self._body: model.PROPERTY_TYPES | None = None
        self.path: model.PropertyObject | None = None
        self.query: model.PropertyObject | None = None
        self.header: model.PropertyObject | None = None
        self.cookie: model.PropertyObject | None = None
        self.request: model.Request = request
        self.is_body_required: bool = request.is_required

        self._is_sorted: bool = False
        self._flattened_objects: dict[str, model.PropertyObject] = {}
        self._sorter: parser.PropertySorter = parser.PropertySorter(self)
        self._flattener: parser.PropertyFlattener = parser.PropertyFlattener(self)

    @property
    def has_data(self) -> bool:
        if parser.TypeChecker.is_property_objectish(self._body):
            has_body_data = len(list(self._body.properties))
        else:
            has_body_data = self._body is not None

        return bool(
            has_body_data
            or (self.path is not None and len(list(self.path.properties)))
            or (self.query is not None and len(list(self.query.properties)))
            or (self.header is not None and len(list(self.header.properties)))
            or (self.cookie is not None and len(list(self.cookie.properties)))
        )

    @property
    def body(self):
        return self._body

    @body.setter
    def body(self, data: model.PROPERTY_TYPES | None):
        self._clear_sorted_properties()
        self._body = data

    @property
    def body_type(self) -> str | None:
        body = self.body

        if body is None:
            return None

        if isinstance(body, model.PropertyObjectArray):
            return body.properties[0].type

        return body.type

    def is_parameter(self, prop: model.PROPERTY_TYPES) -> bool:
        return (
            (self.path and prop in self.path.properties.values())
            or (self.query and prop in self.query.properties.values())
            or (self.header and prop in self.header.properties.values())
            or (self.cookie and prop in self.cookie.properties.values())
        )

    def set_parameters(
        self,
        data: model.PropertyObject,
        param_in: oa.ParameterLocation,
    ) -> None:
        self._clear_sorted_properties()

        if param_in.value == oa.ParameterLocation.PATH.value:
            self.path = data

        if param_in.value == oa.ParameterLocation.QUERY.value:
            self.query = data

        if param_in.value == oa.ParameterLocation.HEADER.value:
            self.header = data

        if param_in.value == oa.ParameterLocation.COOKIE.value:
            self.cookie = data

    def properties(
        self,
        required_flag: bool | None = None,
    ) -> dict[str, model.PROPERTY_TYPES]:
        self._sort()

        if required_flag is True:
            return self._sorted.required

        if required_flag is False:
            return self._sorted.optional

        return {**self._sorted.required, **self._sorted.optional}

    def flattened_objects(self) -> dict[str, model.PropertyObject]:
        self._sort()

        return self._flattened_objects

    def _sort(self) -> None:
        # properties not yet sorted/named
        if not self._is_sorted:
            self._is_sorted = True
            self._sorted = self._sorter.sort()
            self._flattened_objects = self._flattener.flatten()

    def _clear_sorted_properties(self):
        self._required_properties = {}
        self._optional_properties = {}
        self._flattened_objects = {}
        self._is_sorted = False
