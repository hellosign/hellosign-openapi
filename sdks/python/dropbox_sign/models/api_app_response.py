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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from dropbox_sign.models.api_app_response_o_auth import ApiAppResponseOAuth
from dropbox_sign.models.api_app_response_options import ApiAppResponseOptions
from dropbox_sign.models.api_app_response_owner_account import (
    ApiAppResponseOwnerAccount,
)
from dropbox_sign.models.api_app_response_white_labeling_options import (
    ApiAppResponseWhiteLabelingOptions,
)
from typing import Optional, Set
from typing_extensions import Self
from typing import Tuple, Union
import io
from pydantic import StrictBool


class ApiAppResponse(BaseModel):
    """
    Contains information about an API App.
    """  # noqa: E501

    callback_url: Optional[StrictStr] = Field(
        default=None, description="The app's callback URL (for events)"
    )
    client_id: Optional[StrictStr] = Field(
        default=None, description="The app's client id"
    )
    created_at: Optional[StrictInt] = Field(
        default=None, description="The time that the app was created"
    )
    domains: Optional[List[StrictStr]] = Field(
        default=None, description="The domain name(s) associated with the app"
    )
    name: Optional[StrictStr] = Field(default=None, description="The name of the app")
    is_approved: Optional[StrictBool] = Field(
        default=None, description="Boolean to indicate if the app has been approved"
    )
    oauth: Optional[ApiAppResponseOAuth] = None
    options: Optional[ApiAppResponseOptions] = None
    owner_account: Optional[ApiAppResponseOwnerAccount] = None
    white_labeling_options: Optional[ApiAppResponseWhiteLabelingOptions] = None
    __properties: ClassVar[List[str]] = [
        "callback_url",
        "client_id",
        "created_at",
        "domains",
        "name",
        "is_approved",
        "oauth",
        "options",
        "owner_account",
        "white_labeling_options",
    ]

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
        """Create an instance of ApiAppResponse from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of oauth
        if self.oauth:
            _dict["oauth"] = self.oauth.to_dict()
        # override the default output from pydantic by calling `to_dict()` of options
        if self.options:
            _dict["options"] = self.options.to_dict()
        # override the default output from pydantic by calling `to_dict()` of owner_account
        if self.owner_account:
            _dict["owner_account"] = self.owner_account.to_dict()
        # override the default output from pydantic by calling `to_dict()` of white_labeling_options
        if self.white_labeling_options:
            _dict["white_labeling_options"] = self.white_labeling_options.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ApiAppResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "callback_url": obj.get("callback_url"),
                "client_id": obj.get("client_id"),
                "created_at": obj.get("created_at"),
                "domains": obj.get("domains"),
                "name": obj.get("name"),
                "is_approved": obj.get("is_approved"),
                "oauth": (
                    ApiAppResponseOAuth.from_dict(obj["oauth"])
                    if obj.get("oauth") is not None
                    else None
                ),
                "options": (
                    ApiAppResponseOptions.from_dict(obj["options"])
                    if obj.get("options") is not None
                    else None
                ),
                "owner_account": (
                    ApiAppResponseOwnerAccount.from_dict(obj["owner_account"])
                    if obj.get("owner_account") is not None
                    else None
                ),
                "white_labeling_options": (
                    ApiAppResponseWhiteLabelingOptions.from_dict(
                        obj["white_labeling_options"]
                    )
                    if obj.get("white_labeling_options") is not None
                    else None
                ),
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
            "callback_url": "(str,)",
            "client_id": "(str,)",
            "created_at": "(int,)",
            "domains": "(List[str],)",
            "name": "(str,)",
            "is_approved": "(bool,)",
            "oauth": "(ApiAppResponseOAuth,)",
            "options": "(ApiAppResponseOptions,)",
            "owner_account": "(ApiAppResponseOwnerAccount,)",
            "white_labeling_options": "(ApiAppResponseWhiteLabelingOptions,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: str) -> bool:
        return property_name in [
            "domains",
        ]
