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
 * _t__Sub::OAuth::DESCRIPTION
 */
export class SubOAuth {
  /**
   * _t__Sub::OAuth::CALLBACK_URL
   */
  "callbackUrl"?: string;
  /**
   * _t__Sub::OAuth::SCOPES
   */
  "scopes"?: Array<SubOAuth.ScopesEnum>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "callbackUrl",
      baseName: "callback_url",
      type: "string",
    },
    {
      name: "scopes",
      baseName: "scopes",
      type: "Array<SubOAuth.ScopesEnum>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubOAuth.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubOAuth {
    return ObjectSerializer.deserialize(data, "SubOAuth");
  }
}

export namespace SubOAuth {
  export enum ScopesEnum {
    RequestSignature = "request_signature",
    BasicAccountInfo = "basic_account_info",
    AccountAccess = "account_access",
    SignatureRequestAccess = "signature_request_access",
    TemplateAccess = "template_access",
    TeamAccess = "team_access",
    ApiAppAccess = "api_app_access",
    Empty = "",
  }
}
