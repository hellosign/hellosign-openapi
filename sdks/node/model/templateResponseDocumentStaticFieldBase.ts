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

/**
 * An array describing static overlay fields. **Note** only available for certain subscriptions.
 */
export abstract class TemplateResponseDocumentStaticFieldBase {
  "type": string;
  /**
   * A unique id for the static field.
   */
  "apiId"?: string;
  /**
   * The name of the static field.
   */
  "name"?: string;
  /**
   * The signer of the Static Field.
   */
  "signer"?: string = "me_now";
  /**
   * The horizontal offset in pixels for this static field.
   */
  "x"?: number;
  /**
   * The vertical offset in pixels for this static field.
   */
  "y"?: number;
  /**
   * The width in pixels of this static field.
   */
  "width"?: number;
  /**
   * The height in pixels of this static field.
   */
  "height"?: number;
  /**
   * Boolean showing whether or not this field is required.
   */
  "required"?: boolean;
  /**
   * The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  "group"?: string | null;
  /**
   * Final font size used by this form field.
   */
  "fontSize"?: number;

  static discriminator: string | undefined = "type";

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "apiId",
      baseName: "api_id",
      type: "string",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "signer",
      baseName: "signer",
      type: "string",
    },
    {
      name: "x",
      baseName: "x",
      type: "number",
    },
    {
      name: "y",
      baseName: "y",
      type: "number",
    },
    {
      name: "width",
      baseName: "width",
      type: "number",
    },
    {
      name: "height",
      baseName: "height",
      type: "number",
    },
    {
      name: "required",
      baseName: "required",
      type: "boolean",
    },
    {
      name: "group",
      baseName: "group",
      type: "string",
    },
    {
      name: "fontSize",
      baseName: "fontSize",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseDocumentStaticFieldBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "TemplateResponseDocumentStaticFieldCheckbox";
    }
    if (value === "date_signed") {
      return "TemplateResponseDocumentStaticFieldDateSigned";
    }
    if (value === "dropdown") {
      return "TemplateResponseDocumentStaticFieldDropdown";
    }
    if (value === "hyperlink") {
      return "TemplateResponseDocumentStaticFieldHyperlink";
    }
    if (value === "initials") {
      return "TemplateResponseDocumentStaticFieldInitials";
    }
    if (value === "radio") {
      return "TemplateResponseDocumentStaticFieldRadio";
    }
    if (value === "signature") {
      return "TemplateResponseDocumentStaticFieldSignature";
    }
    if (value === "text") {
      return "TemplateResponseDocumentStaticFieldText";
    }

    return null;
  }
}
