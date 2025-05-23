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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictBytes, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated
from dropbox_sign.models.sub_cc import SubCC
from dropbox_sign.models.sub_custom_field import SubCustomField
from dropbox_sign.models.sub_editor_options import SubEditorOptions
from dropbox_sign.models.sub_field_options import SubFieldOptions
from dropbox_sign.models.sub_signing_options import SubSigningOptions
from dropbox_sign.models.sub_unclaimed_draft_template_signer import (
    SubUnclaimedDraftTemplateSigner,
)
from typing import Optional, Set
from typing_extensions import Self
from typing import Tuple, Union
import io
from pydantic import StrictBool


class UnclaimedDraftCreateEmbeddedWithTemplateRequest(BaseModel):
    """
    UnclaimedDraftCreateEmbeddedWithTemplateRequest
    """  # noqa: E501

    client_id: StrictStr = Field(
        description="Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app."
    )
    requester_email_address: StrictStr = Field(
        description="The email address of the user that should be designated as the requester of this draft."
    )
    template_ids: List[StrictStr] = Field(
        description="Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used."
    )
    allow_decline: Optional[StrictBool] = Field(
        default=False,
        description="Allows signers to decline to sign a document if `true`. Defaults to `false`.",
    )
    allow_reassign: Optional[StrictBool] = Field(
        default=False,
        description="Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.  **NOTE:** Only available for Premium plan and higher.",
    )
    ccs: Optional[List[SubCC]] = Field(
        default=None,
        description="Add CC email recipients. Required when a CC role exists for the Template.",
    )
    custom_fields: Optional[List[SubCustomField]] = Field(
        default=None,
        description="An array defining values and options for custom fields. Required when a custom field exists in the Template.",
    )
    editor_options: Optional[SubEditorOptions] = None
    field_options: Optional[SubFieldOptions] = None
    files: Optional[
        List[Union[StrictBytes, StrictStr, io.IOBase, Tuple[StrictStr, StrictBytes, io.IOBase]]]
    ] = Field(
        default=None,
        description="Use `files[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.  **files** or **file_urls[]** is required, but not both.",
    )
    file_urls: Optional[List[StrictStr]] = Field(
        default=None,
        description="Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.  **files** or **file_urls[]** is required, but not both.",
    )
    force_signer_roles: Optional[StrictBool] = Field(
        default=False,
        description="Provide users the ability to review/edit the template signer roles.",
    )
    force_subject_message: Optional[StrictBool] = Field(
        default=False,
        description="Provide users the ability to review/edit the template subject and message.",
    )
    hold_request: Optional[StrictBool] = Field(
        default=False,
        description="The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.",
    )
    is_for_embedded_signing: Optional[StrictBool] = Field(
        default=False,
        description="The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.",
    )
    message: Optional[Annotated[str, Field(strict=True, max_length=5000)]] = Field(
        default=None,
        description="The custom message in the email that will be sent to the signers.",
    )
    metadata: Optional[Dict[str, Any]] = Field(
        default=None,
        description="Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.",
    )
    preview_only: Optional[StrictBool] = Field(
        default=False,
        description="This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).  - `preview_only=true`: Allows requesters to enable the preview only experience. - `preview_only=false`: Allows requesters to disable the preview only experience.  **NOTE:** This parameter overwrites `show_preview=1` (if set).",
    )
    requesting_redirect_url: Optional[StrictStr] = Field(
        default=None,
        description="The URL you want signers redirected to after they successfully request a signature.",
    )
    show_preview: Optional[StrictBool] = Field(
        default=False,
        description="This allows the requester to enable the editor/preview experience.  - `show_preview=true`: Allows requesters to enable the editor/preview experience. - `show_preview=false`: Allows requesters to disable the editor/preview experience.",
    )
    show_progress_stepper: Optional[StrictBool] = Field(
        default=True,
        description="When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.",
    )
    signers: Optional[List[SubUnclaimedDraftTemplateSigner]] = Field(
        default=None,
        description="Add Signers to your Templated-based Signature Request.",
    )
    signing_options: Optional[SubSigningOptions] = None
    signing_redirect_url: Optional[StrictStr] = Field(
        default=None,
        description="The URL you want signers redirected to after they successfully sign.",
    )
    skip_me_now: Optional[StrictBool] = Field(
        default=False,
        description='Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.',
    )
    subject: Optional[Annotated[str, Field(strict=True, max_length=255)]] = Field(
        default=None,
        description="The subject in the email that will be sent to the signers.",
    )
    test_mode: Optional[StrictBool] = Field(
        default=False,
        description="Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.",
    )
    title: Optional[Annotated[str, Field(strict=True, max_length=255)]] = Field(
        default=None,
        description="The title you want to assign to the SignatureRequest.",
    )
    populate_auto_fill_fields: Optional[StrictBool] = Field(
        default=False,
        description="Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.  **NOTE:** Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.",
    )
    allow_ccs: Optional[StrictBool] = Field(
        default=False,
        description="This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.",
    )
    __properties: ClassVar[List[str]] = [
        "client_id",
        "requester_email_address",
        "template_ids",
        "allow_decline",
        "allow_reassign",
        "ccs",
        "custom_fields",
        "editor_options",
        "field_options",
        "files",
        "file_urls",
        "force_signer_roles",
        "force_subject_message",
        "hold_request",
        "is_for_embedded_signing",
        "message",
        "metadata",
        "preview_only",
        "requesting_redirect_url",
        "show_preview",
        "show_progress_stepper",
        "signers",
        "signing_options",
        "signing_redirect_url",
        "skip_me_now",
        "subject",
        "test_mode",
        "title",
        "populate_auto_fill_fields",
        "allow_ccs",
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
        """Create an instance of UnclaimedDraftCreateEmbeddedWithTemplateRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in ccs (list)
        _items = []
        if self.ccs:
            for _item_ccs in self.ccs:
                if _item_ccs:
                    _items.append(_item_ccs.to_dict())
            _dict["ccs"] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in custom_fields (list)
        _items = []
        if self.custom_fields:
            for _item_custom_fields in self.custom_fields:
                if _item_custom_fields:
                    _items.append(_item_custom_fields.to_dict())
            _dict["custom_fields"] = _items
        # override the default output from pydantic by calling `to_dict()` of editor_options
        if self.editor_options:
            _dict["editor_options"] = self.editor_options.to_dict()
        # override the default output from pydantic by calling `to_dict()` of field_options
        if self.field_options:
            _dict["field_options"] = self.field_options.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in signers (list)
        _items = []
        if self.signers:
            for _item_signers in self.signers:
                if _item_signers:
                    _items.append(_item_signers.to_dict())
            _dict["signers"] = _items
        # override the default output from pydantic by calling `to_dict()` of signing_options
        if self.signing_options:
            _dict["signing_options"] = self.signing_options.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of UnclaimedDraftCreateEmbeddedWithTemplateRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "client_id": obj.get("client_id"),
                "requester_email_address": obj.get("requester_email_address"),
                "template_ids": obj.get("template_ids"),
                "allow_decline": (
                    obj.get("allow_decline")
                    if obj.get("allow_decline") is not None
                    else False
                ),
                "allow_reassign": (
                    obj.get("allow_reassign")
                    if obj.get("allow_reassign") is not None
                    else False
                ),
                "ccs": (
                    [SubCC.from_dict(_item) for _item in obj["ccs"]]
                    if obj.get("ccs") is not None
                    else None
                ),
                "custom_fields": (
                    [SubCustomField.from_dict(_item) for _item in obj["custom_fields"]]
                    if obj.get("custom_fields") is not None
                    else None
                ),
                "editor_options": (
                    SubEditorOptions.from_dict(obj["editor_options"])
                    if obj.get("editor_options") is not None
                    else None
                ),
                "field_options": (
                    SubFieldOptions.from_dict(obj["field_options"])
                    if obj.get("field_options") is not None
                    else None
                ),
                "files": obj.get("files"),
                "file_urls": obj.get("file_urls"),
                "force_signer_roles": (
                    obj.get("force_signer_roles")
                    if obj.get("force_signer_roles") is not None
                    else False
                ),
                "force_subject_message": (
                    obj.get("force_subject_message")
                    if obj.get("force_subject_message") is not None
                    else False
                ),
                "hold_request": (
                    obj.get("hold_request")
                    if obj.get("hold_request") is not None
                    else False
                ),
                "is_for_embedded_signing": (
                    obj.get("is_for_embedded_signing")
                    if obj.get("is_for_embedded_signing") is not None
                    else False
                ),
                "message": obj.get("message"),
                "metadata": obj.get("metadata"),
                "preview_only": (
                    obj.get("preview_only")
                    if obj.get("preview_only") is not None
                    else False
                ),
                "requesting_redirect_url": obj.get("requesting_redirect_url"),
                "show_preview": (
                    obj.get("show_preview")
                    if obj.get("show_preview") is not None
                    else False
                ),
                "show_progress_stepper": (
                    obj.get("show_progress_stepper")
                    if obj.get("show_progress_stepper") is not None
                    else True
                ),
                "signers": (
                    [
                        SubUnclaimedDraftTemplateSigner.from_dict(_item)
                        for _item in obj["signers"]
                    ]
                    if obj.get("signers") is not None
                    else None
                ),
                "signing_options": (
                    SubSigningOptions.from_dict(obj["signing_options"])
                    if obj.get("signing_options") is not None
                    else None
                ),
                "signing_redirect_url": obj.get("signing_redirect_url"),
                "skip_me_now": (
                    obj.get("skip_me_now")
                    if obj.get("skip_me_now") is not None
                    else False
                ),
                "subject": obj.get("subject"),
                "test_mode": (
                    obj.get("test_mode") if obj.get("test_mode") is not None else False
                ),
                "title": obj.get("title"),
                "populate_auto_fill_fields": (
                    obj.get("populate_auto_fill_fields")
                    if obj.get("populate_auto_fill_fields") is not None
                    else False
                ),
                "allow_ccs": (
                    obj.get("allow_ccs") if obj.get("allow_ccs") is not None else False
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
            "client_id": "(str,)",
            "requester_email_address": "(str,)",
            "template_ids": "(List[str],)",
            "allow_decline": "(bool,)",
            "allow_reassign": "(bool,)",
            "ccs": "(List[SubCC],)",
            "custom_fields": "(List[SubCustomField],)",
            "editor_options": "(SubEditorOptions,)",
            "field_options": "(SubFieldOptions,)",
            "files": "(List[io.IOBase],)",
            "file_urls": "(List[str],)",
            "force_signer_roles": "(bool,)",
            "force_subject_message": "(bool,)",
            "hold_request": "(bool,)",
            "is_for_embedded_signing": "(bool,)",
            "message": "(str,)",
            "metadata": "(Dict[str, object],)",
            "preview_only": "(bool,)",
            "requesting_redirect_url": "(str,)",
            "show_preview": "(bool,)",
            "show_progress_stepper": "(bool,)",
            "signers": "(List[SubUnclaimedDraftTemplateSigner],)",
            "signing_options": "(SubSigningOptions,)",
            "signing_redirect_url": "(str,)",
            "skip_me_now": "(bool,)",
            "subject": "(str,)",
            "test_mode": "(bool,)",
            "title": "(str,)",
            "populate_auto_fill_fields": "(bool,)",
            "allow_ccs": "(bool,)",
        }

    @classmethod
    def openapi_type_is_array(cls, property_name: str) -> bool:
        return property_name in [
            "template_ids",
            "ccs",
            "custom_fields",
            "files",
            "file_urls",
            "signers",
        ]
