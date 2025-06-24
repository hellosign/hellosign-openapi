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
 * _t__Sub::SigningOptions::DESCRIPTION
 */
export class SubSigningOptions {
  /**
   * _t__Sub::SigningOptions::DEFAULT
   */
  "defaultType": SubSigningOptions.DefaultTypeEnum;
  /**
   * _t__Sub::SigningOptions::DRAW
   */
  "draw"?: boolean = false;
  /**
   * _t__Sub::SigningOptions::PHONE
   */
  "phone"?: boolean = false;
  /**
   * _t__Sub::SigningOptions::TYPE
   */
  "type"?: boolean = false;
  /**
   * _t__Sub::SigningOptions::UPLOAD
   */
  "upload"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "defaultType",
      baseName: "default_type",
      type: "SubSigningOptions.DefaultTypeEnum",
    },
    {
      name: "draw",
      baseName: "draw",
      type: "boolean",
    },
    {
      name: "phone",
      baseName: "phone",
      type: "boolean",
    },
    {
      name: "type",
      baseName: "type",
      type: "boolean",
    },
    {
      name: "upload",
      baseName: "upload",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubSigningOptions.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubSigningOptions {
    return ObjectSerializer.deserialize(data, "SubSigningOptions");
  }
}

export namespace SubSigningOptions {
  export enum DefaultTypeEnum {
    Draw = "draw",
    Phone = "phone",
    Type = "type",
    Upload = "upload",
  }
}
