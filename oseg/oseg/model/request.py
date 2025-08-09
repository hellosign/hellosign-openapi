import openapi_pydantic as oa
from dataclasses import dataclass
from oseg import model, parser


@dataclass
class Request:
    def __init__(
        self,
        oa_parser: parser.OaParser,
        operation: oa.Operation,
        example_data_parser: parser.ExampleDataParser,
    ):
        self._oa_parser: parser.OaParser = oa_parser
        self._example_data_parser: parser.ExampleDataParser = example_data_parser
        self.body: oa.Schema | None = None
        self.body_type: str | None = None
        self.parameters: list[oa.Parameter] = (
            operation.parameters if operation.parameters else []
        )
        self.content: oa.MediaType | None = None
        self.content_type: str = ""
        self.has_formdata: bool = False
        self.is_required: bool = False

        # only parameter data
        if not operation.requestBody:
            self.content_type = "application/json"
        else:
            self.is_required = operation.requestBody.required
            self._set_content(operation.requestBody.content)

        self._example_data: dict[str, model.PropertyContainer] = (
            self._example_data_parser.from_oas_data(self, operation)
        )
        self._custom_example_data: dict[str, model.PropertyContainer] = {}

    @property
    def example_data(self) -> dict[str, model.PropertyContainer]:
        # default to returning only custom examples
        if len(self._custom_example_data):
            return self._custom_example_data

        # fallback to example data read from the OAS file
        return self._example_data

    @example_data.setter
    def example_data(self, data: model.EXAMPLE_DATA_BY_NAME | None):
        """Add custom data.

        If passing empty data then we delete previous custom data.
        """

        self._custom_example_data = self._example_data_parser.from_custom_data(
            request=self,
            example_data=data,
        )

    def _set_content(self, contents: dict[str, oa.MediaType]) -> None:
        for content_type, content in contents.items():
            self.content = content
            self.content_type = content_type
            self.has_formdata = (
                content_type in parser.OperationParser.FORM_DATA_CONTENT_TYPES
            )

            if content.media_type_schema:
                self.body = content.media_type_schema
                self.body_type = self._oa_parser.get_component_name(self.body)

                if parser.TypeChecker.is_array(self.body):
                    self.body_type = self._oa_parser.get_component_name(self.body.items)

            return
