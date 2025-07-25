import { AttributeTypeMap } from "./";
export declare class TemplateUpdateRequest {
    "ccRoles"?: Array<string>;
    "allowFormView"?: boolean;
    "title"?: string;
    "subject"?: string;
    "message"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateUpdateRequest;
}
