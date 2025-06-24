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
 * _t__Account::QUOTA
 */
export class AccountResponseQuotas {
  /**
   * _t__AccountQuota::API_SIGNATURE_REQUESTS_LEFT
   */
  "apiSignatureRequestsLeft"?: number | null;
  /**
   * _t__AccountQuota::DOCUMENTS_LEFT
   */
  "documentsLeft"?: number | null;
  /**
   * _t__AccountQuota::TEMPLATES_TOTAL
   */
  "templatesTotal"?: number | null;
  /**
   * _t__AccountQuota::TEMPLATES_LEFT
   */
  "templatesLeft"?: number | null;
  /**
   * _t__AccountQuota::SMS_VERIFICATIONS_LEFT
   */
  "smsVerificationsLeft"?: number | null;
  /**
   * _t__AccountQuota::NUM_FAX_PAGES_LEFT
   */
  "numFaxPagesLeft"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "apiSignatureRequestsLeft",
      baseName: "api_signature_requests_left",
      type: "number",
    },
    {
      name: "documentsLeft",
      baseName: "documents_left",
      type: "number",
    },
    {
      name: "templatesTotal",
      baseName: "templates_total",
      type: "number",
    },
    {
      name: "templatesLeft",
      baseName: "templates_left",
      type: "number",
    },
    {
      name: "smsVerificationsLeft",
      baseName: "sms_verifications_left",
      type: "number",
    },
    {
      name: "numFaxPagesLeft",
      baseName: "num_fax_pages_left",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountResponseQuotas.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): AccountResponseQuotas {
    return ObjectSerializer.deserialize(data, "AccountResponseQuotas");
  }
}
