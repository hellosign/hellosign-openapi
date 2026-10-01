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

import { AttributeTypeMap, ObjectSerializer, RequestFile } from "./";

export class DocumentFieldDetectionRequest {
  /**
   * The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.
   */
  "detectionMode": string;
  /**
   * The PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both.
   */
  "file"?: RequestFile;
  /**
   * The URL of the PDF file to analyze.  This endpoint requires either `file` or `file_url`, but not both.
   */
  "fileUrl"?: string;
  /**
   * The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.
   */
  "pageRange"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "detectionMode",
      baseName: "detection_mode",
      type: "string",
    },
    {
      name: "file",
      baseName: "file",
      type: "RequestFile",
    },
    {
      name: "fileUrl",
      baseName: "file_url",
      type: "string",
    },
    {
      name: "pageRange",
      baseName: "page_range",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return DocumentFieldDetectionRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): DocumentFieldDetectionRequest {
    return ObjectSerializer.deserialize(data, "DocumentFieldDetectionRequest");
  }
}
