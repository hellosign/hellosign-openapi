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

import { AttributeTypeMap } from "./";

/**
 * An array of Form Field objects containing the name and type of each named field.
 */
export abstract class TemplateResponseDocumentFormFieldBase {
  "type": string;
  /**
   * A unique id for the form field.
   */
  "apiId"?: string;
  /**
   * The name of the form field.
   */
  "name"?: string;
  /**
   * The signer of the Form Field.
   */
  "signer"?: number | string;
  /**
   * The horizontal offset in pixels for this form field.
   */
  "x"?: number;
  /**
   * The vertical offset in pixels for this form field.
   */
  "y"?: number;
  /**
   * The width in pixels of this form field.
   */
  "width"?: number;
  /**
   * The height in pixels of this form field.
   */
  "height"?: number;
  /**
   * Boolean showing whether or not this field is required.
   */
  "required"?: boolean;

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
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseDocumentFormFieldBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "TemplateResponseDocumentFormFieldCheckbox";
    }
    if (value === "date_signed") {
      return "TemplateResponseDocumentFormFieldDateSigned";
    }
    if (value === "dropdown") {
      return "TemplateResponseDocumentFormFieldDropdown";
    }
    if (value === "hyperlink") {
      return "TemplateResponseDocumentFormFieldHyperlink";
    }
    if (value === "initials") {
      return "TemplateResponseDocumentFormFieldInitials";
    }
    if (value === "radio") {
      return "TemplateResponseDocumentFormFieldRadio";
    }
    if (value === "signature") {
      return "TemplateResponseDocumentFormFieldSignature";
    }
    if (value === "text") {
      return "TemplateResponseDocumentFormFieldText";
    }

    return null;
  }
}
