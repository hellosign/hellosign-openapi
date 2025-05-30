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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self
from typing import Tuple, Union
import io
from pydantic import StrictBool


class FaxResponseTransmission(BaseModel):
    """
    FaxResponseTransmission
    """  # noqa: E501

    recipient: StrictStr = Field(description="Fax Transmission Recipient")
    status_code: StrictStr = Field(description="Fax Transmission Status Code")
    sent_at: Optional[StrictInt] = Field(
        default=None, description="Fax Transmission Sent Timestamp"
    )
    __properties: ClassVar[List[str]] = ["recipient", "status_code", "sent_at"]

    @field_validator("status_code")
    def status_code_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(
            [
                "success",
                "transmitting",
                "error_could_not_fax",
                "error_unknown",
                "error_busy",
                "error_no_answer",
                "error_disconnected",
                "error_bad_destination",
            ]
        ):
            raise ValueError(
                "must be one of enum values ('success', 'transmitting', 'error_could_not_fax', 'error_unknown', 'error_busy', 'error_no_answer', 'error_disconnected', 'error_bad_destination')"
            )
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
        arbitrary_types_allowed=True,
    )

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    def to_json_form_params(
        self, excluded_fields: Set[str] = None
    ) -> List[Tuple[str, str]]:
        data: List[Tuple[str, str]] = []

        for key, value in self.to_dict(excluded_fields).items():
            if isinstance(value, (int, str, bool)):
                data.append((key, value))
            else:
                data.append((key, json.dumps(value, ensure_ascii=False)))

        return data

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of FaxResponseTransmission from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of FaxResponseTransmission from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "recipient": obj.get("recipient"),
                "status_code": obj.get("status_code"),
                "sent_at": obj.get("sent_at"),
            }
        )
        return _obj

    @classmethod
    def init(cls, data: Any) -> Self:
        """
        Attempt to instantiate and hydrate a new instance of this class
        """
        if isinstance(data, str):
            data = json.loads(data)

        return cls.from_dict(data)

    @classmethod
    def openapi_types(cls) -> Dict[str, str]:
        return {
            "recipient": "(str,)",
            "status_code": "(str,)",
            "sent_at": "(int,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: str) -> bool:
        return property_name in []
