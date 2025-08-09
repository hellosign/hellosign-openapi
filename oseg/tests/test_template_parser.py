from test_utils import TestUtils, TestCase
from fixtures.mock_generator import MockConfig, MockGenerator, JINJA_MACROS
from oseg import model, parser


class TestTemplateParser(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.jinja_macros = model.JinjaMacros(JINJA_MACROS)
        config_data = parser.FileLoader.get_file_contents(
            f"{TestUtils._BASE_DIR}/fixtures/config-mock.yaml"
        )
        cls.config = MockConfig(config_data.get("additionalProperties", {}))
        cls.example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

    def test_parse_objects(self):
        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]

        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "category": "Category",
            "tags_1": "Tag",
            "tags_2": "Tag",
            "tags": "Tag",
            "Dog": "Dog",
        }

        result = sdk_generator.template_parser.parse_objects()

        self.assertEqual(list(expected), list(result))

        for name, original_name in expected.items():
            self.assertEqual(original_name, result[name].original_name)

        operation.request.example_data = None

    def test_parse_objects_skips_null_objects(self):
        data_provider = {
            "category": {
                "tags_1": "Tag",
                "tags_2": "Tag",
                "tags": "Tag",
                "Dog": "Dog",
            },
            "tags": {
                "category": "Category",
                "Dog": "Dog",
            },
        }

        oa_parser = TestUtils.oa_parser("properties")

        for to_delete, expected in data_provider.items():
            with self.subTest(to_delete):
                example_name = self.example_name
                example_data = self._example_data()

                del example_data[example_name]["body"][to_delete]

                operation_id = "sorted"
                operation = oa_parser.operations.get(operation_id)
                operation.request.example_data = example_data
                container = operation.request.example_data[example_name]
                sdk_generator = MockGenerator(self.config, operation, container)

                result = sdk_generator.template_parser.parse_objects()

                self.assertEqual(list(expected), list(result))

                for name, original_name in expected.items():
                    self.assertEqual(original_name, result[name].original_name)

        operation.request.example_data = None

    def test_parse_objects_does_not_use_same_name_when_multiple_of_object(self):
        operation_id = "multiple_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_multiple_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "dog_2_category": "Category",
            "dog_2_tags_1": "Tag",
            "dog_2_tags_2": "Tag",
            "dog_2_tags": "Tag",
            "dog_1_category": "Category",
            "dog_1_tags_1": "Tag",
            "dog_1_tags_2": "Tag",
            "dog_1_tags": "Tag",
            "dog_1": "Dog",
            "dog_2": "Dog",
            "MultipleDogs": "MultipleDogs",
        }

        result = sdk_generator.template_parser.parse_objects()

        self.assertEqual(list(expected), list(result))

        for name, original_name in expected.items():
            self.assertEqual(original_name, result[name].original_name)

        operation.request.example_data = None

    def test_parse_objects_does_not_use_same_name_when_array_of_object(self):
        operation_id = "array_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_array_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "Dog_2_category": "Category",
            "Dog_2_tags_1": "Tag",
            "Dog_2_tags_2": "Tag",
            "Dog_2_tags": "Tag",
            "Dog_1_category": "Category",
            "Dog_1_tags_1": "Tag",
            "Dog_1_tags_2": "Tag",
            "Dog_1_tags": "Tag",
            "Dog_1": "Dog",
            "Dog_2": "Dog",
            "Dog": "Dog",
        }

        result = sdk_generator.template_parser.parse_objects()

        self.assertEqual(list(expected), list(result))

        for name, original_name in expected.items():
            self.assertEqual(original_name, result[name].original_name)

        operation.request.example_data = None

    def test_parse_object_properties(self):
        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        body_data = self._example_data()[self.example_name]["body"]

        root_properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body,
            indent_count=0,
        )

        expected = {
            "name": body_data["name"],
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "id": str(body_data["id"]),
            "status": body_data["status"],
            "category": "category",
            "tags": "tags",
            "var_try": body_data["try"],
            "var_while": body_data["while"],
            "var_with": body_data["with"],
            "var_configuration": body_data["configuration"],
            "var_version": body_data["version"],
        }

        self.assertDictEqual(expected, root_properties)

        category_properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body.objects.get("category"),
            indent_count=0,
        )

        expected = {
            "id": str(body_data["category"]["id"]),
            "name": body_data["category"]["name"],
        }

        self.assertDictEqual(expected, category_properties)

        operation.request.example_data = None

    def test_parse_object_properties_skip_unset(self):
        body_data = self._example_data()[self.example_name]["body"]

        default_expected = {
            "name": body_data["name"],
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "id": str(body_data["id"]),
            "status": body_data["status"],
            "category": "category",
            "tags": "tags",
            "var_try": body_data["try"],
            "var_while": body_data["while"],
            "var_with": body_data["with"],
            "var_configuration": body_data["configuration"],
            "var_version": body_data["version"],
        }

        data_provider = {
            "id": {
                "name": default_expected["name"],
                "photoUrls": default_expected["photoUrls"],
                "status": default_expected["status"],
                "category": default_expected["category"],
                "tags": default_expected["tags"],
                "var_try": default_expected["var_try"],
                "var_while": default_expected["var_while"],
                "var_with": default_expected["var_with"],
                "var_configuration": default_expected["var_configuration"],
                "var_version": default_expected["var_version"],
            },
            "status": {
                "name": default_expected["name"],
                "photoUrls": default_expected["photoUrls"],
                "id": default_expected["id"],
                "category": default_expected["category"],
                "tags": default_expected["tags"],
                "var_try": default_expected["var_try"],
                "var_while": default_expected["var_while"],
                "var_with": default_expected["var_with"],
                "var_configuration": default_expected["var_configuration"],
                "var_version": default_expected["var_version"],
            },
        }

        oa_parser = TestUtils.oa_parser("properties")

        for to_delete, expected in data_provider.items():
            with self.subTest(to_delete):
                example_name = self.example_name
                example_data = self._example_data()

                del example_data[example_name]["body"][to_delete]

                operation_id = "sorted"
                operation = oa_parser.operations.get(operation_id)

                operation.request.example_data = example_data
                container = operation.request.example_data[self.example_name]
                sdk_generator = MockGenerator(self.config, operation, container)

                root_properties = sdk_generator.template_parser.parse_object_properties(
                    macros=self.jinja_macros,
                    parent=container.body,
                    indent_count=0,
                )

                self.assertDictEqual(expected, root_properties)

        operation.request.example_data = None

    def test_parse_object_properties_does_not_skip_unset_required(self):
        body_data = self._example_data()[self.example_name]["body"]

        expected = {
            "name": "name_string",
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "id": str(body_data["id"]),
            "status": body_data["status"],
            "category": "category",
            "tags": "tags",
            "var_try": body_data["try"],
            "var_while": body_data["while"],
            "var_with": body_data["with"],
            "var_configuration": body_data["configuration"],
            "var_version": body_data["version"],
        }

        example_name = self.example_name
        example_data = self._example_data()

        del example_data[example_name]["body"]["name"]

        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)

        operation.request.example_data = example_data
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        root_properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body,
            indent_count=0,
        )

        self.assertDictEqual(expected, root_properties)

        operation.request.example_data = None

    def test_parse_object_properties_skips_null_optional(self):
        body_data = self._example_data()[self.example_name]["body"]

        expected = {
            "name": body_data["name"],
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "status": body_data["status"],
            "category": "category",
            "tags": "tags",
            "var_try": body_data["try"],
            "var_while": body_data["while"],
            "var_with": body_data["with"],
            "var_configuration": body_data["configuration"],
            "var_version": body_data["version"],
        }

        example_name = self.example_name
        example_data = self._example_data()

        example_data[example_name]["body"]["id"] = None

        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)

        operation.request.example_data = example_data
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        root_properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body,
            indent_count=0,
        )

        self.assertDictEqual(expected, root_properties)

        operation.request.example_data = None

    def test_parse_object_properties_does_not_use_same_name_when_multiple_of_object(
        self,
    ):
        operation_id = "multiple_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_multiple_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "dog_2_category": ["id", "name"],
            "dog_2_tags_1": ["id", "name"],
            "dog_2_tags_2": ["id", "name"],
            "dog_1_category": ["id", "name"],
            "dog_1_tags_1": ["id", "name"],
            "dog_1_tags_2": ["id", "name"],
            "dog_1": [
                "name",
                "photoUrls",
                "id",
                "status",
                "var_try",
                "var_while",
                "var_with",
                "category",
                "tags",
            ],
            "dog_2": [
                "name",
                "photoUrls",
                "id",
                "status",
                "var_try",
                "var_while",
                "var_with",
                "category",
                "tags",
            ],
            "MultipleDogs": ["dog_1", "dog_2"],
        }

        parsed_objects = sdk_generator.template_parser.parse_objects()

        for obj_name, obj in parsed_objects.items():
            if obj.is_array:
                continue

            result = sdk_generator.template_parser.parse_object_properties(
                macros=self.jinja_macros,
                parent=obj,
                indent_count=0,
            )

            self.assertEqual(expected[obj_name], list(result))

        operation.request.example_data = None

    def test_parse_object_properties_does_not_use_same_name_when_array_of_object(
        self,
    ):
        operation_id = "array_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_array_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "Dog_2_category": ["id", "name"],
            "Dog_2_tags_1": ["id", "name"],
            "Dog_2_tags_2": ["id", "name"],
            "Dog_1_category": ["id", "name"],
            "Dog_1_tags_1": ["id", "name"],
            "Dog_1_tags_2": ["id", "name"],
            "Dog_1": [
                "name",
                "photoUrls",
                "id",
                "status",
                "var_try",
                "var_while",
                "var_with",
                "category",
                "tags",
            ],
            "Dog_2": [
                "name",
                "photoUrls",
                "id",
                "status",
                "var_try",
                "var_while",
                "var_with",
                "category",
                "tags",
            ],
            "Dog": ["dog_1", "dog_2"],
        }

        parsed_objects = sdk_generator.template_parser.parse_objects()

        for obj_name, obj in parsed_objects.items():
            if obj.is_array:
                continue

            result = sdk_generator.template_parser.parse_object_properties(
                macros=self.jinja_macros,
                parent=obj,
                indent_count=0,
            )

            self.assertEqual(expected[obj_name], list(result))

        operation.request.example_data = None

    def test_parse_object_list_properties(self):
        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = "[tag,tag]"

        tags_properties = sdk_generator.template_parser.parse_object_list_properties(
            macros=self.jinja_macros,
            parent=container.body.array_objects.get("tags"),
            indent_count=0,
        )

        self.assertEqual(expected, tags_properties)

        operation.request.example_data = None

    def test_parse_object_list_properties_does_not_use_same_name_when_multiple_of_object(
        self,
    ):
        operation_id = "multiple_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_multiple_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "dog_2_tags": "[dog_2_tags_1,dog_2_tags_2]",
            "dog_1_tags": "[dog_1_tags_1,dog_1_tags_2]",
        }

        parsed_objects = sdk_generator.template_parser.parse_objects()

        for obj_name, obj in parsed_objects.items():
            if not obj.is_array:
                continue

            result = sdk_generator.template_parser.parse_object_list_properties(
                macros=self.jinja_macros,
                parent=obj,
                indent_count=0,
            )

            self.assertEqual(expected[obj_name], result)

        operation.request.example_data = None

    def test_parse_object_list_properties_does_not_use_same_name_when_array_of_object(
        self,
    ):
        operation_id = "array_dogs"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_array_dog_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected = {
            "Dog_2_tags": "[dog_2_tags_1,dog_2_tags_2]",
            "Dog_1_tags": "[dog_1_tags_1,dog_1_tags_2]",
            "Dog": "[dog_1,dog_2]",
        }

        parsed_objects = sdk_generator.template_parser.parse_objects()

        for obj_name, obj in parsed_objects.items():
            if not obj.is_array:
                continue

            result = sdk_generator.template_parser.parse_object_list_properties(
                macros=self.jinja_macros,
                parent=obj,
                indent_count=0,
            )

            self.assertEqual(expected[obj_name], result)

        operation.request.example_data = None

    def test_parse_api_call_properties(self):
        operation_id = "sorted"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        path_data = self._example_data()[self.example_name]["path"]
        query_data = self._example_data()[self.example_name]["query"]

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "petId": str(path_data["petId"]),
            "queryParam": str(query_data["queryParam"]),
            "var_try": query_data["try"],
            "var_while": query_data["while"],
            "var_with": query_data["with"],
            "Dog": "dog",
        }

        self.assertDictEqual(expected, api_call_properties)

        operation.request.example_data = None

    def test_parse_api_call_properties_formdata(self):
        operation_id = "sorted_formdata"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        body_data = self._example_data()[self.example_name]["body"]
        path_data = self._example_data()[self.example_name]["path"]
        query_data = self._example_data()[self.example_name]["query"]

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "petId": str(path_data["petId"]),
            "name": body_data["name"],
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "queryParam": str(query_data["queryParam"]),
            "var_try": query_data["try"],
            "var_while": query_data["while"],
            "var_with": query_data["with"],
            "id": str(body_data["id"]),
            "category": "category",
            "tags": "tags",
            "status": body_data["status"],
            "var_try2": body_data["try"],
            "var_while2": body_data["while"],
            "var_with2": body_data["with"],
            "configuration": body_data["configuration"],
            "version": body_data["version"],
        }

        self.assertEqual(expected, api_call_properties)

        operation.request.example_data = None

    def test_parse_api_call_root_level_non_objects(self):
        data_provider = {
            "root_level_free_form": {
                "name": "request_body",
                "value": {"bam": "baz"},
                "expected": {"request_body": "{'bam': 'baz'}"},
            },
            "root_level_string": {
                "name": "body",
                "value": "some string value",
                "expected": {"body": "some string value"},
            },
            "root_level_int": {
                "name": "body",
                "value": 12345,
                "expected": {"body": "12345"},
            },
            "root_level_file": {
                "name": "body",
                "value": "/some/file/path.pdf",
                "expected": {"body": "/some/file/path.pdf"},
            },
            "root_level_bool": {
                "name": "body",
                "value": True,
                "expected": {"body": "true"},
            },
        }

        oa_parser = TestUtils.oa_parser("root_level_non_objects")

        for operation_id, data in data_provider.items():
            with self.subTest(operation_id):
                example_data = {
                    self.example_name: {
                        "body": data["value"],
                    },
                }

                operation = oa_parser.operations.get(operation_id)
                operation.request.example_data = example_data
                container = operation.request.example_data[self.example_name]
                sdk_generator = MockGenerator(self.config, operation, container)

                api_call_properties = (
                    sdk_generator.template_parser.parse_api_call_properties(
                        macros=self.jinja_macros,
                        indent_count=0,
                    )
                )

                self.assertEqual(data["expected"], api_call_properties)

        operation.request.example_data = None

    def test_parse_api_call_properties_skip_parameters_no_data_not_required(self):
        operation_id = "parameters_no_values_not_required"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {}

        self.assertDictEqual(expected, api_call_properties)

    def test_parse_api_call_properties_skip_parameters_no_data_required(self):
        operation_id = "parameters_no_values_required"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "param_2": "param_2_string",
            "param_1": "null",
            "param_3": "null",
        }

        self.assertDictEqual(expected, api_call_properties)

    def test_parse_api_call_properties_print_none_for_empty_body_property(self):
        operation_id = "parameters_and_required_body"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = {
            self.example_name: {
                "query": {
                    "param_1": "foo",
                },
            },
        }
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "param_1": "foo",
            "key_1": "None",
        }

        self.assertDictEqual(expected, api_call_properties)

        operation.request.example_data = None

    def test_parse_security(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        security_config = self.config.oseg.security

        schemes = {
            "api_key_scheme": f"api_key: {security_config["api_key_scheme.api_key"]}",
            "http_basic_scheme": f"basic: {security_config["http_basic_scheme.username"]}:{security_config["http_basic_scheme.password"]}",
            "http_bearer_scheme": f"access_token: {security_config["http_bearer_scheme.access_token"]}",
            "oauth2_scheme": f"access_token: {security_config["oauth2_scheme.access_token"]}",
        }

        schemes_commented = {
            "api_key_scheme": f"# api_key: {security_config["api_key_scheme.api_key"]}",
            "http_basic_scheme": f"# basic: {security_config["http_basic_scheme.username"]}:{security_config["http_basic_scheme.password"]}",
            "http_bearer_scheme": f"# access_token: {security_config["http_bearer_scheme.access_token"]}",
            "oauth2_scheme": f"# access_token: {security_config["oauth2_scheme.access_token"]}",
        }

        data_provider = {
            "security_all": {
                "api_key_scheme": schemes["api_key_scheme"],
                "http_basic_scheme": schemes_commented["http_basic_scheme"],
                "http_bearer_scheme": schemes_commented["http_bearer_scheme"],
                "oauth2_scheme": schemes_commented["oauth2_scheme"],
            },
            "security_disabled": {},
            "security_and": {
                "api_key_scheme": schemes["api_key_scheme"],
                "http_basic_scheme": schemes["http_basic_scheme"],
            },
        }

        for operation_id, expected in data_provider.items():
            with self.subTest(operation_id):
                operation = oa_parser.operations.get(operation_id)
                container = operation.request.example_data[self.example_name]
                sdk_generator = MockGenerator(self.config, operation, container)

                result = sdk_generator.template_parser.parse_security(
                    macros=self.jinja_macros,
                    indent_count=0,
                )

                self.assertEqual(expected, result)

    def test_codegen_request_body_name(self):
        operation_id = "codegen_request_body_name_json"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        path_data = self._example_data()[self.example_name]["path"]
        query_data = self._example_data()[self.example_name]["query"]

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "petId": str(path_data["petId"]),
            "queryParam": str(query_data["queryParam"]),
            "var_try": query_data["try"],
            "var_while": query_data["while"],
            "var_with": query_data["with"],
            "some_new_name": "dog",
        }

        self.assertDictEqual(expected, api_call_properties)

        operation.request.example_data = None

    def test_codegen_request_body_name_formdata(self):
        operation_id = "codegen_request_body_name_formdata"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)
        operation.request.example_data = self._example_data()
        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        body_data = self._example_data()[self.example_name]["body"]
        path_data = self._example_data()[self.example_name]["path"]
        query_data = self._example_data()[self.example_name]["query"]

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        expected = {
            "petId": str(path_data["petId"]),
            "name": body_data["name"],
            "photoUrls": f"[{body_data["photoUrls"][0]},{body_data["photoUrls"][1]}]",
            "queryParam": str(query_data["queryParam"]),
            "var_try": query_data["try"],
            "var_while": query_data["while"],
            "var_with": query_data["with"],
            "id": str(body_data["id"]),
            "category": "category",
            "tags": "tags",
            "status": body_data["status"],
            "var_try2": body_data["try"],
            "var_while2": body_data["while"],
            "var_with2": body_data["with"],
            "configuration": body_data["configuration"],
            "version": body_data["version"],
        }

        self.assertEqual(expected, api_call_properties)

        operation.request.example_data = None

    def test_non_nullable_non_object_gets_default_value(self):
        operation_id = "property_with_all_required_for_default_value"
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations.get(operation_id)

        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        expected_api_properties = {
            "petId": "0",
            "queryParam": "null",
            "var_try": "foo",
            "var_while": "foo",
            "var_with": "foo",
            "PropertyWithAllRequiredForDefaultValue": "property_with_all_required_for_default_value",
        }

        expected_object_properties = {
            "id": "0",
            "name": "name_string",
            "is_available": "false",
            "status": "available",
            "photoUrls": "[]",
        }

        api_call_properties = sdk_generator.template_parser.parse_api_call_properties(
            macros=self.jinja_macros,
            indent_count=0,
        )

        object_properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body,
            indent_count=0,
        )

        self.assertEqual(expected_api_properties, api_call_properties)
        self.assertEqual(expected_object_properties, object_properties)

    # todo test print_file

    # todo test print_free_form

    # todo test _get_enum_varname

    # todo test _get_enum_varname_override

    @classmethod
    def _example_data(cls) -> dict[str, dict[str, any]]:
        return {
            cls.example_name: {
                "path": {
                    "petId": 101,
                },
                "query": {
                    "queryParam": 102,
                    "try": "query_try_value",
                    "while": "query_while_value",
                    "with": "query_with_value",
                },
                "body": {
                    "id": 103,
                    "name": "My pet name",
                    "status": "available",
                    "photoUrls": [
                        "https://example.com/picture_1.jpg",
                        "https://example.com/picture_2.jpg",
                    ],
                    "category": {
                        "id": 104,
                        "name": "Category_Name",
                    },
                    "tags": [
                        {"id": 105, "name": "tag_1"},
                        {"id": 106, "name": "tag_2"},
                    ],
                    "try": "body_try_value",
                    "while": "body_while_value",
                    "with": "body_with_value",
                    "configuration": "configuration_value",
                    "version": "version_value",
                },
            }
        }

    @classmethod
    def _example_multiple_dog_data(cls) -> dict[str, dict[str, any]]:
        return {
            cls.example_name: {
                "body": {
                    "dog_1": {
                        "id": 103,
                        "name": "My pet name #1",
                        "status": "available",
                        "photoUrls": [
                            "https://example.com/picture_1.jpg",
                            "https://example.com/picture_2.jpg",
                        ],
                        "category": {
                            "id": 104,
                            "name": "Category_Name_1",
                        },
                        "tags": [
                            {"id": 105, "name": "tag_1"},
                            {"id": 106, "name": "tag_2"},
                        ],
                        "try": "body_try_value_1",
                        "while": "body_while_value_1",
                        "with": "body_with_value_1",
                    },
                    "dog_2": {
                        "id": 107,
                        "name": "My pet name #2",
                        "status": "pending",
                        "photoUrls": [
                            "https://example.com/picture_3.jpg",
                            "https://example.com/picture_4.jpg",
                        ],
                        "category": {
                            "id": 108,
                            "name": "Category_Name_2",
                        },
                        "tags": [
                            {"id": 109, "name": "tag_3"},
                            {"id": 110, "name": "tag_4"},
                        ],
                        "try": "body_try_value_2",
                        "while": "body_while_value_2",
                        "with": "body_with_value_2",
                    },
                }
            }
        }

    @classmethod
    def _example_array_dog_data(cls) -> dict[str, dict[str, any]]:
        return {
            cls.example_name: {
                "body": [
                    {
                        "id": 103,
                        "name": "My pet name #1",
                        "status": "available",
                        "photoUrls": [
                            "https://example.com/picture_1.jpg",
                            "https://example.com/picture_2.jpg",
                        ],
                        "category": {
                            "id": 104,
                            "name": "Category_Name_1",
                        },
                        "tags": [
                            {"id": 105, "name": "tag_1"},
                            {"id": 106, "name": "tag_2"},
                        ],
                        "try": "body_try_value_1",
                        "while": "body_while_value_1",
                        "with": "body_with_value_1",
                    },
                    {
                        "id": 107,
                        "name": "My pet name #2",
                        "status": "pending",
                        "photoUrls": [
                            "https://example.com/picture_3.jpg",
                            "https://example.com/picture_4.jpg",
                        ],
                        "category": {
                            "id": 108,
                            "name": "Category_Name_2",
                        },
                        "tags": [
                            {"id": 109, "name": "tag_3"},
                            {"id": 110, "name": "tag_4"},
                        ],
                        "try": "body_try_value_2",
                        "while": "body_while_value_2",
                        "with": "body_with_value_2",
                    },
                ]
            }
        }
