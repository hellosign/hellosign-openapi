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
import { TemplateResponseDocumentFieldGroup } from "./templateResponseDocumentFieldGroup";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseDocumentStaticFieldBase } from "./templateResponseDocumentStaticFieldBase";

export class TemplateResponseDocument {
  /**
   * Name of the associated file.
   */
  "name"?: string;
  /**
   * Document ordering, the lowest index is displayed first and the highest last (0-based indexing).
   */
  "index"?: number;
  /**
   * An array of Form Field Group objects.
   */
  "fieldGroups"?: Array<TemplateResponseDocumentFieldGroup>;
  /**
   * An array of Form Field objects containing the name and type of each named field.
   */
  "formFields"?: Array<TemplateResponseDocumentFormFieldBase>;
  /**
   * An array of Form Field objects containing the name and type of each named field.
   */
  "customFields"?: Array<TemplateResponseDocumentCustomFieldBase>;
  /**
   * An array describing static overlay fields. **NOTE:** Only available for certain subscriptions.
   */
  "staticFields"?: Array<TemplateResponseDocumentStaticFieldBase>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "index",
      baseName: "index",
      type: "number",
    },
    {
      name: "fieldGroups",
      baseName: "field_groups",
      type: "Array<TemplateResponseDocumentFieldGroup>",
    },
    {
      name: "formFields",
      baseName: "form_fields",
      type: "Array<TemplateResponseDocumentFormFieldBase>",
    },
    {
      name: "customFields",
      baseName: "custom_fields",
      type: "Array<TemplateResponseDocumentCustomFieldBase>",
    },
    {
      name: "staticFields",
      baseName: "static_fields",
      type: "Array<TemplateResponseDocumentStaticFieldBase>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return TemplateResponseDocument.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): TemplateResponseDocument {
    return ObjectSerializer.deserialize(data, "TemplateResponseDocument");
  }
}
