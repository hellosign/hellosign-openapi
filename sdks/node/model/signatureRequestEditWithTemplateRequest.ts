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

import { AttributeTypeMap, ObjectSerializer, RequestFile } from "./";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";

/**
 *
 */
export class SignatureRequestEditWithTemplateRequest {
  /**
   * Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  "templateIds": Array<string>;
  /**
   * Add Signers to your Templated-based Signature Request.
   */
  "signers": Array<SubSignatureRequestTemplateSigner>;
  /**
   * Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  "allowDecline"?: boolean = false;
  /**
   * Add CC email recipients. Required when a CC role exists for the Template.
   */
  "ccs"?: Array<SubCC>;
  /**
   * Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.
   */
  "clientId"?: string;
  /**
   * An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  "customFields"?: Array<SubCustomField>;
  /**
   * Use `files[]` to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "files"?: Array<RequestFile>;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "fileUrls"?: Array<string>;
  /**
   * Send with a value of `true` if you wish to enable [electronic identification (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify their identity with an eID provider to sign a document.<br> **NOTE:** eID is only available on the Premium API plan. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  "isEid"?: boolean = false;
  /**
   * The custom message in the email that will be sent to the signers.
   */
  "message"?: string;
  /**
   * Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer\'s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  "metadata"?: { [key: string]: any };
  "signingOptions"?: SubSigningOptions;
  /**
   * The URL you want signers redirected to after they successfully sign.
   */
  "signingRedirectUrl"?: string;
  /**
   * The subject in the email that will be sent to the signers.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templateIds",
      baseName: "template_ids",
      type: "Array<string>",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestTemplateSigner>",
    },
    {
      name: "allowDecline",
      baseName: "allow_decline",
      type: "boolean",
    },
    {
      name: "ccs",
      baseName: "ccs",
      type: "Array<SubCC>",
    },
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SubCustomField>",
    },
    {
      name: "files",
      baseName: "files",
      type: "Array<RequestFile>",
    },
    {
      name: "fileUrls",
      baseName: "file_urls",
      type: "Array<string>",
    },
    {
      name: "isEid",
      baseName: "is_eid",
      type: "boolean",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    {
      name: "signingOptions",
      baseName: "signing_options",
      type: "SubSigningOptions",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestEditWithTemplateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestEditWithTemplateRequest {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestEditWithTemplateRequest"
    );
  }
}
