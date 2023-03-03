import { AttributeTypeMap } from "./";
export declare class SubCustomField {
    "name": string;
    "editor"?: string;
    "required"?: boolean;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubCustomField;
}
