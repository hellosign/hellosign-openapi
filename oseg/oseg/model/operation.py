import openapi_pydantic as oa
from oseg import model


class Operation:
    CODEGEN_REQUEST_BODY_NAME = "x-codegen-request-body-name"

    def __init__(
        self,
        operation: oa.Operation,
        request: model.Request,
        response: model.Response | None,
        security: model.Security | None,
        api_name: str,
        http_method: str,
    ):
        self._operation: oa.Operation = operation
        self.request: model.Request = request
        self.response: model.Response | None = response
        self.security: model.Security | None = security
        self.api_name: str = api_name
        self.http_method: str = http_method
        self.operation_id: str = operation.operationId
        self.extensions: dict[str, any] = {}

        for k, v in operation.model_extra.items():
            if k.startswith("x-"):
                self.extensions[k] = v

        self.request.operation = self

    def request_body_name(self) -> str | None:
        return (
            self.extensions[self.CODEGEN_REQUEST_BODY_NAME]
            if self.CODEGEN_REQUEST_BODY_NAME in self.extensions
            else None
        )
