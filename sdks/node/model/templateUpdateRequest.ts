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
import { SubUpdateFormField } from "./subUpdateFormField";

export class TemplateUpdateRequest {
  /**
   * The CC roles that must be assigned when using the template to send a signature request.
   */
  "ccRoles"?: Array<string>;
  /**
   * The CC roles that must be assigned when using the template to send a signature request. If set to `true` all the form fields on template document must have non-empty names.
   */
  "allowFormView"?: boolean;
  /**
   * The title you want to assign to the SignatureRequest.
   */
  "title"?: string;
  /**
   * The new default template email subject.
   */
  "subject"?: string;
  /**
   * The new default template email message.
   */
  "message"?: string;
  /**
   * A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.
   */
  "formFields"?: Array<SubUpdateFormField>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "ccRoles",
      baseName: "cc_roles",
      type: "Array<string>",
    },
    {
      name: "allowFormView",
      baseName: "allow_form_view",
      type: "boolean",
    },
    {
      name: "title",
      baseName: "title",
      type: "string",
    },
    {
      name: "subject",
      baseName: "subject",
      type: "string",
    },
    {
      name: "message",
      baseName: "message",
      type: "string",
    },
    {
      name: "formFields",
      baseName: "form_fields",
      type: "Array<SubUpdateFormField>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateUpdateRequest.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateUpdateRequest {
    return ObjectSerializer.deserialize(data, "TemplateUpdateRequest");
  }
}
