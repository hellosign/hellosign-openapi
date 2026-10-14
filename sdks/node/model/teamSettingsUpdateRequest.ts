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
import { TeamSettingLock } from "./teamSettingLock";

export class TeamSettingsUpdateRequest {
  /**
   * Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.
   */
  "set"?: { [key: string]: any };
  /**
   * Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.
   */
  "unset"?: Set<string>;
  /**
   * Lock modes keyed by setting name. Only team settings support locks. A name in `lock` cannot also appear in `unset`.
   */
  "lock"?: { [key: string]: TeamSettingLock };

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "set",
      baseName: "set",
      type: "{ [key: string]: any; }",
    },
    {
      name: "unset",
      baseName: "unset",
      type: "Set<string>",
    },
    {
      name: "lock",
      baseName: "lock",
      type: "{ [key: string]: TeamSettingLock; }",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamSettingsUpdateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TeamSettingsUpdateRequest {
    return ObjectSerializer.deserialize(data, "TeamSettingsUpdateRequest");
  }
}
