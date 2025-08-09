import openapi_pydantic as oa
from oseg import parser


class Response:
    def __init__(
        self,
        oa_parser: parser.OaParser,
        response: oa.Response,
        http_code: str,
    ):
        self._oa_parser: parser.OaParser = oa_parser
        self._response: oa.Response = response
        self.body: oa.Schema | None = None
        self.body_type: str | None = None
        self.http_code: str = http_code
        self.content_type: str = ""
        self._content: oa.MediaType | None = None
        self.is_binary: bool = False

        self._set_content()

    def _set_content(self) -> None:
        if not self._response.content:
            return

        for content_type, content in self._response.content.items():
            self._content = content
            self.content_type = content_type

            if content.media_type_schema:
                self.body = content.media_type_schema
                self.body_type = self._oa_parser.get_component_name(self.body)
                self.is_binary = parser.TypeChecker.is_file(self.body)

                if parser.TypeChecker.is_array(self.body):
                    self.body_type = self._oa_parser.get_component_name(self.body.items)

            return
