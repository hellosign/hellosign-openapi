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
 * _t__BulkSendJobResponse::DESCRIPTION
 */
export class BulkSendJobResponse {
  /**
   * _t__BulkSendJobResponse::BULK_SEND_JOB_ID
   */
  "bulkSendJobId"?: string | null;
  /**
   * _t__BulkSendJobResponse::TOTAL
   */
  "total"?: number;
  /**
   * _t__BulkSendJobResponse::IS_CREATOR
   */
  "isCreator"?: boolean;
  /**
   * _t__BulkSendJobResponse::CREATED_AT
   */
  "createdAt"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "bulkSendJobId",
      baseName: "bulk_send_job_id",
      type: "string",
    },
    {
      name: "total",
      baseName: "total",
      type: "number",
    },
    {
      name: "isCreator",
      baseName: "is_creator",
      type: "boolean",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return BulkSendJobResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): BulkSendJobResponse {
    return ObjectSerializer.deserialize(data, "BulkSendJobResponse");
  }
}
