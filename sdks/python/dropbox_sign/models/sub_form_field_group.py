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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List
from typing import Optional, Set, Tuple
from typing_extensions import Self
import io

class SubFormFieldGroup(BaseModel):
    """
    SubFormFieldGroup
    """ # noqa: E501
    group_id: StrictStr = Field(description="ID of group. Use this to reference a specific group from the `group` value in `form_fields_per_document`.")
    group_label: StrictStr = Field(description="Name of the group")
    requirement: StrictStr = Field(description="Examples: `require_0-1` `require_1` `require_1-ormore`  - Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping). - Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping). - Radio groups require **at least** two fields per group.")
    __properties: ClassVar[List[str]] = ["group_id", "group_label", "requirement"]

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
        """Create an instance of SubFormFieldGroup from a JSON string"""
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
        """Create an instance of SubFormFieldGroup from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "group_id": obj.get("group_id"),
            "group_label": obj.get("group_label"),
            "requirement": obj.get("requirement")
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
            "group_id": "(str,)",
            "group_label": "(str,)",
            "requirement": "(str,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: StrictStr) -> StrictBool:
        return property_name in [
        ]

    model_config = {
        "arbitrary_types_allowed": True
    }
