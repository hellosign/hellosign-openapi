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
 * Configuration options for modifying the settings of the signer application. Supports changing the form view behavior.
 */
export class SignatureRequestSignerExperience {
  /**
   * Changes the form view setting experienced by the signer. Supported versions are:  - `disabled` - Form view is disabled, and the signer cannot change it  - `enabled` - Form view is disabled initially, the signer can turn it on using a toggle  - `enabled_by_default` - Form view is enabled initially. The signer car turn it off using a toggle  - `forced` - Form view is enabled initially. The signer cannot change it, the toggle is hidden.
   */
  "formView": SignatureRequestSignerExperience.FormViewEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "formView",
      baseName: "form_view",
      type: "SignatureRequestSignerExperience.FormViewEnum",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SignatureRequestSignerExperience.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SignatureRequestSignerExperience {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestSignerExperience"
    );
  }
}

export namespace SignatureRequestSignerExperience {
  export enum FormViewEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    EnabledByDefault = "enabled_by_default",
    Forced = "forced",
  }
}
