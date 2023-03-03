import { AttributeTypeMap } from "./";
export declare class TemplateAddUserRequest {
    "accountId"?: string;
    "emailAddress"?: string;
    "skipNotification"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateAddUserRequest;
}
