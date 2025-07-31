import { AttributeTypeMap } from "./";
export declare class SubUpdateFormField {
    "apiId": string;
    "name"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubUpdateFormField;
}
