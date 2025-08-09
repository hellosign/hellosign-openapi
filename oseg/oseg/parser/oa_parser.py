from __future__ import annotations
import openapi_pydantic as oa
from oseg import model, parser


class OaParser:
    def __init__(
        self,
        oas_file: str,
        operation_id: str | None = None,
        example_data: model.EXAMPLE_DATA_BY_OPERATION | None = None,
    ):
        self.file_loader: parser.FileLoader = parser.FileLoader(oas_file)
        self._openapi: oa.OpenAPI = oa.parse_obj(self.file_loader.oas)
        self._setup_oas()

        self.paths: dict[str, oa.PathItem] = self._openapi.paths
        self.security: list[dict[str, list[str]]] | None = self._openapi.security
        self.components: oa.Components = self._openapi.components

        self._component_resolver: parser.ComponentResolver = parser.ComponentResolver(
            self,
        )
        example_data_parser: parser.ExampleDataParser = parser.ExampleDataParser(self)
        operation_parser: parser.OperationParser = parser.OperationParser(
            self,
            example_data_parser,
        )

        self.operations: dict[str, model.Operation] = operation_parser.setup_operations(
            operation_id=operation_id,
            example_data=example_data,
        )

    def resolve_component(self, schema: oa.Schema | oa.Reference) -> oa.Schema:
        return self._get_resolved_component(schema, self.components.schemas)

    def resolve_parameter(self, schema: oa.Parameter | oa.Reference) -> oa.Parameter:
        return self._get_resolved_component(schema, self.components.parameters)

    def resolve_request_body(
        self,
        schema: oa.RequestBody | oa.Reference,
    ) -> oa.RequestBody:
        return self._get_resolved_component(schema, self.components.requestBodies)

    def resolve_response(self, schema: oa.Response | oa.Reference) -> oa.Response:
        return self._get_resolved_component(schema, self.components.responses)

    def resolve_security(
        self,
        schema: oa.SecurityScheme | oa.Reference,
    ) -> oa.SecurityScheme:
        return self._get_resolved_component(schema, self.components.securitySchemes)

    def resolve_example(self, schema: oa.Example | oa.Reference) -> oa.Example | None:
        return self._get_resolved_component(schema, self.components.examples)

    def resolve_property(
        self,
        schema: oa.Schema | oa.Reference,
        property_name: str,
    ) -> oa.Schema | None:
        """Only returns a Schema for properties that have a 'type' value"""

        schema = self.resolve_component(schema)

        if schema.properties is None:
            return None

        property_schema = schema.properties.get(property_name)

        if property_schema is None:
            return None

        property_schema = self.resolve_component(property_schema)

        if not hasattr(property_schema, "type") or not property_schema.type:
            return None

        return property_schema

    def get_component_name(self, schema: parser.OA_RESOLVABLE) -> str | None:
        return self._component_resolver.name(schema)

    def _setup_oas(self) -> None:
        if not self._openapi.components:
            self._openapi.components = oa.Components()

        if not self._openapi.components.examples:
            self._openapi.components.examples = {}

        if not self._openapi.components.headers:
            self._openapi.components.headers = {}

        if not self._openapi.components.parameters:
            self._openapi.components.parameters = {}

        if (
            hasattr(self._openapi.components, "pathItems")
            and not self._openapi.components.pathItems
        ):
            self._openapi.components.pathItems = {}

        if not self._openapi.components.requestBodies:
            self._openapi.components.requestBodies = {}

        if not self._openapi.components.responses:
            self._openapi.components.responses = {}

        if not self._openapi.components.schemas:
            self._openapi.components.schemas = {}

        if not self._openapi.components.securitySchemes:
            self._openapi.components.securitySchemes = {}

        if not self._openapi.paths:
            self._openapi.paths = {}

    def _get_resolved_component(
        self,
        schema: parser.OA_RESOLVABLE,
        components: dict[str, parser.OA_RESOLVABLE],
    ):
        name = None

        # Example schema may use "$ref" for external file
        if isinstance(schema, dict) and "ref" in schema:
            name = schema.get("ref").split("/").pop()
        elif isinstance(schema, dict) and "$ref" in schema:
            name = schema.get("$ref").split("/").pop()

        if name is not None:
            return self._get_resolved_component(components.get(name), components)

        if name is None and not parser.TypeChecker.is_ref(schema):
            return schema

        if isinstance(schema, str):
            name = schema.split("/").pop()
        elif hasattr(schema, "model_extra") and "$ref" in schema.model_extra:
            name = schema.model_extra.get("$ref").split("/").pop()
        else:
            name = schema.ref.split("/").pop()

        return self._get_resolved_component(components.get(name), components)
