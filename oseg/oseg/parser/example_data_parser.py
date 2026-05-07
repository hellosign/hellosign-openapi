from __future__ import annotations
import openapi_pydantic as oa
from oseg import parser, model


class ExampleDataParser:
    DEFAULT_EXAMPLE_NAME = "example"

    def __init__(self, oa_parser: parser.OaParser):
        self._oa_parser: parser.OaParser = oa_parser
        self._property_parser: parser.PropertyParser = parser.PropertyParser(oa_parser)
        self._schema_joiner: parser.SchemaJoiner = parser.SchemaJoiner(oa_parser)

    def from_oas_data(
        self,
        request: model.Request,
        operation: oa.Operation,
    ) -> dict[str, model.PropertyContainer]:
        """Parse example data embedded in OAS file.

        Only needs done once per Request.
        """

        """Operation has "examples" defined in OAS file"""
        operation_examples = self._get_operation_example_data(operation)

        if len(operation_examples.keys()):
            results = {}

            for example_name, example in operation_examples.items():
                results[example_name] = self._parse_example(
                    request=request,
                    example_data=model.ExampleData(
                        body=example.get("body", {}),
                        parameters=model.ExampleDataParams(example),
                    ),
                )

            return results

        """Read parameter example data from OAS file.

        We will only ever want a single set of example data for parameters.

        We will copy the same set of parameter example data for all body data
        in this request.

        To have different example data for any given request
        use custom example data.
        """
        example_data_params = model.ExampleDataParams(
            self._get_parameter_example_data(request),
        )
        example_data_body = self._get_body_example_data(request)

        # only parameter data found
        if not len(example_data_body.keys()):
            return {
                self.DEFAULT_EXAMPLE_NAME: self._parse_example(
                    request=request,
                    example_data=model.ExampleData(
                        body={},
                        parameters=example_data_params,
                    ),
                )
            }

        # copy the same set of parameter example data to all
        results = {}

        for name, body_example in example_data_body.items():
            results[name] = self._parse_example(
                request=request,
                example_data=model.ExampleData(
                    body=body_example,
                    parameters=example_data_params,
                ),
            )

        return results

    def from_custom_data(
        self,
        request: model.Request,
        example_data: model.EXAMPLE_DATA_BY_NAME | None,
    ) -> dict[str, model.PropertyContainer]:
        """Custom example data provided outside of OAS file"""

        if example_data is None:
            return {}

        results = {}

        for name, example in example_data.items():
            if not isinstance(example, dict):
                continue

            example_data = model.ExampleData(
                body=example.get("body", {}),
                parameters=model.ExampleDataParams(example),
            )

            if not example_data.has_body_data and not example_data.has_parameter_data:
                continue

            results[name] = self._parse_example(
                request=request,
                example_data=example_data,
            )

        return results

    def _get_operation_example_data(
        self,
        operation: oa.Operation,
    ) -> model.EXAMPLE_DATA_BY_NAME:
        """Read operation example data from OAS file.

        Each operation can have multiple examples containing body and parameters.
        """

        if not operation.model_extra or "examples" not in operation.model_extra:
            return {}

        operation_examples = operation.model_extra.get("examples")

        if not isinstance(operation_examples, dict):
            return {}

        # multiple examples from operation schema
        data = {}

        for example_name, example in operation_examples.items():
            file_data = self._oa_parser.file_loader.get_example_data(example)

            if file_data:
                data[example_name] = file_data

        return data

    def _get_parameter_example_data(
        self,
        request: model.Request,
    ) -> model.ExampleDataParamDef:
        result = {
            oa.ParameterLocation.PATH.value: {},
            oa.ParameterLocation.QUERY.value: {},
            oa.ParameterLocation.HEADER.value: {},
            oa.ParameterLocation.COOKIE.value: {},
        }

        if not request.parameters:
            return result

        for parameter in request.parameters:
            value = None

            if parameter.example:
                value = parameter.example
            elif parameter.examples:
                for k, v in parameter.examples.items():
                    value = v.value
                    break
            elif parameter.param_schema.example:
                value = parameter.param_schema.example
            elif (
                hasattr(parameter.param_schema, "examples")
                and parameter.param_schema.examples
            ):
                value = parameter.param_schema.examples[0]
            elif parameter.param_schema.default is not None:
                value = parameter.param_schema.default

            result[parameter.param_in][parameter.name] = value

        return result

    def _get_body_example_data(
        self,
        request: model.Request,
    ) -> dict[str, model.EXAMPLE_DATA_BODY]:
        """Read body example data from OAS file.

        Each request can have multiple body examples.
        """

        # Data from content schema wins out over property-specific data
        content_examples = self._example_data_from_content(request.content)

        if len(content_examples.keys()):
            return content_examples

        # no body, nothing further to check
        if not request.body:
            return {}

        return {
            self.DEFAULT_EXAMPLE_NAME: self._example_data_from_properties(
                schema=request.body,
                parents=[],
            ),
        }

    def _example_data_from_content(
        self,
        content: oa.MediaType | None,
    ) -> dict[str, any]:
        if not content:
            return {}

        # only a single example from content schema
        if content.example and (
            (isinstance(content.example, dict) and len(content.example.keys()))
            or (isinstance(content.example, list) and len(content.example))
        ):
            return {self.DEFAULT_EXAMPLE_NAME: content.example}

        if not content.examples or not len(content.examples.keys()):
            return {}

        # multiple examples from content schema
        data = {}

        for example_name, example in content.examples.items():
            file_data = self._oa_parser.file_loader.get_example_data(example)

            if file_data:
                data[example_name] = file_data

                continue

            if isinstance(example.value, dict):
                data[example_name] = example.value

        return data

    def _example_data_from_properties(
        self,
        schema: oa.Schema,
        parents: list[int],
    ) -> model.EXAMPLE_DATA_BODY | None:
        schema_id = id(schema)

        if schema_id in parents:
            return None

        parents.append(schema_id)

        # example data wins out over everything
        if schema.example is not None:
            return schema.example

        # examples data wins out over everything else,
        # but only want the first set of values
        if hasattr(schema, "examples") and schema.examples is not None:
            return schema.examples[0]

        # if property is nullable and default value is null, use it
        if schema.default is None and parser.TypeChecker.is_nullable(schema):
            return None

        if schema.default is not None:
            return schema.default

        if parser.TypeChecker.is_array(schema):
            items_data = self._example_data_from_properties(
                schema=schema.items,
                parents=parents[:],
            )

            if items_data is not None:
                return [items_data]

            return []

        data = {}

        if parser.TypeChecker.is_object(schema):
            for prop_name, prop_schema in schema.properties.items():
                result = self._example_data_from_properties(
                    schema=prop_schema,
                    parents=parents[:],
                )

                if self._can_skip_null(schema, prop_schema, prop_name, result):
                    continue

                data[prop_name] = result

        """Once we have base object default data built see if we are dealing
        with a discriminator or allOf
        """
        if parser.TypeChecker.is_object(schema) or schema.allOf:
            merged = self._schema_joiner.merge_schemas_and_properties(schema, data)

            for prop_name, prop_schema in merged.properties.items():
                result = self._example_data_from_properties(
                    schema=prop_schema,
                    parents=parents[:],
                )

                if self._can_skip_null(schema, prop_schema, prop_name, result):
                    continue

                data[prop_name] = result

        return data if len(data.keys()) else None

    def _parse_example(
        self,
        request: model.Request,
        example_data: model.ExampleData,
    ) -> model.PropertyContainer:
        container = model.PropertyContainer(request)

        loop_data = {
            oa.ParameterLocation.PATH: example_data.path,
            oa.ParameterLocation.QUERY: example_data.query,
            oa.ParameterLocation.HEADER: example_data.header,
            oa.ParameterLocation.COOKIE: example_data.cookie,
        }

        for param_in, param_data in loop_data.items():
            schema = self._schema_for_params_in(
                parameters=request.parameters,
                param_in=param_in,
            )

            if schema:
                container.set_parameters(
                    data=self._property_parser.parse(
                        schema=schema,
                        data=param_data,
                    ),
                    param_in=param_in,
                )

        if request.body:
            parsed = self._property_parser.parse(
                schema=request.body,
                data=example_data.body,
            )

            if parsed:
                container.body = parsed

        return container

    def _schema_for_params_in(
        self,
        parameters: list[oa.Parameter],
        param_in: oa.ParameterLocation,
    ) -> oa.Schema | None:
        """Generates a temporary Schema for parsing by PropertyParser"""

        properties = {}
        required = []

        for parameter in parameters:
            if parameter.param_in.value != param_in.value:
                continue

            properties[parameter.name] = parameter.param_schema

            if parameter.required:
                required.append(parameter.name)

        if not len(properties.keys()):
            return None

        schema = oa.Schema()
        schema.properties = properties
        schema.required = required

        return schema

    def _can_skip_null(
        self,
        parent: oa.Schema,
        prop: oa.Schema,
        prop_name: str,
        value: any,
    ) -> bool:
        """If a property's value is None, and it is not required, and it is non-nullable,
        do not add it to example data.
        """

        if value is not None:
            return False

        if parent.required and prop_name in parent.required:
            return False
        elif parser.TypeChecker.is_nullable(prop):
            return False

        return True
