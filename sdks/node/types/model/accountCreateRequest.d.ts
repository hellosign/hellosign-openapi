import { AttributeTypeMap } from "./";
export declare class AccountCreateRequest {
    "emailAddress": string;
    "clientId"?: string;
    "clientSecret"?: string;
    "locale"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountCreateRequest;
}
