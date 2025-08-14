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
 * Subset of configured settings
 */
export class AccountResponseSettings {
  /**
   * Returns `true` if _Custom access codes_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  "signerAccessCodes"?: boolean;
  /**
   * Returns `true` if _Text message_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  "smsDelivery"?: boolean;
  /**
   * Returns `true` if _Signer authentication_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  "smsAuthentication"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "signerAccessCodes",
      baseName: "signer_access_codes",
      type: "boolean",
    },
    {
      name: "smsDelivery",
      baseName: "sms_delivery",
      type: "boolean",
    },
    {
      name: "smsAuthentication",
      baseName: "sms_authentication",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountResponseSettings.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): AccountResponseSettings {
    return ObjectSerializer.deserialize(data, "AccountResponseSettings");
  }
}
