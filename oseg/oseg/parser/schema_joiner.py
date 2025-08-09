import openapi_pydantic as oa
from dataclasses import dataclass
from oseg import parser


@dataclass
class JoinedValues:
    schemas: list[oa.Schema]
    properties: dict[str, oa.Reference | oa.Schema]
    discriminator_target_type: str | None = None


class SchemaJoiner:
    def __init__(self, oa_parser: parser.OaParser):
        self._oa_parser: parser.OaParser = oa_parser

    def merge_schemas_and_properties(
        self,
        schema: oa.Schema,
        data: dict[str, any] | None,
    ) -> JoinedValues:
        """When a Schema uses allOf will merge all Schemas and the properties
        of those Schemas.

        Currently only useful for Schema that use a discriminator and allOf.

        data is only used by discriminator
        """

        discriminated = self._resolve_discriminator(schema, data)

        if discriminated:
            return discriminated

        all_of = self._resolve_all_of(schema)

        if all_of:
            return all_of

        return JoinedValues(
            schemas=[schema],
            properties=self._get_properties([schema]),
        )

    def _resolve_discriminator(
        self,
        schema: oa.Schema,
        data: dict[str, any] | None,
    ) -> JoinedValues | None:
        """Returns all schemas that build a discriminator.

        The last Schema will always take precedence with regards to properties
        and other metadata
        """

        if not parser.TypeChecker.is_discriminator(schema) or data is None:
            return None

        # the property that is used as the discriminator key
        key = schema.discriminator.propertyName
        # all possible discriminator targets, [key value: target_schema]
        mapping = schema.discriminator.mapping
        # value decides the final schema
        value: str = data.get(key)

        if not value:
            return None

        ref = mapping.get(value)

        if not ref:
            return None

        resolved_name = ref.split("/").pop()
        resolved = self._oa_parser.components.schemas.get(resolved_name)

        joined = self._resolve_all_of(resolved)
        joined.discriminator_target_type = resolved_name

        return joined

    def _resolve_all_of(self, schema: oa.Schema) -> JoinedValues | None:
        """Returns all schemas that build a ref via allOf.

        The last Schema will always take precedence with regards to properties
        and other metadata
        """

        if not schema.allOf:
            return None

        return JoinedValues(
            schemas=schema.allOf,
            properties=self._get_properties(schema.allOf),
        )

    def _get_properties(
        self,
        schemas: list[oa.Schema],
    ) -> dict[str, oa.Reference | oa.Schema]:
        result = {}
        required = []

        for schema in schemas:
            if schema.required:
                required = required + schema.required

            if parser.TypeChecker.is_array(schema):
                body_name = self._oa_parser.get_component_name(schema.items).lower()

                if body_name in result:
                    del result[body_name]

                result[body_name] = schema

            if not hasattr(schema, "properties") or schema.properties is None:
                continue

            for property_name, property_schema in schema.properties.items():
                if property_name in result:
                    del result[property_name]

                result[property_name] = property_schema

        sorted_results = {}
        for name in required:
            # todo unit test
            if name not in result:
                continue

            sorted_results[name] = result[name]
            del result[name]

        return {**sorted_results, **result}
