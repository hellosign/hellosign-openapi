from __future__ import annotations
import openapi_pydantic as oa
from dataclasses import dataclass
from oseg import model, parser


@dataclass
class SortedProperties:
    required: dict[str, model.PROPERTY_TYPES]
    optional: dict[str, model.PROPERTY_TYPES]


class PropertySorter:
    def __init__(self, container: model.PropertyContainer):
        self._container: model.PropertyContainer = container

    def sort(self) -> SortedProperties:
        used_property_names = {}

        required_parameters = self._parameters_by_required(True)
        optional_parameters = self._parameters_by_required(False)
        required_body = self._body_params_by_required(True)
        optional_body = self._body_params_by_required(False)

        result = SortedProperties(
            required={},
            optional={},
        )

        # todo check new name isn't already explicitly set for a property
        for parameter in required_parameters:
            name = self._generate_name(parameter.name, used_property_names)
            obj = self._parameter_object(parameter)

            # todo this happens with anyOf schema
            if obj is None:
                print(f"Skipping {name}@{parameter.param_in.value}, unsupported")
                continue

            obj.name = name
            result.required[name] = obj

        for name, prop in required_body.items():
            name = self._generate_name(name, used_property_names)
            prop.name = name
            result.required[name] = prop

        for parameter in optional_parameters:
            name = self._generate_name(parameter.name, used_property_names)
            obj = self._parameter_object(parameter)

            # todo this happens with anyOf schema
            if obj is None:
                print(f"Skipping {name}@{parameter.param_in.value}, unsupported")
                continue

            obj.name = name
            result.optional[name] = obj

        for name, prop in optional_body.items():
            name = self._generate_name(name, used_property_names)
            prop.name = name
            result.optional[name] = prop

        return result

    def _parameters_by_required(self, required_flag: bool) -> list[oa.Parameter]:
        required_parameters = []
        optional_parameters = []

        for param in self._container.request.parameters:
            if param.required:
                required_parameters.append(param)
            else:
                optional_parameters.append(param)

        if required_flag:
            return required_parameters

        return optional_parameters

    def _parameter_object(self, param: oa.Parameter) -> model.PROPERTY_TYPES | None:
        """Returns the PropertyObject for a given oa.Parameter regardless
        of what its param_in value is: path, query, header, cookie"""

        if param.param_in.value == oa.ParameterLocation.PATH.value:
            return self._container.path.properties.get(param.name)

        if param.param_in == oa.ParameterLocation.QUERY.value:
            return self._container.query.properties.get(param.name)

        if param.param_in == oa.ParameterLocation.HEADER.value:
            return self._container.header.properties.get(param.name)

        if param.param_in == oa.ParameterLocation.COOKIE.value:
            return self._container.cookie.properties.get(param.name)

    def _body_params_by_required(
        self,
        required: bool,
    ) -> dict[str, model.PROPERTY_TYPES]:
        if not self._container.body:
            return {}

        # single body property
        if not self._container.request.has_formdata or isinstance(
            self._container.body, list
        ):
            if (required and self._container.request.is_required) or (
                not required and not self._container.request.is_required
            ):
                if parser.TypeChecker.is_property_objectish(self._container.body):
                    return {self._container.body_type: self._container.body}

                return {self._container.body.name: self._container.body}

            return {}

        results = {}

        # list each body property individually
        for name, prop in self._container.body.properties.items():
            if (required and prop.is_required) or (
                not required and not prop.is_required
            ):
                results[name] = prop

        return results

    def _generate_name(self, name: str, used_property_names: dict[str, int]) -> str:
        """Keeps track of what property names have already been used"""

        name_lower = name.lower()

        if name_lower in used_property_names:
            count = used_property_names[name_lower] + 1
            name = f"{name}{count}"
            used_property_names[name_lower] = count

            return name

        used_property_names[name_lower] = 1

        return name
