import { AttributeTypeMap } from "./";
export declare class TemplateResponseFieldAvgTextLength {
    "numLines"?: number;
    "numCharsPerLine"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseFieldAvgTextLength;
}
