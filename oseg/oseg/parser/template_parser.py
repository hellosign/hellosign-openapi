from __future__ import annotations
from oseg import generator as g, model, parser


class TemplateParser:
    def __init__(self, generator: g.BaseGenerator):
        self._generator: g.BaseGenerator = generator

    def parse_security(
        self,
        macros: model.JinjaMacros,
        indent_count: int,
    ) -> dict[str, str]:
        """Prints security/authentication"""

        security_config = self._generator.config.oseg.security
        result = {}
        is_primary = True

        for schemes in self._generator.operation.security.schemes:
            for key, scheme in schemes.items():
                if scheme.method == model.SecurityMethod.BASIC:
                    result[key] = macros.print_security(
                        printable=model.PrintableSecurity(
                            name=scheme.name,
                            key=key,
                            method=scheme.method.value,
                            value=security_config.get(f"{key}.username", ""),
                            value_2=security_config.get(f"{key}.password", None),
                            is_primary=is_primary,
                        )
                    )

                    continue

                result[key] = macros.print_security(
                    printable=model.PrintableSecurity(
                        name=scheme.name,
                        key=key,
                        method=scheme.method.value,
                        value=security_config.get(f"{key}.{scheme.method.value}", ""),
                        is_primary=is_primary,
                    )
                )

            is_primary = False

        return self._indent(result, indent_count)

    def parse_objects(self) -> dict[str, model.PROPERTY_OBJECT_TYPE]:
        """Parse all top-level object variables"""

        property_container = self._generator.property_container

        result = {}

        for name, obj in property_container.flattened_objects().items():
            # if object is not required, is not nullable, and has no example data,
            # we can skip printing it
            if not obj.is_required and not obj.is_nullable and not obj.is_set:
                continue

            result[name] = obj

        return result

    def parse_object_properties(
        self,
        macros: model.JinjaMacros,
        parent: model.PropertyObject,
        indent_count: int,
    ) -> dict[str, str]:
        """Parse properties of a given Model object"""

        property_container = self._generator.property_container

        result = {}

        for _, prop in parent.non_objects().items():
            # if config flag oseg.ignoreOptionalUnset is enabled,
            # and property is not required, and does not have example data,
            # we can skip printing it
            if (
                self._generator.config.oseg.ignoreOptionalUnset
                and not prop.is_required
                and prop.value is None
                and not prop.is_set
            ):
                continue

            prop_name = self._resolve_keyword(prop.name, prop.original_name)
            prop_name = self._resolve_keyword(prop_name, prop.original_name, True)

            result[prop_name] = self._parse_non_objects(
                macros=macros,
                parent=parent,
                prop=prop,
            )

        parent_name = f"{parent.name}_" if property_container.body != parent else ""

        for name, parsed in self._parse_object(parent, parent_name).items():
            if not parsed.is_array:
                result[name] = macros.print_object(parsed)
            else:
                result[name] = macros.print_object_array(parsed)

        return self._indent(result, indent_count)

    def parse_object_list_properties(
        self,
        macros: model.JinjaMacros,
        parent: model.PropertyObjectArray,
        indent_count: int,
    ) -> str:
        """Parse root-level data for a list data for a single Model object"""

        printable = model.PrintableObject()
        printable.is_array = True
        printable.value = []

        if parent.properties:
            first_item = parent.properties[0]
            printable.target_type = first_item.type

            if first_item.base_type:
                printable.target_type = first_item.base_type
        else:
            printable.target_type = parent.type

        i = 1
        for prop in parent.properties:
            printable.value.append(prop.name)
            i += 1

        parent_name = self._resolve_keyword(parent.name, parent.original_name)

        result = {parent_name: macros.print_object_array(printable)}

        return self._indent(result, indent_count)[parent_name]

    def parse_api_call_properties(
        self,
        macros: model.JinjaMacros,
        indent_count: int,
        required_flag: bool | None = None,
    ) -> dict[str, str]:
        """Parse data passed directly to an API object.

        Can include Parameters as well as body data.
        If current request is of type "multipart/form-data" or
        "application/x-www-form-urlencoded" we will usually want to print each
        body parameter individually.

        Otherwise we will pass a single Model object containing all body data.

        Data is always sorted as:

        1) Required Parameters
        2) Required body data
        3) Optional Parameters
        4) Optional body data
        """

        property_container = self._generator.property_container

        result = {}
        # When all api call values are null, and none are required
        # don't print anything
        has_data = False
        force_print_parameters = self._generator.force_print_parameters()

        for _, prop in property_container.properties(required_flag).items():
            if property_container.body and prop == property_container.body:
                operation = self._generator.operation
                override_request_body_name = operation.request_body_name()

                request_body_name = (
                    override_request_body_name
                    if override_request_body_name
                    else prop.name
                )

                prop_name = self._resolve_keyword(request_body_name, prop.original_name)
                has_data = True

                if parser.TypeChecker.is_property_objectish(prop):
                    result[prop_name] = self._generator.print_variablename(
                        property_container.body.type
                    )

                    continue

                # non-object single value
                result[prop_name] = self._parse_non_objects(
                    macros=macros,
                    parent=None,
                    prop=prop,
                )

                continue

            prop_name = self._resolve_keyword(prop.name, prop.original_name)

            if isinstance(prop, model.PropertyObject) or isinstance(
                prop, model.PropertyObjectArray
            ):
                # If a property listed in the api call signature is not required,
                # and has no example data, we want to print a null value
                # instead of simply skipping printing it completely.
                # We always want to use all properties during the api call
                # because some generators do not have named parameters,
                # meaning they must list all properties in the order defined
                # in the OAS
                if not prop.is_required and not prop.is_set:
                    # if generator language supports named parameters then
                    # we can skip null values
                    if self._generator.has_named_parameters():
                        continue

                    result[prop_name] = self._generator.print_null()
                else:
                    has_data = True
                    result[prop_name] = self._generator.print_variablename(prop_name)

                continue

            # if generator language supports named parameters then
            # we can skip null values
            if (
                not prop.is_required
                and not prop.is_set
                and self._generator.has_named_parameters()
            ):
                continue

            result[prop_name] = self._parse_non_objects(
                macros=macros,
                parent=None,
                prop=prop,
            )

            if (
                prop.value is not None
                or prop.is_required
                or (force_print_parameters and property_container.is_parameter(prop))
            ):
                has_data = True

        if not has_data:
            return self._indent({}, indent_count)

        return self._indent(result, indent_count)

    def _parse_non_objects(
        self,
        macros: model.JinjaMacros,
        parent: model.PropertyObject | None,
        prop: model.PROPERTY_NON_OBJECT_TYPE,
    ) -> any:
        if isinstance(prop, model.PropertyScalar):
            printable = self._generator.print_scalar(parent, prop)

            if printable.is_array:
                return macros.print_scalar_array(printable)

            return macros.print_scalar(printable)
        elif isinstance(prop, model.PropertyFile):
            printable = self._generator.print_file(prop)

            if printable.is_array:
                return macros.print_file_array(printable)

            return macros.print_file(printable)
        elif isinstance(prop, model.PropertyFreeForm):
            printable = self._generator.print_free_form(prop)

            if printable.is_array:
                return macros.print_free_form_array(printable)

            return macros.print_free_form(printable)

        return None

    def _parse_object(
        self,
        obj: model.PropertyObject,
        parent_name: str,
    ) -> dict[str, model.PrintableObject]:
        result = {}
        for property_name, sub_obj in obj.objects.items():
            # todo test
            if not sub_obj.is_required and not sub_obj.is_set:
                continue

            prop_name = self._resolve_keyword(property_name, sub_obj.original_name)
            prop_name = self._resolve_keyword(prop_name, sub_obj.original_name, True)

            printable = model.PrintableObject()
            result[prop_name] = printable

            # todo test multiple objects in array belonging to objects in array
            #      do not overwrite each other's names
            printable.value = sub_obj.name
            printable.target_type = sub_obj.type

        for property_name, array_obj in obj.array_objects.items():
            # todo test
            if not array_obj.is_required and not array_obj.is_set:
                continue

            prop_name = self._resolve_keyword(property_name, array_obj.original_name)
            prop_name = self._resolve_keyword(prop_name, array_obj.original_name, True)

            printable = model.PrintableObject()
            result[prop_name] = printable

            # todo test multiple objects in array belonging to objects in array
            #      do not overwrite each other's names
            printable.value = f"{parent_name}{prop_name}"
            printable.target_type = array_obj.name

        return result

    def _indent(
        self,
        property_values: dict[str, str | None],
        indent_count: int,
    ) -> dict[str, str | None]:
        indent = " " * indent_count

        for name, value in property_values.items():
            if value is None:
                continue

            property_values[name] = value.replace("\n", f"\n{indent}")

        return property_values

    def _resolve_keyword(self, name: str, original_name: str, secondary: bool = False):
        """When two properties have identical names and will be listed
        at the same level (parameters + root-level body properties) we
        automatically append an increasing integer to the name to avoid
        conflicts.

        For example:
        - "property_name"
        - "property_name2"
        - "property_name3"

        This runs into the problem where the original name might have been
        one of the target language's reserved keywords, but the updated
        name will not match due to the appended integer.

        For example Python has "for" as a reserved keyword. Property names
        will have "var_" prepended by openapi-generator to avoid using the
        reserved keyword.

        "for" -> "val_for"

        However, if an integer has been appended to the property name then
        it would no longer match, but openapi-generator will still have
        prepended "var_" to the name.

        We must check against the original unchanged property name to decide
        if the name is a reserved keyword.
        """

        if self._generator.is_reserved_keyword(original_name, secondary):
            return self._generator.unreserve_keyword(
                name=name,
                force=True,
                secondary=secondary,
            )

        if self._generator.is_reserved_keyword(name, secondary):
            return self._generator.unreserve_keyword(
                name=name,
                force=True,
                secondary=secondary,
            )

        return name
