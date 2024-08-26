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
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";

/**
 * This class extends `SubFormFieldsPerDocumentBase`.
 */
export class SubFormFieldsPerDocumentDropdown extends SubFormFieldsPerDocumentBase {
  /**
   * An input field for dropdowns. Use the `SubFormFieldsPerDocumentDropdown` class.
   */
  "type": string = "dropdown";
  /**
   * Array of string values representing dropdown values.
   */
  "options": Array<string>;
  /**
   * Selected value in `options` array. Value must exist in array.
   */
  "content"?: string;
  /**
   * Font family for the field.
   */
  "fontFamily"?: SubFormFieldsPerDocumentDropdown.FontFamilyEnum;
  /**
   * The initial px font size for the field contents. Can be any integer value between `7` and `49`.  **NOTE:** Font size may be reduced during processing in order to fit the contents within the dimensions of the field.
   */
  "fontSize"?: number = 12;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "options",
      baseName: "options",
      type: "Array<string>",
    },
    {
      name: "content",
      baseName: "content",
      type: "string",
    },
    {
      name: "fontFamily",
      baseName: "font_family",
      type: "SubFormFieldsPerDocumentDropdown.FontFamilyEnum",
    },
    {
      name: "fontSize",
      baseName: "font_size",
      type: "number",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return super
      .getAttributeTypeMap()
      .concat(SubFormFieldsPerDocumentDropdown.attributeTypeMap);
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubFormFieldsPerDocumentDropdown {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentDropdown"
    );
  }
}

export namespace SubFormFieldsPerDocumentDropdown {
  export enum FontFamilyEnum {
    Helvetica = "helvetica",
    Arial = "arial",
    Courier = "courier",
    Calibri = "calibri",
    Cambria = "cambria",
    Georgia = "georgia",
    Times = "times",
    Trebuchet = "trebuchet",
    Verdana = "verdana",
    Roboto = "roboto",
    RobotoMono = "robotoMono",
    NotoSans = "notoSans",
    NotoSerif = "notoSerif",
    NotoCjkJpRegular = "notoCJK-JP-Regular",
    NotoHebrewRegular = "notoHebrew-Regular",
    NotoSanThaiMerged = "notoSanThaiMerged",
  }
}
