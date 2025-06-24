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
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
import { SignatureRequestResponseSignatures } from "./signatureRequestResponseSignatures";

/**
 * _t__SignatureRequestResponse::DESCRIPTION
 */
export class SignatureRequestResponse {
  /**
   * _t__SignatureRequestResponse::TEST_MODE
   */
  "testMode"?: boolean = false;
  /**
   * _t__SignatureRequestResponse::SIGNATURE_REQUEST_ID
   */
  "signatureRequestId"?: string;
  /**
   * _t__SignatureRequestResponse::REQUESTER_EMAIL_ADDRESS
   */
  "requesterEmailAddress"?: string | null;
  /**
   * _t__SignatureRequestResponse::TITLE
   */
  "title"?: string;
  /**
   * _t__SignatureRequestResponse::ORIGINAL_TITLE
   */
  "originalTitle"?: string;
  /**
   * _t__SignatureRequestResponse::SUBJECT
   */
  "subject"?: string | null;
  /**
   * _t__SignatureRequestResponse::MESSAGE
   */
  "message"?: string | null;
  /**
   * _t__SignatureRequestResponse::METADATA
   */
  "metadata"?: { [key: string]: any };
  /**
   * _t__SignatureRequestResponse::CREATED_AT
   */
  "createdAt"?: number;
  /**
   * _t__SignatureRequestResponse::EXPIRES_AT
   */
  "expiresAt"?: number | null;
  /**
   * _t__SignatureRequestResponse::IS_COMPLETE
   */
  "isComplete"?: boolean;
  /**
   * _t__SignatureRequestResponse::IS_DECLINED
   */
  "isDeclined"?: boolean;
  /**
   * _t__SignatureRequestResponse::HAS_ERROR
   */
  "hasError"?: boolean;
  /**
   * _t__SignatureRequestResponse::FILES_URL
   */
  "filesUrl"?: string;
  /**
   * _t__SignatureRequestResponse::SIGNING_URL
   */
  "signingUrl"?: string | null;
  /**
   * _t__SignatureRequestResponse::DETAILS_URL
   */
  "detailsUrl"?: string;
  /**
   * _t__SignatureRequestResponse::CC_EMAIL_ADDRESSES
   */
  "ccEmailAddresses"?: Array<string>;
  /**
   * _t__SignatureRequestResponse::SIGNING_REDIRECT_URL
   */
  "signingRedirectUrl"?: string | null;
  /**
   * _t__SignatureRequestResponse::FINAL_COPY_URI
   */
  "finalCopyUri"?: string | null;
  /**
   * _t__SignatureRequestResponse::TEMPLATE_IDS
   */
  "templateIds"?: Array<string> | null;
  /**
   * _t__SignatureRequestResponseCustomField::DESCRIPTION
   */
  "customFields"?: Array<SignatureRequestResponseCustomFieldBase> | null;
  /**
   * _t__SignatureRequestResponseAttachment::DESCRIPTION
   */
  "attachments"?: Array<SignatureRequestResponseAttachment> | null;
  /**
   * _t__SignatureRequestResponseData::DESCRIPTION
   */
  "responseData"?: Array<SignatureRequestResponseDataBase> | null;
  /**
   * _t__SignatureRequestResponseSignatures::DESCRIPTION
   */
  "signatures"?: Array<SignatureRequestResponseSignatures>;
  /**
   * _t__SignatureRequestResponse::BULK_SEND_JOB_ID
   */
  "bulkSendJobId"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "signatureRequestId",
      baseName: "signature_request_id",
      type: "string",
    },
    {
      name: "requesterEmailAddress",
      baseName: "requester_email_address",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "originalTitle",
      baseName: "original_title",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
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
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
    {
      name: "isComplete",
      baseName: "is_complete",
      type: "boolean",
    },
    {
      name: "isDeclined",
      baseName: "is_declined",
      type: "boolean",
    },
    {
      name: "hasError",
      baseName: "has_error",
      type: "boolean",
    },
    {
      name: "filesUrl",
      baseName: "files_url",
      type: "string",
    },
    {
      name: "signingUrl",
      baseName: "signing_url",
      type: "string",
    },
    {
      name: "detailsUrl",
      baseName: "details_url",
      type: "string",
    },
    {
      name: "ccEmailAddresses",
      baseName: "cc_email_addresses",
      type: "Array<string>",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "finalCopyUri",
      baseName: "final_copy_uri",
      type: "string",
    },
    {
      name: "templateIds",
      baseName: "template_ids",
      type: "Array<string>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<SignatureRequestResponseCustomFieldBase>",
    },
    {
      name: "attachments",
      baseName: "attachments",
      type: "Array<SignatureRequestResponseAttachment>",
    },
    {
      name: "responseData",
      baseName: "response_data",
      type: "Array<SignatureRequestResponseDataBase>",
    },
    {
      name: "signatures",
      baseName: "signatures",
      type: "Array<SignatureRequestResponseSignatures>",
    },
    {
      name: "bulkSendJobId",
      baseName: "bulk_send_job_id",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestResponse {
    return ObjectSerializer.deserialize(data, "SignatureRequestResponse");
  }
}
