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

import { RequestFile, AttributeTypeMap, ObjectSerializer } from "./models";

export class TemplateUpdateFilesRequest {
  /**
   * Client id of the app you\'re using to update this template.
   */
  "clientId"?: string;
  /**
   * Use `files[]` to indicate the uploaded file(s) to use for the template.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "files"?: Array<RequestFile>;
  /**
   * Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.  This endpoint requires either **files** or **file_urls[]**, but not both.
   */
  "fileUrls"?: Array<string>;
  /**
   * The new default template email message.
   */
  "message"?: string;
  /**
   * The new default template email subject.
   */
  "subject"?: string;
  /**
   * Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  "testMode"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "files",
      baseName: "files",
      type: "Array<RequestFile>",
    },
    {
      name: "fileUrls",
      baseName: "file_urls",
      type: "Array<string>",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateUpdateFilesRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateUpdateFilesRequest {
    return ObjectSerializer.deserialize(data, "TemplateUpdateFilesRequest");
  }
}
