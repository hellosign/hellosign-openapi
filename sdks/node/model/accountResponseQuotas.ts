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
 * Details concerning remaining monthly quotas.
 */
export class AccountResponseQuotas {
  /**
   * API signature requests remaining.
   */
  "apiSignatureRequestsLeft"?: number | null;
  /**
   * Signature requests remaining.
   */
  "documentsLeft"?: number | null;
  /**
   * Total API templates allowed.
   */
  "templatesTotal"?: number | null;
  /**
   * API templates remaining.
   */
  "templatesLeft"?: number | null;
  /**
   * SMS verifications remaining.
   */
  "smsVerificationsLeft"?: number | null;
  /**
   * Number of fax pages left
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
