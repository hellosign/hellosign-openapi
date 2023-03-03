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

import { RequestFile, AttributeTypeMap, ObjectSerializer } from "./";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";

export class SubSignatureRequestGroupedSigners {
  /**
   * The name of the group.
   */
  "group": string;
  /**
   * Signers belonging to this Group.  **NOTE**: Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will ignore all other properties, even though they are listed below.
   */
  "signers": Array<SubSignatureRequestSigner>;
  /**
   * The order the group is required to sign in. Use this instead of Signer-level `order`.
   */
  "order"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "group",
      baseName: "group",
      type: "string",
    },
    {
      name: "signers",
      baseName: "signers",
      type: "Array<SubSignatureRequestSigner>",
    },
    {
      name: "order",
      baseName: "order",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubSignatureRequestGroupedSigners.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubSignatureRequestGroupedSigners {
    return ObjectSerializer.deserialize(
      data,
      "SubSignatureRequestGroupedSigners"
    );
  }
}
