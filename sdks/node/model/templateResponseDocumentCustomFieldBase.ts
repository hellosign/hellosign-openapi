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
 * _t__TemplateResponseDocumentCustomField::DESCRIPTION
 */
export abstract class TemplateResponseDocumentCustomFieldBase {
  "type": string;
  /**
   * _t__TemplateResponseDocumentCustomField::API_ID
   */
  "apiId"?: string;
  /**
   * _t__TemplateResponseDocumentCustomField::NAME
   */
  "name"?: string;
  /**
   * _t__TemplateResponseDocumentCustomField::SIGNER
   */
  "signer"?: number | string | null;
  /**
   * _t__TemplateResponseDocumentCustomField::X
   */
  "x"?: number;
  /**
   * _t__TemplateResponseDocumentCustomField::Y
   */
  "y"?: number;
  /**
   * _t__TemplateResponseDocumentCustomField::WIDTH
   */
  "width"?: number;
  /**
   * _t__TemplateResponseDocumentCustomField::HEIGHT
   */
  "height"?: number;
  /**
   * _t__TemplateResponseDocumentStaticField::REQUIRED
   */
  "required"?: boolean;
  /**
   * _t__TemplateResponseDocumentCustomField::GROUP
   */
  "group"?: string | null;

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
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseDocumentCustomFieldBase.attributeTypeMap;
  }

  static discriminatorClassName(value: any): string | null {
    if (value === undefined || value === null) {
      return null;
    }

    if (value === "checkbox") {
      return "TemplateResponseDocumentCustomFieldCheckbox";
    }
    if (value === "text") {
      return "TemplateResponseDocumentCustomFieldText";
    }

    return null;
  }
}
