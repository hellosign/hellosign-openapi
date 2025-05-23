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
 * Contains information about the templates you and your team have created.
 */
export class TemplateResponse {
  /**
   * The id of the Template.
   */
  "templateId"?: string;
  /**
   * The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  "title"?: string;
  /**
   * The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  "message"?: string;
  /**
   * Time the template was last updated.
   */
  "updatedAt"?: number;
  /**
   * `true` if this template was created using an embedded flow, `false` if it was created on our website. Will be `null` when you are not the creator of the Template.
   */
  "isEmbedded"?: boolean | null;
  /**
   * `true` if you are the owner of this template, `false` if it\'s been shared with you by a team member.
   */
  "isCreator"?: boolean;
  /**
   * Indicates whether edit rights have been granted to you by the owner (always `true` if that\'s you).
   */
  "canEdit"?: boolean;
  /**
   * Indicates whether the template is locked. If `true`, then the template was created outside your quota and can only be used in `test_mode`. If `false`, then the template is within your quota and can be used to create signature requests.
   */
  "isLocked"?: boolean;
  /**
   * The metadata attached to the template.
   */
  "metadata"?: { [key: string]: any };
  /**
   * An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
   */
  "signerRoles"?: Array<TemplateResponseSignerRole>;
  /**
   * An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.
   */
  "ccRoles"?: Array<TemplateResponseCCRole>;
  /**
   * An array describing each document associated with this Template. Includes form field data for each document.
   */
  "documents"?: Array<TemplateResponseDocument>;
  /**
   * Deprecated. Use `custom_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.
   *
   * @deprecated
   */
  "customFields"?: Array<TemplateResponseDocumentCustomFieldBase> | null;
  /**
   * Deprecated. Use `form_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.
   *
   * @deprecated
   */
  "namedFormFields"?: Array<TemplateResponseDocumentFormFieldBase> | null;
  /**
   * An array of the Accounts that can use this Template.
   */
  "accounts"?: Array<TemplateResponseAccount>;
  /**
   * Signer attachments.
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
