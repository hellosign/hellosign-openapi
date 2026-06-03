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
 * Contains information about an error that occurred.
 */
export class ErrorResponseError {
  /**
   * Message describing an error.
   */
  "errorMsg": string;
  /**
   * Name of the error.
   */
  "errorName": ErrorResponseError.ErrorNameEnum;
  /**
   * Path at which an error occurred.
   */
  "errorPath"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "errorMsg",
      baseName: "error_msg",
      type: "string",
    },
    {
      name: "errorName",
      baseName: "error_name",
      type: "ErrorResponseError.ErrorNameEnum",
    },
    {
      name: "errorPath",
      baseName: "error_path",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorResponseError.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): ErrorResponseError {
    return ObjectSerializer.deserialize(data, "ErrorResponseError");
  }
}

export namespace ErrorResponseError {
  export enum ErrorNameEnum {
    BadRequest = "bad_request",
    Unauthorized = "unauthorized",
    PaymentRequired = "payment_required",
    Forbidden = "forbidden",
    NotFound = "not_found",
    MethodNotSupported = "method_not_supported",
    Conflict = "conflict",
    Deleted = "deleted",
    UnprocessableEntity = "unprocessable_entity",
    ExceededRate = "exceeded_rate",
    MaxFaxes = "max_faxes",
    Unavailable = "unavailable",
    Maintenance = "maintenance",
    InvalidRecipient = "invalid_recipient",
    InvalidReminder = "invalid_reminder",
    TeamInviteFailed = "team_invite_failed",
    SignatureRequestCancelFailed = "signature_request_cancel_failed",
    SignatureRequestRemoveFailed = "signature_request_remove_failed",
    SignatureRequestExpired = "signature_request_expired",
    Unknown = "unknown",
  }
}
