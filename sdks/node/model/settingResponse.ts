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
import { SettingLockResponse } from "./settingLockResponse";

export class SettingResponse {
  /**
   * Current value of the setting. Null when the setting has no value.
   */
  "value": any | null;
  "isInherited": boolean;
  "source": SettingResponse.SourceEnum;
  "type": SettingResponse.TypeEnum;
  "writable": boolean;
  "lock": SettingLockResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "value",
      baseName: "value",
      type: "any",
    },
    {
      name: "isInherited",
      baseName: "is_inherited",
      type: "boolean",
    },
    {
      name: "source",
      baseName: "source",
      type: "SettingResponse.SourceEnum",
    },
    {
      name: "type",
      baseName: "type",
      type: "SettingResponse.TypeEnum",
    },
    {
      name: "writable",
      baseName: "writable",
      type: "boolean",
    },
    {
      name: "lock",
      baseName: "lock",
      type: "SettingLockResponse",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SettingResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SettingResponse {
    return ObjectSerializer.deserialize(data, "SettingResponse");
  }
}

export namespace SettingResponse {
  export enum SourceEnum {
    Account = "account",
    Team = "team",
    ParentTeam = "parent_team",
    Default = "default",
  }
  export enum TypeEnum {
    Boolean = "boolean",
    Integer = "integer",
    String = "string",
    Array = "array",
  }
}
