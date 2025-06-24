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
 * _t__UnclaimedDraftResponse::DESCRIPTION
 */
export class UnclaimedDraftResponse {
  /**
   * _t__UnclaimedDraft::SIGNATURE_REQUEST_ID
   */
  "signatureRequestId"?: string | null;
  /**
   * _t__UnclaimedDraft::CLAIM_URL
   */
  "claimUrl"?: string;
  /**
   * _t__UnclaimedDraft::SIGNING_REDIRECT_URL
   */
  "signingRedirectUrl"?: string | null;
  /**
   * _t__UnclaimedDraft::REQUESTING_REDIRECT_URL
   */
  "requestingRedirectUrl"?: string | null;
  /**
   * _t__UnclaimedDraft::EXPIRES_AT
   */
  "expiresAt"?: number | null;
  /**
   * _t__UnclaimedDraft::TEST_MODE
   */
  "testMode"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "signatureRequestId",
      baseName: "signature_request_id",
      type: "string",
    },
    {
      name: "claimUrl",
      baseName: "claim_url",
      type: "string",
    },
    {
      name: "signingRedirectUrl",
      baseName: "signing_redirect_url",
      type: "string",
    },
    {
      name: "requestingRedirectUrl",
      baseName: "requesting_redirect_url",
      type: "string",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "number",
    },
    {
      name: "testMode",
      baseName: "test_mode",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return UnclaimedDraftResponse.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): UnclaimedDraftResponse {
    return ObjectSerializer.deserialize(data, "UnclaimedDraftResponse");
  }
}
