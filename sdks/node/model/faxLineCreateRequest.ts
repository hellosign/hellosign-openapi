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

export class FaxLineCreateRequest {
  /**
   * Area code of the new Fax Line
   */
  "areaCode": number;
  /**
   * Country of the area code
   */
  "country": FaxLineCreateRequest.CountryEnum;
  /**
   * City of the area code
   */
  "city"?: string;
  /**
   * Account ID of the account that will be assigned this new Fax Line
   */
  "accountId"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "areaCode",
      baseName: "area_code",
      type: "number",
    },
    {
      name: "country",
      baseName: "country",
      type: "FaxLineCreateRequest.CountryEnum",
    },
    {
      name: "city",
      baseName: "city",
      type: "string",
    },
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return FaxLineCreateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): FaxLineCreateRequest {
    return ObjectSerializer.deserialize(data, "FaxLineCreateRequest");
  }
}

export namespace FaxLineCreateRequest {
  export enum CountryEnum {
    Ca = "CA",
    Us = "US",
    Uk = "UK",
  }
}
