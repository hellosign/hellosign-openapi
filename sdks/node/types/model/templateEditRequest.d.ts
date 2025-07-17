import { AttributeTypeMap } from "./";
export declare class TemplateEditRequest {
    "ccRoles"?: Array<string>;
    "allowFormView"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateEditRequest;
}
