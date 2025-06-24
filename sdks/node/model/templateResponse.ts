/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2023 dropbox.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { AttributeTypeMap, ObjectSerializer } from "./";
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { TemplateResponseAccount } from "./templateResponseAccount";
import { TemplateResponseCCRole } from "./templateResponseCCRole";
import { TemplateResponseDocument } from "./templateResponseDocument";
import { TemplateResponseDocumentCustomFieldBase } from "./templateResponseDocumentCustomFieldBase";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseSignerRole } from "./templateResponseSignerRole";

/**
 * _t__TemplateResponse::DESCRIPTION
 */
export class TemplateResponse {
  /**
   * _t__TemplateResponse::TEMPLATE_ID
   */
  "templateId"?: string;
  /**
   * _t__TemplateResponse::TITLE
   */
  "title"?: string;
  /**
   * _t__TemplateResponse::MESSAGE
   */
  "message"?: string;
  /**
   * _t__TemplateResponse::UPDATED_AT
   */
  "updatedAt"?: number;
  /**
   * _t__TemplateResponse::IS_EMBEDDED
   */
  "isEmbedded"?: boolean | null;
  /**
   * _t__TemplateResponse::IS_CREATOR
   */
  "isCreator"?: boolean;
  /**
   * _t__TemplateResponse::CAN_EDIT
   */
  "canEdit"?: boolean;
  /**
   * _t__TemplateResponse::IS_LOCKED
   */
  "isLocked"?: boolean;
  /**
   * _t__TemplateResponse::METADATA
   */
  "metadata"?: { [key: string]: any };
  /**
   * _t__TemplateResponse::SIGNER_ROLES
   */
  "signerRoles"?: Array<TemplateResponseSignerRole>;
  /**
   * _t__TemplateResponse::CC_ROLES
   */
  "ccRoles"?: Array<TemplateResponseCCRole>;
  /**
   * _t__TemplateResponse::DOCUMENTS
   */
  "documents"?: Array<TemplateResponseDocument>;
  /**
   * _t__TemplateResponseCustomField::DESCRIPTION
   *
   * @deprecated
   */
  "customFields"?: Array<TemplateResponseDocumentCustomFieldBase> | null;
  /**
   * _t__TemplateResponseNamedFormField::DESCRIPTION
   *
   * @deprecated
   */
  "namedFormFields"?: Array<TemplateResponseDocumentFormFieldBase> | null;
  /**
   * _t__TemplateResponse::ACCOUNTS
   */
  "accounts"?: Array<TemplateResponseAccount>;
  /**
   * _t__SignatureRequestResponseAttachment::DESCRIPTION
   */
  "attachments"?: Array<SignatureRequestResponseAttachment>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templateId",
      baseName: "template_id",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "updatedAt",
      baseName: "updated_at",
      type: "number",
    },
    {
      name: "isEmbedded",
      baseName: "is_embedded",
      type: "boolean",
    },
    {
      name: "isCreator",
      baseName: "is_creator",
      type: "boolean",
    },
    {
      name: "canEdit",
      baseName: "can_edit",
      type: "boolean",
    },
    {
      name: "isLocked",
      baseName: "is_locked",
      type: "boolean",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    {
      name: "signerRoles",
      baseName: "signer_roles",
      type: "Array<TemplateResponseSignerRole>",
    },
    {
      name: "ccRoles",
      baseName: "cc_roles",
      type: "Array<TemplateResponseCCRole>",
    },
    {
      name: "documents",
      baseName: "documents",
      type: "Array<TemplateResponseDocument>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<TemplateResponseDocumentCustomFieldBase>",
    },
    {
      name: "namedFormFields",
      baseName: "named_form_fields",
      type: "Array<TemplateResponseDocumentFormFieldBase>",
    },
    {
      name: "accounts",
      baseName: "accounts",
      type: "Array<TemplateResponseAccount>",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SignatureRequestResponseAttachment>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateResponse {
    return ObjectSerializer.deserialize(data, "TemplateResponse");
  }
}
