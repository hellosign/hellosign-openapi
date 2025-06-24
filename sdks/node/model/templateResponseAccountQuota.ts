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
 * _t__TemplateResponseAccountQuota::DESCRIPTION
 */
export class TemplateResponseAccountQuota {
  /**
   * _t__TemplateResponseAccountQuota::TEMPLATES_LEFT
   */
  "templatesLeft"?: number;
  /**
   * _t__TemplateResponseAccountQuota::API_SIGNATURE_REQUESTS_LEFT
   */
  "apiSignatureRequestsLeft"?: number;
  /**
   * _t__TemplateResponseAccountQuota::DOCUMENTS_LEFT
   */
  "documentsLeft"?: number;
  /**
   * _t__TemplateResponseAccountQuota::SMS_VERIFICATIONS_LEFT
   */
  "smsVerificationsLeft"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "templatesLeft",
      baseName: "templates_left",
      type: "number",
    },
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
      name: "smsVerificationsLeft",
      baseName: "sms_verifications_left",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseAccountQuota.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateResponseAccountQuota {
    return ObjectSerializer.deserialize(data, "TemplateResponseAccountQuota");
  }
}
