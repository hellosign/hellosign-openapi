from test_utils import TestUtils, TestCase
from fixtures.mock_generator import MockConfig, MockGenerator, JINJA_MACROS
from oseg import model, parser


class TestGenerator(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.jinja_macros = model.JinjaMacros(JINJA_MACROS)
        config_data = parser.FileLoader.get_file_contents(
            f"{TestUtils._BASE_DIR}/fixtures/config-mock.yaml"
        )
        cls.config = MockConfig(config_data.get("additionalProperties", {}))
        cls.example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME

    def test_enum_name(self):
        operation_id = "default"
        oa_parser = TestUtils.oa_parser("enums")
        operation = oa_parser.operations.get(operation_id)

        operation.request.example_data = {
            self.example_name: {
                "body": {
                    "enum_prop_1": "value_1",
                    "enum_prop_2": "value_2",
                    "enum_prop_3": "value_3",
                },
            },
        }

        container = operation.request.example_data[self.example_name]
        sdk_generator = MockGenerator(self.config, operation, container)

        properties = sdk_generator.template_parser.parse_object_properties(
            macros=self.jinja_macros,
            parent=container.body,
            indent_count=0,
        )

        expected = {
            "enum_prop_1": "value_1",
            "enum_prop_2": "ENUM_VARNAME_2",
            "enum_prop_3": "ENUM_VARNAME_OVERRIDE_MOCK_3",
        }

        self.assertDictEqual(expected, properties)

        operation.request.example_data = None
