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

/**
 * _t__SignatureRequestResponseSignatures::DESCRIPTION
 */
export class SignatureRequestResponseSignatures {
  /**
   * _t__SignatureRequestResponseSignatures::SIGNATURE_ID
   */
  "signatureId"?: string;
  /**
   * _t__SignatureRequestResponseSignatures::SIGNER_GROUP_GUID
   */
  "signerGroupGuid"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::SIGNER_EMAIL_ADDRESS
   */
  "signerEmailAddress"?: string;
  /**
   * _t__SignatureRequestResponseSignatures::SIGNER_NAME
   */
  "signerName"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::SIGNER_ROLE
   */
  "signerRole"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::ORDER
   */
  "order"?: number | null;
  /**
   * _t__SignatureRequestResponseSignatures::STATUS_CODE
   */
  "statusCode"?: string;
  /**
   * _t__SignatureRequestResponseSignatures::DECLINE_REASON
   */
  "declineReason"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::SIGNED_AT
   */
  "signedAt"?: number | null;
  /**
   * _t__SignatureRequestResponseSignatures::LAST_VIEWED_AT
   */
  "lastViewedAt"?: number | null;
  /**
   * _t__SignatureRequestResponseSignatures::LAST_REMINDED_AT
   */
  "lastRemindedAt"?: number | null;
  /**
   * _t__SignatureRequestResponseSignatures::HAS_PIN
   */
  "hasPin"?: boolean;
  /**
   * _t__SignatureRequestResponseSignatures::HAS_SMS_AUTH
   */
  "hasSmsAuth"?: boolean | null;
  /**
   * _t__SignatureRequestResponseSignatures::HAS_SMS_DELIVERY
   */
  "hasSmsDelivery"?: boolean | null;
  /**
   * _t__SignatureRequestResponseSignatures::SMS_PHONE_NUMBER
   */
  "smsPhoneNumber"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::REASSIGNED_BY
   */
  "reassignedBy"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::REASSIGNMENT_REASON
   */
  "reassignmentReason"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::REASSIGNED_FROM
   */
  "reassignedFrom"?: string | null;
  /**
   * _t__SignatureRequestResponseSignatures::ERROR
   */
  "error"?: string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "signatureId",
      baseName: "signature_id",
      type: "string",
    },
    {
      name: "signerGroupGuid",
      baseName: "signer_group_guid",
      type: "string",
    },
    {
      name: "signerEmailAddress",
      baseName: "signer_email_address",
      type: "string",
    },
    {
      name: "signerName",
      baseName: "signer_name",
      type: "string",
    },
    {
      name: "signerRole",
      baseName: "signer_role",
      type: "string",
    },
    {
      name: "order",
      baseName: "order",
      type: "number",
    },
    {
      name: "statusCode",
      baseName: "status_code",
      type: "string",
    },
    {
      name: "declineReason",
      baseName: "decline_reason",
      type: "string",
    },
    {
      name: "signedAt",
      baseName: "signed_at",
      type: "number",
    },
    {
      name: "lastViewedAt",
      baseName: "last_viewed_at",
      type: "number",
    },
    {
      name: "lastRemindedAt",
      baseName: "last_reminded_at",
      type: "number",
    },
    {
      name: "hasPin",
      baseName: "has_pin",
      type: "boolean",
    },
    {
      name: "hasSmsAuth",
      baseName: "has_sms_auth",
      type: "boolean",
    },
    {
      name: "hasSmsDelivery",
      baseName: "has_sms_delivery",
      type: "boolean",
    },
    {
      name: "smsPhoneNumber",
      baseName: "sms_phone_number",
      type: "string",
    },
    {
      name: "reassignedBy",
      baseName: "reassigned_by",
      type: "string",
    },
    {
      name: "reassignmentReason",
      baseName: "reassignment_reason",
      type: "string",
    },
    {
      name: "reassignedFrom",
      baseName: "reassigned_from",
      type: "string",
    },
    {
      name: "error",
      baseName: "error",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponseSignatures.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestResponseSignatures {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseSignatures"
    );
  }
}
