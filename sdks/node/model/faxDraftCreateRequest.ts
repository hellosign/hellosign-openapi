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
import { SubEditorPageOptions } from "./subEditorPageOptions";

export class FaxDraftCreateRequest {
  /**
   * Use `files[]` to upload the file(s) for the Fax draft.  This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.
   */
  "files"?: Array<RequestFile>;
  /**
   * Use `file_urls[]` to have Dropbox Fax download the file(s) for the Fax draft.  This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.
   */
  "fileUrls"?: Array<string>;
  /**
   * Optional client ID of the API app that owns the embedded Fax draft. When omitted, a normal non-embedded Fax draft is created.
   */
  "clientId"?: string;
  "editorOptions"?: SubEditorPageOptions;
  /**
   * For embedded Fax drafts only. Fax numbers to prefill in the embedded flow. Each fax number must be in a supported international format. A maximum of 20 unique fax numbers can be provided.
   */
  "recipients"?: Set<string>;
  /**
   * When set to `true`, the completed draft will not send a Fax or consume Fax pages. Defaults to `false`.
   */
  "testMode"?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
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
      name: "clientId",
      baseName: "client_id",
      type: "string",
    },
    {
      name: "editorOptions",
      baseName: "editor_options",
      type: "SubEditorPageOptions",
    },
    {
      name: "recipients",
      baseName: "recipients",
      type: "Set<string>",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return FaxDraftCreateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): FaxDraftCreateRequest {
    return ObjectSerializer.deserialize(data, "FaxDraftCreateRequest");
  }
}
