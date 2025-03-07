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
 * An array of elements and values serialized to a string, to be used to customize the app\'s signer page. (Only applies to some API plans)  Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
 */
export class SubWhiteLabelingOptions {
  "headerBackgroundColor"?: string = "#1a1a1a";
  "legalVersion"?: SubWhiteLabelingOptions.LegalVersionEnum =
    SubWhiteLabelingOptions.LegalVersionEnum.Terms1;
  "linkColor"?: string = "#0061FE";
  "pageBackgroundColor"?: string = "#f7f8f9";
  "primaryButtonColor"?: string = "#0061FE";
  "primaryButtonColorHover"?: string = "#0061FE";
  "primaryButtonTextColor"?: string = "#ffffff";
  "primaryButtonTextColorHover"?: string = "#ffffff";
  "secondaryButtonColor"?: string = "#ffffff";
  "secondaryButtonColorHover"?: string = "#ffffff";
  "secondaryButtonTextColor"?: string = "#0061FE";
  "secondaryButtonTextColorHover"?: string = "#0061FE";
  "textColor1"?: string = "#808080";
  "textColor2"?: string = "#ffffff";
  /**
   * Resets white labeling options to defaults. Only useful when updating an API App.
   */
  "resetToDefault"?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: AttributeTypeMap = [
    {
      name: "headerBackgroundColor",
      baseName: "header_background_color",
      type: "string",
    },
    {
      name: "legalVersion",
      baseName: "legal_version",
      type: "SubWhiteLabelingOptions.LegalVersionEnum",
    },
    {
      name: "linkColor",
      baseName: "link_color",
      type: "string",
    },
    {
      name: "pageBackgroundColor",
      baseName: "page_background_color",
      type: "string",
    },
    {
      name: "primaryButtonColor",
      baseName: "primary_button_color",
      type: "string",
    },
    {
      name: "primaryButtonColorHover",
      baseName: "primary_button_color_hover",
      type: "string",
    },
    {
      name: "primaryButtonTextColor",
      baseName: "primary_button_text_color",
      type: "string",
    },
    {
      name: "primaryButtonTextColorHover",
      baseName: "primary_button_text_color_hover",
      type: "string",
    },
    {
      name: "secondaryButtonColor",
      baseName: "secondary_button_color",
      type: "string",
    },
    {
      name: "secondaryButtonColorHover",
      baseName: "secondary_button_color_hover",
      type: "string",
    },
    {
      name: "secondaryButtonTextColor",
      baseName: "secondary_button_text_color",
      type: "string",
    },
    {
      name: "secondaryButtonTextColorHover",
      baseName: "secondary_button_text_color_hover",
      type: "string",
    },
    {
      name: "textColor1",
      baseName: "text_color1",
      type: "string",
    },
    {
      name: "textColor2",
      baseName: "text_color2",
      type: "string",
    },
    {
      name: "resetToDefault",
      baseName: "reset_to_default",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap(): AttributeTypeMap {
    return SubWhiteLabelingOptions.attributeTypeMap;
  }

  /** Attempt to instantiate and hydrate a new instance of this class */
  static init(data: any): SubWhiteLabelingOptions {
    return ObjectSerializer.deserialize(data, "SubWhiteLabelingOptions");
  }
}

export namespace SubWhiteLabelingOptions {
  export enum LegalVersionEnum {
    Terms1 = "terms1",
    Terms2 = "terms2",
  }
}
