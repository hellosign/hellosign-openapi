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
import { TeamSettingLock } from "./teamSettingLock";

export class TeamSettingsUpdateRequest {
  /**
   * Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.
   */
  "set"?: { [key: string]: any };
  /**
   * Lock a setting to prevent subteams or accounts from overriding it. A team admin can set a lock on their own team. An organization admin can set a lock on the organization or on a subteam. `organization_admins` is set by an organization admin and keeps subteams and accounts on that value. `team_admins` lets admins of a team and its subteams set their own value. `members` lets each account set its own value. A name in `lock` cannot also appear in `unset`.
   */
  "lock"?: { [key: string]: TeamSettingLock };
  /**
   * Any setting that can be set can also be unset. Unset clears the stored value and its lock so both are inherited. A listed name cannot also be set or locked in the same request.
   */
  "unset"?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "set",
      baseName: "set",
      type: "{ [key: string]: any; }",
    },
    {
      name: "lock",
      baseName: "lock",
      type: "{ [key: string]: TeamSettingLock; }",
    },
    {
      name: "unset",
      baseName: "unset",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamSettingsUpdateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TeamSettingsUpdateRequest {
    return ObjectSerializer.deserialize(data, "TeamSettingsUpdateRequest");
  }
}
