from oseg import model
from test_utils import TestUtils, TestCase


class TestSecurity(TestCase):
    def test_security_all(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_all")

        expected = [
            ["api_key_scheme"],
            ["http_basic_scheme"],
            ["http_bearer_scheme"],
            ["oauth2_scheme"],
        ]

        result = [
            list(operation.security.schemes[0]),
            list(operation.security.schemes[1]),
            list(operation.security.schemes[2]),
            list(operation.security.schemes[3]),
        ]

        self.assertEqual(expected, result)
        self.assertFalse(operation.security.is_optional)
        self.assertTrue(len(operation.security.schemes) == 4)

    def test_correct_method(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_all")

        self.assertEqual(
            model.SecurityMethod.API_KEY,
            operation.security.schemes[0]["api_key_scheme"].method,
        )

        self.assertEqual(
            model.SecurityMethod.BASIC,
            operation.security.schemes[1]["http_basic_scheme"].method,
        )

        self.assertEqual(
            model.SecurityMethod.ACCESS_TOKEN,
            operation.security.schemes[2]["http_bearer_scheme"].method,
        )

        self.assertEqual(
            model.SecurityMethod.ACCESS_TOKEN,
            operation.security.schemes[3]["oauth2_scheme"].method,
        )

    def test_security_optional(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_optional")

        self.assertTrue(operation.security.is_optional)
        self.assertTrue(len(operation.security.schemes) == 4)

    def test_security_override(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_override")

        expected = [
            ["http_basic_scheme"],
        ]

        result = [
            list(operation.security.schemes[0]),
        ]

        self.assertEqual(expected, result)
        self.assertFalse(operation.security.is_optional)
        self.assertTrue(len(operation.security.schemes) == 1)

    def test_security_disabled(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_disabled")

        self.assertTrue(len(operation.security.schemes) == 0)

    def test_security_and(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_and")

        expected = [
            ["api_key_scheme", "http_basic_scheme"],
        ]

        result = [
            list(operation.security.schemes[0]),
        ]

        self.assertEqual(expected, result)
        self.assertFalse(operation.security.is_optional)
        self.assertTrue(len(operation.security.schemes) == 1)

    def test_security_or(self):
        oa_parser = TestUtils.oa_parser("security_schemes")
        operation = oa_parser.operations.get("security_or")

        expected = [
            ["api_key_scheme"],
            ["http_basic_scheme"],
        ]

        result = [
            list(operation.security.schemes[0]),
            list(operation.security.schemes[1]),
        ]

        self.assertEqual(expected, result)
        self.assertFalse(operation.security.is_optional)
        self.assertTrue(len(operation.security.schemes) == 2)
