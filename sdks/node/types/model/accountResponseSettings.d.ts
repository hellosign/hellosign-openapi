import { AttributeTypeMap } from "./";
export declare class AccountResponseSettings {
    "signerAccessCodes"?: boolean;
    "smsDelivery"?: boolean;
    "smsAuthentication"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountResponseSettings;
}
