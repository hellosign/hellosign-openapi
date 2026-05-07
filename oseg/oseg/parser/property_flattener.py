from __future__ import annotations
from oseg import model, parser


class PropertyFlattener:
    def __init__(self, container: model.PropertyContainer):
        self._container: model.PropertyContainer = container

    def flatten(self) -> dict[str, model.PROPERTY_OBJECT_TYPE]:
        """Reads through request parameters and body data to recursively find all
        PropertyObject and PropertyObjectArray objects, returned in a flat
        dict.

        Any object dependencies (sub-objects) of a given object will
        be found and appended to the list before the object itself.
        In this way sub-objects can be parsed in a Jinja template as
        variables before the object variable that references them is parsed.

        Non-objects are not included as they can be defined inline as an
        object's property.
        """

        result = {}

        for name, prop in self._container.properties().items():
            if not isinstance(prop, model.PropertyObject) and not isinstance(
                prop, model.PropertyObjectArray
            ):
                continue

            sub_results = self._flatten_object(
                parent=prop,
                parent_name="",
            )

            result = {**result, **sub_results}

            """If formdata then we are dealing with each body property
            individually so we must add the object to the result list
            """
            if self._container.body and self._container.request.has_formdata:
                current = {prop.name: prop}
                result = {**result, **current}

        """Requests without formdata will have their body content defined
        as a single object in the request, containing all its sub data.

        See OperationParser::FORM_DATA_CONTENT_TYPES
        """
        if (
            self._container.body
            and not self._container.request.has_formdata
            and parser.TypeChecker.is_property_objectish(self._container.body)
        ):
            result[self._container.body_type] = self._container.body

        return result

    def _flatten_object(
        self,
        parent: model.PROPERTY_OBJECT_TYPE,
        parent_name: str,
    ) -> dict[str, model.PROPERTY_OBJECT_TYPE]:
        """Children are added to the top of results"""

        result = {}
        parent_name = f"{parent_name}_" if parent_name else ""

        if isinstance(parent, model.PropertyObjectArray):
            name = f"{parent_name}{parent.name}"

            i = 1
            for prop in parent.properties:
                sub_name = f"{name}_{i}"
                prop.name = sub_name
                result = {
                    **self._flatten_object(prop, sub_name),
                    **result,
                    sub_name: prop,
                }
                i += 1

            return result

        for name, prop in parent.objects.items():
            sub_name = f"{parent_name}{name}"
            prop.name = sub_name
            result = {
                **self._flatten_object(prop, sub_name),
                **result,
                sub_name: prop,
            }

        for name, array_obj in parent.array_objects.items():
            i = 1
            sub_name_base = f"{parent_name}{name}"

            for prop in array_obj.properties:
                sub_name = f"{sub_name_base}_{i}"
                prop.name = sub_name
                result = {
                    **self._flatten_object(prop, sub_name),
                    **result,
                    sub_name: prop,
                }
                i += 1

            result[sub_name_base] = array_obj

        return result
