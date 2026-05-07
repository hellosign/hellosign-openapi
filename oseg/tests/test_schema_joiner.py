from oseg import parser
from test_utils import TestUtils, TestCase


class TestSchemaJoiner(TestCase):
    def test_no_all_of_no_discriminator(self):
        data = {
            "id": 123,
            "type": "dog",
        }

        oa_parser = TestUtils.oa_parser("discriminator")
        schema_joiner = parser.SchemaJoiner(oa_parser)
        pet = oa_parser.components.schemas.get("Pet")
        joined = schema_joiner.merge_schemas_and_properties(pet, data)

        expected_discriminator_target_type = None
        expected_schema_count = 1

        self.assertEqual(
            expected_discriminator_target_type,
            joined.discriminator_target_type,
        )
        self.assertListEqual(list(data), list(joined.properties))
        self.assertEqual(expected_schema_count, len(joined.schemas))
        self.assertEqual(pet, joined.schemas[0])

    def test_discriminator(self):
        """When using a Discriminator, the joined schemas will reference the
        target's "allOff" values.

        Any $ref will be resolved, so the actual Schema definition in the OAS
        file will not match the result from SchemaJoiner.

        This is why below we assert that the first schema is Dog and second
        schema we reference Terrier.allOf[1] instead of schema Terrier.

        Terrier:
          allOf:
            - $ref: '#/components/schemas/Dog'
            -
              type: object
              properties:
                group:
                  type: string
                  default: hunting

        We resolve "$ref: '#/components/schemas/Dog'" to schema Dog,
        and say that joined.schemas[1] == terrier.allOf[1]
        """

        data = {
            "id": 123,
            "breed": "terrier",
            "group": "hunting",
            "mans_best_friend": True,
        }

        oa_parser = TestUtils.oa_parser("discriminator")
        schema_joiner = parser.SchemaJoiner(oa_parser)
        dog = oa_parser.components.schemas.get("Dog")
        terrier = oa_parser.components.schemas.get("Terrier")
        joined = schema_joiner.merge_schemas_and_properties(dog, data)

        expected_discriminator_target_type = "Terrier"
        expected_schema_count = 2

        self.assertEqual(
            expected_discriminator_target_type,
            joined.discriminator_target_type,
        )
        self.assertEqual(set(data), set(joined.properties))
        self.assertEqual(expected_schema_count, len(joined.schemas))
        self.assertEqual(dog, joined.schemas[0])
        self.assertEqual(terrier.allOf[1], joined.schemas[1])

    def test_discriminator_no_data(self):
        """Invalid discriminator value will simply return the discriminator
        Schema."""

        datum = [
            None,
            {"breed": "invalid_breed"},
        ]

        oa_parser = TestUtils.oa_parser("discriminator")
        schema_joiner = parser.SchemaJoiner(oa_parser)
        dog = oa_parser.components.schemas.get("Dog")

        i = 0
        for data in datum:
            with self.subTest(i):
                joined = schema_joiner.merge_schemas_and_properties(dog, data)

                expected_discriminator_target_type = None
                expected_properties = [
                    "id",
                    "breed",
                    "mans_best_friend",
                ]
                expected_schema_count = 1

                self.assertEqual(
                    expected_discriminator_target_type,
                    joined.discriminator_target_type,
                )
                self.assertEqual(set(expected_properties), set(joined.properties))
                self.assertEqual(expected_schema_count, len(joined.schemas))
                self.assertEqual(dog, joined.schemas[0])

                i += 1

    def test_all_of(self):
        """allOf without a discriminator"""

        datum = [
            None,
            {
                "id": 123,
                "breed": "terrier",
                "group": "hunting",
                "mans_best_friend": True,
            },
        ]

        oa_parser = TestUtils.oa_parser("discriminator")
        schema_joiner = parser.SchemaJoiner(oa_parser)
        dog = oa_parser.components.schemas.get("Dog")
        terrier = oa_parser.components.schemas.get("Terrier")

        i = 0
        for data in datum:
            with self.subTest(i):
                joined = schema_joiner.merge_schemas_and_properties(terrier, data)

                expected_discriminator_target_type = None
                expected_properties = [
                    "id",
                    "breed",
                    "group",
                    "mans_best_friend",
                ]
                expected_schema_count = 2

                self.assertEqual(
                    expected_discriminator_target_type,
                    joined.discriminator_target_type,
                )
                self.assertEqual(set(expected_properties), set(joined.properties))
                self.assertEqual(expected_schema_count, len(joined.schemas))
                self.assertEqual(dog, joined.schemas[0])
                self.assertEqual(terrier.allOf[1], joined.schemas[1])

                i += 1
