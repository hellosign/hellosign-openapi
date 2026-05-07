from oseg import parser
from test_utils import TestUtils, TestCase


class TestTypeChecker(TestCase):
    def test_is_array(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_array = parser.TypeChecker.is_array

        expected_true_array = [
            "prop_ref_array",
            "prop_file_base64_array",
            "prop_file_binary_array",
            "prop_file_byte_array",
            "prop_file_contentMediaType_array",
            "prop_file_contentEncoding_array",
            "prop_free_form_array",
            "prop_free_form_no_additional_properties_array",
            "prop_free_form_additional_properties_true_array",
            "prop_scalar_bool_array",
            "prop_scalar_integer_array",
            "prop_scalar_number_array",
            "prop_scalar_string_array",
            "prop_nullable_array",
        ]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_array(prop))

    def test_is_file(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_file
        func_array = parser.TypeChecker.is_file_array

        expected_true_single = [
            "prop_file_binary",
            "prop_file_byte",
        ]
        expected_true_array = [
            "prop_file_binary_array",
            "prop_file_byte_array",
        ]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_free_form(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_free_form
        func_array = parser.TypeChecker.is_free_form_array

        expected_true_single = [
            "prop_free_form",
            "prop_free_form_no_additional_properties",
            "prop_free_form_additional_properties_true",
        ]
        expected_true_array = [
            "prop_free_form_array",
            "prop_free_form_no_additional_properties_array",
            "prop_free_form_additional_properties_true_array",
        ]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_scalar(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_scalar
        func_array = parser.TypeChecker.is_scalar_array

        expected_true_single = [
            "prop_file_base64",
            "prop_file_contentEncoding",
            "prop_file_contentMediaType",
            "prop_scalar_bool",
            "prop_scalar_integer",
            "prop_scalar_number",
            "prop_scalar_string",
            "prop_scalar_string_contentMediaType",
            "prop_nullable",
        ]

        expected_true_array = [
            "prop_file_base64_array",
            "prop_file_contentEncoding_array",
            "prop_file_contentMediaType_array",
            "prop_scalar_bool_array",
            "prop_scalar_integer_array",
            "prop_scalar_number_array",
            "prop_scalar_string_array",
            "prop_nullable_array",
        ]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_object(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_object
        func_array = parser.TypeChecker.is_object_array

        expected_true_single = [
            "prop_discriminator",
            "prop_ref",
            "prop_object",
        ]
        expected_true_array = [
            "prop_ref_array",
        ]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_nullable(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_nullable
        func_array = parser.TypeChecker.is_nullable_array

        expected_true_single = ["prop_nullable"]
        expected_true_array = ["prop_nullable_array"]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_nullable_30(self):
        oa_parser = TestUtils.oa_parser("type_checker-3.0")

        together = oa_parser.components.schemas.get("Together")
        func_single = parser.TypeChecker.is_nullable
        func_array = parser.TypeChecker.is_nullable_array

        expected_true_single = ["prop_nullable"]
        expected_true_array = ["prop_nullable_array"]

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name in expected_true_single:
                    self.assertTrue(func_single(prop))
                elif name in expected_true_array:
                    self.assertTrue(func_array(prop))
                else:
                    self.assertFalse(func_single(prop))
                    self.assertFalse(func_array(prop))

    def test_is_discriminator(self):
        oa_parser = TestUtils.oa_parser("type_checker")
        together = oa_parser.components.schemas.get("Together")

        expected_true = "prop_discriminator"

        for name, prop in together.properties.items():
            with self.subTest(name):
                if name == expected_true:
                    self.assertTrue(parser.TypeChecker.is_discriminator(prop))
                else:
                    self.assertFalse(parser.TypeChecker.is_discriminator(prop))
