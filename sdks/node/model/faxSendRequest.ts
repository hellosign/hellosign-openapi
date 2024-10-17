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

export class FaxSendRequest {
  /**
   * Fax Send To Recipient
   */
  "recipient": string;
  /**
   * Fax Send From Sender (used only with fax number)
   */
  "sender"?: string;
  /**
   * Fax File to Send
   */
  "files"?: Array<RequestFile>;
  /**
   * Fax File URL to Send
   */
  "fileUrls"?: Array<string>;
  /**
   * API Test Mode Setting
   */
  "testMode"?: boolean = false;
  /**
   * Fax Cover Page for Recipient
   */
  "coverPageTo"?: string;
  /**
   * Fax Cover Page for Sender
   */
  "coverPageFrom"?: string;
  /**
   * Fax Cover Page Message
   */
  "coverPageMessage"?: string;
  /**
   * Fax Title
   */
  "title"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "recipient",
      baseName: "recipient",
      type: "string",
    },
    {
      name: "sender",
      baseName: "sender",
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
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
    {
      name: "coverPageTo",
      baseName: "cover_page_to",
      type: "string",
    },
    {
      name: "coverPageFrom",
      baseName: "cover_page_from",
      type: "string",
    },
    {
      name: "coverPageMessage",
      baseName: "cover_page_message",
      type: "string",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return FaxSendRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): FaxSendRequest {
    return ObjectSerializer.deserialize(data, "FaxSendRequest");
  }
}
