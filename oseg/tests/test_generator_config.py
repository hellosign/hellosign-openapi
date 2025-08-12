from test_utils import TestUtils, TestCase
from fixtures.mock_generator import MockConfig, JINJA_MACROS
from oseg import model, parser


class TestGeneratorConfig(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.jinja_macros = model.JinjaMacros(JINJA_MACROS)
        cls.config_data = parser.FileLoader.get_file_contents(
            f"{TestUtils._BASE_DIR}/fixtures/config-mock.yaml"
        )

    def test_security(self):
        config = MockConfig(self.config_data.get("additionalProperties", {}))

        expected = {
            "api_key_scheme.api_key": "YOUR_API_KEY",
            "http_basic_scheme.username": "YOUR_USERNAME",
            "http_basic_scheme.password": "YOUR_PASSWORD",
            "http_bearer_scheme.access_token": "YOUR_ACCESS_TOKEN_1",
            "oauth2_scheme.access_token": "YOUR_ACCESS_TOKEN_2",
        }

        self.assertDictEqual(expected, config.oseg.security)
