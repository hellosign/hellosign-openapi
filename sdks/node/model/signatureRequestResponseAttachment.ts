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
 * _t__SignatureRequestResponseAttachment::DESCRIPTION
 */
export class SignatureRequestResponseAttachment {
  /**
   * _t__SignatureRequestResponseAttachment::ID
   */
  "id": string;
  /**
   * _t__SignatureRequestResponseAttachment::SIGNER
   */
  "signer": number | string;
  /**
   * _t__SignatureRequestResponseAttachment::NAME
   */
  "name": string;
  /**
   * _t__SignatureRequestResponseAttachment::REQUIRED
   */
  "required": boolean;
  /**
   * _t__SignatureRequestResponseAttachment::INSTRUCTIONS
   */
  "instructions"?: string | null;
  /**
   * _t__SignatureRequestResponseAttachment::UPLOADED_AT
   */
  "uploadedAt"?: number | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "signer",
      baseName: "signer",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "instructions",
      baseName: "instructions",
      type: "string",
    },
    {
      name: "uploadedAt",
      baseName: "uploaded_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestResponseAttachment.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestResponseAttachment {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseAttachment"
    );
  }
}
