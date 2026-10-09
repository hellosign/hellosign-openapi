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
import { RequiredSignatureType } from "./requiredSignatureType";
import { TeamSettingLock } from "./teamSettingLock";

/**
 * Updates the required signature types team setting. Provide `value`, `lock_mode`, or both.
 */
export class RequiredSignatureTypesSettingUpdate {
  /**
   * Signature creation methods signers may use.
   */
  "value"?: Set<RequiredSignatureType>;
  "lockMode"?: TeamSettingLock;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "value",
      baseName: "value",
      type: "Set<RequiredSignatureType>",
    },
    {
      name: "lockMode",
      baseName: "lock_mode",
      type: "TeamSettingLock",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return RequiredSignatureTypesSettingUpdate.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): RequiredSignatureTypesSettingUpdate {
    return ObjectSerializer.deserialize(
      data,
      "RequiredSignatureTypesSettingUpdate"
    );
  }
}

export namespace RequiredSignatureTypesSettingUpdate {}
