# coding: utf-8

"""
    Dropbox Sign API

    Dropbox Sign v3 API

    The version of the OpenAPI document: 3.0.0
    Contact: apisupport@hellosign.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from dropbox_sign.models.fax_line_response_fax_line import FaxLineResponseFaxLine
from dropbox_sign.models.warning_response import WarningResponse
from typing import Optional, Set, Tuple
from typing_extensions import Self
import io

class FaxLineResponse(BaseModel):
    """
    FaxLineResponse
    """ # noqa: E501
    fax_line: Optional[FaxLineResponseFaxLine] = None
    warnings: Optional[WarningResponse] = None
    __properties: ClassVar[List[str]] = ["fax_line", "warnings"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self, excluded_fields: Set[str] = None) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict(excluded_fields))

    def to_json_form_params(self, excluded_fields: Set[str] = None) -> List[Tuple[str, str]]:
        data: List[Tuple[str, str]] = []

        for key, value in self.to_dict(excluded_fields).items():
            data.append((key, json.dumps(value)))

        return data

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of FaxLineResponse from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self, excluded_fields: Set[str] = None) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of fax_line
        if self.fax_line:
            _dict['fax_line'] = self.fax_line.to_dict()
        # override the default output from pydantic by calling `to_dict()` of warnings
        if self.warnings:
            _dict['warnings'] = self.warnings.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of FaxLineResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "fax_line": FaxLineResponseFaxLine.from_dict(obj["fax_line"]) if obj.get("fax_line") is not None else None,
            "warnings": WarningResponse.from_dict(obj["warnings"]) if obj.get("warnings") is not None else None
        })
        return _obj

    @classmethod
    def init(cls, data: Optional[Dict[str, Any]]) -> Self:
        """
        Attempt to instantiate and hydrate a new instance of this class
        """
        return cls.from_dict(data)

    @classmethod
    def openapi_types(cls) -> Dict[StrictStr, StrictStr]:
        return {
            "fax_line": "(FaxLineResponseFaxLine,)",
            "warnings": "(WarningResponse,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: StrictStr) -> StrictBool:
        return property_name in [
        ]

    model_config = {
        "arbitrary_types_allowed": True
    }
