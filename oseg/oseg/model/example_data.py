from typing import TypedDict, Union, NotRequired

"""
When passing example data to OaParser we expect the data to be grouped
by Operation ID and then the name of the example.
See EXAMPLE_DATA_BY_OPERATION:

{
  "[OPERATION_ID]": {
    "[EXAMPLE_NAME]": {
      "body": {
        "name": "My pet name"
      }
      "path": {
        "id": 12345
      },
      "query": {},
      "header": {},
      "cookie": {}
    }
  }
}

When passing example data to an Operation or Request the data should be
grouped only by name of the example. See EXAMPLE_DATA_BY_NAME:

{
  "[EXAMPLE_NAME]": {
    "body": {
      "name": "My pet name"
    }
    "path": {
      "id": 12345
    },
    "query": {},
    "header": {},
    "cookie": {}
  }
}

Body data can be a key:value object or an array of key:value objects:

{
  "[EXAMPLE_NAME]": {
    "body": [
      {
        "name": "My pet name"
      }
    ]
  }
}

"""

EXAMPLE_DATA_BODY = Union[dict[str, any], list[dict[str, any]]]


class ExampleDataParamDef(TypedDict):
    path: NotRequired[dict[str, any]]
    query: NotRequired[dict[str, any]]
    header: NotRequired[dict[str, any]]
    cookie: NotRequired[dict[str, any]]


class ExampleDataDef(ExampleDataParamDef):
    body: NotRequired[EXAMPLE_DATA_BODY]


class ExampleDataParams:
    def __init__(self, data: ExampleDataParamDef):
        path = data.get("path")
        query = data.get("query")
        header = data.get("header")
        cookie = data.get("cookie")

        self.path: dict[str, any] = path if isinstance(path, dict) else {}
        self.query: dict[str, any] = query if isinstance(query, dict) else {}
        self.header: dict[str, any] = header if isinstance(header, dict) else {}
        self.cookie: dict[str, any] = cookie if isinstance(cookie, dict) else {}
        self.has_data: bool = self._has_data()

    def _has_data(self) -> bool:
        return bool(
            len(self.path.keys())
            or len(self.query.keys())
            or len(self.header.keys())
            or len(self.cookie.keys())
        )


class ExampleData:
    def __init__(self, body: EXAMPLE_DATA_BODY, parameters: ExampleDataParams):
        self.body: EXAMPLE_DATA_BODY = body
        self.path: dict[str, any] = parameters.path
        self.query: dict[str, any] = parameters.query
        self.header: dict[str, any] = parameters.header
        self.cookie: dict[str, any] = parameters.cookie
        self.has_body_data: bool = self._has_body_data()
        self.has_parameter_data: bool = self._has_parameter_data()

    def _has_body_data(self) -> bool:
        if isinstance(self.body, list):
            return bool(len(self.body))

        if isinstance(self.body, dict):
            return bool(len(self.body.keys()))

        return self.body is not None

    def _has_parameter_data(self) -> bool:
        return bool(
            len(self.path.keys())
            or len(self.query.keys())
            or len(self.header.keys())
            or len(self.cookie.keys())
        )


EXAMPLE_DATA_BY_NAME = dict[str, ExampleDataDef]
EXAMPLE_DATA_BY_OPERATION = dict[str, EXAMPLE_DATA_BY_NAME]
