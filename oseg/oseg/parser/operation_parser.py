from __future__ import annotations
import openapi_pydantic as oa
from oseg import parser, model


class OperationParser:
    HTTP_METHODS = [
        "get",
        "post",
        "put",
        "patch",
        "delete",
        "head",
        "options",
        "trace",
    ]

    FORM_DATA_CONTENT_TYPES = [
        "application/x-www-form-urlencoded",
        "multipart/form-data",
    ]

    DEFAULT_API_NAME = "default"

    def __init__(
        self,
        oa_parser: parser.OaParser,
        example_data_parser: parser.ExampleDataParser,
    ):
        self._oa_parser: parser.OaParser = oa_parser
        self._example_data_parser: parser.ExampleDataParser = example_data_parser

    def setup_operations(
        self,
        operation_id: str | None,
        example_data: model.EXAMPLE_DATA_BY_OPERATION | None,
    ) -> dict[str, model.Operation]:
        example_data = example_data if example_data else {}

        if operation_id:
            operation_id = operation_id.lower()

        operations: dict[str, model.Operation] = {}

        for path, path_item in self._oa_parser.paths.items():
            for http_method in self.HTTP_METHODS:
                oa_operation: oa.Operation | None = getattr(path_item, http_method)

                if not oa_operation or (
                    operation_id and oa_operation.operationId.lower() != operation_id
                ):
                    continue

                custom_example_data = example_data.get(oa_operation.operationId, {})

                if not isinstance(custom_example_data, dict):
                    custom_example_data = {}

                request = self._get_request(oa_operation, custom_example_data)

                operation = model.Operation(
                    operation=oa_operation,
                    request=request,
                    response=self._get_response(oa_operation),
                    security=model.Security(self._oa_parser, oa_operation),
                    api_name=self._get_api_name(oa_operation),
                    http_method=http_method,
                )

                operations[oa_operation.operationId] = operation

        return operations

    def _get_request(
        self,
        operation: oa.Operation,
        custom_example_data: model.EXAMPLE_DATA_BY_NAME,
    ) -> model.Request | None:
        """Only want the first request, if any"""

        request = model.Request(
            oa_parser=self._oa_parser,
            operation=operation,
            example_data_parser=self._example_data_parser,
        )

        request.example_data = custom_example_data

        return request

    def _get_response(self, operation: oa.Operation) -> model.Response | None:
        """Only want the first response, if any"""

        if not operation.responses:
            return None

        for http_code, response in operation.responses.items():
            return model.Response(
                oa_parser=self._oa_parser,
                response=response,
                http_code=http_code,
            )

        return None

    def _get_api_name(self, operation: oa.Operation) -> str:
        if operation.tags and len(operation.tags):
            return operation.tags[0]

        return self.DEFAULT_API_NAME
