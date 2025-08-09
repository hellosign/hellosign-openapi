from dataclasses import dataclass
from typing import Literal


@dataclass
class PrintableFreeForm:
    value: dict[str, any] | list[dict[str, any]] | None = None
    is_array: bool = False
    has_properties: bool = False


@dataclass
class PrintableObject:
    value: str | list[str] | None = None
    is_array: bool = False
    target_type: str | None = None


@dataclass
class PrintableScalar:
    value: str | list[str] | None = None
    is_array: bool = False
    is_enum: bool = False
    target_type: str | None = None


@dataclass
class PrintableSecurity:
    name: str
    key: str
    method: Literal["access_token", "api_key", "basic"]
    value: str = ""
    value_2: str = ""
    # is the first security scheme(s) for Operation
    is_primary: bool = False
