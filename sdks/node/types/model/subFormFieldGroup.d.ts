import { AttributeTypeMap } from "./";
export declare class SubFormFieldGroup {
    "groupId": string;
    "groupLabel": string;
    "requirement": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldGroup;
}
