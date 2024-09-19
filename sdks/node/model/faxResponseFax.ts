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
import { FaxResponseFaxTransmission } from "./faxResponseFaxTransmission";

export class FaxResponseFax {
  /**
   * Fax ID
   */
  "faxId"?: string;
  /**
   * Fax Title
   */
  "title"?: string;
  /**
   * Fax Original Title
   */
  "originalTitle"?: string;
  /**
   * Fax Subject
   */
  "subject"?: string;
  /**
   * Fax Message
   */
  "message"?: string;
  /**
   * Fax Metadata
   */
  "metadata"?: object;
  /**
   * Fax Created At Timestamp
   */
  "createdAt"?: number;
  /**
   * Fax Sender Email
   */
  "from"?: string;
  /**
   * Fax Transmissions List
   */
  "transmissions"?: Array<FaxResponseFaxTransmission>;
  /**
   * Fax Files URL
   */
  "filesUrl"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "faxId",
      baseName: "fax_id",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "originalTitle",
      baseName: "original_title",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "object",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
    {
      name: "from",
      baseName: "from",
      type: "string",
    },
    {
      name: "transmissions",
      baseName: "transmissions",
      type: "Array<FaxResponseFaxTransmission>",
    },
    {
      name: "filesUrl",
      baseName: "files_url",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return FaxResponseFax.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): FaxResponseFax {
    return ObjectSerializer.deserialize(data, "FaxResponseFax");
  }
}
