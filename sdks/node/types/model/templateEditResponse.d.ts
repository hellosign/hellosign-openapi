import { AttributeTypeMap } from "./";
export declare class TemplateEditResponse {
    "templateId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateEditResponse;
}
