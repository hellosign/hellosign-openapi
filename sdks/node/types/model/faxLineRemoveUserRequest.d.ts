import { AttributeTypeMap } from "./";
export declare class FaxLineRemoveUserRequest {
    "number": string;
    "accountId"?: string;
    "emailAddress"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineRemoveUserRequest;
}
