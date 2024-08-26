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
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";

/**
 * This class extends `TemplateResponseDocumentFormFieldBase`
 */
export class TemplateResponseDocumentFormFieldHyperlink extends TemplateResponseDocumentFormFieldBase {
  /**
   * The type of this form field. See [field types](/api/reference/constants/#field-types).  * Text Field uses `TemplateResponseDocumentFormFieldText` * Dropdown Field uses `TemplateResponseDocumentFormFieldDropdown` * Hyperlink Field uses `TemplateResponseDocumentFormFieldHyperlink` * Checkbox Field uses `TemplateResponseDocumentFormFieldCheckbox` * Radio Field uses `TemplateResponseDocumentFormFieldRadio` * Signature Field uses `TemplateResponseDocumentFormFieldSignature` * Date Signed Field uses `TemplateResponseDocumentFormFieldDateSigned` * Initials Field uses `TemplateResponseDocumentFormFieldInitials`
   */
  "type": string = "hyperlink";
  "avgTextLength"?: TemplateResponseFieldAvgTextLength;
  /**
   * Whether this form field is multiline text.
   */
  "isMultiline"?: boolean;
  /**
   * Original font size used in this form field\'s text.
   */
  "originalFontSize"?: number;
  /**
   * Font family used in this form field\'s text.
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
      .concat(TemplateResponseDocumentFormFieldHyperlink.attributeTypeMap);
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateResponseDocumentFormFieldHyperlink {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldHyperlink"
    );
  }
}
