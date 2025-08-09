import uuid
import openapi_pydantic as oa
from oseg import model, parser
from test_utils import TestUtils, TestCase


class TestExampleDataParser(TestCase):
    def test_common_path_query_param_scenarios(self):
        data_provider = {
            # Always use example value if set
            "param_with_example": {
                "name": "param_name_1",
                "value": "value_1",
                "required": False,
            },
            # If example value is set, ignore default value
            "param_with_example_with_default": {
                "name": "param_name_1",
                "value": "value_1",
                "required": False,
            },
            # Use default value if no example value, and is required
            "param_without_example_with_default_is_required": {
                "name": "param_name_1",
                "value": "value_2",
                "required": True,
            },
            # No example value and no default value and required
            "param_without_example_without_default_is_required": {
                "name": "param_name_1",
                "value": "param_name_1_string",
                "required": True,
            },
            # No example value and no default value and not required
            "param_without_example_without_default_not_required": {
                "name": "param_name_1",
                "value": None,
                "required": False,
            },
            # Test array type
            "param_as_array": {
                "name": "param_name_1",
                "value": ["value_1", "value_2"],
                "required": False,
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-path-query-parameters")
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        for operation_id, expected in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations.get(operation_id)
                container = operation.request.example_data[example_name]

                parameter = container.query.properties.get(expected["name"])

                self.assertIsNone(container.body)
                self.assertEqual(expected["value"], parameter.value)
                self.assertEqual(expected["required"], parameter.is_required)

    def test_different_param_in(self):
        oa_parser = TestUtils.oa_parser("example_data_parser-path-query-parameters")

        operation = oa_parser.operations.get("different_param_in")
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        container = operation.request.example_data[example_name]
        param_path = container.path.properties.get("param_name_1")
        param_query = container.query.properties.get("param_name_1")
        param_header = container.header.properties.get("param_name_1")
        param_cookie = container.cookie.properties.get("param_name_1")

        self.assertEqual("path_value", param_path.value)
        self.assertEqual("query_value", param_query.value)
        self.assertEqual("header_value", param_header.value)
        self.assertEqual("cookie_value", param_cookie.value)

    def test_mixed_params(self):
        """Test mixed params"""

        expected_result = [
            {
                "name": "param_with_example",
                "value": "value_1",
                "required": False,
            },
            {
                "name": "param_with_example_with_default",
                "value": "value_1",
                "required": False,
            },
            {
                "name": "param_without_example_with_default_is_required",
                "value": "value_2",
                "required": True,
            },
            {
                "name": "param_without_example_with_default_not_required",
                "value": "value_2",
                "required": False,
            },
            {
                "name": "param_without_example_without_default_is_required",
                "value": "param_without_example_without_default_is_required_string",
                "required": True,
            },
            {
                "name": "param_without_example_without_default_not_required",
                "value": None,
                "required": False,
            },
            {
                "name": "param_as_array",
                "value": ["value_1", "value_2"],
                "required": False,
            },
        ]

        operation_id = "mixed_params"

        oa_parser = TestUtils.oa_parser("example_data_parser-path-query-parameters")
        operation = oa_parser.operations.get(operation_id)
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        container = operation.request.example_data[example_name]

        for expected in expected_result:
            parameter = container.query.properties.get(expected["name"])

            self.assertEqual(expected["value"], parameter.value)
            self.assertEqual(expected["required"], parameter.is_required)

    def test_common_request_body_param_scenarios(self):
        data_provider = {
            # If single requestBody is defined, use it
            "single_request_body": {
                "name": "default_example",
                "body_type": "Pet",
            },
            # Only ever use the first requestBody no matter how many are defined
            "multiple_request_body": {
                "name": "default_example",
                "body_type": "Customer",
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-single-requestBody")
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        for operation_id, expected in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations.get(operation_id)
                container = operation.request.example_data[example_name]

                self.assertIsNotNone(container.body)
                self.assertIsNone(container.path)
                self.assertIsNone(container.query)
                self.assertIsNone(container.header)
                self.assertIsNone(container.cookie)

                self.assertEqual(expected["body_type"], container.body.type)

    def test_array_body(self):
        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        operation = oa_parser.operations.get("array_body")
        container = operation.request.example_data[example_name]
        body = container.body

        assert isinstance(body, model.PropertyObjectArray)

        body_1 = body.properties[0]

        self.assertEqual(10, body_1.scalars["id"].value)

    def test_different_param_in_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        expected = {
            example_name: {
                "path": {
                    "param_name_1": "path_value",
                },
                "query": {
                    "param_name_1": "query_value",
                },
                "header": {
                    "param_name_1": "header_value",
                },
                "cookie": {
                    "param_name_1": "cookie_value",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-path-query-parameters")
        operation = oa_parser.operations.get("different_param_in")

        container_1 = operation.request.example_data[example_name]

        results_1 = {
            "path": {
                "param_name_1": container_1.path.scalars["param_name_1"].value,
            },
            "query": {
                "param_name_1": container_1.query.scalars["param_name_1"].value,
            },
            "header": {
                "param_name_1": container_1.header.scalars["param_name_1"].value,
            },
            "cookie": {
                "param_name_1": container_1.cookie.scalars["param_name_1"].value,
            },
        }

        self.assertEqual(expected[example_name], results_1)

    def test_different_param_in_custom_data(self):
        example_data: model.EXAMPLE_DATA_BY_NAME = {
            "example_1": {
                "path": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "query": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "header": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "cookie": {
                    "param_name_1": str(uuid.uuid4()),
                },
            },
            "example_2": {
                "path": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "query": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "header": {
                    "param_name_1": str(uuid.uuid4()),
                },
                "cookie": {
                    "param_name_1": str(uuid.uuid4()),
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-path-query-parameters")
        operation = oa_parser.operations.get("different_param_in")
        operation.request.example_data = example_data

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        results_1 = {
            "path": {
                "param_name_1": container_1.path.scalars["param_name_1"].value,
            },
            "query": {
                "param_name_1": container_1.query.scalars["param_name_1"].value,
            },
            "header": {
                "param_name_1": container_1.header.scalars["param_name_1"].value,
            },
            "cookie": {
                "param_name_1": container_1.cookie.scalars["param_name_1"].value,
            },
        }

        results_2 = {
            "path": {
                "param_name_1": container_2.path.scalars["param_name_1"].value,
            },
            "query": {
                "param_name_1": container_2.query.scalars["param_name_1"].value,
            },
            "header": {
                "param_name_1": container_2.header.scalars["param_name_1"].value,
            },
            "cookie": {
                "param_name_1": container_2.cookie.scalars["param_name_1"].value,
            },
        }

        self.assertEqual(example_data["example_1"], results_1)
        self.assertEqual(example_data["example_2"], results_2)

        # reset data
        operation.request.example_data = None

    def test_single_body_with_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        expected = {
            example_name: {
                "body": {
                    "id": 10,
                    "name": "doggie",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("single_body")

        container_1 = operation.request.example_data[example_name]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "name": container_1.body.scalars["name"].value,
        }

        self.assertEqual(expected[example_name]["body"], results_1)

    def test_single_body_with_custom_data(self):
        example_data: model.EXAMPLE_DATA_BY_NAME = {
            "example_1": {
                "body": {
                    "id": 100,
                    "name": str(uuid.uuid4()),
                },
            },
            "example_2": {
                "body": {
                    "id": 100,
                    "name": str(uuid.uuid4()),
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("single_body")
        operation.request.example_data = example_data

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "name": container_1.body.scalars["name"].value,
        }

        results_2 = {
            "id": container_2.body.scalars["id"].value,
            "name": container_2.body.scalars["name"].value,
        }

        self.assertEqual(example_data["example_1"]["body"], results_1)
        self.assertEqual(example_data["example_2"]["body"], results_2)

        # reset data
        operation.request.example_data = None

    def test_array_body_with_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        expected = {
            example_name: {
                "body": [
                    {
                        "id": 10,
                        "name": "doggie",
                    }
                ],
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("array_body")

        container_1 = operation.request.example_data[example_name]
        body = container_1.body
        assert isinstance(body, model.PropertyObjectArray)

        results_1 = [
            {
                "id": body.properties[0].scalars["id"].value,
                "name": body.properties[0].scalars["name"].value,
            },
        ]

        self.assertEqual(expected[example_name]["body"], results_1)

    def test_array_body_with_custom_data(self):
        example_data: model.EXAMPLE_DATA_BY_NAME = {
            "example_1": {
                "body": [
                    {
                        "id": 100,
                        "name": str(uuid.uuid4()),
                    },
                    {
                        "id": 200,
                        "name": str(uuid.uuid4()),
                    },
                ],
            },
            "example_2": {
                "body": [
                    {
                        "id": 300,
                        "name": str(uuid.uuid4()),
                    },
                    {
                        "id": 400,
                        "name": str(uuid.uuid4()),
                    },
                ],
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("array_body")
        operation.request.example_data = example_data

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        body_1 = container_1.body
        body_2 = container_2.body

        assert isinstance(body_1, model.PropertyObjectArray)
        assert isinstance(body_2, model.PropertyObjectArray)

        results_1 = [
            {
                "id": body_1.properties[0].scalars["id"].value,
                "name": body_1.properties[0].scalars["name"].value,
            },
            {
                "id": body_1.properties[1].scalars["id"].value,
                "name": body_1.properties[1].scalars["name"].value,
            },
        ]

        results_2 = [
            {
                "id": body_2.properties[0].scalars["id"].value,
                "name": body_2.properties[0].scalars["name"].value,
            },
            {
                "id": body_2.properties[1].scalars["id"].value,
                "name": body_2.properties[1].scalars["name"].value,
            },
        ]

        self.assertEqual(example_data["example_1"]["body"], results_1)
        self.assertEqual(example_data["example_2"]["body"], results_2)

        # reset data
        operation.request.example_data = None

    def test_discriminator_with_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        expected = {
            example_name: {
                "body": {
                    "id": 10,
                    "breed": "terrier",
                    "group": "hunting",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("discriminator")

        container_1 = operation.request.example_data[example_name]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "breed": container_1.body.scalars["breed"].value,
            "group": container_1.body.scalars["group"].value,
        }

        self.assertEqual(expected[example_name]["body"], results_1)

    def test_discriminator_with_custom_data(self):
        example_data: model.EXAMPLE_DATA_BY_NAME = {
            "example_1": {
                "body": {
                    "id": 100,
                    "breed": "terrier",
                    "group": "hunting",
                },
            },
            "example_2": {
                "body": {
                    "id": 200,
                    "breed": "beagle",
                    "group": "hound",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("discriminator")
        operation.request.example_data = example_data

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "breed": container_1.body.scalars["breed"].value,
            "group": container_1.body.scalars["group"].value,
        }

        results_2 = {
            "id": container_2.body.scalars["id"].value,
            "breed": container_2.body.scalars["breed"].value,
            "group": container_2.body.scalars["group"].value,
        }

        self.assertEqual(example_data["example_1"]["body"], results_1)
        self.assertEqual(example_data["example_2"]["body"], results_2)

        # reset data
        operation.request.example_data = None

    def test_allof_with_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        expected = {
            example_name: {
                "body": {
                    "id": 10,
                    "breed": "terrier",
                    "group": "hunting",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("all_of")

        container_1 = operation.request.example_data[example_name]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "breed": container_1.body.scalars["breed"].value,
            "group": container_1.body.scalars["group"].value,
        }

        self.assertEqual(expected[example_name]["body"], results_1)

    def test_allof_with_custom_data(self):
        example_data: model.EXAMPLE_DATA_BY_NAME = {
            "example_1": {
                "body": {
                    "id": 100,
                    "breed": "terrier",
                    "group": "hunting",
                },
            },
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("all_of")
        operation.request.example_data = example_data

        container_1 = operation.request.example_data["example_1"]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "breed": container_1.body.scalars["breed"].value,
            "group": container_1.body.scalars["group"].value,
        }

        self.assertEqual(example_data["example_1"]["body"], results_1)

        # reset data
        operation.request.example_data = None

    def test_external_file_example_data_operation(self):
        expected_1: model.ExampleDataDef = {
            "body": {
                "id": 100,
                "breed": "terrier",
                "group": "hunting",
            }
        }

        expected_2: model.ExampleDataDef = {
            "body": {
                "id": 200,
                "breed": "beagle",
                "group": "hound",
            }
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-external_example")
        operation = oa_parser.operations.get("operation_example")

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        results_1 = {
            "body": {
                "id": container_1.body.scalars["id"].value,
                "breed": container_1.body.scalars["breed"].value,
                "group": container_1.body.scalars["group"].value,
            }
        }

        results_2 = {
            "body": {
                "id": container_2.body.scalars["id"].value,
                "breed": container_2.body.scalars["breed"].value,
                "group": container_2.body.scalars["group"].value,
            }
        }

        self.assertEqual(expected_1, results_1)
        self.assertEqual(expected_2, results_2)

    def test_external_file_example_data_content(self):
        expected_1: model.EXAMPLE_DATA_BODY = {
            "id": 100,
            "breed": "terrier",
            "group": "hunting",
        }

        expected_2: model.EXAMPLE_DATA_BODY = {
            "id": 200,
            "breed": "beagle",
            "group": "hound",
        }

        oa_parser = TestUtils.oa_parser("example_data_parser-external_example")
        operation = oa_parser.operations.get("content_example")

        container_1 = operation.request.example_data["example_1"]
        container_2 = operation.request.example_data["example_2"]

        results_1 = {
            "id": container_1.body.scalars["id"].value,
            "breed": container_1.body.scalars["breed"].value,
            "group": container_1.body.scalars["group"].value,
        }

        results_2 = {
            "id": container_2.body.scalars["id"].value,
            "breed": container_2.body.scalars["breed"].value,
            "group": container_2.body.scalars["group"].value,
        }

        self.assertEqual(expected_1, results_1)
        self.assertEqual(expected_2, results_2)

    def test_content_example(self):
        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("content_example")
        container = operation.request.example_data["example"]

        self.assertEqual(container.body.scalars["id"].value, 50)
        self.assertEqual(container.body.scalars["name"].value, "fish")

    def test_content_examples(self):
        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations.get("content_examples")
        container = operation.request.example_data["example_name"]

        self.assertEqual(container.body.scalars["id"].value, 500)
        self.assertEqual(container.body.scalars["name"].value, "birds")

    def test_schema_with_examples(self):
        oa_parser = TestUtils.oa_parser("example_data_parser-body")
        operation = oa_parser.operations["body_with_examples"]
        container = operation.request.example_data["example"]

        # We expect to see only the first example in examples
        self.assertEqual(len(list(operation.request.example_data)), 1)
        self.assertEqual(container.body.scalars["key_1"].value, "value_1")

        schema = oa_parser.components.schemas.get("SchemaWithExamples")
        self.assertEqual(len(list(schema.examples)), 2)

    def test_non_objects_hydrated(self):
        data_provider = {
            "root_level_free_form": {
                "type": oa.DataType.OBJECT,
                "name": "request_body",
                "value": {"foo": "bar", "bam": "baz"},
                "is_array": False,
            },
            "root_level_free_form_array": {
                "type": oa.DataType.OBJECT,
                "name": "request_body",
                "value": [{"foo": "bar", "bam": "baz"}],
                "is_array": True,
            },
            "root_level_string": {
                "type": oa.DataType.STRING,
                "name": "body",
                "value": "some string value",
                "is_array": False,
            },
            "root_level_string_array": {
                "type": oa.DataType.STRING,
                "name": "request_body",
                "value": ["some string value"],
                "is_array": True,
            },
            "root_level_int": {
                "type": oa.DataType.INTEGER,
                "name": "body",
                "value": 12345,
                "is_array": False,
            },
            "root_level_int_array": {
                "type": oa.DataType.INTEGER,
                "name": "request_body",
                "value": [12345],
                "is_array": True,
            },
            "root_level_file": {
                "type": oa.DataType.STRING,
                "name": "body",
                "value": "/some/file/path.pdf",
                "is_array": False,
            },
            "root_level_file_array": {
                "type": oa.DataType.STRING,
                "name": "request_body",
                "value": ["/some/file/path.pdf"],
                "is_array": True,
            },
            "root_level_bool": {
                "type": oa.DataType.BOOLEAN,
                "name": "body",
                "value": True,
                "is_array": False,
            },
            "root_level_bool_array": {
                "type": oa.DataType.BOOLEAN,
                "name": "request_body",
                "value": [True],
                "is_array": True,
            },
        }

        oa_parser = TestUtils.oa_parser("root_level_non_objects")

        for operation_id, expected in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations[operation_id]
                container = operation.request.example_data["example"]

                if expected["is_array"]:
                    self.assertEqual(
                        expected["type"],
                        operation.request.body.items.type,
                    )
                else:
                    self.assertEqual(
                        expected["type"],
                        operation.request.body.type,
                    )

                self.assertEqual(
                    expected["name"],
                    container.request.example_data["example"].body.name,
                )

                self.assertEqual(
                    expected["value"],
                    container.body.value,
                )

    def test_recursive_ref(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

        example_data = {
            example_name: {
                "body": {
                    "id": 123,
                    "dog": {
                        "id": 456,
                        "pet": {
                            "id": 321,
                            "dog": {
                                "id": 654,
                            },
                        },
                    },
                },
            },
        }

        oa_parser = TestUtils.oa_parser("recursive_ref")
        operation = oa_parser.operations.get("default")
        operation.request.example_data = example_data
        container = operation.request.example_data[example_name]
        body_data = example_data[example_name]["body"]

        pet_1 = container.body
        dog_1 = pet_1.properties.get("dog")
        pet_2 = dog_1.properties.get("pet")
        dog_2 = pet_2.properties.get("dog")
        pet_3 = dog_2.properties.get("pet")

        self.assertEqual(
            body_data["id"],
            pet_1.properties.get("id").value,
        )
        self.assertTrue(pet_1.is_set)

        self.assertEqual(
            body_data["dog"]["id"],
            dog_1.properties.get("id").value,
        )
        self.assertTrue(dog_1.is_set)

        self.assertEqual(
            body_data["dog"]["pet"]["id"],
            pet_2.properties.get("id").value,
        )
        self.assertTrue(pet_2.is_set)

        self.assertEqual(
            body_data["dog"]["pet"]["dog"]["id"],
            dog_2.properties.get("id").value,
        )
        self.assertTrue(dog_2.is_set)

        self.assertFalse(pet_3.is_set)

        operation.request.example_data = None

    def test_recursive_ref_default_data(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("recursive_ref")
        operation = oa_parser.operations.get("default")
        container = operation.request.example_data[example_name]

        pet_1 = container.body
        dog_1 = pet_1.properties.get("dog")
        pet_2 = dog_1.properties.get("pet")
        dog_2 = pet_2.properties.get("dog")

        self.assertTrue(pet_1.is_set)
        self.assertFalse(dog_1.is_set)
        self.assertFalse(pet_2.is_set)
        self.assertIsNone(dog_2)
