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

export class SubSignatureRequestTemplateSigner {
  /**
   * _t__Sub::SignatureRequestTemplateSigner::ROLE
   */
  "role": string;
  /**
   * _t__Sub::SignatureRequestTemplateSigner::NAME
   */
  "name": string;
  /**
   * _t__Sub::SignatureRequestTemplateSigner::EMAIL_ADDRESS
   */
  "emailAddress": string;
  /**
   * _t__Sub::SignatureRequestTemplateSigner::PIN
   */
  "pin"?: string;
  /**
   * _t__Sub::SignatureRequestTemplateSigner::SMS_PHONE_NUMBER
   */
  "smsPhoneNumber"?: string;
  /**
   * _t__Sub::SignatureRequestTemplateSigner::SIGNER_SMS_PHONE_NUMBER_TYPE
   */
  "smsPhoneNumberType"?: SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "role",
      baseName: "role",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "pin",
      baseName: "pin",
      type: "string",
    },
    {
      name: "smsPhoneNumber",
      baseName: "sms_phone_number",
      type: "string",
    },
    {
      name: "smsPhoneNumberType",
      baseName: "sms_phone_number_type",
      type: "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubSignatureRequestTemplateSigner.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubSignatureRequestTemplateSigner {
    return ObjectSerializer.deserialize(
      data,
      "SubSignatureRequestTemplateSigner"
    );
  }
}

export namespace SubSignatureRequestTemplateSigner {
  export enum SmsPhoneNumberTypeEnum {
    Authentication = "authentication",
    Delivery = "delivery",
  }
}
