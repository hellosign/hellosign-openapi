import { AttributeTypeMap } from "./";
export declare class AccountResponseUsage {
    "faxPagesSent"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountResponseUsage;
}
