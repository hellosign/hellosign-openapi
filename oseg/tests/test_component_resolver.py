import openapi_pydantic as oa
from oseg import parser
from test_utils import TestUtils, TestCase


class TestComponentResolver(TestCase):
    def test_parameters(self):
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["default"]

        data = [
            {
                "property": "paramObject",
                "type": "default_paramObject_parameter",
                "schema": operation.request.parameters[0],
            },
            {
                "property": "paramArrayObject",
                "type": "default_paramArrayObject_parameter",
                "schema": operation.request.parameters[1],
            },
            {
                "property": "paramString",
                "type": None,
                "schema": operation.request.parameters[2],
            },
            {
                "property": "paramComponentObject",
                "type": "",
                "schema": operation.request.parameters[3],
            },
            {
                "property": "paramComponentArrayObject",
                "type": "",
                "schema": operation.request.parameters[4],
            },
        ]

        for expected in data:
            with self.subTest(expected["property"]):
                parameter: oa.Parameter = expected["schema"]

                self.assertEqual(expected["property"], parameter.name)
                self.assertEqual(
                    expected["type"],
                    oa_parser.get_component_name(parameter),
                )

    def test_request_with_named_body_properties(self):
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["default"]
        body = operation.request.body

        self.assertEqual(
            "Pet",
            operation.request.body_type,
        )

        data = [
            {
                "property": "prop_object",
                "property_type": "Pet_prop_object",
            },
            {
                "property": "prop_ref_object",
                "property_type": "PropRefObject",
            },
            {
                "property": "prop_array_ref_object",
                "items_type": "PropRefObject",
            },
            {
                "property": "prop_nested_object",
                "property_type": "Pet_prop_nested_object",
            },
            {
                "property": "prop_ref_nested_object",
                "property_type": "PropRefNestedObject",
            },
            {
                "property": "prop_array_ref_nested_object",
                "items_type": "PropRefNestedObject",
            },
            {
                "property": "prop_string",
                "property_type": None,
            },
            {
                "property": "prop_array_string",
                "items_type": None,
            },
            {
                "property": "prop_ref_string",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_string",
                "items_type": None,
            },
            {
                "property": "prop_integer",
                "property_type": None,
            },
            {
                "property": "prop_array_integer",
                "items_type": None,
            },
            {
                "property": "prop_ref_integer",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_integer",
                "items_type": None,
            },
            {
                "property": "prop_number",
                "property_type": None,
            },
            {
                "property": "prop_array_number",
                "items_type": None,
            },
            {
                "property": "prop_ref_number",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_number",
                "items_type": None,
            },
            {
                "property": "prop_boolean",
                "property_type": None,
            },
            {
                "property": "prop_array_boolean",
                "items_type": None,
            },
            {
                "property": "prop_ref_boolean",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_boolean",
                "items_type": None,
            },
            {
                "property": "prop_file",
                "property_type": None,
            },
            {
                "property": "prop_array_file",
                "items_type": None,
            },
            {
                "property": "prop_ref_file",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_file",
                "items_type": None,
            },
            {
                "property": "prop_free_form",
                "property_type": None,
            },
            {
                "property": "prop_array_free_form",
                "items_type": None,
            },
            {
                "property": "prop_ref_free_form",
                "property_type": None,
            },
            {
                "property": "prop_array_ref_free_form",
                "items_type": None,
            },
        ]

        for expected in data:
            with self.subTest(expected["property"]):
                property_schema = body.properties.get(expected["property"])

                if parser.TypeChecker.is_array(property_schema):
                    self.assertEqual(
                        None,
                        oa_parser.get_component_name(property_schema),
                    )

                    self.assertEqual(
                        expected["items_type"],
                        oa_parser.get_component_name(property_schema.items),
                    )
                else:
                    self.assertEqual(
                        expected["property_type"],
                        oa_parser.get_component_name(property_schema),
                    )

        prop_nested_object_schema = body.properties.get("prop_nested_object")
        prop_nested_object_schema_key_1 = prop_nested_object_schema.properties.get(
            "key_1"
        )

        self.assertEqual(
            "Pet_prop_nested_object_key_1",
            oa_parser.get_component_name(prop_nested_object_schema_key_1),
        )

    def test_request_with_non_named_body_properties(self):
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["inline_request_body_properties"]
        body = operation.request.body

        self.assertEqual(
            "inline_request_body_properties_request",
            operation.request.body_type,
        )

        data = [
            {
                "property": "prop_object",
                "property_name": "inline_request_body_properties_request_prop_object",
            },
            {
                "property": "prop_ref_object",
                "property_name": "PropRefObject",
            },
            {
                "property": "prop_array_ref_object",
                "items_name": "PropRefObject",
            },
            {
                "property": "prop_nested_object",
                "property_name": "inline_request_body_properties_request_prop_nested_object",
            },
            {
                "property": "prop_ref_nested_object",
                "property_name": "PropRefNestedObject",
            },
            {
                "property": "prop_array_ref_nested_object",
                "items_name": "PropRefNestedObject",
            },
            {
                "property": "prop_string",
                "property_name": None,
            },
            {
                "property": "prop_array_string",
                "items_name": None,
            },
            {
                "property": "prop_ref_string",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_string",
                "items_name": None,
            },
            {
                "property": "prop_integer",
                "property_name": None,
            },
            {
                "property": "prop_array_integer",
                "items_name": None,
            },
            {
                "property": "prop_ref_integer",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_integer",
                "items_name": None,
            },
            {
                "property": "prop_number",
                "property_name": None,
            },
            {
                "property": "prop_array_number",
                "items_name": None,
            },
            {
                "property": "prop_ref_number",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_number",
                "items_name": None,
            },
            {
                "property": "prop_boolean",
                "property_name": None,
            },
            {
                "property": "prop_array_boolean",
                "items_name": None,
            },
            {
                "property": "prop_ref_boolean",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_boolean",
                "items_name": None,
            },
            {
                "property": "prop_file",
                "property_name": None,
            },
            {
                "property": "prop_array_file",
                "items_name": None,
            },
            {
                "property": "prop_ref_file",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_file",
                "items_name": None,
            },
            {
                "property": "prop_free_form",
                "property_name": None,
            },
            {
                "property": "prop_array_free_form",
                "items_name": None,
            },
            {
                "property": "prop_ref_free_form",
                "property_name": None,
            },
            {
                "property": "prop_array_ref_free_form",
                "items_name": None,
            },
        ]

        for expected in data:
            with self.subTest(expected["property"]):
                property_schema = body.properties.get(expected["property"])

                if parser.TypeChecker.is_array(property_schema):
                    self.assertEqual(
                        None,
                        oa_parser.get_component_name(property_schema),
                    )

                    self.assertEqual(
                        expected["items_name"],
                        oa_parser.get_component_name(property_schema.items),
                    )
                else:
                    self.assertEqual(
                        expected["property_name"],
                        oa_parser.get_component_name(property_schema),
                    )

        prop_nested_object_schema = body.properties.get("prop_nested_object")
        prop_nested_object_schema_key_1 = prop_nested_object_schema.properties.get(
            "key_1"
        )

        self.assertEqual(
            "inline_request_body_properties_request_prop_nested_object_key_1",
            oa_parser.get_component_name(prop_nested_object_schema_key_1),
        )

    def test_responses(self):
        oa_parser = TestUtils.oa_parser("properties")

        data = [
            {
                "operation_id": "response_named_response",
                "type": "PropRefObject",
            },
            {
                "operation_id": "response_inline_response_named_object",
                "type": "PropRefObject",
            },
            {
                "operation_id": "response_inline_response_inline_object",
                "type": None,
            },
        ]

        for expected in data:
            with self.subTest(expected["operation_id"]):
                operation = oa_parser.operations[expected["operation_id"]]
                response = operation.response

                self.assertEqual(
                    expected["type"],
                    oa_parser.get_component_name(response.body),
                )

    def test_title_used(self):
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["using_title"]
        body = operation.request.body

        data = [
            {
                "property": "paramObject",
                "type": "using_title_paramObject_parameter",
                "schema": operation.request.parameters[0],
            },
            {
                "property": "paramObjectCustom",
                "type": "custom_paramObject_parameter",
                "schema": operation.request.parameters[1],
            },
            {
                "property": "paramArrayObject",
                "type": "custom_paramArrayObject_parameter",
                "schema": operation.request.parameters[2],
            },
            {
                "property": "paramString",
                "type": None,
                "schema": operation.request.parameters[3],
            },
            {
                "property": "paramComponentObject",
                "type": "",
                "schema": operation.request.parameters[4],
            },
        ]

        for expected in data:
            with self.subTest(expected["property"]):
                parameter: oa.Parameter = expected["schema"]

                self.assertEqual(expected["property"], parameter.name)
                self.assertEqual(
                    expected["type"],
                    oa_parser.get_component_name(parameter),
                )

        expected_body_type = "MyCustomRequestBodyClass"
        self.assertEqual(
            expected_body_type,
            oa_parser.get_component_name(body),
        )

        expected_prop_1_type = "MyCustomRequestBodyClass_prop_object"
        self.assertEqual(
            expected_prop_1_type,
            oa_parser.get_component_name(body.properties.get("prop_object")),
        )

        expected_prop_2_type = "CustomPropObjectName"
        self.assertEqual(
            expected_prop_2_type,
            oa_parser.get_component_name(body.properties.get("prop_object_2")),
        )

    def test_title_used_formdata(self):
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["using_title_formdata"]
        body = operation.request.body

        expected_prop_1_type = "MyCustomRequestBodyClass_prop_object"
        self.assertEqual(
            expected_prop_1_type,
            oa_parser.get_component_name(body.properties.get("prop_object")),
        )

        expected_prop_2_type = "CustomPropObjectName"
        self.assertEqual(
            expected_prop_2_type,
            oa_parser.get_component_name(body.properties.get("prop_object_2")),
        )

    def test_refs_are_resolved(self):
        oa_parser = TestUtils.oa_parser("component_resolver")

        data = [
            {
                "component": oa_parser.components.responses,
                "schema_1": "SomeResponse",
                "schema_2": "SomeResponseRef",
            },
            {
                "component": oa_parser.components.schemas,
                "schema_1": "SomeSchema",
                "schema_2": "SomeSchemaRef",
            },
            {
                "component": oa_parser.components.parameters,
                "schema_1": "SomeParameter",
                "schema_2": "SomeParameterRef",
            },
            {
                "component": oa_parser.components.examples,
                "schema_1": "SomeExample",
                "schema_2": "SomeExampleRef",
            },
            {
                "component": oa_parser.components.securitySchemes,
                "schema_1": "petstore_auth",
                "schema_2": "petstore_auth_ref",
            },
            {
                "component": oa_parser.components.securitySchemes,
                "schema_1": "api_key",
                "schema_2": "api_key_ref",
            },
        ]

        for expected in data:
            with self.subTest(f"{expected["schema_1"]} - {expected["schema_2"]}"):
                schema_1 = expected["component"].get(expected["schema_1"])
                schema_2 = expected["component"].get(expected["schema_2"])

                self.assertIsNotNone(schema_1)
                self.assertIsNotNone(schema_2)
                self.assertEqual(schema_1, schema_2)

                name_1 = oa_parser.get_component_name(schema_1)
                name_2 = oa_parser.get_component_name(schema_2)

                self.assertIsNotNone(name_1)
                self.assertIsNotNone(name_2)
                self.assertEqual(name_1, name_2)

    def test_common_parameters(self):
        oa_parser = TestUtils.oa_parser("common_parameters")

        data_provider = {
            "additional_parameter_at_start": {
                "param_1": "string",
                "param_2": "integer",
                "param_3": "string",
                "param_4": "string",
                "additional_parameter": "string",
            },
            "additional_parameter_in_middle": {
                "param_1": "string",
                "param_2": "integer",
                "param_3": "string",
                "param_4": "string",
                "additional_parameter": "string",
            },
            "additional_parameter_at_end": {
                "param_1": "string",
                "param_2": "integer",
                "param_3": "string",
                "param_4": "string",
                "additional_parameter": "string",
            },
            "parameters_in_different_order": {
                "param_1": "string",
                "param_2": "integer",
                "param_3": "string",
                "param_4": "string",
                "additional_parameter": "string",
            },
            "override_parameter_data": {
                "param_1": "integer",
                "param_2": "string",
                "param_3": "string",
                "param_4": "string",
            },
            "no_parameter_data": {
                "param_1": "string",
                "param_2": "integer",
                "param_3": "string",
                "param_4": "string",
            },
        }

        for operation_id, expected_parameters in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations[operation_id]

                result = {}
                for parameter in operation.request.parameters:
                    result[parameter.name] = parameter.param_schema.type.value

                self.assertEqual(expected_parameters, result)

    def test_inline_schema_name_reuse(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("component_resolver")

        operation_1 = {
            "operation_id": "inline_nested_schema_root",
            "data": {
                "labels": ["label 1", "label 2"],
            },
            "expected_name": "inline_nested_schema_root_request",
        }

        operation_2 = {
            "operation_id": "another_inline_nested_schema_root_2",
            "data": {
                "labels": ["label 1", "label 2"],
            },
            "expected_name": "inline_nested_schema_root_request",
        }

        operation_3 = {
            "operation_id": "inline_nested_schema_nested",
            "data": {
                "nested_inline": {
                    "labels": ["label 1", "label 2"],
                }
            },
            "expected_name": "inline_nested_schema_root_request",
        }

        for data in [operation_1, operation_2]:
            with self.subTest(data["operation_id"]):
                operation = oa_parser.operations.get(data["operation_id"])
                operation.request.example_data = {example_name: {"body": data["data"]}}
                container = operation.request.example_data[example_name]

                self.assertEqual(
                    data["expected_name"],
                    container.body_type,
                )

                self.assertEqual(
                    data["expected_name"],
                    oa_parser.get_component_name(container.body.schema),
                )

                operation.request.example_data = None

        operation = oa_parser.operations.get(operation_3["operation_id"])
        operation.request.example_data = {example_name: {"body": operation_3["data"]}}
        container = operation.request.example_data[example_name]

        self.assertEqual(
            operation_3["expected_name"],
            oa_parser.get_component_name(
                container.body.properties.get("nested_inline").schema
            ),
        )

        operation.request.example_data = None

    def test_request_body_inline_schema_name_used_for_inline_component_schema(self):
        oa_parser = TestUtils.oa_parser("component_resolver")

        schema_1 = oa_parser.components.schemas.get("SomeSchemaWithDupe1")
        schema_2 = oa_parser.components.schemas.get("SomeSchemaWithDupe2")

        prop_1 = schema_1.properties.get("prop_1")
        prop_2 = schema_2.properties.get("prop_1").properties.get("prop_2")

        expected_name = (
            "inline_nested_schema_identical_name_1_request_some_property_name"
        )

        self.assertEqual(
            expected_name,
            oa_parser.get_component_name(prop_1),
        )

        self.assertEqual(
            expected_name,
            oa_parser.get_component_name(prop_2),
        )

    def test_schema_with_inner(self):
        oa_parser = TestUtils.oa_parser("component_resolver")

        schema_1 = oa_parser.components.schemas.get("SchemaWithInner")

        prop_1 = schema_1.properties.get("prop_1")
        prop_1_prop_2 = prop_1.properties.get("prop_2").items
        prop_1_prop_2_prop_3 = prop_1_prop_2.properties.get("prop_3")

        expected_name_1 = "SchemaWithInner_prop_1"
        expected_name_2 = "SchemaWithInner_prop_1_prop_2_inner"
        expected_name_3 = "SchemaWithInner_prop_1_prop_2_inner_prop_3"

        self.assertEqual(
            expected_name_1,
            oa_parser.get_component_name(prop_1),
        )

        self.assertEqual(
            expected_name_2,
            oa_parser.get_component_name(prop_1_prop_2),
        )

        self.assertEqual(
            expected_name_3,
            oa_parser.get_component_name(prop_1_prop_2_prop_3),
        )

    def test_schema_with_inner_inner(self):
        oa_parser = TestUtils.oa_parser("component_resolver")

        schema_1 = oa_parser.components.schemas.get("SchemaWithInnerInner")

        prop_1 = schema_1.properties.get("prop_1")
        prop_1_prop_2 = prop_1.properties.get("prop_2").items
        prop_1_prop_2_prop_3 = prop_1_prop_2.properties.get("prop_3").items
        prop_1_prop_2_prop_3_prop_4 = prop_1_prop_2_prop_3.properties.get("prop_4")

        expected_name_1 = "SchemaWithInnerInner_prop_1"
        expected_name_2 = "SchemaWithInnerInner_prop_1_prop_2_inner"
        expected_name_3 = "SchemaWithInnerInner_prop_1_prop_2_inner_prop_3_inner"
        expected_name_4 = "SchemaWithInnerInner_prop_1_prop_2_inner_prop_3_inner_prop_4"

        self.assertEqual(
            expected_name_1,
            oa_parser.get_component_name(prop_1),
        )

        self.assertEqual(
            expected_name_2,
            oa_parser.get_component_name(prop_1_prop_2),
        )

        self.assertEqual(
            expected_name_3,
            oa_parser.get_component_name(prop_1_prop_2_prop_3),
        )

        self.assertEqual(
            expected_name_4,
            oa_parser.get_component_name(prop_1_prop_2_prop_3_prop_4),
        )
