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
import { TemplateResponseDocumentCustomFieldBase } from "./templateResponseDocumentCustomFieldBase";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";

/**
 * _t__TemplateResponseDocumentCustomField::DESCRIPTION_EXTENDS
 */
export class TemplateResponseDocumentCustomFieldText extends TemplateResponseDocumentCustomFieldBase {
  /**
   * _t__TemplateResponseDocumentCustomField::TYPE
   */
  "type": string = "text";
  "avgTextLength"?: TemplateResponseFieldAvgTextLength;
  /**
   * _t__TemplateResponseDocumentCustomField::IS_MULTILINE
   */
  "isMultiline"?: boolean;
  /**
   * _t__TemplateResponseDocumentCustomField::ORIGINAL_FONT_SIZE
   */
  "originalFontSize"?: number;
  /**
   * _t__TemplateResponseDocumentCustomField::FONT_FAMILY
   */
  "fontFamily"?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "avgTextLength",
      baseName: "avg_text_length",
      type: "TemplateResponseFieldAvgTextLength",
    },
    {
      name: "isMultiline",
      baseName: "isMultiline",
      type: "boolean",
    },
    {
      name: "originalFontSize",
      baseName: "originalFontSize",
      type: "number",
    },
    {
      name: "fontFamily",
      baseName: "fontFamily",
      type: "string",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return super
      .getAttributeTypeMap()
      .concat(TemplateResponseDocumentCustomFieldText.attributeTypeMap);
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateResponseDocumentCustomFieldText {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentCustomFieldText"
    );
  }
}
