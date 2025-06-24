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
import { AccountResponseQuotas } from "./accountResponseQuotas";
import { AccountResponseUsage } from "./accountResponseUsage";

export class AccountResponse {
  /**
   * _t__Account::ACCOUNT_ID
   */
  "accountId"?: string;
  /**
   * _t__Account::EMAIL_ADDRESS
   */
  "emailAddress"?: string;
  /**
   * _t__Account::IS_LOCKED
   */
  "isLocked"?: boolean;
  /**
   * _t__Account::IS_PAID_HS
   */
  "isPaidHs"?: boolean;
  /**
   * _t__Account::IS_PAID_HF
   */
  "isPaidHf"?: boolean;
  "quotas"?: AccountResponseQuotas;
  /**
   * _t__Account::CALLBACK_URL
   */
  "callbackUrl"?: string | null;
  /**
   * _t__Account::ROLE_CODE
   */
  "roleCode"?: string | null;
  /**
   * _t__Account::TEAM_ID
   */
  "teamId"?: string | null;
  /**
   * _t__Account::LOCALE
   */
  "locale"?: string | null;
  "usage"?: AccountResponseUsage;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "isLocked",
      baseName: "is_locked",
      type: "boolean",
    },
    {
      name: "isPaidHs",
      baseName: "is_paid_hs",
      type: "boolean",
    },
    {
      name: "isPaidHf",
      baseName: "is_paid_hf",
      type: "boolean",
    },
    {
      name: "quotas",
      baseName: "quotas",
      type: "AccountResponseQuotas",
    },
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "roleCode",
      baseName: "role_code",
      type: "string",
    },
    {
      name: "teamId",
      baseName: "team_id",
      type: "string",
    },
    {
      name: "locale",
      baseName: "locale",
      type: "string",
    },
    {
      name: "usage",
      baseName: "usage",
      type: "AccountResponseUsage",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return AccountResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): AccountResponse {
    return ObjectSerializer.deserialize(data, "AccountResponse");
  }
}
