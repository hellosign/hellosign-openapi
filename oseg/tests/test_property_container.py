from random import randrange
from oseg import model, parser
from test_utils import TestUtils, TestCase


class TestPropertyContainer(TestCase):
    def test_unique_names_all_required(self):
        operation_id = "unique_names_all_required"
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("property_container")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[example_name]

        properties = container.properties()

        expected = [
            "param_prop_1",
            "param_prop_2",
            "param_prop_3",
            "param_prop_4",
            "Pet",
        ]

        self.assertListEqual(expected, list(properties))

    def test_unique_names_some_required(self):
        operation_id = "unique_names_some_required"
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("property_container")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[example_name]

        properties = container.properties()

        expected = [
            "param_prop_1",
            "param_prop_4",
            "Pet",
            "param_prop_2",
            "param_prop_3",
        ]

        self.assertListEqual(expected, list(properties))

    def test_conflicting_names(self):
        operation_id = "conflicting_names"
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("property_container")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[example_name]

        properties = container.properties()

        expected = [
            "param_prop",
            "param_prop2",
            "param_prop3",
            "param_prop4",
            "Pet",
        ]

        self.assertListEqual(expected, list(properties))

        self.assertEqual("path_prop", properties.get("param_prop").value)
        self.assertEqual("query_prop", properties.get("param_prop2").value)
        self.assertEqual("header_prop", properties.get("param_prop3").value)
        self.assertEqual("cookie_prop", properties.get("param_prop4").value)

    def test_conflicting_names_with_formdata(self):
        operation_id = "conflicting_names_with_formdata"
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("property_container")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[example_name]

        properties = container.properties()

        expected = [
            "param_prop",
            "param_prop2",
            "param_prop3",
            "param_prop4",
            "type",  # from body object
            "type2",  # from parameters
            "id",
        ]

        self.assertListEqual(expected, list(properties))

        self.assertEqual("path_prop", properties.get("param_prop").value)
        self.assertEqual("query_prop", properties.get("param_prop2").value)
        self.assertEqual("header_prop", properties.get("param_prop3").value)
        self.assertEqual("cookie_prop", properties.get("param_prop4").value)
        self.assertEqual("dog", properties.get("type").value)
        self.assertEqual(100, properties.get("id").value)
        self.assertEqual("query_type_prop", properties.get("type2").value)

    def test_conflicting_names_with_no_formdata(self):
        operation_id = "conflicting_names_with_no_formdata"
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("property_container")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[example_name]

        properties = container.properties()

        expected = [
            "param_prop",
            "pet",  # from parameters
            "Pet2",  # body object
        ]

        self.assertListEqual(expected, list(properties))

        self.assertEqual("path_prop", properties.get("param_prop").value)
        self.assertEqual("query_prop", properties.get("pet").value)

        self.assertIsInstance(
            properties.get("Pet2"),
            model.PropertyObject,
        )

    def test_flatten_objects(self):
        example_data = {
            "example_1": {
                "body": {
                    "id": randrange(1, 100),
                    "name": "My pet name",
                    "status": "available",
                    "photoUrls": [
                        "https://example.com/picture_1.jpg",
                        "https://example.com/picture_2.jpg",
                    ],
                    "category": {"id": randrange(1, 100), "name": "Category_Name"},
                    "tags": [
                        {"id": randrange(1, 100), "name": "tag_1"},
                        {"id": randrange(1, 100), "name": "tag_2"},
                    ],
                }
            },
            "example_2": {
                "body": {
                    "id": randrange(1, 100),
                    "name": "My pet name",
                    "status": "available",
                    "photoUrls": [
                        "https://example.com/picture_1.jpg",
                        "https://example.com/picture_2.jpg",
                    ],
                    "category": {"id": randrange(1, 100), "name": "Category_Name"},
                }
            },
        }

        oa_parser = TestUtils.oa_parser("property_container-flatten")
        operation = oa_parser.operations["default"]
        operation.request.example_data = example_data

        container_1 = operation.request.example_data.get("example_1")
        container_2 = operation.request.example_data.get("example_2")

        parsed_request_objects_1 = container_1.flattened_objects()
        parsed_request_objects_2 = container_2.flattened_objects()

        expected_properties_1 = [
            "category",
            "tags_1",
            "tags_2",
            "tags",
            "Pet",
        ]

        expected_properties_2 = [
            "category",
            "tags",
            "Pet",
        ]

        self.assertListEqual(expected_properties_1, list(parsed_request_objects_1))
        self.assertListEqual(expected_properties_2, list(parsed_request_objects_2))

        self.assertEqual(
            example_data["example_1"]["body"]["category"]["id"],
            parsed_request_objects_1.get("category").scalars.get("id").value,
        )

        self.assertEqual(
            example_data["example_1"]["body"]["tags"][0]["id"],
            parsed_request_objects_1.get("tags_1").scalars.get("id").value,
        )

        self.assertEqual(
            example_data["example_1"]["body"]["tags"][1]["id"],
            parsed_request_objects_1.get("tags_2").scalars.get("id").value,
        )

        self.assertEqual(
            example_data["example_2"]["body"]["category"]["id"],
            parsed_request_objects_2.get("category").scalars.get("id").value,
        )

        operation.request.example_data = None

    def test_flatten_nonobjects_ignored(self):
        data_provider = [
            "root_level_free_form",
            "root_level_free_form_array",
            "root_level_string",
            "root_level_string_array",
            "root_level_int",
            "root_level_int_array",
            "root_level_file",
            "root_level_file_array",
            "root_level_bool",
            "root_level_bool_array",
        ]

        oa_parser = TestUtils.oa_parser("root_level_non_objects")

        for operation_id in data_provider:
            with self.subTest(operation_id):
                operation = oa_parser.operations[operation_id]
                container = operation.request.example_data["example"]

                self.assertEqual({}, container.flattened_objects())
                self.assertTrue(container.has_data)

    def test_sort_nonobjects(self):
        data_provider = {
            "root_level_free_form": {
                "name": "request_body",
                "value": {"foo": "bar", "bam": "baz"},
            },
            "root_level_free_form_array": {
                "name": "request_body",
                "value": [{"foo": "bar", "bam": "baz"}],
            },
            "root_level_string": {
                "name": "body",
                "value": "some string value",
            },
            "root_level_string_array": {
                "name": "request_body",
                "value": ["some string value"],
            },
            "root_level_int": {
                "name": "body",
                "value": 12345,
            },
            "root_level_int_array": {
                "name": "request_body",
                "value": [12345],
            },
            "root_level_file": {
                "name": "body",
                "value": "/some/file/path.pdf",
            },
            "root_level_file_array": {
                "name": "request_body",
                "value": ["/some/file/path.pdf"],
            },
            "root_level_bool": {
                "name": "body",
                "value": True,
            },
            "root_level_bool_array": {
                "name": "request_body",
                "value": [True],
            },
        }

        oa_parser = TestUtils.oa_parser("root_level_non_objects")

        for operation_id, expected in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations[operation_id]
                container = operation.request.example_data["example"]

                self.assertEqual(
                    expected["value"],
                    container.properties().get(expected["name"]).value,
                )
                self.assertTrue(container.has_data)
