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

export class TeamAddMemberRequest {
  /**
   * `account_id` or `email_address` is required. If both are provided, the account id prevails.  Account id of the user to invite to your Team.
   */
  "accountId"?: string;
  /**
   * `account_id` or `email_address` is required, If both are provided, the account id prevails.  Email address of the user to invite to your Team.
   */
  "emailAddress"?: string;
  /**
   * A role member will take in a new Team.  **Note**: This parameter is used only if `team_id` is provided.
   */
  "role"?: TeamAddMemberRequest.RoleEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
    },
    {
      name: "emailAddress",
      baseName: "email_address",
      type: "string",
    },
    {
      name: "role",
      baseName: "role",
      type: "TeamAddMemberRequest.RoleEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamAddMemberRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TeamAddMemberRequest {
    return ObjectSerializer.deserialize(data, "TeamAddMemberRequest");
  }
}

export namespace TeamAddMemberRequest {
  export enum RoleEnum {
    Member = "Member",
    Developer = "Developer",
    TeamManager = "Team Manager",
    Admin = "Admin",
  }
}
