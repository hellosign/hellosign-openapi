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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from dropbox_sign.models.team_parent_response import TeamParentResponse
from typing import Optional, Set, Tuple
from typing_extensions import Self
import io

class TeamInfoResponse(BaseModel):
    """
    TeamInfoResponse
    """ # noqa: E501
    team_id: Optional[StrictStr] = Field(default=None, description="The id of a team")
    team_parent: Optional[TeamParentResponse] = None
    name: Optional[StrictStr] = Field(default=None, description="The name of a team")
    num_members: Optional[StrictInt] = Field(default=None, description="Number of members within a team")
    num_sub_teams: Optional[StrictInt] = Field(default=None, description="Number of sub teams within a team")
    __properties: ClassVar[List[str]] = ["team_id", "team_parent", "name", "num_members", "num_sub_teams"]

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
        """Create an instance of TeamInfoResponse from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of team_parent
        if self.team_parent:
            _dict['team_parent'] = self.team_parent.to_dict()
        # set to None if team_parent (nullable) is None
        # and model_fields_set contains the field
        if self.team_parent is None and "team_parent" in self.model_fields_set:
            _dict['team_parent'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TeamInfoResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "team_id": obj.get("team_id"),
            "team_parent": TeamParentResponse.from_dict(obj["team_parent"]) if obj.get("team_parent") is not None else None,
            "name": obj.get("name"),
            "num_members": obj.get("num_members"),
            "num_sub_teams": obj.get("num_sub_teams")
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
            "team_id": "(str,)",
            "team_parent": "(TeamParentResponse,)",
            "name": "(str,)",
            "num_members": "(int,)",
            "num_sub_teams": "(int,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: StrictStr) -> StrictBool:
        return property_name in [
        ]

    model_config = {
        "arbitrary_types_allowed": True
    }
