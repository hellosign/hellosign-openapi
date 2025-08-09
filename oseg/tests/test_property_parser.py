from oseg import model, parser
from test_utils import TestUtils, TestCase


class TestPropertyParser(TestCase):
    def test_discriminator(self):
        oa_parser = TestUtils.oa_parser("discriminator")
        property_parser = parser.PropertyParser(oa_parser)

        data = {
            "id": 10000,
            "breed": "terrier",
            "group": "hunting",
        }

        schema = oa_parser.components.schemas.get("Dog")
        dog = property_parser.parse(
            schema=schema,
            data=data,
        )

        expected_properties = [
            "id",
            "breed",
            "mans_best_friend",
            "group",
        ]
        expected_type = "Terrier"
        expected_base_type = "Dog"

        self.assertEqual(set(expected_properties), set(dog.properties))
        self.assertEqual(expected_type, dog.type)
        self.assertEqual(
            expected_base_type,
            dog.base_type,
        )

        self.assertEqual(data["id"], dog.scalars.get("id").value)
        self.assertEqual(data["breed"], dog.scalars.get("breed").value)
        self.assertEqual(data["group"], dog.scalars.get("group").value)

    def test_discriminator_array(self):
        oa_parser = TestUtils.oa_parser("discriminator")
        property_parser = parser.PropertyParser(oa_parser)

        data = {
            "dogs": [
                {
                    "id": 10000,
                    "breed": "terrier",
                    "group": "hunting",
                },
                {
                    "id": 20000,
                    "breed": "beagle",
                    "group": "hound",
                },
            ],
        }

        schema = oa_parser.components.schemas.get("Dogs")
        dogs = property_parser.parse(
            schema=schema,
            data=data,
        )

        expected_properties = ["dogs"]
        expected_type = "Dogs"
        expected_base_type = None
        expected_property_count = 1

        self.assertEqual(set(expected_properties), set(dogs.properties))
        self.assertEqual(expected_type, dogs.type)
        self.assertEqual(
            expected_base_type,
            dogs.base_type,
        )
        self.assertEqual(expected_property_count, len(dogs.properties))

        expected_dog_properties = [
            "id",
            "breed",
            "mans_best_friend",
            "group",
        ]

        data_provider = [
            {
                "type": "Terrier",
                "base_type": "Dog",
            },
            {
                "type": "Beagle",
                "base_type": "Dog",
            },
        ]

        i = 0
        for datum in data_provider:
            with self.subTest(datum["type"]):
                dog = dogs.array_objects.get("dogs").properties[i]
                expected = data["dogs"][i]

                self.assertEqual(
                    set(expected_dog_properties),
                    set(dog.properties),
                )
                self.assertEqual(datum["type"], dog.type)
                self.assertEqual(
                    datum["base_type"],
                    dog.base_type,
                )

                self.assertEqual(expected["id"], dog.scalars.get("id").value)
                self.assertEqual(
                    expected["breed"],
                    dog.scalars.get("breed").value,
                )
                self.assertEqual(
                    expected["group"],
                    dog.scalars.get("group").value,
                )

                i += 1

    def test_discriminator_no_data(self):
        """When discriminator field has no value or is not in "mapping" list
        instantiate the base Schema without setting discriminator data
        """

        oa_parser = TestUtils.oa_parser("discriminator")
        property_parser = parser.PropertyParser(oa_parser)

        data_provider = [
            {
                "id": 10000,
            },
            {
                "id": 10000,
                "breed": None,
            },
            {
                "id": 10000,
                "breed": "invalid_breed",
            },
        ]

        expected_breed_values = [
            None,
            None,
            "invalid_breed",
        ]

        schema = oa_parser.components.schemas.get("Dog")

        i = 0
        for data in data_provider:
            with self.subTest(i):
                dog = property_parser.parse(
                    schema=schema,
                    data=data,
                )

                expected_properties = [
                    "id",
                    "breed",
                    "mans_best_friend",
                ]
                expected_type = "Dog"
                expected_base_type = None

                self.assertEqual(set(expected_properties), set(dog.properties))
                self.assertEqual(expected_type, dog.type)
                self.assertEqual(
                    expected_base_type,
                    dog.base_type,
                )

                self.assertEqual(data["id"], dog.scalars.get("id").value)
                self.assertEqual(
                    expected_breed_values[i], dog.scalars.get("breed").value
                )

                i += 1

    def test_all_of(self):
        """allOf without a discriminator"""

        oa_parser = TestUtils.oa_parser("discriminator")
        property_parser = parser.PropertyParser(oa_parser)

        data = {
            "id": 10000,
            "breed": "terrier",
            "group": "hunting",
        }

        schema = oa_parser.components.schemas.get("Terrier")
        terrier = property_parser.parse(
            schema=schema,
            data=data,
        )

        expected_properties = [
            "id",
            "breed",
            "mans_best_friend",
            "group",
        ]
        expected_type = "Terrier"
        expected_base_type = None

        self.assertEqual(set(expected_properties), set(terrier.properties))
        self.assertEqual(expected_type, terrier.type)
        self.assertEqual(
            expected_base_type,
            terrier.base_type,
        )

        self.assertEqual(data["id"], terrier.scalars.get("id").value)
        self.assertEqual(data["breed"], terrier.scalars.get("breed").value)
        self.assertEqual(data["group"], terrier.scalars.get("group").value)

    def test_all_of_array(self):
        oa_parser = TestUtils.oa_parser("discriminator")
        property_parser = parser.PropertyParser(oa_parser)

        data = {
            "terriers": [
                {
                    "id": 10000,
                    "breed": "terrier",
                    "group": "hunting",
                },
                {
                    "id": 20000,
                    "breed": "terrier",
                    "group": "hunting",
                },
            ],
        }

        schema = oa_parser.components.schemas.get("Terriers")
        parsed = property_parser.parse(
            schema=schema,
            data=data,
        )

        expected_properties = ["terriers"]
        expected_type = "Terriers"
        expected_base_type = None
        expected_property_count = 1

        self.assertEqual(set(expected_properties), set(parsed.properties))
        self.assertEqual(expected_type, parsed.type)
        self.assertEqual(
            expected_base_type,
            parsed.base_type,
        )
        self.assertEqual(expected_property_count, len(parsed.properties))

        expected_terrier_properties = [
            "id",
            "breed",
            "mans_best_friend",
            "group",
        ]

        data_provider = [
            {
                "type": "Terrier",
                "base_type": None,
            },
            {
                "type": "Terrier",
                "base_type": None,
            },
        ]

        i = 0
        for datum in data_provider:
            with self.subTest(datum["type"]):
                terrier = parsed.array_objects.get("terriers").properties[i]
                expected = data["terriers"][i]

                self.assertEqual(
                    set(expected_terrier_properties),
                    set(terrier.properties),
                )
                self.assertEqual(datum["type"], terrier.type)
                self.assertEqual(
                    datum["base_type"],
                    terrier.base_type,
                )

                self.assertEqual(expected["id"], terrier.scalars.get("id").value)
                self.assertEqual(
                    expected["breed"],
                    terrier.scalars.get("breed").value,
                )
                self.assertEqual(
                    expected["group"],
                    terrier.scalars.get("group").value,
                )

                i += 1

    def test_combined_properties(self):
        oa_parser = TestUtils.oa_parser("properties")
        property_parser = parser.PropertyParser(oa_parser)

        val_object = {"key_1": "value"}
        val_array_object = [{"key_1": "value_1"}, {"key_1": "value_2"}]
        val_nested_object = {"key_1": {"key_2": "value"}}
        val_array_nested_object = [
            {"key_1": {"key_2": "value_1"}},
            {"key_1": {"key_2": "value_2"}},
        ]

        val_array_string = ["value_1", "value_2"]
        val_array_int = [123, 456]
        val_array_bool = [True, False]
        val_array_file = ["/path_file_1", "/path_file_2"]
        val_free_form = {"key_1": "value"}
        val_array_free_form = [{"key_1": "value_1"}, {"key_2": "value_2"}]

        data = {
            "prop_object": val_object,
            "prop_ref_object": val_object,
            "prop_array_ref_object": val_array_object,
            "prop_nested_object": val_nested_object,
            "prop_ref_nested_object": val_nested_object,
            "prop_array_ref_nested_object": val_array_nested_object,
            "prop_string": "value",
            "prop_array_string": val_array_string,
            "prop_ref_string": "value",
            "prop_array_ref_string": val_array_string,
            "prop_integer": 123,
            "prop_array_integer": val_array_int,
            "prop_ref_integer": 123,
            "prop_array_ref_integer": val_array_int,
            "prop_number": 123,
            "prop_array_number": val_array_int,
            "prop_ref_number": 123,
            "prop_array_ref_number": val_array_int,
            "prop_boolean": True,
            "prop_array_boolean": val_array_bool,
            "prop_ref_boolean": True,
            "prop_array_ref_boolean": val_array_bool,
            "prop_file": "/path_file",
            "prop_array_file": val_array_file,
            "prop_ref_file": "/path_file",
            "prop_array_ref_file": val_array_file,
            "prop_free_form": val_free_form,
            "prop_array_free_form": val_array_free_form,
            "prop_ref_free_form": val_free_form,
            "prop_array_ref_free_form": val_array_free_form,
        }

        schema = oa_parser.components.schemas.get("Pet")
        pet = property_parser.parse(
            schema=schema,
            data=data,
        )

        self.assertEqual(set(data), set(pet.properties))

        non_object_props = [
            "prop_string",
            "prop_array_string",
            "prop_ref_string",
            "prop_array_ref_string",
            "prop_integer",
            "prop_array_integer",
            "prop_ref_integer",
            "prop_array_ref_integer",
            "prop_number",
            "prop_array_number",
            "prop_ref_number",
            "prop_array_ref_number",
            "prop_boolean",
            "prop_array_boolean",
            "prop_ref_boolean",
            "prop_array_ref_boolean",
            "prop_file",
            "prop_array_file",
            "prop_ref_file",
            "prop_array_ref_file",
            "prop_free_form",
            "prop_array_free_form",
            "prop_ref_free_form",
            "prop_array_ref_free_form",
        ]

        for name in non_object_props:
            with self.subTest(name):
                value = data[name]

                self.assertEqual(value, pet.properties.get(name).value)

        prop_object = pet.objects.get("prop_object")
        self.assertEqual("Pet_prop_object", prop_object.type)
        self.assertEqual(
            prop_object.scalars.get("key_1").value,
            val_object["key_1"],
        )

        prop_ref_object = pet.objects.get("prop_ref_object")
        self.assertEqual("PropRefObject", prop_ref_object.type)
        self.assertEqual(
            prop_ref_object.scalars.get("key_1").value,
            val_object["key_1"],
        )

        prop_array_ref_object_1 = pet.array_objects.get(
            "prop_array_ref_object"
        ).properties[0]
        self.assertEqual("PropRefObject", prop_array_ref_object_1.type)
        self.assertEqual(
            prop_array_ref_object_1.scalars.get("key_1").value,
            val_array_object[0]["key_1"],
        )

        prop_array_ref_object_2 = pet.array_objects.get(
            "prop_array_ref_object"
        ).properties[1]
        self.assertEqual("PropRefObject", prop_array_ref_object_2.type)
        self.assertEqual(
            prop_array_ref_object_2.scalars.get("key_1").value,
            val_array_object[1]["key_1"],
        )

        prop_nested_object = pet.objects.get("prop_nested_object")
        self.assertEqual("Pet_prop_nested_object", prop_nested_object.type)
        prop_nested_object_key_1 = prop_nested_object.objects.get("key_1")
        self.assertEqual("Pet_prop_nested_object_key_1", prop_nested_object_key_1.type)
        self.assertEqual(
            prop_nested_object_key_1.scalars.get("key_2").value,
            val_nested_object["key_1"]["key_2"],
        )

        prop_ref_nested_object = pet.objects.get("prop_ref_nested_object")
        self.assertEqual("PropRefNestedObject", prop_ref_nested_object.type)
        prop_ref_nested_object_key_1 = prop_ref_nested_object.objects.get("key_1")
        self.assertEqual("PropRefNestedObject_key_1", prop_ref_nested_object_key_1.type)
        self.assertEqual(
            prop_ref_nested_object_key_1.scalars.get("key_2").value,
            val_nested_object["key_1"]["key_2"],
        )

        prop_array_ref_nested_object_1 = pet.array_objects.get(
            "prop_array_ref_nested_object"
        ).properties[0]
        self.assertEqual("PropRefNestedObject", prop_array_ref_nested_object_1.type)
        prop_array_ref_nested_object_1_key_1 = (
            prop_array_ref_nested_object_1.objects.get("key_1")
        )
        self.assertEqual(
            "PropRefNestedObject_key_1", prop_array_ref_nested_object_1_key_1.type
        )
        self.assertEqual(
            prop_array_ref_nested_object_1_key_1.scalars.get("key_2").value,
            val_array_nested_object[0]["key_1"]["key_2"],
        )

        prop_array_ref_nested_object_2 = pet.array_objects.get(
            "prop_array_ref_nested_object"
        ).properties[1]
        self.assertEqual("PropRefNestedObject", prop_array_ref_nested_object_2.type)
        prop_array_ref_nested_object_2_key_1 = (
            prop_array_ref_nested_object_2.objects.get("key_1")
        )
        self.assertEqual(
            "PropRefNestedObject_key_1", prop_array_ref_nested_object_2_key_1.type
        )
        self.assertEqual(
            prop_array_ref_nested_object_2_key_1.scalars.get("key_2").value,
            val_array_nested_object[1]["key_1"]["key_2"],
        )

    def test_non_named_parameter_object(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["default"]
        example_data = operation.request.example_data[example_name]

        free_form_obj = example_data.query.free_forms["paramComponentObject"]
        array_free_form_obj = example_data.query.array_free_forms[
            "paramComponentArrayObject"
        ]

        self.assertIsInstance(free_form_obj, model.PropertyFreeForm)
        self.assertIsInstance(array_free_form_obj, model.PropertyFreeForm)

        self.assertFalse(free_form_obj.is_array)
        self.assertTrue(array_free_form_obj.is_array)

    def test_property_sorting(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["sorted"]
        example_data = operation.request.example_data[example_name]

        expected_properties_1 = [
            "petId",
            "queryParam",
            "try",
            "while",
            "with",
            "Dog",
        ]

        self.assertListEqual(expected_properties_1, list(example_data.properties()))

    def test_property_sorting_formdata(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["sorted_formdata"]
        example_data = operation.request.example_data[example_name]

        expected_properties_1 = [
            "petId",
            "name",
            "photoUrls",
            "queryParam",
            "try",
            "while",
            "with",
            "id",
            "category",
            "tags",
            "status",
            "try2",
            "while2",
            "with2",
            "configuration",
            "version",
        ]

        self.assertListEqual(expected_properties_1, list(example_data.properties()))

    def test_root_level_nonobjects(self):
        data_provider = {
            "FreeFormSchema": {
                "type": model.PropertyFreeForm,
                "value": {"some_key": "some_value"},
            },
            "FreeFormSchemaArray": {
                "type": model.PropertyFreeForm,
                "value": [{"some_key": "some_value"}],
            },
            "StringSchema": {
                "type": model.PropertyScalar,
                "value": "foo bar",
            },
            "StringSchemaArray": {
                "type": model.PropertyScalar,
                "value": ["foo bar"],
            },
            "IntSchema": {
                "type": model.PropertyScalar,
                "value": 654321,
            },
            "IntSchemaArray": {
                "type": model.PropertyScalar,
                "value": [654321],
            },
            "FileSchema": {
                "type": model.PropertyFile,
                "value": "/path.pdf",
            },
            "FileSchemaArray": {
                "type": model.PropertyFile,
                "value": ["/path.pdf"],
            },
            "BoolSchema": {
                "type": model.PropertyScalar,
                "value": False,
            },
            "BoolSchemaArray": {
                "type": model.PropertyScalar,
                "value": [False],
            },
        }

        oa_parser = TestUtils.oa_parser("root_level_non_objects")
        property_parser = parser.PropertyParser(oa_parser)

        for name, expected in data_provider.items():
            with self.subTest(name):
                schema = oa_parser.components.schemas.get(name)
                parsed = property_parser.parse(schema, expected["value"])

                self.assertEqual(expected["value"], parsed.value)
                self.assertIsInstance(parsed, expected["type"])

    def test_free_form_string_object_value(self):
        example_name = parser.ExampleDataParser.DEFAULT_EXAMPLE_NAME
        oa_parser = TestUtils.oa_parser("properties")
        operation = oa_parser.operations["free_form_string_object_value"]
        example_data = operation.request.example_data[example_name]

        result = example_data.body.free_forms.get("prop_object").value
        expected = {}

        self.assertEqual(expected, result)
