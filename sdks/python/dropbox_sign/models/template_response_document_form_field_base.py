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

from importlib import import_module
from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing import Optional, Set, Tuple
from typing_extensions import Self
import io
from pydantic import StrictBool
from typing import Union

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from dropbox_sign.models.template_response_document_form_field_checkbox import TemplateResponseDocumentFormFieldCheckbox
    from dropbox_sign.models.template_response_document_form_field_date_signed import TemplateResponseDocumentFormFieldDateSigned
    from dropbox_sign.models.template_response_document_form_field_dropdown import TemplateResponseDocumentFormFieldDropdown
    from dropbox_sign.models.template_response_document_form_field_hyperlink import TemplateResponseDocumentFormFieldHyperlink
    from dropbox_sign.models.template_response_document_form_field_initials import TemplateResponseDocumentFormFieldInitials
    from dropbox_sign.models.template_response_document_form_field_radio import TemplateResponseDocumentFormFieldRadio
    from dropbox_sign.models.template_response_document_form_field_signature import TemplateResponseDocumentFormFieldSignature
    from dropbox_sign.models.template_response_document_form_field_text import TemplateResponseDocumentFormFieldText

class TemplateResponseDocumentFormFieldBase(BaseModel):
    """
    An array of Form Field objects containing the name and type of each named field.
    """ # noqa: E501
    type: StrictStr
    api_id: Optional[StrictStr] = Field(default=None, description="A unique id for the form field.")
    name: Optional[StrictStr] = Field(default=None, description="The name of the form field.")
    signer: Union[StrictStr, StrictInt] = Field(description="The signer of the Form Field.")
    x: Optional[StrictInt] = Field(default=None, description="The horizontal offset in pixels for this form field.")
    y: Optional[StrictInt] = Field(default=None, description="The vertical offset in pixels for this form field.")
    width: Optional[StrictInt] = Field(default=None, description="The width in pixels of this form field.")
    height: Optional[StrictInt] = Field(default=None, description="The height in pixels of this form field.")
    required: Optional[StrictBool] = Field(default=None, description="Boolean showing whether or not this field is required.")
    group: Optional[StrictStr] = Field(default=None, description="The name of the group this field is in. If this field is not a group, this defaults to `null` except for Radio fields.")
    __properties: ClassVar[List[str]] = ["type", "api_id", "name", "signer", "x", "y", "width", "height", "required", "group"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
        arbitrary_types_allowed=True,
    )


    # JSON field name that stores the object type
    __discriminator_property_name: ClassVar[str] = 'type'

    # discriminator mappings
    __discriminator_value_class_map: ClassVar[Dict[str, str]] = {
        'checkbox': 'TemplateResponseDocumentFormFieldCheckbox','date_signed': 'TemplateResponseDocumentFormFieldDateSigned','dropdown': 'TemplateResponseDocumentFormFieldDropdown','hyperlink': 'TemplateResponseDocumentFormFieldHyperlink','initials': 'TemplateResponseDocumentFormFieldInitials','radio': 'TemplateResponseDocumentFormFieldRadio','signature': 'TemplateResponseDocumentFormFieldSignature','text': 'TemplateResponseDocumentFormFieldText'
    }

    @classmethod
    def get_discriminator_value(cls, obj: Dict[str, Any]) -> Optional[str]:
        """Returns the discriminator value (object type) of the data"""
        discriminator_value = obj[cls.__discriminator_property_name]
        if discriminator_value:
            return cls.__discriminator_value_class_map.get(discriminator_value)
        else:
            return None

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    def to_json_form_params(self, excluded_fields: Set[str] = None) -> List[Tuple[str, str]]:
        data: List[Tuple[str, str]] = []

        for key, value in self.to_dict(excluded_fields).items():
            if isinstance(value, (int, str, bool)):
                data.append((key, value))
            else:
                data.append((key, json.dumps(value, ensure_ascii=False)))

        return data

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Union[TemplateResponseDocumentFormFieldCheckbox, TemplateResponseDocumentFormFieldDateSigned, TemplateResponseDocumentFormFieldDropdown, TemplateResponseDocumentFormFieldHyperlink, TemplateResponseDocumentFormFieldInitials, TemplateResponseDocumentFormFieldRadio, TemplateResponseDocumentFormFieldSignature, TemplateResponseDocumentFormFieldText]]:
        """Create an instance of TemplateResponseDocumentFormFieldBase from a JSON string"""
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
    def from_dict(cls, obj: Dict[str, Any]) -> Optional[Union[TemplateResponseDocumentFormFieldCheckbox, TemplateResponseDocumentFormFieldDateSigned, TemplateResponseDocumentFormFieldDropdown, TemplateResponseDocumentFormFieldHyperlink, TemplateResponseDocumentFormFieldInitials, TemplateResponseDocumentFormFieldRadio, TemplateResponseDocumentFormFieldSignature, TemplateResponseDocumentFormFieldText]]:
        """Create an instance of TemplateResponseDocumentFormFieldBase from a dict"""
        # look up the object type based on discriminator mapping
        object_type = cls.get_discriminator_value(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldCheckbox':
            return import_module("dropbox_sign.models.template_response_document_form_field_checkbox").TemplateResponseDocumentFormFieldCheckbox.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldDateSigned':
            return import_module("dropbox_sign.models.template_response_document_form_field_date_signed").TemplateResponseDocumentFormFieldDateSigned.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldDropdown':
            return import_module("dropbox_sign.models.template_response_document_form_field_dropdown").TemplateResponseDocumentFormFieldDropdown.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldHyperlink':
            return import_module("dropbox_sign.models.template_response_document_form_field_hyperlink").TemplateResponseDocumentFormFieldHyperlink.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldInitials':
            return import_module("dropbox_sign.models.template_response_document_form_field_initials").TemplateResponseDocumentFormFieldInitials.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldRadio':
            return import_module("dropbox_sign.models.template_response_document_form_field_radio").TemplateResponseDocumentFormFieldRadio.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldSignature':
            return import_module("dropbox_sign.models.template_response_document_form_field_signature").TemplateResponseDocumentFormFieldSignature.from_dict(obj)
        if object_type ==  'TemplateResponseDocumentFormFieldText':
            return import_module("dropbox_sign.models.template_response_document_form_field_text").TemplateResponseDocumentFormFieldText.from_dict(obj)

        raise ValueError("TemplateResponseDocumentFormFieldBase failed to lookup discriminator value from " +
                            json.dumps(obj) + ". Discriminator property name: " + cls.__discriminator_property_name +
                            ", mapping: " + json.dumps(cls.__discriminator_value_class_map))


    @classmethod
    def openapi_types(cls) -> Dict[str, str]:
        return {
            "type": "(str,)",
            "api_id": "(str,)",
            "name": "(str,)",
            "signer": "(int, str,)",
            "x": "(int,)",
            "y": "(int,)",
            "width": "(int,)",
            "height": "(int,)",
            "required": "(bool,)",
            "group": "(str,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: str) -> bool:
        return property_name in [
        ]
