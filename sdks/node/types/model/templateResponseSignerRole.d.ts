import { AttributeTypeMap } from "./";
export declare class TemplateResponseSignerRole {
    "name"?: string;
    "order"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseSignerRole;
}
