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
import { ErrorResponseError } from "./errorResponseError";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { WarningResponse } from "./warningResponse";

export class DocumentFieldDetectionResponseDetectionResult {
  /**
   * The SHA-256 hash of the analyzed document.
   */
  "documentHash": string;
  /**
   * The field detection method used to analyze the document: `annotations` or `text_tags`.
   */
  "detectionMode": string;
  /**
   * The total number of pages in the document.
   */
  "pageCount": number;
  /**
   * The zero-based page indexes analyzed, represented by the requested `page_range`, or `all` when every page was analyzed.
   */
  "pagesAnalyzed": string;
  /**
   * The Unix timestamp when the field detection result was generated.
   */
  "detectedAt": number;
  /**
   * The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE:** Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use `SubFormFieldsPerDocumentText` * Dropdown Field use `SubFormFieldsPerDocumentDropdown` * Hyperlink Field use `SubFormFieldsPerDocumentHyperlink` * Checkbox Field use `SubFormFieldsPerDocumentCheckbox` * Radio Field use `SubFormFieldsPerDocumentRadio` * Signature Field use `SubFormFieldsPerDocumentSignature` * Date Signed Field use `SubFormFieldsPerDocumentDateSigned` * Initials Field use `SubFormFieldsPerDocumentInitials` * Text Merge Field use `SubFormFieldsPerDocumentTextMerge` * Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  "formFieldsPerDocument": Array<SubFormFieldsPerDocumentBase>;
  /**
   * Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  "formFieldGroups": Array<SubFormFieldGroup>;
  /**
   * Non-fatal issues encountered during field detection.
   */
  "warnings": Array<WarningResponse>;
  /**
   * Errors encountered during field detection. Successfully detected fields may still be included in the response.
   */
  "errors": Array<ErrorResponseError>;
  /**
   * Suggestions for improving the field detection results.
   */
  "suggestions": Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "documentHash",
      baseName: "document_hash",
      type: "string",
    },
    {
      name: "detectionMode",
      baseName: "detection_mode",
      type: "string",
    },
    {
      name: "pageCount",
      baseName: "page_count",
      type: "number",
    },
    {
      name: "pagesAnalyzed",
      baseName: "pages_analyzed",
      type: "string",
    },
    {
      name: "detectedAt",
      baseName: "detected_at",
      type: "number",
    },
    {
      name: "formFieldsPerDocument",
      baseName: "form_fields_per_document",
      type: "Array<SubFormFieldsPerDocumentBase>",
    },
    {
      name: "formFieldGroups",
      baseName: "form_field_groups",
      type: "Array<SubFormFieldGroup>",
    },
    {
      name: "warnings",
      baseName: "warnings",
      type: "Array<WarningResponse>",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "Array<ErrorResponseError>",
    },
    {
      name: "suggestions",
      baseName: "suggestions",
      type: "Array<string>",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return DocumentFieldDetectionResponseDetectionResult.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): DocumentFieldDetectionResponseDetectionResult {
    return ObjectSerializer.deserialize(
      data,
      "DocumentFieldDetectionResponseDetectionResult"
    );
  }
}
